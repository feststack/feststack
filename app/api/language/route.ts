// app/api/languages/route.ts

import { NextResponse } from 'next/server'
import { PrismaClient } from '../../../lib/generated/prisma_core'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const languages = await prisma.languages.findMany({
      where: { isDeleted: false },  // Ne récupérer que les langues non supprimées
      select: {
        languageId: true,
        languageName: true,
        languageCode: true, 
      },
      orderBy: {
        languageName: 'asc',
      },
    })

    return NextResponse.json(languages)
  } catch (error) {
    console.error('Erreur récupération languages:', error)
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  }
}
