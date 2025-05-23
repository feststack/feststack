'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
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

  return (
    <aside className={`fixed ${isCollapsed ? 'w-16' : 'w-56'} text-[14px] min-h-screen bg-blue-300 p-4 pt-20 shadow-inner hidden md:flex flex-col transition-all duration-200`}>
      
      {/* Bouton pour réduire/agrandir la sidebar */}
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

      {/* Autres liens */}
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
    </aside>
  )
}
