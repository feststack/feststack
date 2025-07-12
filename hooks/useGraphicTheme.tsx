import { useEffect, useState } from 'react'
import type { GraphicTheme, AppConfig } from './types'

export function useGraphicTheme() {
  const [theme, setTheme] = useState<GraphicTheme | null>(null)
  const [appName, setAppName] = useState<string>('ManaFest')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchThemeAndConfig() {
      try {
        // Récupération des configs de l'app
        const resConfig = await fetch('/api/appConfig')
        if (!resConfig.ok) throw new Error('Failed to fetch appConfig')

        const appConfig: AppConfig[] = await resConfig.json()
        const appNameConfig = appConfig.find(c => c.appConfigName === 'app_name')
        setAppName(appNameConfig?.appConfigValue || 'ManaFest')

        const defaultThemeConfig = appConfig.find(c => c.appConfigName === 'default_graphic_theme')
        const defaultThemeName = defaultThemeConfig?.appConfigValue || 'dark_theme'

        // Récupération des thèmes graphiques
        const resThemes = await fetch('/api/graphicThemes')  // note le pluriel /graphicThemes si c'est bien l'URL
        if (!resThemes.ok) throw new Error('Failed to fetch themes')
        const themes: GraphicTheme[] = await resThemes.json()

        // Trouver le thème par défaut et le définir
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
