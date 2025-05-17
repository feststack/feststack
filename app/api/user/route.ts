import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '../../../lib/generated/prisma_core'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { userName, userSurname, userCode, email, password } = body

    if (!userName || !userSurname || !userCode || !email || !password) {
      return NextResponse.json({ message: 'Tous les champs sont requis' }, { status: 400 })
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10)

    // Création user + auth dans la même transaction
    const newUser = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          userName,
          userSurname,
          userCode,
          createdBy: 'SYSTEM',
          isDeleted: false,
          isActive: true,
        },
      })

      await tx.userAuth.create({
        data: {
          email,
          password: hashedPassword,
          userId: user.userId,
          createdBy: 'SYSTEM',
          isDeleted: false,
        },
      })

      return user
    })

    return NextResponse.json({ message: 'Utilisateur créé avec succès', userId: newUser.userId }, { status: 201 })

  } catch (error) {
    console.error('Erreur lors de la création utilisateur :', error)
    return NextResponse.json({ message: 'Erreur serveur lors de la création utilisateur' }, { status: 500 })
  }
}
