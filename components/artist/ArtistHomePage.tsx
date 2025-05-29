'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

type GraphicTheme = {
  graphicThemeName: string
  backgroundMain: string
  backgroundSecondary: string
  textPrimary: string
  textSecondary: string
  accent: string
  accentHover: string
  success: string
  cardBackground: string
  borderColor: string
}

type AppConfig = {
  appConfigName: string
  appConfigValue: string
}

export default function ArtistHomePage() {
  const gt = useTranslations('GlobalTranslation');

  const [theme, setTheme] = useState<GraphicTheme | null>(null)

  useEffect(() => {
    async function fetchThemeAndConfig() {
      const resConfig = await fetch('/api/appConfig')
      if (!resConfig.ok) return
  
      const appConfig: AppConfig[] = await resConfig.json()
      console.log('appConfig:', appConfig)
  
      // Trouver le thème par défaut
      const defaultThemeConfig = appConfig.find(c => c.appConfigName === 'default_graphic_theme')
      const defaultThemeName = defaultThemeConfig?.appConfigValue || 'dark_theme'
  
      // Récupérer la liste des thèmes graphiques
      const resThemes = await fetch('/api/graphicTheme')
      if (!resThemes.ok) return
      const themes: GraphicTheme[] = await resThemes.json()
      console.log('themes:', themes)
      // Appliquer le thème correspondant
      const defaultTheme = themes.find(t => t.graphicThemeName === defaultThemeName)
      console.log('defaultTheme found:', defaultTheme)
      if (defaultTheme) setTheme(defaultTheme)
    }
  
    fetchThemeAndConfig()
  }, [])

  return (
    <div 
      style={{
        color: theme?.textPrimary || '#FFFFFF',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
      className="min-h-screen w-full p-6 pt-19"
    >
      <h1 className="text-xl font-semibold">{gt('artist')}</h1>
    </div>
  )
}
