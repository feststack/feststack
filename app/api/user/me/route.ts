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
      },
    },
  })

  if (!userAuth || !userAuth.user) {
    return NextResponse.json({ message: 'Utilisateur introuvable' }, { status: 404 })
  }

  const user = userAuth.user

  // 🧠 Création du dictionnaire { [famille]: [droits] }
  const adGroupAccess: Record<string, string[]> = {}

  user.userGroups.forEach(({ adGroup }) => {
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

  console.log('[API /api/user/me] Utilisateur connecté :', {
    email,
    userFirstName: user.userFirstName,
    userLastName: user.userLastName,
    adGroupAccess,
  })
  
  return NextResponse.json({
    userFirstName: user.userFirstName,
    userLastName: user.userLastName,
    languageCode: user.language?.languageCode,
    adGroupAccess, // ✅ C’est ce qu’on utilisera côté front
  })
}
