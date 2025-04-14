// app/api/config/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { getConfig, createConfig } from '../../../lib/api/config'

export async function GET(req: NextRequest) {
  try {
    const configs = await getConfig()
    return NextResponse.json(configs, { status: 200 })
  } catch (error) {
    console.error('Error fetching configs:', error)
    return NextResponse.json({ message: 'Error fetching configs' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { configName, configValue } = body
    const newConfig = await createConfig({ configName, configValue })
    return NextResponse.json(newConfig, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'Error adding config' }, { status: 500 })
  }
}
