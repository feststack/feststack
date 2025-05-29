import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
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

export default function TopNavbar() {
  const t = useTranslations('UserNavbar')
  const router = useRouter()

  const [theme, setTheme] = useState<GraphicTheme | null>(null)
  const [appName, setAppName] = useState<string>('ManaFest') // valeur par défaut

  useEffect(() => {
    async function fetchThemeAndConfig() {
      const resConfig = await fetch('/api/appConfig')
      if (!resConfig.ok) return
  
      const appConfig: AppConfig[] = await resConfig.json()
      console.log('appConfig:', appConfig)

  
      // Trouver le nom de l'app
      const appNameConfig = appConfig.find(c => c.appConfigName === 'app_name')
      const appName = appNameConfig?.appConfigValue || 'ManaFest'
      setAppName(appName)
  
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

  const handleLogout = () => {
    localStorage.removeItem('userEmail')
    router.push('/')
  }

  return (
    <nav
      style={{
        backgroundColor: theme?.backgroundMain || '#1F2937',
        color: theme?.textPrimary || '#FFFFFF',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
      className="fixed top-0 left-0 right-0 h-16 px-6 z-50"
    >
      <div className="w-full flex justify-between items-center h-full">
        <Link href="/user/userHome" className="text-2xl font-bold" style={{ color: theme?.color2 || '#D72631' }}>
          {appName}
        </Link>
        <button onClick={handleLogout} className="hover:underline" style={{ color: theme?.color2 || '#D72631' }}>
          {t('signout')}
        </button>
      </div>
    </nav>
  )
}
