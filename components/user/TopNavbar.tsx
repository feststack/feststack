'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

export default function TopNavbar() {
  const t = useTranslations('UserNavbar')
  const router = useRouter()

  const handleLogout = () => {
    // Supprimer l'email de l'utilisateur du stockage local
    localStorage.removeItem('userEmail')
    // Rediriger vers la page d'accueil
    router.push('/')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-primary text-white px-6 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        <Link href="/user/userHome" className="text-2xl font-bold">
          ManaFest
        </Link>
        <button onClick={handleLogout} className="hover:underline">
          {t('signout')}
        </button>
      </div>
    </nav>
  )
}
