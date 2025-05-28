import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '../../../lib/generated'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const runtime = 'nodejs'

// POST : créer un utilisateur
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { userFirstName, userLastName, userCode, email, password, languageId } = body

    if (!userFirstName || !userLastName || !userCode || !email || !password || !languageId) {
      return NextResponse.json({ message: 'Tous les champs sont requis' }, { status: 400 })
    }

    // Vérifier que l'email n'existe pas déjà dans usersAuth (unique)
    const existingAuth = await prisma.usersAuth.findUnique({
      where: { email },
    })
    if (existingAuth) {
      return NextResponse.json({ message: 'Email déjà utilisé' }, { status: 409 })
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10)

    // Créer l'utilisateur et les relations dans une transaction
    const newUser = await prisma.$transaction(async (tx) => {
      const user = await tx.users.create({
        data: {
          userFirstName,
          userLastName,
          userCode,
          languageId,
          createdBy: 'SYSTEM',
          isDeleted: false,
          isActive: true,
        },
      })

      await tx.usersAuth.create({
        data: {
          email,
          password: hashedPassword,
          userId: user.userId,
          createdBy: 'SYSTEM',
          isDeleted: false,
        },
      })

      // Récupérer le groupe 'default' (on suppose qu'il existe)
      const defaultGroup = await tx.adGroups.findFirst({
        where: { 
          isDeleted: false,
          // adGroupName n'existe pas directement dans adGroups selon le schéma,
          // donc il faut vérifier les relations à adGroupRight ou adGroupFamily si c'est là qu'on trouve 'default'.
          // Ici, on suppose que 'default' est un adGroupRightName par exemple :
        },
        include: {
          adGroupRight: true,
          adGroupFamily: true,
        }
      })

      // Comme 'adGroupName' n'existe pas, on peut chercher par exemple le groupe dont adGroupRightName = 'default' ou adGroupFamilyName = 'default'
      // Si tu veux un critère exact, il faut préciser où se trouve 'default'.
      // Exemple pour adGroupRightName:
      const defaultGroupExact = await tx.adGroups.findFirst({
        where: {
          isDeleted: false,
          adGroupRight: {
            adGroupRightName: 'default',
          },
        },
      })

      if (!defaultGroupExact) {
        throw new Error("Le groupe 'default' est introuvable")
      }

      await tx.usersAdGroups.create({
        data: {
          userId: user.userId,
          adGroupId: defaultGroupExact.adGroupId,
          createdBy: 'SYSTEM',
          isDeleted: false,
        },
      })

      return user
    })

    return NextResponse.json({ message: 'Utilisateur créé avec succès', userId: newUser.userId }, { status: 201 })
  } catch (error) {
    console.error('Erreur lors de la création utilisateur :', error)
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url)
    const search = url.searchParams.get('search') || ''

    const users = await prisma.users.findMany({
      where: search
        ? {
            AND: [
              { isDeleted: false, isActive: true },
              {
                OR: [
                  { userFirstName: { contains: search } },
                  { userLastName: { contains: search } },
                  { userCode: { contains: search } },
                ],
              },
            ],
          }
        : {
            isDeleted: false,
          },
      orderBy: {
        userLastName: 'asc',
      },
      include: {
        language: true,
        auth: true,
        userGroups: {
          where: { isDeleted: false },
          include: {
            adGroup: {
              include: {
                adGroupFamily: true,
                adGroupRight: true,
              },
            },
          },
        },
      },
    })

    const simplifiedUsers = users.map(user => ({
      userId: user.userId,
      userFirstName: user.userFirstName,
      userLastName: user.userLastName,
      userCode: user.userCode,
      languageId: user.languageId,
      language: user.language
        ? {
            languageId: user.language.languageId,
            languageName: user.language.languageName,
            languageCode: user.language.languageCode,
          }
        : null,
      authEmail: user.auth?.email || null,
      adGroupAccess: user.userGroups.reduce((acc, ug) => {
        const groupFamily = ug.adGroup.adGroupFamily?.adGroupFamilyName
        const right = ug.adGroup.adGroupRight?.adGroupRightName

        if (groupFamily && right) {
          if (!acc[groupFamily]) {
            acc[groupFamily] = []
          }
          if (!acc[groupFamily].includes(right)) {
            acc[groupFamily].push(right)
          }
        }

        return acc
      }, {} as Record<string, string[]>),
      createdBy: user.createdBy,
      isDeleted: user.isDeleted,
      isActive: user.isActive,
    }))

    return NextResponse.json(simplifiedUsers, { status: 200 })
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error)
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  }
}

  

