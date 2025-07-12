import { useState, useEffect } from 'react'

export function useUserLanguage(userEmail: string | null) {
  const [languageCode, setLanguageCode] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userEmail) {
      setLanguageCode(null)
      setLoading(false)
      return
    }

    async function fetchLanguage() {
      try {
        const res = await fetch('/api/user/me', {
          method: 'GET',
          headers: {
            'x-user-email': userEmail,
          } as HeadersInit, // 🔧 Ajout du typage explicite ici
        })

        if (!res.ok) throw new Error('User not found')

        const userData = await res.json()
        setLanguageCode(userData.languageCode || null)
      } catch (error) {
        setLanguageCode(null)
      } finally {
        setLoading(false)
      }
    }

    fetchLanguage()
  }, [userEmail])

  return { languageCode, loading, setLanguageCode }
}
