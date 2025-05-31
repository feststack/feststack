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

type User = {
  userFirstName: string
  userLastName: string
}

export default function TopNavbar() {
  const gt = useTranslations('GlobalTranslation')
  const router = useRouter()

  const [theme, setTheme] = useState<GraphicTheme | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isSignoutHovered, setIsSignoutHovered] = useState(false)

  useEffect(() => {
    async function fetchThemeAndConfig() {
      const resConfig = await fetch('/api/appConfig')
      if (!resConfig.ok) return

      const appConfig: AppConfig[] = await resConfig.json()

      const defaultThemeConfig = appConfig.find(
        (c) => c.appConfigName === 'default_graphic_theme'
      )
      const defaultThemeName = defaultThemeConfig?.appConfigValue ?? 'dark_theme'

      const resThemes = await fetch('/api/graphicTheme')
      if (!resThemes.ok) return
      const themes: GraphicTheme[] = await resThemes.json()

      const defaultTheme = themes.find(
        (t) => t.graphicThemeName === defaultThemeName
      )
      if (defaultTheme) setTheme(defaultTheme)
    }

    async function fetchUser() {
      const email = localStorage.getItem('userEmail') ?? ''
      if (!email) return

      const resUser = await fetch('/api/user/me', {
        headers: {
          'x-user-email': email,
        },
      })

      if (resUser.ok) {
        const userData = await resUser.json()
        setUser({
          userFirstName: userData.userFirstName,
          userLastName: userData.userLastName,
        })
      }
    }

    fetchThemeAndConfig()
    fetchUser()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('userEmail')
    router.push('/')
  }

  function getInitials(firstName?: string, lastName?: string) {
    if (!firstName || !lastName) return ''
    return `${firstName[0]}${lastName[0]}`.toUpperCase()
  }

  return (
    <nav
      style={{
        backgroundColor: theme?.backgroundMain ?? '#1F2937',
        color: theme?.textPrimary ?? '#FFFFFF',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
      className="fixed top-0 left-0 right-0 h-16 px-6 z-50"
    >
      <div className="w-full flex justify-between items-center h-full">
        <Link href="/user/userHome" className="flex items-center space-x-3">
          <img
            src="/images/logos/main_logo.png"
            alt="Logo"
            className="h-25 w-25 object-contain"
          />
        </Link>

        <div className="flex items-center gap-4">
        {user && (
          <Link href="/user/me" passHref>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition-colors duration-200"
              style={{
                backgroundColor: theme?.accentHover ?? '#374151',
                cursor: 'pointer',
                border: isHovered
                  ? `2px solid ${theme?.accentHover ?? '#374151'}`
                  : `2px solid ${theme?.backgroundMain ?? '#374151'}`,
                transition: 'all 0.2s ease-in-out',
              }}
              title={`${user.userFirstName} ${user.userLastName}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {getInitials(user.userFirstName, user.userLastName)}
            </div>
          </Link>
        )}

          <button
            onClick={handleLogout}
            className="cursor-pointer transition-colors duration-200"
            style={{
              color: isSignoutHovered
                ? theme?.accentHover ?? '#9CA3AF'
                : theme?.textPrimary ?? '#D72631',
            }}
            onMouseEnter={() => setIsSignoutHovered(true)}
            onMouseLeave={() => setIsSignoutHovered(false)}
          >
            {gt('signout')}
          </button>
        </div>
      </div>
    </nav>
  )
}
