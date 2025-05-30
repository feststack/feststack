'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useGraphicTheme } from '@/hooks/useGraphicTheme'

interface Language {
  languageId: number
  languageName: string
  languageCode: string
}

interface User {
  userId: number
  userFirstName: string
  userLastName: string
  userCode: string
  languageId: number
  language: Language | null
  createdBy: string
  isDeleted: boolean
  isActive: boolean
  adGroupAccess: Record<string, string[]>
}

export default function UserMePage() {
  const [data, setData] = useState<User | null>(null)
  const [languages, setLanguages] = useState<Language[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [selectedLanguageId, setSelectedLanguageId] = useState<number | null>(null)
  const [saving, setSaving] = useState(false)

  const { theme, loading: themeLoading, hexToRgba } = useGraphicTheme()
  const router = useRouter()
  const gt = useTranslations('GlobalTranslation')

  async function fetchUserAndLanguage() {
    setLoading(true)
    setError(null)

    const email = localStorage.getItem('userEmail') || ''
    if (!email) {
      router.push('/')
      return
    }

    try {
      const resUser = await fetch('/api/user/me', {
        headers: { 'x-user-email': email },
      })

      if (!resUser.ok) {
        if ([401, 403, 404].includes(resUser.status)) {
          router.push('/')
        } else {
          const err = await resUser.json()
          setError(err.message || 'Erreur utilisateur')
        }
        return
      }

      const user = await resUser.json()
      const resLanguages = await fetch('/api/language')

      const languages: Language[] = resLanguages.ok ? await resLanguages.json() : []
      setLanguages(languages)

      const matchedLanguage = languages.find(l => l.languageCode === user.languageCode) || null
      setData({ ...user, language: matchedLanguage })

      setFirstName(user.userFirstName)
      setLastName(user.userLastName)
      setSelectedLanguageId(matchedLanguage ? matchedLanguage.languageId : null)
    } catch {
      setError('Erreur réseau')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUserAndLanguage()
  }, [])

  if (loading || themeLoading || !theme) {
    return <div style={{ padding: 20 }}>Chargement...</div>
  }

  if (error) {
    return <div style={{ padding: 20, color: 'red' }}>Erreur: {error}</div>
  }

  if (!data) {
    return <div style={{ padding: 20 }}>Aucune donnée utilisateur</div>
  }

  async function handleSave() {
    setSaving(true)
    setError(null)

    try {
      const res = await fetch('/api/user/me', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-user-email': localStorage.getItem('userEmail') || '',
        },
        body: JSON.stringify({
          userFirstName: firstName,
          userLastName: lastName,
          languageId: selectedLanguageId,
        }),
      })

      if (!res.ok) {
        const err = await res.json()
        setError(err.message || 'Erreur lors de la sauvegarde')
        return
      }

      await fetchUserAndLanguage()
      setIsEditing(false)
    } catch {
      setError('Erreur réseau')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className='mt-19 m-6'>
      <h1 style={{ color: theme.accentHover }} className="text-3xl font-bold mb-6">
        {gt('personalData')}:
      </h1>

      <div
        style={{
          backgroundColor: hexToRgba(theme.backgroundMain, 0.5),
          color: theme.textPrimary,
          boxShadow: '0 2px 4px rgba(0,0,0,1)',
        }}
        className="p-6 rounded-xl"
      >
        <p className='my-1'>
          <strong>{gt('firstName')} : </strong>
          {isEditing ? (
            <input
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              disabled={saving}
              style={{
                backgroundColor: hexToRgba(theme.backgroundSecondary, 0.8),
                color: theme.textPrimary,
              }}
              onFocus={e => e.currentTarget.style.borderColor = theme.accent}
              onBlur={e => e.currentTarget.style.borderColor = theme.accentHover}
              className='rounded-lg px-2 mb-2'
            />
          ) : (
            <span className='text-gray-400'>{data.userFirstName}</span>
          )}
        </p>

        <p>
          <strong>{gt('lastName')} : </strong>
          {isEditing ? (
            <input
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              disabled={saving}
              style={{
                backgroundColor: hexToRgba(theme.backgroundSecondary, 0.8),
                color: theme.textPrimary,
              }}
              onFocus={e => e.currentTarget.style.borderColor = theme.accent}
              onBlur={e => e.currentTarget.style.borderColor = theme.accentHover}
              className='rounded-lg px-2 mb-2'
            />
          ) : (
            <span className='text-gray-400'>{data.userLastName}</span>
          )}
        </p>

        <p className='my-1'>
          <strong>{gt('userCode')} : </strong> <span className='text-gray-400'>{data.userCode}</span>
        </p>

        <p className='my-1'>
          <strong>{gt('userLanguage')} : </strong>
          {isEditing ? (
            <select
              value={selectedLanguageId ?? ''}
              onChange={e => setSelectedLanguageId(Number(e.target.value))}
              disabled={saving}
              style={{
                backgroundColor: hexToRgba(theme.backgroundSecondary, 0.8),
                color: theme.textPrimary,
                borderRadius: 6,
                padding: '6px 10px',
                borderColor: theme.accent,
                cursor: saving ? 'not-allowed' : 'pointer',
              }}
            >
              <option value="" disabled>{gt('selectLanguage')}</option>
              {languages.map(lang => (
                <option key={lang.languageId} value={lang.languageId}>{lang.languageName}</option>
              ))}
            </select>
          ) : (
            <span className='text-gray-400'>{data.language?.languageName || 'Non définie'}</span>
          )}
        </p>

        <div className='mt-1'>
          <strong>{gt('adGroups')} : </strong>
        </div>
        <ul>
          {Object.entries(data.adGroupAccess).map(([group, rights]) => (
            <li key={group} className='ml-5 text-gray-400'>
              • {group}: {rights.join(', ')}
            </li>
          ))}
        </ul>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            style={{ background: theme.accentHover }}
            className='mt-2 px-3 cursor-pointer rounded-lg'
          >
            {gt('edit')}
          </button>
        ) : (
          <>
            <button
              onClick={handleSave}
              disabled={saving}
              className='mt-2 px-3 cursor-pointer rounded-lg text-green-600 bg-green-100 mr-2'
            >
              {gt('saveChanges')}
            </button>
            <button
              onClick={() => {
                setIsEditing(false)
                setFirstName(data.userFirstName)
                setLastName(data.userLastName)
                setSelectedLanguageId(data.language?.languageId ?? null)
                setError(null)
              }}
              disabled={saving}
              className='mt-2 px-3 cursor-pointer rounded-lg text-red-600 bg-red-100'
            >
              {gt('cancel')}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
