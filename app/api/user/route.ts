import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '../../../lib/generated/prisma_core'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
      const body = await req.json();
      const { userName, userSurname, userCode, email, password, userLanguageId } = body
  
      if (!userName || !userSurname || !userCode || !email || !password) {
        return NextResponse.json({ message: 'Tous les champs sont requis' }, { status: 400 });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = await prisma.$transaction(async (tx) => {
        // Création de l'utilisateur
        const user = await tx.users.create({
          data: {
            userName,
            userSurname,
            userCode,
            createdBy: 'SYSTEM',
            isDeleted: false,
            isActive: true,
            userLanguageId,
          },
        })
      
        // Création des infos d'authentification
        await tx.usersAuth.create({
          data: {
            email,
            password: hashedPassword,
            userId: user.userId,
            createdBy: 'SYSTEM',
            isDeleted: false,
          },
        })
      
        // Récupération du groupe "default"
        const defaultGroup = await tx.adGroups.findFirst({
          where: { adGroupName: 'default' },
        })
      
        if (!defaultGroup) {
          throw new Error("Le groupe 'default' n'existe pas")
        }
      
        // Liaison entre l'utilisateur et le groupe "default"
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
  
      return NextResponse.json({ message: 'Utilisateur créé avec succès', userId: newUser.userId }, { status: 201 });
    } catch (error) {
      console.error('Erreur lors de la création utilisateur :', error);
      return NextResponse.json({ message: 'Erreur serveur lors de la création utilisateur' }, { status: 500 });
    }
  }
  