import { seedLanguages } from './seed-languages'
// import d'autres seeders si besoin

async function main() {
  console.log('🚀 Starting seed...')
  await seedLanguages()
  // await seedShowsStatuses()
  console.log('✅ All seeders completed')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    console.log('🔌 Disconnecting Prisma client')
    // Attention à ne pas exit trop tôt sinon prisma.$disconnect() ne s'exécute pas
    // await prisma.$disconnect() si tu as accès au prisma client ici
    process.exit(0)
  })
