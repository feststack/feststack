import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '../../../../lib/generated'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const { userId, family, right } = await req.json()
    const userEmail = req.headers.get('x-user-email') || 'SYSTEM'

    if (!userId || !family || !right) {
      return NextResponse.json({ message: 'Paramètres manquants' }, { status: 400 })
    }

    // Recherche la famille de groupe par nom (non supprimée)
    const adGroupFamily = await prisma.adGroupsFamilies.findFirst({
      where: { 
        adGroupFamilyName: family,
        isDeleted: false,
      },
    })

    // Recherche le droit de groupe par nom (non supprimé)
    const adGroupRight = await prisma.adGroupsRights.findFirst({
      where: {
        adGroupRightName: right,
        isDeleted: false,
      },
    })

    if (!adGroupFamily || !adGroupRight) {
      return NextResponse.json({ message: 'Famille ou droit introuvable' }, { status: 404 })
    }

    // Recherche le groupe (adGroup) correspondant à la famille + droit (non supprimé)
    let adGroup = await prisma.adGroups.findFirst({
      where: {
        adGroupFamilyId: adGroupFamily.adGroupFamilyId,
        adGroupRightId: adGroupRight.adGroupRightId,
        isDeleted: false,
      },
    })

    // Si pas trouvé, on le crée
    if (!adGroup) {
      adGroup = await prisma.adGroups.create({
        data: {
          adGroupFamilyId: adGroupFamily.adGroupFamilyId,
          adGroupRightId: adGroupRight.adGroupRightId,
          createdBy: userEmail,
          isDeleted: false,
        },
      })
    }

    // Vérifie si l'association user-adGroup existe déjà (non supprimée)
    const existingUserAdGroup = await prisma.usersAdGroups.findFirst({
      where: {
        userId,
        adGroupId: adGroup.adGroupId,
        isDeleted: false,
      },
    })

    if (existingUserAdGroup) {
      return NextResponse.json({ message: 'Ce droit est déjà attribué à l’utilisateur.' }, { status: 200 })
    }

    // Crée l'association utilisateur ↔ groupe
    await prisma.usersAdGroups.create({
      data: {
        userId,
        adGroupId: adGroup.adGroupId,
        createdBy: userEmail,
        isDeleted: false,
      },
    })

    return NextResponse.json({ message: 'Droit ajouté avec succès.' }, { status: 200 })
  } catch (error) {
    console.error('Erreur /api/user/addAdGroup:', error)
    return NextResponse.json({ message: 'Erreur interne serveur' }, { status: 500 })
  }
}
