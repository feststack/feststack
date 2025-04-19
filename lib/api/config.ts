import { PrismaClient } from '../../lib/generated/prisma_config' // Remplace par le chemin correct

const prisma = new PrismaClient()

export const getConfig = async () => {
  try {
    const configs = await prisma.config.findMany() // Recherche tous les enregistrements dans la table Config
    return configs
  } catch (error) {
    console.error('Error fetching configs from database:', error)
    throw new Error('Database error')
  }
}

export const createConfig = async (data: { configName: string; configValue: number }) => {
  try {
    const newConfig = await prisma.config.create({
      data: {
        configName: data.configName,  // Utilisation des colonnes correctes pour la table Config
        configValue: data.configValue
      },
    })
    return newConfig
  } catch (error) {
    console.error('Error creating config in database:', error)
    throw new Error('Database error')
  }
}
