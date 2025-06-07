'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type User = {
  userFirstName: string
  userLastName: string
  userCode: string
  languageCode: string | null
  isActive: boolean
  adGroupAccess: Record<string, string[]> // ex: { admin: ['read', 'update'], manager: ['read'] }
}

type Action = 'create' | 'read' | 'update' | 'delete'

export function useAuth(adFamilies?: string | string[]) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [unauthorized, setUnauthorized] = useState(false)

  const groups = adFamilies ? (Array.isArray(adFamilies) ? adFamilies : [adFamilies]) : []

  useEffect(() => {
    const email = localStorage.getItem('userEmail')

    if (!email) {
      // Pas connecté, on ne redirige pas ici, on laisse le composant gérer
      setUser(null)
      setLoading(false)
      return
    }

    async function fetchUser() {
      try {
        const res = await fetch('/api/user/me', {
          headers: { 'x-user-email': email } as HeadersInit,
        })

        if (!res.ok) {
          // API invalide : considérer comme non connecté
          setUser(null)
          setLoading(false)
          return
        }

        const userData: User = await res.json()
        setUser(userData)

        // Si des groupes sont demandés, on vérifie s’il y a accès
        if (groups.length > 0) {
          const hasAccess = groups.some(group => Boolean(userData.adGroupAccess[group]))
          setUnauthorized(!hasAccess)
        } else {
          setUnauthorized(false)
        }
      } catch (error) {
        console.error('Erreur lors de la récupération de l’utilisateur:', error)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [adFamilies])

  function hasFamilyAccess(access: Record<string, string[]>): boolean {
    if (!user || groups.length === 0) return false
    return groups.some(group => Boolean(access[group]))
  }

  function getRightsForFamily(family: string): string[] {
    return user?.adGroupAccess[family] || []
  }

  function canDo(action: Action): boolean {
    if (!user || groups.length === 0) return false
    return groups.some(group => getRightsForFamily(group).includes(action))
  }

  return {
    user,
    loading,
    unauthorized,
    hasFamilyAccess: hasFamilyAccess(user?.adGroupAccess || {}),
    rights: groups.flatMap(group => getRightsForFamily(group)),
    canCreate: canDo('create'),
    canRead: canDo('read'),
    canUpdate: canDo('update'),
    canDelete: canDo('delete'),
  }
}
