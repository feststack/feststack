import { GET } from '@/app/api/config/route'
import { NextRequest } from 'next/server'
import { PrismaClient } from '@/lib/generated/prisma'

const prisma = new PrismaClient()

describe('GET /api/config', () => {
  it('devrait renvoyer un tableau de configs avec le bon format', async () => {
    const req = {} as NextRequest
    const response = await GET(req)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(Array.isArray(data)).toBe(true)

    // Vérifie uniquement le format de chaque entrée
    data.forEach((item: any) => {
      expect(item).toHaveProperty('configId')
      expect(item).toHaveProperty('configName')
      expect(item).toHaveProperty('configValue')
      expect(typeof item.configName).toBe('string')
      expect(typeof item.configValue).toBe('number')
    })
  })

  it('devrait renvoyer une ligne de test au hasard', async () => {
    try {
      // Récupérer une ligne au hasard de la table "config"
      const randomTest = await prisma.config.findFirst({
        orderBy: {
          // Utiliser un critère pour trier de manière aléatoire
          configId: 'asc',  // Remplacez cette colonne par celle qui vous convient, ou utilisez un tri aléatoire spécifique si possible.
        },
      })
      expect(randomTest).toBeDefined()
      expect(randomTest).toHaveProperty('configId')
      expect(randomTest).toHaveProperty('configName')
      expect(randomTest).toHaveProperty('configValue')
      expect(typeof randomTest?.configName).toBe('string')
      expect(typeof randomTest?.configValue).toBe('number')

      console.log('Test aléatoire récupéré :', randomTest)
    } catch (error) {
      console.error('Erreur Prisma:', error)
      throw error
    }
  })
})
