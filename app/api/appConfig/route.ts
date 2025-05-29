import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '../../../lib/generated'

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
  try {
    const appConfigs = await prisma.appConfigs.findMany({
      where: {
        isDeleted: false,
      },
      select: {
        appConfigName: true,
        appConfigValue: true,
      },
    })

    return NextResponse.json(appConfigs)
  } catch (error) {
    console.error('API appConfigs error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
