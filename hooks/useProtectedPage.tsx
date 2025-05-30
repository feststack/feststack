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
  const router = useRouter()

  // Toujours convertir en tableau pour simplifier la logique
  const groups = adFamilies ? (Array.isArray(adFamilies) ? adFamilies : [adFamilies]) : []

  useEffect(() => {
    const email = localStorage.getItem('userEmail')
    if (!email) {
      router.push('/')
      return
    }

    async function fetchUser() {
      try {
        const res = await fetch('/api/user/me', {
          headers: { 'x-user-email': email } as HeadersInit,
        })

        if (!res.ok) {
          router.push('/')
          return
        }

        const userData: User = await res.json()

        setUser(userData)

        // Vérifie si l'utilisateur a au moins un des groupes demandés
        if (groups.length > 0) {
          const hasAccess = groups.some(group => Boolean(userData.adGroupAccess[group]))
          setUnauthorized(!hasAccess)
        } else {
          // Pas de restriction sur les groupes, donc autorisé
          setUnauthorized(false)
        }

      } catch (error) {
        console.error('Erreur lors de la récupération de l’utilisateur:', error)
        router.push('/')
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [router, adFamilies])

  // Vérifie si user a au moins un des groupes demandés
  function hasFamilyAccess(access: Record<string, string[]>): boolean {
    if (!user) return false
    if (groups.length === 0) return false
    return groups.some(group => Boolean(access[group]))
  }

  // Pour un groupe donné, retourne les droits (actions)
  function getRightsForFamily(family: string): string[] {
    if (!user) return []
    return user.adGroupAccess[family] || []
  }

  // Vérifie si user a le droit demandé sur au moins un groupe
  function canDo(action: Action): boolean {
    if (!user) return false
    if (groups.length === 0) return false
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
