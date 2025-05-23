'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

interface Artist {
  artistId: number
  artistName: string
  createdBy: string
}

export default function GetAllArtistsPage() {
  const [artists, setArtists] = useState<Artist[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [checkingAuth, setCheckingAuth] = useState(true)
  const gt = useTranslations('GlobalTranslation')
  const router = useRouter()

  const fetchArtists = async (query = '', userEmail: string) => {
    setLoading(true)
    const url = query ? `/api/artist?search=${encodeURIComponent(query)}` : '/api/artist'
    const res = await fetch(url, {
      headers: { 'x-user-email': userEmail },
    })
    const data: Artist[] = await res.json()
    setArtists(data)
    setLoading(false)
  }

  useEffect(() => {
    const checkAuth = async () => {
      const email = localStorage.getItem('userEmail')
  
      if (!email) {
        router.push('/')
        return
      }
  
      const res = await fetch('/api/user/me', {
        headers: {
          'x-user-email': email,
        },
      })
  
      if (!res.ok) {
        router.push('/')
        return
      }
  
      const data = await res.json()
  
      // Groupes autorisés pour accéder à la page
      const allowedGroups = ['admin']
      const userGroups: string[] = data.adGroups || []
  
      const hasAccess = userGroups.some(g => allowedGroups.includes(g))
  
      if (!hasAccess) {
        setCheckingAuth(false)
        setArtists(null as any) // pour afficher le message "pas les droits"
        return
      }
  
      await fetchArtists('', email)
      setCheckingAuth(false)
    }
  
    checkAuth()
  }, [router])  

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
    const email = localStorage.getItem('userEmail')
    if (email) {
      fetchArtists(value, email)
    }
  }

  if (checkingAuth) {
    return <div className="p-6 text-center">{gt('loading')}</div>
  }

  if (artists === null) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-red-600 text-lg font-semibold">
        ❌ {gt('noAccessRight')}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{gt('artistCatalog')}</h1>

        <input
          type="text"
          value={search}
          onChange={onSearchChange}
          placeholder={`🔍 ${gt('lookingForArtist')}`}
          className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {loading ? (
          <p className="text-center text-gray-500">{gt('loading')}</p>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-100 text-blue-900">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">{gt('artistName')}</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">{gt('createdBy')}</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {artists.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="px-4 py-4 text-center text-gray-500">{gt('artistNotFound')}</td>
                  </tr>
                ) : (
                  artists.map((artist, index) => (
                    <tr
                      key={artist.artistId}
                      className={index % 2 === 0 ? 'bg-gray-50 hover:bg-gray-100' : 'bg-white hover:bg-gray-100'}
                    >
                      <td className="px-4 py-3 text-sm">{artist.artistName}</td>
                      <td className="px-4 py-3 text-sm">{artist.createdBy}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
