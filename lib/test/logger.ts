import { PrismaClient as PrismaTestClient } from '@/lib/generated/prisma_test'

const prismaTest = new PrismaTestClient()

export async function logTestResult({
  testId,
  status,
  duration,
  error,
  logs = [],
}: {
  testId: number
  status: string
  duration: number
  error?: string
  logs?: { logLevel: string; message: string }[]
}) {
  const now = new Date()
  const completedAt = new Date(now.getTime() + duration)

  const testRun = await prismaTest.testRun.create({
    data: {
      testId,
      status,
      duration,
      error,
      startedAt: now,
      completedAt,
      testLogs: {
        create: logs.map((log) => ({
          logLevel: log.logLevel,
          message: log.message,
        })),
      },
    },
    include: { testLogs: true },
  })

  return testRun
}
