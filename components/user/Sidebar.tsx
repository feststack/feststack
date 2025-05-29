'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
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

type SidebarProps = {
  isCollapsed: boolean
  setIsCollapsed: (val: boolean) => void
}

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname()
  const t = useTranslations('UserNavbar')

  // Initialise activeTab selon pathname
  const initialActiveTab = pathname.includes('/admin/user') ? 'users' :
                          pathname.includes('/artist/artistHome') ? 'artist' :
                          pathname.includes('/technic') ? 'technic' : ''

  const [isArtistMenuOpen, setIsArtistMenuOpen] = useState(false)
  const [isTechnicMenuOpen, setIsTechnicMenuOpen] = useState(false)

  const [activeTab, setActiveTab] = useState<string>(initialActiveTab)
  const [activeSubTab, setActiveSubTab] = useState<string>('')

  const [hasUserAccess, setHasUserAccess] = useState(false)
  const [checkingAuth, setCheckingAuth] = useState(true)

  const [theme, setTheme] = useState<GraphicTheme | null>(null)

  // Met à jour activeTab et activeSubTab selon pathname à chaque changement
  useEffect(() => {
    if (pathname.includes('/artist/artistHome')) {
      setActiveTab('artist')
      setActiveSubTab('artist_artistHome')
      setIsArtistMenuOpen(true)
      setIsTechnicMenuOpen(false)
    } else if (pathname.includes('/artist/create')) {
      setActiveTab('artist')
      setActiveSubTab('artist_create')
      setIsArtistMenuOpen(true)
      setIsTechnicMenuOpen(false)
    } else if (pathname.includes('/artist/managements')) {
      setActiveTab('artist')
      setActiveSubTab('artist_managements')
      setIsArtistMenuOpen(true)
      setIsTechnicMenuOpen(false)
    } else if (pathname.includes('/admin/user')) {
      setActiveTab('users')
      setActiveSubTab('')
      setIsArtistMenuOpen(false)
      setIsTechnicMenuOpen(false)
    } else if (pathname.includes('/technic')) {
      setActiveTab('technic')
      setActiveSubTab('')
      setIsArtistMenuOpen(false)
      setIsTechnicMenuOpen(true)
    } else {
      setActiveTab('')
      setActiveSubTab('')
      setIsArtistMenuOpen(false)
      setIsTechnicMenuOpen(false)
    }
  }, [pathname])

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

      setHasUserAccess('admin' in adGroupAccess)

      setCheckingAuth(false)
    }

    async function fetchThemeAndConfig() {
      const resConfig = await fetch('/api/appConfig')
      if (!resConfig.ok) return

      const appConfig: AppConfig[] = await resConfig.json()

      const defaultThemeConfig = appConfig.find(c => c.appConfigName === 'default_graphic_theme')
      const defaultThemeName = defaultThemeConfig?.appConfigValue || 'dark_theme'

      const resThemes = await fetch('/api/graphicTheme')
      if (!resThemes.ok) return
      const themes: GraphicTheme[] = await resThemes.json()

      const defaultTheme = themes.find(t => t.graphicThemeName === defaultThemeName)
      if (defaultTheme) setTheme(defaultTheme)
    }

    checkAuth()
    fetchThemeAndConfig()
  }, [])

  const handleSelectTab = (tabName: string) => {
    setActiveTab(tabName)
  }

  return (
    <aside
      style={{
        backgroundColor: theme?.backgroundMain || '#1F2937',
        color: theme?.textPrimary || '#FFFFFF',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
      className={`fixed ${isCollapsed ? 'w-16' : 'w-56'} text-[14px] min-h-screen p-4 pt-20 shadow-inner hidden md:flex flex-col transition-all duration-200`}
    >
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
          className={`flex items-center justify-between cursor-pointer hover:text-blue-600 rounded-md px-2 py-1
            ${(activeTab === 'artist' || activeSubTab.startsWith('artist')) ? 'bg-blue-600 text-white' : ''}`}
          onClick={() => {
            setIsArtistMenuOpen(!isArtistMenuOpen)
            handleSelectTab('artist')
            setActiveSubTab('')
            setIsTechnicMenuOpen(false)
          }}
        >
          <Link
            href="/artist/getAllArtist"
            className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-2'}`}
            onClick={e => {
              e.preventDefault()
              handleSelectTab('artist')
              setIsArtistMenuOpen(true)
              setIsTechnicMenuOpen(false)
              setActiveSubTab('')
            }}
          >
            <UserRoundPen size={20} />
            {!isCollapsed && t('artiststicProduction')}
          </Link>
          {!isCollapsed && (isArtistMenuOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
        </div>
        {isArtistMenuOpen && !isCollapsed && (
          <div className="ml-6 mt-2 flex flex-col space-y-1 text-xs text-blue-800">
            <Link
              href="/artist/create"
              className={`block rounded-md px-2 py-1 cursor-pointer
                ${activeSubTab === 'artist_create' ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}
              onClick={() => setActiveSubTab('artist_create')}
            >
              {t('contracts')}
            </Link>
            <Link
              href="/artist/managements"
              className={`block rounded-md px-2 py-1 cursor-pointer
                ${activeSubTab === 'artist_managements' ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}
              onClick={() => setActiveSubTab('artist_managements')}
            >
              {t('artistManagements')}
            </Link>
            <Link
              href="/artist/artistHome"
              className={`block rounded-md px-2 py-1 cursor-pointer
                ${activeSubTab === 'artist_artistHome' ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}
              onClick={() => setActiveSubTab('artist_artistHome')}
            >
              {t('artist')}
            </Link>
          </div>
        )}
      </div>

      {/* Technique */}
      <div className="mb-4">
        <div
          className={`flex items-center justify-between cursor-pointer hover:text-blue-600 rounded-md px-2 py-1
          ${activeTab === 'technic' ? 'bg-blue-600 text-white' : ''}`}
          onClick={() => {
            setIsTechnicMenuOpen(!isTechnicMenuOpen)
            handleSelectTab('technic')
            setIsArtistMenuOpen(false)
          }}
        >
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={e => {
              e.preventDefault()
              handleSelectTab('technic')
              setIsTechnicMenuOpen(true)
              setIsArtistMenuOpen(false)
            }}
          >
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
      <Link
        href="/services"
        className={`mb-4 flex items-center gap-2 hover:text-blue-600 rounded-md px-2 py-1
          ${activeTab === 'logistics' ? 'bg-blue-600 text-white' : ''}`}
        onClick={() => handleSelectTab('logistics')}
      >
        <Forklift size={20} />
        {!isCollapsed && t('logistics')}
      </Link>
      <Link
        href="/services"
        className={`mb-4 flex items-center gap-2 hover:text-blue-600 rounded-md px-2 py-1
          ${activeTab === 'partners' ? 'bg-blue-600 text-white' : ''}`}
        onClick={() => handleSelectTab('partners')}
      >
        <UsersRound size={20} />
        {!isCollapsed && t('partners')}
      </Link>
      <Link
        href="/services"
        className={`mb-4 flex items-center gap-2 hover:text-blue-600 rounded-md px-2 py-1
          ${activeTab === 'volunteers' ? 'bg-blue-600 text-white' : ''}`}
        onClick={() => handleSelectTab('volunteers')}
      >
        <PersonStanding size={20} />
        {!isCollapsed && t('volunteers')}
      </Link>

      {/* ✅ Bouton Users visible seulement si adGroupsFamilies contient 'admin' */}
      {!checkingAuth && hasUserAccess && (
        <Link
          href="/admin/user/getAllUser"
          className={`mt-auto flex items-center gap-2 text-white hover:text-blue-100 rounded-md px-2 py-1
            ${activeTab === 'users' ? 'bg-blue-600 text-white' : ''}`}
          onClick={() => {
            handleSelectTab('users')
            setActiveSubTab('')
          }}
        >
          <UsersRound size={20} />
          {!isCollapsed && 'Users'}
        </Link>
      )}
    </aside>
  )
}
