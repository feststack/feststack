// hooks/useLanguages.ts
import { useState, useEffect } from 'react'

interface Language {
  languageId: number
  languageName: string
  languageCode: string
}

export function useLanguages() {
  const [languages, setLanguages] = useState<Language[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchLanguages() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch('/api/language')
        if (!res.ok) throw new Error('Erreur lors du chargement des langues')
        const data = await res.json()
        setLanguages(data)
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchLanguages()
  }, [])

  return { languages, loading, error }
}
