import { useState, useEffect } from 'react'

type AppConfig = {
  appConfigName: string
  appConfigValue: string
}

export function useAppConfig(name: string) {
  const [configs, setConfigs] = useState<AppConfig[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchConfigs() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch('/api/appConfig')
        if (!res.ok) throw new Error(`Erreur ${res.status}`)
        const data: AppConfig[] = await res.json()
        setConfigs(data)
      } catch (err: any) {
        setError(err.message || 'Erreur inconnue')
      } finally {
        setLoading(false)
      }
    }

    fetchConfigs()
  }, [])

  // Trouve la valeur correspondant au nom demandé
  const value = configs?.find(c => c.appConfigName === name)?.appConfigValue || null

  return { value, loading, error }
}
