import { PrismaClient } from '../../lib/generated';
const prisma = new PrismaClient();

export async function seedGraphicThemes() {
  const graphicThemes = [
    {
      graphicThemeName: 'dark_theme',
      backgroundMain: '#191919',
      backgroundSecondary: '#212121',
      textPrimary: '#FFFFFF',
      textSecondary: '#B0B0B0',
      accent: '#00FF51',
      accentHover: '#00B33C',
      success: '#4CAF50',
      cardBackground: '#1E1E1E',
      borderColor: '#333333',
    },
    {
      graphicThemeName: 'light_theme',
      backgroundMain: '#FFFFFF',
      backgroundSecondary: '#F5F5F5',
      textPrimary: '#222222',
      textSecondary: '#555555',
      accent: '#D72631',
      accentHover: '#B71C1C',
      success: '#81C784',
      cardBackground: '#FFFFFF',
      borderColor: '#DDDDDD',
    },
  ];

  for (const graphicTheme of graphicThemes) {
    await prisma.graphicThemes.upsert({
      where: { graphicThemeName: graphicTheme.graphicThemeName },
      update: {
        backgroundMain: graphicTheme.backgroundMain,
        backgroundSecondary: graphicTheme.backgroundSecondary,
        textPrimary: graphicTheme.textPrimary,
        textSecondary: graphicTheme.textSecondary,
        accent: graphicTheme.accent,
        accentHover: graphicTheme.accentHover,
        success: graphicTheme.success,
        cardBackground: graphicTheme.cardBackground,
        borderColor: graphicTheme.borderColor,
      },
      create: graphicTheme,
    });
  }

  console.log('✅ GraphicThemes seeded');
}
