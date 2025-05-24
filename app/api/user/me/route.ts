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
              adGroup: true,
            },
          },
        },
      },
    },
  })

  if (!userAuth || !userAuth.user) {
    return NextResponse.json({ message: 'Utilisateur introuvable' }, { status: 404 })
  }

  const adGroupNames = userAuth.user.userGroups.map((g) => g.adGroup.adGroupName)

  return NextResponse.json({
    userFirstName: userAuth.user.userFirstName,
    userLastName: userAuth.user.userLastName,
    languageCode: userAuth.user.language.languageCode,
    adGroups: adGroupNames,
  })
}
