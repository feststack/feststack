import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '../../../lib/generated/prisma_core'

import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
      const body = await req.json();
      const { email, password } = body;
  
      if (!email || !password) {
        return NextResponse.json({ message: 'Email et mot de passe requis' }, { status: 400 });
      }
  
      const userAuth = await prisma.usersAuth.findUnique({
        where: { email },
        include: {
          user: {
            include: {
              language: true,
            },
          },
        },
      });
  
      if (!userAuth) {
        return NextResponse.json({ message: 'Utilisateur non trouvé' }, { status: 401 });
      }
  
      const passwordMatch = await bcrypt.compare(password, userAuth.password);
      if (!passwordMatch) {
        return NextResponse.json({ message: 'Mot de passe invalide' }, { status: 401 });
      }
  
      // Renvoi la langue (en minuscule par exemple)
      const languageCode = userAuth.user.language.languageCode.toLowerCase();
  
      return NextResponse.json(
        { message: 'Connexion réussie', userId: userAuth.userId, languageCode },
        { status: 200 }
      );
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      return NextResponse.json({ message: 'Erreur serveur lors de la connexion' }, { status: 500 });
    }
  }
  