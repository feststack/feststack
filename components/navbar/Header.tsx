'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import React from 'react';

const AVAILABLE_LOCALES = ['en', 'fr'];

export default function Header({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Trouver l’index de la langue actuelle dans la liste
  const currentIndex = AVAILABLE_LOCALES.indexOf(currentLocale);
  // Basculer vers la langue suivante dans la liste
  const nextLocale = AVAILABLE_LOCALES[(currentIndex + 1) % AVAILABLE_LOCALES.length];

  const changeLocale = () => {
    // Reconstruire l’URL avec la nouvelle locale
    // On remplace la partie /[locale]/ par /nextLocale/
    // Exemple: /en/dashboard -> /fr/dashboard
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    const newPathname = segments.join('/');

    // Conserver les query params si besoin
    const search = searchParams.toString();
    const url = search ? `${newPathname}?${search}` : newPathname;

    router.push(url);
  };

  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <button onClick={changeLocale} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
        Change language ({currentLocale} → {nextLocale})
      </button>
    </header>
  );
}
