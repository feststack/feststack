'use client'

import { useState, useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useAuth } from '../hooks/useProtectedPage'
import TopNavbar from './user/TopNavbar'
import Sidebar from './user/Sidebar'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { userEmail } = useAuthContext()
  const [authKey, setAuthKey] = useState(0)

  useEffect(() => {
    setAuthKey(prev => prev + 1)
  }, [userEmail])

  return <InnerLayout key={authKey}>{children}</InnerLayout>
}


function InnerLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const [isCollapsed, setIsCollapsed] = useState(false)

  if (loading) return <div>Chargement...</div>
  if (!user) return <>{children}</>

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/backgrounds/main_background.jpg)' }}
    >
      <TopNavbar />
      <div className="flex">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <main
          className="flex-1 transition-all duration-200"
          style={{ marginLeft: isCollapsed ? '4rem' : '14rem' }}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
