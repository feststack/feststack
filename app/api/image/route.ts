import { NextResponse } from 'next/server'
import { PrismaClient } from '@/lib/generated'

export const runtime = 'nodejs'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const name = searchParams.get('name')

    if (!name) {
      return NextResponse.json({ message: 'Le paramètre name est requis' }, { status: 400 })
    }

    const image = await prisma.images.findUnique({
      where: { imageName: name },
      select: {
        imageData: true,
        mimeType: true,
      },
    })

    if (!image || !image.imageData) {
      return NextResponse.json({ message: 'Image non trouvée' }, { status: 404 })
    }

    return new Response(image.imageData as Buffer, {
      status: 200,
      headers: {
        'Content-Type': image.mimeType || 'application/octet-stream',
        'Cache-Control': 'public, max-age=86400', // 1 jour
      },
    })
  } catch (error) {
    console.error('Erreur récupération image depuis DB :', error)
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  }
}
