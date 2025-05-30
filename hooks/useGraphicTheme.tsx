import { useEffect, useState } from 'react'

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

export function useGraphicTheme() {
  const [theme, setTheme] = useState<GraphicTheme | null>(null)
  const [appName, setAppName] = useState<string>('ManaFest')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchThemeAndConfig() {
      try {
        const resConfig = await fetch('/api/appConfig')
        if (!resConfig.ok) throw new Error('Failed to fetch appConfig')

        const appConfig: AppConfig[] = await resConfig.json()
        const appNameConfig = appConfig.find(c => c.appConfigName === 'app_name')
        setAppName(appNameConfig?.appConfigValue || 'ManaFest')

        const defaultThemeConfig = appConfig.find(c => c.appConfigName === 'default_graphic_theme')
        const defaultThemeName = defaultThemeConfig?.appConfigValue || 'dark_theme'

        const resThemes = await fetch('/api/graphicTheme')
        if (!resThemes.ok) throw new Error('Failed to fetch themes')
        const themes: GraphicTheme[] = await resThemes.json()

        const defaultTheme = themes.find(t => t.graphicThemeName === defaultThemeName)
        if (defaultTheme) setTheme(defaultTheme)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchThemeAndConfig()
  }, [])

  function hexToRgba(hex: string, alpha: number) {
    const sanitizedHex = hex.replace('#', '')
    const bigint = parseInt(sanitizedHex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  return { theme, appName, loading, hexToRgba }
}