// PUT : mise à jour de la langue de l'utilisateur
// PUT : mise à jour de la langue, des droits et de l'activation de l'utilisateur
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json()
    const { userId, languageId, isActive, adGroupUpdate } = body

    if (!userId || !languageId) {
      return NextResponse.json({ message: 'userId et languageId sont requis' }, { status: 400 })
    }

    await prisma.$transaction(async (tx) => {
      await tx.users.update({
        where: { userId },
        data: {
          languageId,
          ...(typeof isActive === 'boolean' && { isActive }), // <- Mise à jour conditionnelle de isActive
        },
      })

      if (adGroupUpdate?.family && Array.isArray(adGroupUpdate.rights)) {
        // Supprimer les anciens droits dans cette famille
        const adGroupsInFamily = await tx.adGroups.findMany({
          where: {
            adGroupFamily: {
              adGroupFamilyName: adGroupUpdate.family,
            },
          },
        })

        const adGroupIdsToRemove = adGroupsInFamily.map(g => g.adGroupId)

        await tx.usersAdGroups.updateMany({
          where: {
            userId,
            adGroupId: { in: adGroupIdsToRemove },
          },
          data: {
            isDeleted: true,
          },
        })

        // Ajouter les nouveaux droits
        for (const rightName of adGroupUpdate.rights) {
          const adGroup = await tx.adGroups.findFirst({
            where: {
              adGroupFamily: {
                adGroupFamilyName: adGroupUpdate.family,
              },
              adGroupRight: {
                adGroupRightName: rightName,
              },
            },
          })

          if (adGroup) {
            await tx.usersAdGroups.create({
              data: {
                userId,
                adGroupId: adGroup.adGroupId,
                isDeleted: false,
                createdBy: 'SYSTEM',
              },
            })
          }
        }
      }
    })

    // Retourner l'utilisateur mis à jour
    const updatedUser = await prisma.users.findUnique({
      where: { userId },
      include: {
        language: true,
        userGroups: {
          where: { isDeleted: false },
          include: {
            adGroup: {
              include: {
                adGroupFamily: true,
                adGroupRight: true,
              },
            },
          },
        },
      },
    })

    const simplified = {
      userId: updatedUser?.userId,
      userFirstName: updatedUser?.userFirstName,
      userLastName: updatedUser?.userLastName,
      userCode: updatedUser?.userCode,
      languageId: updatedUser?.languageId,
      language: updatedUser?.language
        ? {
            languageId: updatedUser.language.languageId,
            languageName: updatedUser.language.languageName,
            languageCode: updatedUser.language.languageCode,
          }
        : null,
      adGroupAccess: updatedUser?.userGroups.reduce((acc, ug) => {
        const family = ug.adGroup.adGroupFamily?.adGroupFamilyName
        const right = ug.adGroup.adGroupRight?.adGroupRightName
        if (family && right) {
          if (!acc[family]) acc[family] = []
          acc[family].push(right)
        }
        return acc
      }, {} as Record<string, string[]>),
      createdBy: updatedUser?.createdBy,
      isDeleted: updatedUser?.isDeleted,
      isActive: updatedUser?.isActive,
    }

    return NextResponse.json(simplified, { status: 200 })

  } catch (error) {
    console.error('Erreur lors de la mise à jour utilisateur :', error)
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  }
}
