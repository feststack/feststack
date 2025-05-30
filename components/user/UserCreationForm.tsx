'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useAuth } from '../../hooks/useProtectedPage'
import { useGraphicTheme } from '@/hooks/useGraphicTheme'

type Language = {
  languageId: number
  languageName: string
}

export default function UserCreationForm() {
  const {
    user,
    loading,
    unauthorized,
    hasFamilyAccess,
    canRead,
    canUpdate,
    canCreate, // ✅ ici
  } = useAuth('admin')

  const [languages, setLanguages] = useState<Language[]>([])
  const [message, setMessage] = useState('')

  const [formData, setFormData] = useState({
    userFirstName: '',
    userLastName: '',
    userCode: '',
    email: '',
    password: '',
    languageId: '',
  })

  const gt = useTranslations('GlobalTranslation')

  const { theme, loading: themeLoading, hexToRgba } = useGraphicTheme()

  // Charger les langues quand l'utilisateur est disponible
  useEffect(() => {
    if (!user) return

    const fetchLanguages = async () => {
      try {
        const resLang = await fetch('/api/language')
        if (resLang.ok) {
          const langs: Language[] = await resLang.json()
          setLanguages(langs)
          if (langs.length > 0) {
            setFormData(f => ({
              ...f,
              languageId: langs[0].languageId.toString(),
            }))
          }
        } else {
          console.error('Erreur chargement langues')
        }
      } catch (err) {
        console.error(err)
      }
    }
    
    fetchLanguages()
  }, [user])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMessage('')

    try {
      const bodyToSend = {
        ...formData,
        languageId: Number(formData.languageId),
      }

      const res = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyToSend),
      })

      const data = await res.json()
      if (res.ok) {
        setMessage(`✅ Utilisateur créé avec l'ID: ${data.userId}`)
        setFormData({
          userFirstName: '',
          userLastName: '',
          userCode: '',
          email: '',
          password: '',
          languageId: '',
        })
      } else {
        setMessage(`❌ Erreur: ${data.message}`)
      }
    } catch {
      setMessage('❌ Erreur lors de la requête')
    }
  }

  if (loading || themeLoading || !theme) {
    return <div style={{ padding: 20 }}>Chargement...</div>
  }

  if (unauthorized || !canCreate) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-red-600 text-lg font-semibold">
        ❌ {gt('noAccessRight')}
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen relative px-4">
      <form 
        onSubmit={handleSubmit} 
        style={{
          backgroundColor: hexToRgba(theme.backgroundMain, 0.5),
          color: theme?.textPrimary,
          boxShadow: '0 2px 4px rgba(0,0,0,1)',
        }}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-extrabold mb-6">{gt('createUser')}</h1>

        {message && (
          <p className={`mb-4 ${message.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}

        <input
          type="text"
          name="userFirstName"
          placeholder={gt('firstName')}
          value={formData.userFirstName}
          onChange={handleChange}
          required
          className="w-full border rounded p-2 mb-4"
        />

        <input
          type="text"
          name="userLastName"
          placeholder={gt('lastName')}
          value={formData.userLastName}
          onChange={handleChange}
          required
          className="w-full border rounded p-2 mb-4"
        />

        <select
          name="languageId"
          value={formData.languageId}
          onChange={handleChange}
          required
          className="w-full border rounded p-2 mb-4"
        >
          {languages.map(lang => (
            <option key={lang.languageId} value={lang.languageId}>
              {lang.languageName}
            </option>
          ))}
        </select>

        <input
          type="email"
          name="email"
          placeholder={gt('email')}
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border rounded p-2 mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors duration-200"
        >
          {gt('sendRequest')}
        </button>
      </form>
    </div>
  )
}
