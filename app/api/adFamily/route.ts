import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '../../../lib/generated'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const families = await prisma.adGroupsFamilies.findMany({
      where: { isDeleted: false },
      select: {
        adGroupFamilyName: true,
        adGroups: {
          where: { isDeleted: false },
          select: {
            adGroupRight: {
              select: { adGroupRightName: true },
            },
            userGroups: {
              where: {
                isDeleted: false,
                user: {
                  isDeleted: false,
                  isActive: true,
                },
              },
              select: {
                userId: true,
              },
            },
          },
        },
      },
    })

    const result: Record<string, Record<string, number[]>> = {}

    for (const family of families) {
      const familyName = family.adGroupFamilyName
      if (!result[familyName]) result[familyName] = {}

      for (const group of family.adGroups) {
        const rightName = group.adGroupRight.adGroupRightName
        const userIds = group.userGroups.map(ug => ug.userId)

        if (!result[familyName][rightName]) {
          result[familyName][rightName] = []
        }

        result[familyName][rightName].push(...userIds)
      }

      // Supprimer les doublons
      for (const right in result[familyName]) {
        result[familyName][right] = [...new Set(result[familyName][right])]
      }
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('[API] Erreur GET /api/adFamily', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { family } = await req.json()

    if (!family || typeof family !== 'string') {
      return NextResponse.json({ message: 'Nom invalide' }, { status: 400 })
    }

    // Vérifier si la famille existe déjà
    const existing = await prisma.adGroupsFamilies.findFirst({
      where: {
        adGroupFamilyName: family,
        isDeleted: false,
      },
    })

    if (existing) {
      return NextResponse.json({ message: 'Famille déjà existante' }, { status: 409 })
    }

    // Créer la famille
    const newFamily = await prisma.adGroupsFamilies.create({
      data: {
        adGroupFamilyName: family,
      },
    })

    // Récupérer les droits (create, read, update, delete)
    const rights = await prisma.adGroupsRights.findMany({
      where: {
        adGroupRightName: {
          in: ['create', 'read', 'update', 'delete'],
        },
        isDeleted: false,
      },
    })

    // Créer les AdGroups pour chaque droit
    await Promise.all(rights.map(right =>
      prisma.adGroups.create({
        data: {
          adGroupFamilyId: newFamily.adGroupFamilyId,
          adGroupRightId: right.adGroupRightId,
        },
      })
    ))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[API] POST /api/adFamily', error)
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
