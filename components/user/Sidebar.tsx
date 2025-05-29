'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'
import {
  ChevronDown,
  ChevronRight,
  UserRoundPen,
  PersonStanding,
  UsersRound,
  KeyboardMusic,
  Forklift,
  Menu,
  X
} from 'lucide-react'

export default function Sidebar({
  isCollapsed,
  setIsCollapsed
}: {
  isCollapsed: boolean
  setIsCollapsed: (val: boolean) => void
}) {
  const t = useTranslations('UserNavbar')
  const [isArtistMenuOpen, setIsArtistMenuOpen] = useState(false)
  const [isTechnicMenuOpen, setIsTechnicMenuOpen] = useState(false)

  const [hasUserAccess, setHasUserAccess] = useState(false)
  const [checkingAuth, setCheckingAuth] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const email = localStorage.getItem('userEmail')
      if (!email) {
        setCheckingAuth(false)
        return
      }

      const res = await fetch('/api/user/me', {
        headers: { 'x-user-email': email }
      })

      if (!res.ok) {
        setCheckingAuth(false)
        return
      }

      const data = await res.json()
      const adGroupAccess = data.adGroupAccess || {}

      // Ici tu règles la logique, par ex si adGroupsFamilies contient "admin" on affiche le bouton
      setHasUserAccess('admin' in adGroupAccess)

      setCheckingAuth(false)
    }

    checkAuth()
  }, [])

  return (
    <aside className={`fixed ${isCollapsed ? 'w-16' : 'w-56'} text-[14px] min-h-screen bg-blue-300 p-4 pt-20 shadow-inner hidden md:flex flex-col transition-all duration-200`}>
      
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`mb-6 ${isCollapsed ? 'self-center' : 'self-end'} text-blue-900`}
        aria-label="Toggle sidebar"
      >
        {isCollapsed ? <Menu size={20} /> : <X size={20} />}
      </button>

      {/* Menu Artistes */}
      <div className="mb-4">
        <div
          className="flex items-center justify-between cursor-pointer hover:text-blue-600"
          onClick={() => setIsArtistMenuOpen(!isArtistMenuOpen)}
        >
          <Link
            href="/artist/getAllArtist"
            className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-2'}`}
          >
            <UserRoundPen size={20} />
            {!isCollapsed && t('artiststicProduction')}
          </Link>
          {!isCollapsed && (isArtistMenuOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
        </div>
        {isArtistMenuOpen && !isCollapsed && (
          <div className="ml-6 mt-2 flex flex-col space-y-1 text-xs text-blue-800">
            <Link href="/artist/create">{t('contracts')}</Link>
            <Link href="/artist/managements">{t('artistManagements')}</Link>
            <Link href="/artist/artistHome">{t('artist')}</Link>
          </div>
        )}
      </div>

      {/* Technique */}
      <div className="mb-4">
        <div
          className="flex items-center justify-between cursor-pointer hover:text-blue-600"
          onClick={() => setIsTechnicMenuOpen(!isTechnicMenuOpen)}
        >
          <Link href="/" className="flex items-center gap-2">
            <KeyboardMusic size={20} />
            {!isCollapsed && t('technics')}
          </Link>
          {!isCollapsed && (isTechnicMenuOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
        </div>
        {isTechnicMenuOpen && !isCollapsed && (
          <div className="ml-6 mt-2 flex flex-col space-y-1 text-xs text-blue-800">
            <Link href="/">{t('stages')}</Link>
            <Link href="/">{t('backlines')}</Link>
          </div>
        )}
      </div>

      {/* Autres liens */}
      <Link href="/services" className="mb-4 flex items-center gap-2 hover:text-blue-600">
        <Forklift size={20} />
        {!isCollapsed && t('logistics')}
      </Link>
      <Link href="/services" className="mb-4 flex items-center gap-2 hover:text-blue-600">
        <UsersRound size={20} />
        {!isCollapsed && t('partners')}
      </Link>
      <Link href="/services" className="mb-4 flex items-center gap-2 hover:text-blue-600">
        <PersonStanding size={20} />
        {!isCollapsed && t('volunteers')}
      </Link>

      {/* ✅ Bouton Users visible seulement si adGroupsFamilies contient 'admin' */}
      {!checkingAuth && hasUserAccess && (
        <Link
          href="/admin/user/getAllUser"
          className="mt-auto flex items-center gap-2 text-white hover:text-blue-100"
        >
          <UsersRound size={20} />
          {!isCollapsed && 'Users'}
        </Link>
      )}
    </aside>
  )
}