import { useState } from 'react'

interface SaveUserData {
  userFirstName: string
  userLastName: string
  languageId: number | null
  graphicThemeId: number | null
}

export function useSaveUserMe() {
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const save = async (data: SaveUserData): Promise<boolean> => {
    setSaving(true)
    setError(null)

    try {
      const res = await fetch('/api/user/me', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-user-email': localStorage.getItem('userEmail') || '',
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const err = await res.json()
        setError(err.message || 'Erreur lors de la sauvegarde')
        return false
      }

      return true
    } catch {
      setError('Erreur réseau')
      return false
    } finally {
      setSaving(false)
    }
  }

  return { save, saving, error }
}
