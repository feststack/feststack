'use client'

import { useState } from 'react'
import GetAllUsersPage from '../../../../components/user/getAllUsers'
import TopNavbar from '../../../../components/user/TopNavbar'
import Sidebar from '../../../../components/user/Sidebar'

export default function ClientWrapper() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="bg-white min-h-screen">
      <TopNavbar />
      <div className="flex">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <main
          className="flex-1 p-6 pt-13 transition-all duration-200"
          style={{ marginLeft: isCollapsed ? '4rem' : '14rem' }}
        >
          <GetAllUsersPage />
        </main>
      </div>
    </div>
  )
}
