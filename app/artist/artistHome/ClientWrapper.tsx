'use client'

import { useState } from 'react'
import ArtistHomePage from '../../../components/artist/ArtistHomePage'
import TopNavbar from '../../../components/user/TopNavbar'
import Sidebar from '../../../components/user/Sidebar'

export default function ClientWrapper() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url(/images/backgrounds/main_background.jpg)',
      }}
      >
      <TopNavbar />
      <div className="flex">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <main
          className="flex-1 transition-all duration-200"
          style={{ marginLeft: isCollapsed ? '4rem' : '14rem' }}
        >
          <ArtistHomePage />
        </main>
      </div>
    </div>
  )
}
