import { NextResponse } from 'next/server'
import { PrismaClient } from '../../../lib/generated'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const families = await prisma.adGroupsFamilies.findMany({
      where: { isDeleted: false },
      include: {
        adGroups: {
          where: { isDeleted: false },
          include: {
            adGroupRight: true,
          },
        },
      },
    })

    const result: Record<string, string[]> = {}

    for (const family of families) {
      const validAdGroups = family.adGroups.filter(ag => !ag.isDeleted)

      const rights = validAdGroups
        .filter(ag => ag.adGroupRight && !ag.adGroupRight.isDeleted)
        .map(ag => ag.adGroupRight.adGroupRightName)

      const uniqueRights = Array.from(new Set(rights))

      result[family.adGroupFamilyName] = uniqueRights
    }

    console.log('API ad-groups result:', result)

    return NextResponse.json(result)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
