import { PrismaClient } from '../../lib/generated';
import { seedLanguages } from './languages';
import { seedAdGroups } from './adGroups';
import { seedUsers } from './users';
import { seedAppConfigs } from './appConfigs';
import { seedGraphicThemes } from './graphicThemes';
import { seedImages } from './images';
 
const prisma = new PrismaClient();

async function main() {
  await seedLanguages();
  await seedAdGroups();
  await seedUsers();
  await seedGraphicThemes();
  await seedAppConfigs();
  await seedImages();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
