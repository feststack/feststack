import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '../../../../lib/generated/prisma_core'

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
  const email = req.headers.get('x-user-email')

  if (!email) {
    return NextResponse.json({ message: 'Email non fourni' }, { status: 401 })
  }

  const userAuth = await prisma.userAuth.findUnique({
    where: { email },
    include: { user: true },
  })

  if (!userAuth || !userAuth.user) {
    return NextResponse.json({ message: 'Utilisateur introuvable' }, { status: 404 })
  }

  return NextResponse.json({
    userName: userAuth.user.userName,
    userSurname: userAuth.user.userSurname,
  })
}
