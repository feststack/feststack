'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useGraphicTheme } from '@/hooks/useGraphicTheme'
import { useImage } from '@/hooks/useImage'

type User = {
  userFirstName: string
  userLastName: string
  graphicThemeName?: string
}

export default function TopNavbar() {
  const gt = useTranslations('GlobalTranslation')
  const router = useRouter()

  const [user, setUser] = useState<User | null>(null)
  const [userThemeName, setUserThemeName] = useState<string | undefined>(undefined)

  const { theme, loading } = useGraphicTheme()
  const { imageUrl: logoUrl } = useImage(theme?.logoImage?.imageName ?? null)

  const [isHovered, setIsHovered] = useState(false)
  const [isSignoutHovered, setIsSignoutHovered] = useState(false)

  useEffect(() => {
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
          graphicThemeName: userData.graphicThemeName,
        })
      }
    }

    fetchUser()
  }, [])

  useEffect(() => {
    if (user?.graphicThemeName) {
      setUserThemeName(user.graphicThemeName)
    }
  }, [user])

  const handleLogout = () => {
    localStorage.removeItem('userEmail')
    router.push('/')
  }

  function getInitials(firstName?: string, lastName?: string) {
    if (!firstName || !lastName) return ''
    return `${firstName[0]}${lastName[0]}`.toUpperCase()
  }
  console.log('logoImage', theme?.logoImage)

  return (
    <nav
      style={{
        backgroundColor: theme?.backgroundMain,
        color: theme?.textPrimary,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
      className="fixed top-0 left-0 right-0 h-16 px-6 z-50"
    >
      {(loading || !user) ? (
        <p>Chargement...</p>
      ) : (
        <>
          <div className="w-full flex justify-between items-center h-full">
            <Link href="/user/userHome" className="flex items-center space-x-3">
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt="Logo"
                  className="h-12 w-auto object-contain"
                />
              ) : (
                <div className="h-12 w-12 flex items-center justify-center text-sm text-white bg-gray-600 rounded">
                  No Logo
                </div>
              )}
            </Link>

            <div className="flex items-center gap-4">
              {user && (
                <Link href="/user/me" passHref>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition-colors duration-200"
                    style={{
                      backgroundColor: theme?.accentHover,
                      cursor: 'pointer',
                      border: isHovered
                        ? `2px solid ${theme?.accentHover}`
                        : `2px solid ${theme?.backgroundMain}`,
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
                    ? theme?.accentHover
                    : theme?.textPrimary,
                }}
                onMouseEnter={() => setIsSignoutHovered(true)}
                onMouseLeave={() => setIsSignoutHovered(false)}
              >
                {gt('signout')}
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
