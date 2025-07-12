import { PrismaClient } from '../../lib/generated'
import { promises as fs } from 'fs'
import path from 'path'

const prisma = new PrismaClient()

export async function seedImages() {
  const imagePath = path.join(process.cwd(), 'public/images/backgrounds/main_background.jpg')
  const imageName = 'custom_background'
  const mimeType = 'image/jpeg' // adapte si nécessaire

  try {
    const imageBuffer = await fs.readFile(imagePath)

    const exists = await prisma.images.findFirst({
      where: { imageName },
    })

    if (exists) {
      const isDataDifferent = Buffer.compare(exists.imageData, imageBuffer) !== 0
      const isMimeDifferent = exists.mimeType !== mimeType

      if (isDataDifferent || isMimeDifferent) {
        await prisma.images.update({
          where: { id: exists.id },
          data: {
            imageData: imageBuffer,
            mimeType,
          },
        })
        console.log(`Image '${imageName}' mise à jour`)
      } else {
        console.log(`Image '${imageName}' déjà à jour`)
      }
    } else {
      await prisma.images.create({
        data: {
          imageName,
          imageData: imageBuffer,
          mimeType,
        },
      })
      console.log(`Image '${imageName}' créée`)
    }
  } catch (error) {
    console.error('Erreur lors du seed des images:', error)
  }
}
