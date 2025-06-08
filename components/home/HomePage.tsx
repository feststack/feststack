// app/page.tsx (ou pages/index.tsx selon ton projet)

'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function HomePage() {

  const t = useTranslations();

  return (
    <div className="flex items-center justify-center h-screen relative font-mono">
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 bg-zinc-1000/60">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          {t('welcomeTo')} <span className="text-blue-500">FestStack</span>
        </h2>
        <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mb-8">
          {t('appDescription')}
        </p>
        <Link href="/login">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md transition cursor-pointer">
            {t('getStarted')}
          </button>
        </Link>
      </section>
    </div>
  );
}
