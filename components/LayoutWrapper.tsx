'use client'

import { useState, useEffect } from 'react'
import TopNavbar from './navbar/TopNavbar'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [authKey, setAuthKey] = useState(0)

  useEffect(() => {
    setAuthKey(prev => prev + 1)
  }, [])

  return <InnerLayout key={authKey}>{children}</InnerLayout>
}

function InnerLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col">
      <TopNavbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
    </div>
  )
}
