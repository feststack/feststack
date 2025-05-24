export const runtime = 'nodejs'

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '../../../lib/generated'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { userFirstName, userLastName, userCode, email, password, languageId } = body

    if (!userFirstName || !userLastName || !userCode || !email || !password || !languageId) {
      return NextResponse.json({ message: 'Tous les champs sont requis' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.$transaction(async (tx) => {
      // Créer l'utilisateur
      const user = await tx.users.create({
        data: {
          userFirstName,
          userLastName,
          userCode,
          languageId,
          createdBy: 'SYSTEM',
          isDeleted: false,
        },
      })

      // Créer les infos de connexion
      await tx.usersAuth.create({
        data: {
          email,
          password: hashedPassword,
          userId: user.userId,
          createdBy: 'SYSTEM',
          isDeleted: false,
        },
      })

      // Chercher le groupe par défaut
      const defaultGroup = await tx.adGroups.findFirst({
        where: { adGroupName: 'default' },
      })

      if (!defaultGroup) {
        throw new Error("Le groupe 'default' est introuvable")
      }

      // Ajouter à UsersAdGroups
      await tx.usersAdGroups.create({
        data: {
          userId: user.userId,
          adGroupId: defaultGroup.adGroupId,
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
