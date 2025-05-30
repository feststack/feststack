export const runtime = 'nodejs'

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '../../../../lib/generated'

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
  const email = req.headers.get('x-user-email')

  if (!email) {
    return NextResponse.json({ message: 'Email non fourni' }, { status: 401 })
  }

  const userAuth = await prisma.usersAuth.findUnique({
    where: { email },
    include: {
      user: {
        include: {
          language: true,
          userGroups: {
            where: { isDeleted: false }, // OK ici, filtre sur la relation directe
            include: {
              adGroup: { // Pas de where ici
                include: {
                  adGroupFamily: true,
                  adGroupRight: true,
                }
              }
            }
          }
        }
      }
    }
  })

  if (!userAuth || !userAuth.user) {
    return NextResponse.json({ message: 'Utilisateur introuvable' }, { status: 404 })
  }

  const user = userAuth.user

  // Filtrer en JS les adGroups isDeleted === false
  const activeUserGroups = user.userGroups.filter(ug => !ug.adGroup.isDeleted)

  // Construire adGroupAccess à partir de activeUserGroups
  const adGroupAccess: Record<string, string[]> = {}

  activeUserGroups.forEach(({ adGroup }) => {
    const family = adGroup.adGroupFamily?.adGroupFamilyName
    const right = adGroup.adGroupRight?.adGroupRightName

    if (family && right) {
      if (!adGroupAccess[family]) {
        adGroupAccess[family] = []
      }
      if (!adGroupAccess[family].includes(right)) {
        adGroupAccess[family].push(right)
      }
    }
  })

  // console.log('[API /api/user/me] Utilisateur connecté :', {
  //   email,
  //   userFirstName: user.userFirstName,
  //   userLastName: user.userLastName,
  //   userCode: user.userCode,
  //   languageCode: user.language?.languageCode,
  //   isActive: user.isActive,
  //   adGroupAccess,
  // })

  return NextResponse.json({
    userFirstName: user.userFirstName,
    userLastName: user.userLastName,
    userCode: user.userCode,
    languageCode: user.language?.languageCode,
    isActive: user.isActive,
    adGroupAccess,
  })
}

export async function PATCH(req: NextRequest) {
  const email = req.headers.get('x-user-email')

  if (!email) {
    return NextResponse.json({ message: 'Email non fourni' }, { status: 401 })
  }

  const body = await req.json()

  // Trouver l'utilisateur lié à cet email
  const userAuth = await prisma.usersAuth.findUnique({
    where: { email },
    include: { user: true },
  })

  if (!userAuth || !userAuth.user) {
    return NextResponse.json({ message: 'Utilisateur introuvable' }, { status: 404 })
  }

  const updateData: Partial<{
    userFirstName: string
    userLastName: string
    userCode: string
    languageId: number
    isActive: boolean
  }> = {}

  if (typeof body.userFirstName === 'string') updateData.userFirstName = body.userFirstName
  if (typeof body.userLastName === 'string') updateData.userLastName = body.userLastName
  if (typeof body.userCode === 'string') updateData.userCode = body.userCode
  if (typeof body.isActive === 'boolean') updateData.isActive = body.isActive

  // if (typeof body.languageCode === 'string') {
  //   const language = await prisma.languages.findUnique({
  //     where: { languageCode: body.languageCode },
  //   })
  //   if (!language) {
  //     return NextResponse.json({ message: 'Langue non trouvée' }, { status: 400 })
  //   }
  //   updateData.languageId = language.languageId
  // }

  if (typeof body.languageId === 'number') {
    updateData.languageId = body.languageId
  }  

  // Si pas de champs à mettre à jour
  if (Object.keys(updateData).length === 0) {
    return NextResponse.json({ message: 'Aucun champ valide à mettre à jour' }, { status: 400 })
  }

  const updatedUser = await prisma.users.update({
    where: { userId: userAuth.user.userId },
    data: updateData,
  })

  return NextResponse.json({
    message: 'Utilisateur mis à jour avec succès',
    user: {
      userFirstName: updatedUser.userFirstName,
      userLastName: updatedUser.userLastName,
      userCode: updatedUser.userCode,
      languageCode: body.languageCode || undefined, // renvoyer le code si demandé
      isActive: updatedUser.isActive,
    },
  })
}
