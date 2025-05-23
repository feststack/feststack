'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

export default function ArtistHomePage() {
  const gt = useTranslations('GlobalTranslation');

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-xl font-semibold">{gt('artist')}</h1>
    </div>
  )
}
