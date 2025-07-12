'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type AuthContextType = {
  userEmail: string | null
  setUserEmail: (email: string | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userEmail, setUserEmail] = useState<string | null>(null)

  useEffect(() => {
    const email = localStorage.getItem('userEmail')
    if (email) setUserEmail(email)
  }, [])

  return (
    <AuthContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuthContext must be used within AuthProvider')
  return ctx
}
