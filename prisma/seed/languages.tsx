import { PrismaClient } from '../../lib/generated';
const prisma = new PrismaClient();

export async function seedLanguages() {
  const languages = [
    { languageCode: 'fr', languageName: 'Français' },
    { languageCode: 'en', languageName: 'English' },
    { languageCode: 'es', languageName: 'Español' },
  ];

  for (const lang of languages) {
    const exists = await prisma.languages.findFirst({
      where: { languageCode: lang.languageCode },
    });
    if (!exists) {
      await prisma.languages.create({ data: lang });
    }
  }

  console.log('✅ Languages seeded');
}
