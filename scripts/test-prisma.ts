import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const tests = await prisma.test.findMany()
  console.log(tests)
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect())
