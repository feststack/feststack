import { useState, useEffect } from 'react'

export function useImage(imageName: string | null) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!imageName) {
      setImageUrl(null)
      return
    }

    setLoading(true)
    setError(null)

    async function fetchImage(name: string) {
      try {
        const res = await fetch(`/api/image?name=${encodeURIComponent(name)}`)
        if (!res.ok) {
          throw new Error(`Erreur lors de la récupération de l'image: ${res.statusText}`)
        }
        const blob = await res.blob()
        const url = URL.createObjectURL(blob)
        setImageUrl(url)
      } catch (err) {
        if (err instanceof Error) setError(err.message)
        else setError('Erreur inconnue')
        setImageUrl(null)
      } finally {
        setLoading(false)
      }
    }

    fetchImage(imageName)

    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl)
      }
    }
  }, [imageName])

  return { imageUrl, loading, error }
}
