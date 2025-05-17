'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

export default function HomePage() {
  const [user, setUser] = useState<{ userName: string; userSurname: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const t = useTranslations()

  useEffect(() => {
    async function fetchUser() {
        const email = localStorage.getItem('userEmail')
        if (!email) {
          setUser(null)
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
      }

      setLoading(false)
    }

    fetchUser()
  }, [])

  if (loading) return <p>Chargement...</p>
  if (!user) return <p>Utilisateur non connecté</p>

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">{t('welcome')}, {user.userName} {user.userSurname} 👋</h1>
    </div>
  )
}
