import { PrismaClient } from '../../lib/generated';
const prisma = new PrismaClient();

export async function seedAppConfigs() {
  const configs = [
    { appConfigName: 'app_name', appConfigValue: 'Hellfest' },
    { appConfigName: 'default_language_code', appConfigValue: 'en' },
    { appConfigName: 'default_graphic_theme', appConfigValue: 'dark_theme' },
  ];

  for (const config of configs) {
    const exists = await prisma.appConfigs.findFirst({
      where: { appConfigName: config.appConfigName },
    });

    if (exists) {
      // Update seulement si la valeur est différente pour éviter update inutile
      if (exists.appConfigValue !== config.appConfigValue) {
        await prisma.appConfigs.update({
          where: { appConfigId: exists.appConfigId }, // tu dois avoir un id unique ici
          data: {
            appConfigValue: config.appConfigValue,
          },
        });
      }
    } else {
      await prisma.appConfigs.create({ data: config });
    }
  }

  console.log('✅ AppConfigs seeded');
}
