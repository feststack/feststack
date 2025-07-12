// hooks/useUser.ts
import { useState, useEffect } from 'react'
import type { User } from './types'

export function useUser() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchUser() {
      setLoading(true)
      setError(null)
      try {
        const email = localStorage.getItem('userEmail')
        if (!email) throw new Error('No user email found')

        const res = await fetch('/api/user/me', {
          headers: { 'x-user-email': email }
        })
        if (!res.ok) throw new Error('Failed to fetch user')
        const data: User = await res.json()
        console.log('User fetched:', data)
        setUser(data)
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  return { user, loading, error }
}
