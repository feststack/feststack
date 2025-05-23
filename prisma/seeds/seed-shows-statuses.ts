import { PrismaClient } from '../../lib/generated/prisma_data'

const prisma = new PrismaClient()

export async function seedShowsStatuses() {
  console.log('🚀 Seeding shows statuses...')
  try {
    const result = await prisma.showsStatuses.createMany({
      data: [
        { showStatusCode: 'Scheduled', showStatusName: 'Scheduled' },
        { showStatusCode: 'Cancelled', showStatusName: 'Cancelled' },
        { showStatusCode: 'Postponed', showStatusName: 'Postponed' },
      ],
      skipDuplicates: true,
    })
    console.log('✅ Insert result:', result)
  } catch (error) {
    console.error('❌ Error while seeding showsStatuses:', error)
  }
}
