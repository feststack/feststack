'use client'

import React, { useState, useEffect, Fragment } from 'react'
import { useMemo } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../hooks/useProtectedPage'
import { ChevronUp, ChevronDown } from 'lucide-react'
import Link from 'next/link'

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

type GraphicTheme = {
  graphicThemeName: string
  backgroundMain: string
  backgroundSecondary: string
  textPrimary: string
  textSecondary: string
  accent: string
  accentHover: string
  success: string
  cardBackground: string
  borderColor: string
}

type AppConfig = {
  appConfigName: string
  appConfigValue: string
}

export default function GetAllUsersPage() {
  const accessGroups = useMemo(() => ['admin', 'manager'], [])
  const { user, loading, unauthorized, hasFamilyAccess, canRead, canUpdate } = useAuth(accessGroups)

  const [users, setUsers] = useState<User[] | null>([])
  const [languages, setLanguages] = useState<Language[]>([])
  const [search, setSearch] = useState('')
  const [expandedUserId, setExpandedUserId] = useState<number | null>(null)
  const [canUpdateLangState, setCanUpdateLangState] = useState(false)
  const [adGroupsData, setAdGroupsData] = useState<Record<string, string[]>>({})
  const [userAdGroupsEdits, setUserAdGroupsEdits] = useState<Record<number, { family: string; rights: string[] }>>({})
  const [showAdGroupSection, setShowAdGroupSection] = useState<Record<number, boolean>>({})
  const [pendingUserUpdates, setPendingUserUpdates] = useState<Record<number, Partial<User>>>({})  
  const [canUpdateAdGroups, setCanUpdateAdGroups] = useState(false)
  const [theme, setTheme] = useState<GraphicTheme | null>(null)

  const gt = useTranslations('GlobalTranslation')
  const router = useRouter()

  const fetchUsers = async (query = '', userEmail: string) => {
    const url = query ? `/api/user?search=${encodeURIComponent(query)}` : '/api/user'
    const res = await fetch(url, {
      headers: { 'x-user-email': userEmail },
    })
    const data: User[] = await res.json()
    setUsers(data)
  }

  const updateUserLanguageLocally = (userId: number, languageId: number) => {
    setPendingUserUpdates(prev => ({
      ...prev,
      [userId]: {
        ...(prev[userId] || {}),
        languageId,
      }
    }))
  }  

  const toggleAdGroupSection = (userId: number) => {
    setShowAdGroupSection(prev => ({
      ...prev,
      [userId]: !prev[userId],
    }))
  }

  const fetchLanguages = async () => {
    const res = await fetch('/api/language')
    if (res.ok) {
      const data: Language[] = await res.json()
      setLanguages(data)
    }
  }

  useEffect(() => {

    async function fetchThemeAndConfig() {
      const resConfig = await fetch('/api/appConfig')
      if (!resConfig.ok) return
  
      const appConfig: AppConfig[] = await resConfig.json()
  
      // Trouver le thème par défaut
      const defaultThemeConfig = appConfig.find(c => c.appConfigName === 'default_graphic_theme')
      const defaultThemeName = defaultThemeConfig?.appConfigValue || 'dark_theme'
  
      // Récupérer la liste des thèmes graphiques
      const resThemes = await fetch('/api/graphicTheme')
      if (!resThemes.ok) return
      const themes: GraphicTheme[] = await resThemes.json()
      // Appliquer le thème correspondant
      const defaultTheme = themes.find(t => t.graphicThemeName === defaultThemeName)

      if (defaultTheme) setTheme(defaultTheme)
    }
  
    fetchThemeAndConfig()    
  }, [])

  const fetchAdGroupsData = async () => {
    const res = await fetch('/api/adgroup')
    if (res.ok) {
      const data: Record<string, string[]> = await res.json()
      setAdGroupsData(data)
    } else {
      setAdGroupsData({})
    }
  }

  useEffect(() => {
    if (!user || loading || unauthorized) return

    // hasFamilyAccess est un booléen retourné par useAuth
    if (!hasFamilyAccess) return

    const email = user.userCode

    // Charge les données
    fetchUsers('', email)
    fetchLanguages()
    fetchAdGroupsData()

    setCanUpdateLangState(canUpdate)
    setCanUpdateAdGroups(canUpdate)
  }, [user, loading, unauthorized, hasFamilyAccess, canUpdate])

  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null)

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)

    if (searchTimeout) clearTimeout(searchTimeout)

    const email = localStorage.getItem('userEmail')
    if (email) {
      const timeout = setTimeout(() => {
        fetchUsers(value, email)
      }, 300)
      setSearchTimeout(timeout)
    }
  }

  const toggleExpand = (userId: number) => {
    setExpandedUserId(prev => (prev === userId ? null : userId))
  
    // Initialiser l'édition AD groups à l'ouverture du détail si pas déjà initialisé
    if (!userAdGroupsEdits[userId]) {
      const user = users?.find(u => u.userId === userId)
      if (user && user.adGroupAccess) {
        const families = Object.keys(adGroupsData)
        const firstFamily = families.find(
          family => family in user.adGroupAccess
        ) || families[0]
      
        const rights = user.adGroupAccess?.[firstFamily] || []
      
        setUserAdGroupsEdits(prev => ({
          ...prev,
          [userId]: {
            family: firstFamily,
            rights,
          }
        }))
      }      
    }
  }

  const handleSave = async (userId: number) => {
    const email = localStorage.getItem('userEmail')
    if (!email || (!pendingUserUpdates[userId] && !hasAdGroupChanged(userId))) return
  
    const user = users?.find(u => u.userId === userId)
    if (!user) return
  
    const updatePayload = {
      userId,
      languageId: pendingUserUpdates[userId]?.languageId ?? user.languageId,
      isActive: pendingUserUpdates[userId]?.isActive ?? user.isActive,
      adGroupUpdate: userAdGroupsEdits[userId] || null,
    }
  
    try {
      const res = await fetch('/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-user-email': email,
        },
        body: JSON.stringify(updatePayload),
      })
  
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        alert(`Erreur lors de la mise à jour : ${err.message || res.statusText}`)
        return
      }
  
      const updatedUser: User = await res.json()
  
      setUsers(prev => {
        if (!prev) return [updatedUser]
        return prev.map(u => (u.userId === userId ? updatedUser : u))
      })
      
  
      setPendingUserUpdates(prev => {
        const newUpdates = { ...prev }
        delete newUpdates[userId]
        return newUpdates
      })
  
      setUserAdGroupsEdits(prev => {
        const newEdits = { ...prev }
        delete newEdits[userId]
        return newEdits
      })
  
    } catch (error) {
      alert('Erreur réseau lors de la sauvegarde')
      console.error(error)
    }
  }
  
  const onRightsChange = (userId: number, newRights: string[]) => {
    setUserAdGroupsEdits(prev => {
      const current = prev[userId] || { family: '', rights: [] }
      return {
        ...prev,
        [userId]: {
          ...current,
          rights: newRights,
        }
      }
    })
  }  

  function hasAdGroupChanged(userId: number): boolean {
    const edited = userAdGroupsEdits[userId];
    if (!edited || !users) return false;
  
    const user = users.find(u => u.userId === userId);
    if (!user) return false;
  
    // Si la famille a changé, on considère que c’est modifié
    if (edited.family !== Object.keys(user.adGroupAccess).find(f => f === edited.family)) {
      return true;
    }
  
    const originalRights = user.adGroupAccess[edited.family] || [];
    const editedRights = edited.rights || [];
  
    if (originalRights.length !== editedRights.length) return true;
  
    const sortedOriginal = [...originalRights].sort();
    const sortedEdited = [...editedRights].sort();
  
    return !sortedOriginal.every((r, i) => r === sortedEdited[i]);
  }

  if (unauthorized || !hasFamilyAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-red-600 text-lg font-semibold">
        ❌ {gt('noAccessRight')}
      </div>
    )
  }

  return (
    <div 
    style={{
      boxShadow: '0 2px 4px rgba(0,0,0,1)',
    }}
    className="min-h-screen w-full p-6 pt-19"
    >
        <div className="w-full">
        <h1 
          style={{
            color: theme?.accentHover
          }}
          className="text-3xl font-bold mb-1"
        >{gt('users')}</h1>

        <div className="flex mb-3 h-10"> {/* hauteur fixe ici */}
          <input
            type="text"
            value={search}
            onChange={onSearchChange}
            placeholder={`🔍 ${gt('lookingForUser')}`}
            style={{
              backgroundColor: theme?.backgroundMain || '#1F2937',
              color: theme?.textPrimary || '#FFFFFF',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Link
            href="/user/userCreation"
            style={{
              background: theme?.accentHover,
            }}
            className="h-full px-4 ml-2 rounded-lg text-xl text-center text-white flex items-center justify-center text-nowrap"
          >
            {gt('addUser')}
          </Link>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">{gt('loading')}</p>
        ) : (
          <div 
            style={{
              boxShadow: '0 2px 4px rgba(0,0,0,1)',
            }}
            className="text-gray-800 overflow-x-auto rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200">
            <thead 
              style={{
                backgroundColor: theme?.backgroundMain || '#1F2937',
                color: theme?.textPrimary || '#FFFFFF',
                boxShadow: '0 2px 4px rgba(0,0,0,1)',
              }}
              // className="bg-gray-800 text-blue-900"
            >
                <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">{gt('firstName')}</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">{gt('lastName')}</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">{gt('userCode')}</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">{gt('createdBy')}</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">{gt('isActive')}</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {!Array.isArray(users) || users.length === 0 ? (
                    <tr>
                    <td colSpan={4} className="px-4 py-4 text-center text-gray-500">
                        {gt('userNotFound')}
                    </td>
                    </tr>
                ) : (
                    users.map((user, index) => {
                        const isExpanded = expandedUserId === user.userId
                        const rowBg = index % 2 === 0 ? 'bg-gray-50' : 'bg-white'

                        return [
                            <tr
                            key={`user-row-${user.userId}`}
                            className={`${rowBg} hover:bg-gray-100 cursor-pointer`}
                            onClick={() => toggleExpand(user.userId)}
                            >                   
                            <td className="px-4 py-3 text-sm">{user.userFirstName}</td>
                            <td className="px-4 py-3 text-sm">{user.userLastName}</td>
                            <td className="px-4 py-3 text-sm">{user.userCode}</td> 
                            <td className="px-4 py-3 text-sm">{user.createdBy}</td>
                            <td className="px-4 py-3 text-sm">
                              <span className={user.isActive ? 'text-green-600 bg-green-100 px-3 py-2 rounded-lg' : 'text-red-600 bg-red-100 px-3 py-2 rounded-lg'}>
                                {user.isActive ? gt('active') : gt('inactive')}
                              </span>
                            </td>
                          </tr>,
                      
                            isExpanded && (
                            <tr key={`details-row-${user.userId}`} className={rowBg}>
                            <td colSpan={5} className="px-4 py-4 text-sm text-gray-700">
                                <div><strong>{gt('userCode')}:</strong> {user.userCode}</div>
                      
                                <div className="mt-2">
                                  <label htmlFor={`language-select-${user.userId}`} className="font-semibold">{gt('userLanguage')}:</label>
                                  {canUpdateLangState ? (
                                    <select
                                      id={`language-select-${user.userId}`}
                                      value={pendingUserUpdates[user.userId]?.languageId ?? user.languageId}
                                      onChange={e => updateUserLanguageLocally(user.userId, Number(e.target.value))}
                                      className="ml-2 border border-gray-300 rounded px-2 py-1"
                                    >
                                      {languages.map(lang => (
                                        <option key={lang.languageId} value={lang.languageId}>
                                          {lang.languageName}
                                        </option>
                                      ))}
                                    </select>
                                  ) : (
                                    <span className="ml-2">{user.language?.languageName || '-'}</span>
                                  )}
                                </div>
                                <div className="mt-2 flex items-center gap-2">
                                <label htmlFor={`active-toggle-${user.userId}`} className="font-semibold">{gt('isActive')}:</label>
                                <input
                                    type="checkbox"
                                    id={`active-toggle-${user.userId}`}
                                    checked={pendingUserUpdates[user.userId]?.isActive ?? user.isActive}
                                    onChange={e => {
                                    const newIsActive = e.target.checked;
                                    setPendingUserUpdates(prev => ({
                                        ...prev,
                                        [user.userId]: {
                                        ...(prev[user.userId] || {}),
                                        isActive: newIsActive,
                                        }
                                    }));
                                    }}
                                    disabled={!canUpdateLangState} // ou un autre droit si besoin
                                />
                                </div>

                      
                                <div className="mt-4">
                                  <strong>{gt('adGroups')}:</strong>
                                  {!user.adGroupAccess || Object.entries(user.adGroupAccess).length === 0 ? (
                                    <p className="ml-2 text-gray-500">-</p>
                                  ) : (
                                    <ul className="ml-4 list-disc">
                                      {Object.entries(user.adGroupAccess).map(([family, rights]) => (
                                        <li key={family}>
                                          <strong>{family}</strong> : {rights.join(', ') || '-'}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                      
                                {canUpdateAdGroups && (
                                <button
                                    onClick={() => toggleAdGroupSection(user.userId)}
                                    className="w-full py-2 hover:bg-gray-100 flex items-center text-sm"
                                >
                                    {showAdGroupSection[user.userId] ? <ChevronUp /> : <ChevronDown />}
                                    {gt('addAdGroups')}
                                </button>
                                )}
                                {showAdGroupSection[user.userId] && (
                                  <div className="p-4 bg-gray-100 rounded shadow-sm space-y-4">
                                    {/* Famille */}
                                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                                    <label htmlFor={`family-select-${user.userId}`} className="font-semibold w-32">
                                        {gt('adGroupFamily')}:
                                    </label>
                                    {canUpdateLangState ? (
                                        <select
                                        id={`family-select-${user.userId}`}
                                        value={userAdGroupsEdits[user.userId]?.family || ''}
                                        onChange={e => {
                                            const newFamily = e.target.value
                                            const userOriginal = users?.find(u => u.userId === user.userId)
                                            const existingRights = userOriginal?.adGroupAccess?.[newFamily] || []
                                          
                                            setUserAdGroupsEdits(prev => ({
                                              ...prev,
                                              [user.userId]: {
                                                family: newFamily,
                                                rights: existingRights, // ✅ Pré-remplit les droits existants
                                              }
                                            }))
                                          }}
                                          
                                        className="flex-1 border border-gray-300 rounded px-3 py-2 bg-white shadow-sm"
                                        >
                                        {Object.keys(adGroupsData).map(family => (
                                            <option key={family} value={family}>
                                            {family}
                                            </option>
                                        ))}
                                        </select>
                                    ) : (
                                        <span className="ml-2 text-gray-700">{userAdGroupsEdits[user.userId]?.family || '-'}</span>
                                    )}
                                    </div>

                      
                                    {/* Droits */}
                                    <div className="flex flex-col md:flex-row md:items-start gap-2">
                                      <label className="font-semibold w-32">
                                        {gt('adGroupRights')}:
                                      </label>
                      
                                      {canUpdateLangState ? (
                                        <div className="flex flex-wrap gap-2">
                                          {(adGroupsData[userAdGroupsEdits[user.userId]?.family || Object.keys(adGroupsData)[0]] || []).map(right => {
                                            const isSelected = userAdGroupsEdits[user.userId]?.rights?.includes(right)
                                            return (
                                              <button
                                                key={right}
                                                type="button"
                                                onClick={() => {
                                                  const currentRights = userAdGroupsEdits[user.userId]?.rights || []
                                                  const updatedRights = isSelected
                                                    ? currentRights.filter(r => r !== right)
                                                    : [...currentRights, right]
                                                  onRightsChange(user.userId, updatedRights)
                                                }}
                                                className={`px-3 py-1 rounded text-sm border ${
                                                  isSelected
                                                    ? 'bg-blue-600 text-white border-blue-600'
                                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                                                }`}
                                              >
                                                {right}
                                              </button>
                                            )
                                          })}
                                        </div>
                                      ) : (
                                        <span className="ml-2 text-gray-700">
                                          {(userAdGroupsEdits[user.userId]?.rights || []).join(', ') || '-'}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                )}
                      
                                {(pendingUserUpdates[user.userId] || hasAdGroupChanged(user.userId)) && (
                                  <div className="mt-4">
                                    <button
                                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                      onClick={() => handleSave(user.userId)}
                                    >
                                      💾 {gt('saveChanges')}
                                    </button>
                                  </div>
                                )}
                              </td>
                            </tr>
                          )
                        ]
                      })
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}