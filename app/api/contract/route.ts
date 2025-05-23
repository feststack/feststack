import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '../../../lib/generated/prisma_data'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { artistName } = body

    if (!artistName) {
      return NextResponse.json({ message: 'Tous les champs sont requis' }, { status: 400 })
    }

    const userId = req.headers.get('x-user-id') || 'SYSTEM'

    const newArtist = await prisma.artists.create({
      data: {
        artistName,
        createdBy: userId, 
        isDeleted: false,
      },
    })

    return NextResponse.json(
      { message: 'Artist créé avec succès', artistId: newArtist.artistId },
      { status: 201 }
    )
  } catch (error) {
    console.error('Erreur lors de la création artist :', error)
    return NextResponse.json(
      { message: 'Erreur serveur lors de la création artist' },
      { status: 500 }
    )
  }
}

export async function GET(req: NextRequest) {
    try {
      const { search } = Object.fromEntries(req.nextUrl.searchParams.entries())
      const where = search
        ? {
            artistName: {
              contains: search as string,
            //   mode: 'insensitive',
            },
            isDeleted: false,
          }
        : { isDeleted: false }
  
      const artists = await prisma.artists.findMany({
        where,
        orderBy: { artistName: 'asc' },
      })
  
      return NextResponse.json(artists)
    } catch (error) {
      console.error('Erreur lors de la récupération des artistes :', error)
      return NextResponse.json(
        { message: 'Erreur serveur lors de la récupération des artistes' },
        { status: 500 }
      )
    }
  }
