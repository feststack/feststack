import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '../../../lib/generated'

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
  try {
    const themes = await prisma.graphicThemes.findMany({
      where: { isDeleted: false },
    })
    return NextResponse.json(themes)
  } catch (error) {
    console.error('API graphicThemes error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
