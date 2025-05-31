'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useGraphicTheme } from '@/hooks/useGraphicTheme'
import { useAuth } from '@/hooks/useProtectedPage'
import {
  ChevronDown,
  ChevronRight,
  UserRoundPen,
  PersonStanding,
  UsersRound,
  KeyboardMusic,
  Forklift,
  Menu,
  ArrowLeftFromLine,
} from 'lucide-react'

type SidebarProps = {
  isCollapsed: boolean
  setIsCollapsed: (val: boolean) => void
}

type SidebarButtonProps = {
  children: React.ReactNode
  icon: React.ReactNode | null
  id: string
  href?: string
  onClick?: () => void
  isActive: boolean
  className?: string
  isCollapsed: boolean
  styles: {
    bgActive: string
    textActive: string
    bgInactive?: string
    textInactive: string
    bgHover: string
    textHover: string
  }
}

function SidebarButton({
  children,
  icon,
  id,
  href,
  onClick,
  isActive,
  className = '',
  isCollapsed,
  styles,
}: SidebarButtonProps) {
  const [hovered, setHovered] = useState(false)

  const style = isActive
    ? { backgroundColor: styles.bgActive, color: styles.textActive }
    : hovered
    ? { backgroundColor: styles.bgHover, color: styles.textHover }
    : { backgroundColor: styles.bgInactive, color: styles.textInactive }

  const commonProps = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style,
    className: `flex items-center gap-2 rounded-md px-2 py-1 cursor-pointer transition-colors duration-200 ${className}`,
    onClick,
  }

  if (href) {
    return (
      <Link href={href} {...commonProps}>
        {icon}
        {!isCollapsed && children}
      </Link>
    )
  } else {
    return (
      <button type="button" {...commonProps}>
        {icon}
        {!isCollapsed && children}
      </button>
    )
  }
}

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname()
  const gt = useTranslations('GlobalTranslation')
  const { theme, loading: loadingTheme } = useGraphicTheme()
  const { user, loading } = useAuth()

  const initialActiveTab = pathname.includes('/admin/user')
    ? 'users'
    : pathname.includes('/artist/artistHome')
    ? 'artist'
    : pathname.includes('/technic')
    ? 'technic'
    : ''

  const [isArtistMenuOpen, setIsArtistMenuOpen] = useState(false)
  const [isTechnicMenuOpen, setIsTechnicMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<string>(initialActiveTab)
  const [activeSubTab, setActiveSubTab] = useState<string>('')

  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

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
    } else if (pathname.includes('adGroup/adGroupManagement')) {
      setActiveTab('adGroup')
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

  const handleSelectTab = (tabName: string) => {
    setActiveTab(tabName)
  }

  const canReadUsers = ['admin', 'manager'].some(group =>
    user?.adGroupAccess?.[group]?.includes('read')
  )

  const canReadAdGroup = ['admin', 'manager'].some(group =>
    user?.adGroupAccess?.[group]?.includes('read')
  )

  const styles = {
    bgActive: theme?.accentHover || '#2563eb',
    textActive: theme?.textPrimary || '#ffffff',
    bgInactive: undefined,
    textInactive: theme?.textPrimary
      ? theme.textPrimary + '88'
      : '#d1d5db',
    bgHover: theme?.accentHover || '#bfdbfe',
    textHover: theme?.textPrimary || '#1e40af',
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
      {(loading || loadingTheme || !user) ? (
        <p>Chargement...</p>
      ) : (
        <>
          <SidebarButton
            id="toggleSidebar"
            icon={isCollapsed ? <Menu size={20} /> : <ArrowLeftFromLine size={20} />}
            isActive={false}
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`${isCollapsed ? 'self-center mb-6' : 'self-end mb-6'} text-blue-900`}
            isCollapsed={isCollapsed}
            styles={styles}
          >
            { '' }
          </SidebarButton>

          <div className="flex flex-col flex-grow overflow-auto">
            {/* Menu Artistes */}
            <div className="mb-4">
              <div
                className="flex items-center justify-between cursor-pointer rounded-md px-2 py-1"
                onClick={() => {
                  setIsArtistMenuOpen(!isArtistMenuOpen)
                  handleSelectTab('artist')
                  setActiveSubTab('')
                  setIsTechnicMenuOpen(false)
                }}
                onMouseEnter={() => setHoveredButton('artist')}
                onMouseLeave={() => setHoveredButton(null)}
                style={
                  activeTab === 'artist' || activeSubTab.startsWith('artist')
                    ? { backgroundColor: styles.bgActive, color: styles.textActive }
                    : hoveredButton === 'artist'
                    ? { backgroundColor: styles.bgHover, color: styles.textHover }
                    : { backgroundColor: styles.bgInactive, color: styles.textInactive }
                }
              >
                <Link
                  href="/artist/getAllArtist"
                  className={`flex items-center w-full ${isCollapsed ? 'justify-center' : 'gap-2'}`}
                  onClick={e => {
                    e.preventDefault()
                    handleSelectTab('artist')
                    setIsArtistMenuOpen(true)
                    setIsTechnicMenuOpen(false)
                    setActiveSubTab('')
                  }}
                >
                  <UserRoundPen size={20} />
                  {!isCollapsed && gt('artiststicProduction')}
                </Link>
                {!isCollapsed && (isArtistMenuOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
              </div>

              {isArtistMenuOpen && !isCollapsed && (
                <div className="ml-6 mt-2 flex flex-col space-y-1 text-sm" style={{ color: styles.textInactive }}>
                  {['artist_create', 'artist_managements', 'artist_artistHome'].map(sub => {
                    const labelKey =
                      sub === 'artist_create'
                        ? 'contracts'
                        : sub === 'artist_managements'
                        ? 'artistManagements'
                        : 'artist'
                    return (
                      <SidebarButton
                        key={sub}
                        id={sub}
                        icon={null}
                        isActive={activeSubTab === sub}
                        href={`/${sub.replace('_', '/')}`}
                        onClick={() => setActiveSubTab(sub)}
                        className="ml-2"
                        isCollapsed={isCollapsed}
                        styles={styles}
                      >
                        {gt(labelKey)}
                      </SidebarButton>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Technique */}
            <div className="mb-4">
              <div
                className="flex items-center justify-between cursor-pointer rounded-md px-2 py-1"
                onClick={() => {
                  setIsTechnicMenuOpen(!isTechnicMenuOpen)
                  handleSelectTab('technic')
                  setActiveSubTab('')
                  setIsArtistMenuOpen(false)
                }}
                onMouseEnter={() => setHoveredButton('technic')}
                onMouseLeave={() => setHoveredButton(null)}
                style={
                  activeTab === 'technic' || activeSubTab.startsWith('technic')
                    ? { backgroundColor: styles.bgActive, color: styles.textActive }
                    : hoveredButton === 'technic'
                    ? { backgroundColor: styles.bgHover, color: styles.textHover }
                    : { backgroundColor: styles.bgInactive, color: styles.textInactive }
                }
              >
                <Link
                  href="/technic/technicHome"
                  className={`flex items-center w-full ${isCollapsed ? 'justify-center' : 'gap-2'}`}
                  onClick={e => {
                    e.preventDefault()
                    handleSelectTab('technic')
                    setIsTechnicMenuOpen(true)
                    setIsArtistMenuOpen(false)
                    setActiveSubTab('')
                  }}
                >
                  <KeyboardMusic size={20} />
                  {!isCollapsed && gt('technics')}
                </Link>
                {!isCollapsed && (isTechnicMenuOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
              </div>

              {isTechnicMenuOpen && !isCollapsed && (
                <div className="ml-6 mt-2 flex flex-col space-y-1 text-sm" style={{ color: styles.textInactive }}>
                  <SidebarButton
                    id="technic_technicHome"
                    icon={null}
                    href="/technic/technicHome"
                    isActive={activeSubTab === 'technic_technicHome'}
                    onClick={() => setActiveSubTab('technic_technicHome')}
                    isCollapsed={isCollapsed}
                    styles={styles}
                  >
                    {gt('technicHome')}
                  </SidebarButton>
                </div>
              )}
            </div>
          </div>

          {/* Boutons collés en bas */}
          <div className="mt-auto flex flex-col">
            {canReadUsers && (
              <SidebarButton
                id="users"
                icon={<UsersRound size={20} />}
                href="/admin/user"
                isActive={activeTab === 'users'}
                onClick={() => {
                  handleSelectTab('users')
                  setIsArtistMenuOpen(false)
                  setIsTechnicMenuOpen(false)
                  setActiveSubTab('')
                }}
                isCollapsed={isCollapsed}
                styles={styles}
                className="mb-2"
              >
                {!isCollapsed && gt('users')}
              </SidebarButton>
            )}

            {canReadAdGroup && (
              <SidebarButton
                id="adGroup"
                icon={<PersonStanding size={20} />}
                href="/adGroup/adGroupManagement"
                isActive={activeTab === 'adGroup'}
                onClick={() => {
                  handleSelectTab('adGroup')
                  setIsArtistMenuOpen(false)
                  setIsTechnicMenuOpen(false)
                  setActiveSubTab('')
                }}
                isCollapsed={isCollapsed}
                styles={styles}
              >
                {!isCollapsed && gt('adGroups')}
              </SidebarButton>
            )}
          </div>
        </>
      )}
    </aside>
  )
}
