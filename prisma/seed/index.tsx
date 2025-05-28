import { PrismaClient } from '../../lib/generated';
import { seedLanguages } from './languages';
import { seedAdGroups } from './adGroups';
import { seedUsers } from './users';
 
const prisma = new PrismaClient();

async function main() {
  await seedLanguages();
  await seedAdGroups();
  await seedUsers();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
