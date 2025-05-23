'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

export default function UserHomePage() {
  const [user, setUser] = useState<{ userName: string; userSurname: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const gt = useTranslations('GlobalTranslation');

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
  
    fetchUser()
  }, [])  

  if (loading) return <p>Chargement...</p>
  if (!user) return <p>Utilisateur non connecté</p>

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-xl font-semibold">{gt('welcome')}, {user.userName} {user.userSurname} 👋</h1>
    </div>
  )
}
