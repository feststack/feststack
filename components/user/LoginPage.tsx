'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const t = useTranslations();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [langOpen, setLangOpen] = useState(false);

  const changeLang = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/`;
    router.refresh();
    setLangOpen(false);
  };

  const toggleLangMenu = () => setLangOpen(open => !open);
  const closeLangMenu = () => setLangOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Exemples de validation ou appel API
    if (!email || !password) {
      setError(t('login-error') || 'Missing credentials');
      return;
    }

    try {
      // Logique de login (API call ou navigation)
      console.log('Authenticating...', email, password);
      // router.push('/dashboard'); // exemple
    } catch (err) {
      setError(t('login-failed') || 'Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 relative">
      {/* Lang menu
      <div className="absolute top-4 right-4">
        <div className="relative">
          <button
            onClick={toggleLangMenu}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
            aria-haspopup="true"
            aria-expanded={langOpen}
          >
            🌐 Language
          </button>

          {langOpen && (
            <div
              onMouseLeave={closeLangMenu}
              className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-10"
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
      </div> */}

      {/* Title */}
      <h1 className="absolute top-10 text-4xl font-extrabold text-gray-800">
        {t('title')}
      </h1>

      {/* Login form */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">{t('login-title')}</h2>

        {error && <div className="text-red-600 mb-4">{error}</div>}

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            {t('login')}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">
            {t('password')}
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          {t('button')}
        </button>
      </form>
    </div>
  );
}
