export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { PrismaClient } from '../../../lib/generated'

// ✅ Prévention contre les multiples instances en dev (hot reload)
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export async function GET() {
  try {
    const languages = await prisma.languages.findMany({
      where: { isDeleted: false },
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
    console.error('Erreur récupération languages :', error)
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  }
}
