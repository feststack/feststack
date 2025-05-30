import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useGraphicTheme } from '@/hooks/useGraphicTheme'

export default function UserHomePage() {
  const [user, setUser] = useState<{ userFirstName: string; userLastName: string } | null>(null)
  const [loadingUser, setLoadingUser] = useState(true)
  const { theme, appName, loading: loadingTheme } = useGraphicTheme()
  const gt = useTranslations('GlobalTranslation')

  useEffect(() => {
    async function fetchUser() {
      try {
        const email = localStorage.getItem('userEmail')
        if (!email) return setUser(null)

        const res = await fetch('/api/user/me', {
          headers: {
            'x-user-email': email,
          },
        })

        const data = res.ok ? await res.json() : null
        setUser(data)
      } catch (error) {
        console.error('Erreur lors de la récupération de l’utilisateur:', error)
        setUser(null)
      } finally {
        setLoadingUser(false)
      }
    }

    fetchUser()
  }, [])

  if (loadingUser || loadingTheme) return <p>Chargement...</p>
  if (!user) return <p>Utilisateur non connecté</p>

  return (
    <div
      style={{
        color: theme?.textPrimary || '#FFFFFF',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
      className="min-h-screen w-full p-6 pt-19"
    >
      <h1 className="text-xl font-semibold">
        {gt('hello')} {user.userFirstName} 👋
      </h1>
      <h2>
        {gt('welcome')} into{' '}
        <span style={{ color: theme?.textSecondary || '#D72631' }}>{appName}</span>{' '}
        {gt('managementApp')} !
      </h2>
    </div>
  )
}
