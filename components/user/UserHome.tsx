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

export default function UserHomePage() {
  const [user, setUser] = useState<{ userFirstName: string; userLastName: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const gt = useTranslations('GlobalTranslation')

  const [theme, setTheme] = useState<GraphicTheme | null>(null)
  const [appName, setAppName] = useState<string>('ManaFest')

  useEffect(() => {
    async function fetchUser() {
      try {
        const email = localStorage.getItem('userEmail')
        if (!email) {
          setUser(null)
          setLoading(false)
          return
        }
  
        const res = await fetch('/api/user/me', {
          headers: {
            'x-user-email': email,
          },
        })
  
        if (res.ok) {
          const data = await res.json()
          setUser(data)
        } else {
          setUser(null)
        }
      } catch (error) {
        console.error('Erreur lors de la récupération de l’utilisateur:', error)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

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
  
    fetchUser()
    fetchThemeAndConfig()
  }, [])  

  if (loading) return <p>Chargement...</p>
  if (!user) return <p>Utilisateur non connecté</p>

  return (
    <div
      style={{
        // backgroundColor: theme?.backgroundSecondary
        //   ? `${hexToRgba(theme.backgroundSecondary, 0.25)}`
        //   : 'rgba(31, 41, 55, 0.25)',
        color: theme?.textPrimary || '#FFFFFF',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
      className="min-h-screen w-full p-6 pt-19"
    >
      <h1 className="text-xl font-semibold">
        {gt('hello')} {user.userFirstName} 👋
      </h1>
      <h2>
      {gt('welcome')} into <span style={{ color: theme?.textSecondary || '#D72631' }}>{appName}</span> {gt('managementApp')} !
      </h2>
    </div>
  )
  
  function hexToRgba(hex: string, alpha: number) {
    const bigint = parseInt(hex.replace('#', ''), 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
  
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }  
}  
