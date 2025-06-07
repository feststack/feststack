'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function TopNavbar() {
  const t = useTranslations();
  const router = useRouter();
  const [langOpen, setLangOpen] = useState(false);

  const changeLang = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/`;
    const currentPath = window.location.pathname.replace(/^\/(fr|en)/, '');
    router.push(`/${locale}${currentPath}`);
    setLangOpen(false);
  };  

  return (
    <nav
      className="fixed top-0 left-0 right-0 h-16 px-6 z-50 bg-white flex items-center justify-between shadow"
    >
      <div className="flex items-center space-x-4">
        <Link href="/user/userHome" className="text-xl font-semibold text-gray-800 hover:text-blue-600">
          FestStack
        </Link>
      </div>

      <div className="relative">
        <button
          onClick={() => setLangOpen((prev) => !prev)}
          className="text-sm text-xl px-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          🌐
        </button>

        {langOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-10">
            <button
              onClick={() => changeLang('fr')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              🇫🇷 Français
            </button>
            <button
              onClick={() => changeLang('en')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              🇬🇧 English
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
