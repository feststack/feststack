'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { Languages } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const LOCALES: Record<string, { label: string; flag: string }> = {
  en: { label: 'English', flag: '🇬🇧' },
  fr: { label: 'Français', flag: '🇫🇷' },
  es: { label: 'Español', flag: '🇪🇸' },
  de: { label: 'Deutsch', flag: '🇩🇪' },
};

export default function Header({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  // const changeLocale = (newLocale: string) => {
  //   const segments = pathname.split('/');
  //   segments[1] = newLocale;
  //   const newPathname = segments.join('/');
  //   const search = searchParams.toString();
  //   const url = search ? `${newPathname}?${search}` : newPathname;
  //   router.push(url);
  //   setIsOpen(false);
  // };

  const changeLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPathname = segments.join('/');
    const search = searchParams.toString();
    const url = search ? `${newPathname}?${search}` : newPathname;
    window.location.href = url; // Rechargement complet (comme un Ctrl+R)
    setIsOpen(false);
  };  

  // Fermer le menu si clic en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="p-4 bg-zinc-900/70 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between rounded-3xl m-3 font-mono">
      <Link href="/" className="text-lg font-bold">
        FestStack
      </Link>
      <div className='flex items-center'>
        <Link href="/about" className="text-lg px-2 hover:bg-blue-500 rounded-lg">
          {t('aboutTitle')}
        </Link>
        <Link href="/login" className="text-lg px-2 hover:bg-blue-500 rounded-lg">
          {t('loginTitle')}
        </Link>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 cursor-pointer hover:bg-blue-500 rounded-lg p-2"
          >
            <Languages className="w-5 h-5" />
          </button>

          {isOpen && (
            <div
              className="absolute right-0 mt-2 min-w-[10rem] bg-zinc-900/50 rounded shadow-lg z-50 overflow-visible pointer-events-auto"
            >
              {Object.entries(LOCALES).map(([locale, { label, flag }]) => (
                <button
                  key={locale}
                  onClick={() => changeLocale(locale)}
                  className={`flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-blue-500 cursor-pointer rounded ${
                    locale === currentLocale ? 'bg-blue-500/50' : ''
                  }`}
                >
                  <span>{flag}</span>
                  <span>{label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
