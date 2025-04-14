import { PrismaClient } from '@/lib/generated/prisma'
import { logTestResult } from '@/lib/test/logger'

const prisma = new PrismaClient()

describe('Connexion à la base de données', () => {
  it('devrait se connecter à la base et renvoyer des données ou un tableau vide', async () => {
    try {
      // Test simple de connexion
      const result = await prisma.$queryRaw`SELECT 1`
      console.log('Connexion réussie :', result)
      expect(result).toBeDefined()

    } catch (error) {
      console.error('Erreur Prisma:', error)
      throw error
    }
  })
})

it('test logué dans db_test', async () => {
  const start = Date.now()
  try {
    const result = await prisma.$queryRaw`SELECT 1`
    expect(result).toBeDefined()

    await logTestResult({
      testId: 10,
      status: 'success',
      duration: Date.now() - start,
      logs: [{ logLevel: 'info', message: 'Test SELECT 1 OK' }],
    })
  } catch (error: any) {
    await logTestResult({
      testId: 10,
      status: 'failure',
      duration: Date.now() - start,
      error: error.message,
      logs: [
        { logLevel: 'error', message: 'Erreur SELECT 1' },
        { logLevel: 'error', message: error.stack || '' },
      ],
    })
    throw error
  }
})

