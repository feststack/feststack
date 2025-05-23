'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const t = useTranslations('HomePage');
  const gt = useTranslations('GlobalTranslation');

  const [langOpen, setLangOpen] = useState(false);

  // Après login réussi (dans LoginPage par ex.)
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (res.ok) {
      const userInfoRes = await fetch('/api/user/me', {
        headers: {
          'x-user-email': email,
        },
      });
      const userInfo = await userInfoRes.json();
  
      // Normaliser languageCode
      let locale = userInfo.languageCode;
      if (locale === 'français' || locale === 'fr-FR') {
        locale = 'fr';
      } else if (locale === 'anglais' || locale === 'en-US') {
        locale = 'en';
      }
      localStorage.setItem('userEmail', email);
  
      document.cookie = `NEXT_LOCALE=${locale}; path=/`;
  
      router.push('/user/userHome');
    } else {
      const data = await res.json();
      setError(data.message || 'Échec de l’authentification');
    }
  };
  

  const changeLang = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/`;
    router.refresh(); 
    setLangOpen(false);
  };

  const toggleLangMenu = () => {
    setLangOpen((open) => !open);
  };

  const closeLangMenu = () => {
    setLangOpen(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 relative">
      <div className="absolute top-4 right-4">
        <div className="relative">
          <button
            onClick={toggleLangMenu}
            className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-300"
            aria-haspopup="true"
            aria-expanded={langOpen}
          >
            🌐 Language
          </button>

          {langOpen && (
            <div
              onMouseLeave={closeLangMenu}
              className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-10"
              style={{ pointerEvents: 'auto' }}
            >
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
      </div>

      <h1 className="absolute top-10 text-4xl font-extrabold text-gray-800">
        {t('title')} {gt('app-name')}
      </h1>

      <form onSubmit={handleLogin} className="text-gray-700 bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">{t('sub-title')}</h2>

        {error && <div className="text-red-600 mb-4">{error}</div>}

        <div className="mb-4">
          <label className="block text-gray-700">{t('login')}</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">{t('password')}</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          {t('button')}
        </button>
      </form>
    </div>
  );
}