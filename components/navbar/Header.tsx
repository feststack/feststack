'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { Languages } from 'lucide-react';
import Link from 'next/link';

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

  const changeLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPathname = segments.join('/');
    const search = searchParams.toString();
    const url = search ? `${newPathname}?${search}` : newPathname;
    router.push(url);
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
    <header className="p-4 bg-zinc-900/70 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between rounded-3xl m-3">
      <Link href="/" className="text-white font-bold text-lg">
        FestStack
      </Link>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-white cursor-pointer"
        >
          <Languages className="w-5 h-5" />
        </button>

        {isOpen && (
          <div
            className="absolute right-0 mt-2 min-w-[10rem] bg-white rounded shadow-lg z-50 overflow-visible pointer-events-auto"
          >
            {Object.entries(LOCALES).map(([locale, { label, flag }]) => (
              <button
                key={locale}
                onClick={() => changeLocale(locale)}
                className={`flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100 cursor-pointer ${
                  locale === currentLocale ? 'bg-gray-200 font-semibold' : ''
                }`}
              >
                <span>{flag}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
