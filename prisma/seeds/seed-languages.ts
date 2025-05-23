import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function seedLanguages() {
  const languages = [
    {
      languageId: 1,
      languageName: 'Français',
      languageCode: 'fr',
      createdBy: 'SYSTEM',
      isDeleted: false,
    },
    {
      languageId: 2,
      languageName: 'Espagnol',
      languageCode: 'es',
      createdBy: 'SYSTEM',
      isDeleted: false,
    },
    {
      languageId: 3,
      languageName: 'Anglais',
      languageCode: 'en',
      createdBy: 'SYSTEM',
      isDeleted: false,
    },
  ]

  for (const lang of languages) {
    await prisma.languages.upsert({
      where: { languageId: lang.languageId },
      update: {},
      create: {
        languageId: lang.languageId,
        languageName: lang.languageName,
        languageCode: lang.languageCode,
        createdBy: lang.createdBy,
        isDeleted: lang.isDeleted,
      },
    })
  }
}
