'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useAuth } from '../../hooks/useProtectedPage'
import { useGraphicTheme } from '@/hooks/useGraphicTheme'
import Link from 'next/link'

type AdFamilyData = Record<string, Record<string, number[]>>

type User = {
  userId: number
  userFirstName: string
  userLastName: string
}

export default function AdGroupManagementPage() {
  const {
    user,
    loading,
    unauthorized,
    canRead,
  } = useAuth('admin')

  const [adFamilyData, setAdFamilyData] = useState<AdFamilyData>({})
  const [users, setUsers] = useState<User[]>([])
  const [loadingAdData, setLoadingAdData] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [openFamilies, setOpenFamilies] = useState<Record<string, boolean>>({})
  const [newFamilyName, setNewFamilyName] = useState('')
  const [createError, setCreateError] = useState<string | null>(null)

  const gt = useTranslations('GlobalTranslation')
  const { theme, loading: themeLoading, hexToRgba } = useGraphicTheme()

  useEffect(() => {
    if (!user) return

    const fetchData = async () => {
      try {
        const usersRes = await fetch('/api/user')
        const usersData: User[] = usersRes.ok ? await usersRes.json() : []
        setUsers(usersData)

        const adRes = await fetch('/api/adFamily')
        if (adRes.ok) {
          const data: AdFamilyData = await adRes.json()
          setAdFamilyData(data)
        } else {
          const text = await adRes.text()
          let message = 'Erreur inconnue'
          try {
            const parsed = JSON.parse(text)
            message = parsed.message || message
          } catch {
            message = text || message
          }
          setError(message)
        }
      } catch (err) {
        console.error(err)
        setError('Erreur serveur lors du chargement')
      } finally {
        setLoadingAdData(false)
      }
    }

    fetchData()
  }, [user])

  const handleCreateFamily = async () => {
    if (!newFamilyName.trim()) {
      setCreateError('Le nom ne peut pas être vide')
      return
    }
  
    try {
      const res = await fetch('/api/adFamily', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ family: newFamilyName }),
      })
  
      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || 'Erreur lors de la création')
      }
  
      setNewFamilyName('')
      setCreateError(null)
  
      window.location.reload()
  
    } catch (err: any) {
      setCreateError(err.message || 'Erreur inconnue')
    }
  }  

  const getUserFullName = (id: number): string => {
    const u = users.find(u => u.userId === id)
    return u ? `${u.userFirstName} ${u.userLastName}` : `ID ${id}`
  }

  const toggleFamily = (family: string) => {
    setOpenFamilies((prev) => ({
      ...prev,
      [family]: !prev[family],
    }))
  }

  if (loading || themeLoading || loadingAdData || !theme) {
    return <div style={{ padding: 20 }}>Chargement...</div>
  }

  if (unauthorized || !canRead) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-red-600 text-lg font-semibold">
        ❌ {gt('noAccessRight')}
      </div>
    )
  }

  return (
    <div className="min-h-screen px-6 py-10">
      <div className="flex items-center mb-3 h-6 justify-between">
        <h1 className="text-2xl font-bold">{gt('adGroups')}</h1>

        <Link
          href="/admin/user/getAllUser"
          style={{
            backgroundColor: theme?.accentHover,
            color: theme?.textPrimary,
          }}
          className="px-4 rounded-lg text-center flex items-center justify-center whitespace-nowrap h-full"
        >
          {gt('modifyUserAdFamily')}
        </Link>
      </div>

      <div
        className="mb-6 px-4 py-4 rounded-lg"
        style={{
          backgroundColor: hexToRgba(theme.backgroundMain, 0.6),
          color: theme.textPrimary,
          boxShadow: '0 2px 4px rgba(0,0,0,1)',
        }}
      >
        <div className="flex items-center space-x-4">
            <h2>{gt('newAdGroup')}:</h2>
          <input
            type="text"
            value={newFamilyName}
            onChange={(e) => setNewFamilyName(e.target.value)}
            placeholder={gt('adFamilyName')}
            className="flex-grow p-2 rounded border border-gray-300"
          />

          <button
            onClick={handleCreateFamily}
            className="px-4 py-2 rounded text-white font-semibold whitespace-nowrap"
            style={{ backgroundColor: theme.accentHover }}
          >
            {gt('create')}
          </button>
        </div>
        {createError && <div className="text-red-600 mt-2">{createError}</div>}
      </div>

      {error && <div className="text-red-600 mb-4">{error}</div>}

      {Object.keys(adFamilyData).length === 0 ? (
        <div className="text-gray-600">Aucune donnée disponible.</div>
      ) : (
        <div className="space-y-6">
          {Object.entries(adFamilyData).map(([family, rights]) => (
            <div
              key={family}
              style={{
                backgroundColor: hexToRgba(theme.backgroundMain, 0.5),
                color: theme?.textPrimary,
                boxShadow: '0 2px 4px rgba(0,0,0,1)',
              }}
              className="rounded-lg p-4 cursor-pointer select-none"
              onClick={() => toggleFamily(family)}
            >
              <h2
                style={{ color: theme?.accentHover }}
                className="capitalize text-xl font-semibold"
              >
                {family}
              </h2>

              {openFamilies[family] && (
                <div className="space-y-2 mt-2">
                  {Object.entries(rights).map(([right, userIds]) => (
                    <div key={right} className="pl-4">
                      <strong className="capitalize">{right}:</strong>{' '}
                      <span className="text-sm text-gray-400">
                        {userIds.length > 0
                          ? userIds.map(getUserFullName).join(', ')
                          : 'Aucun'}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
