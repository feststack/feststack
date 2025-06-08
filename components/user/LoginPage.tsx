'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function LoginPage() {
  const t = useTranslations();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError(t('login-error') || 'Missing credentials');
      return;
    }

    try {
      console.log('Authenticating...', email, password);
      // router.push('/dashboard');
    } catch {
      setError(t('login-failed') || 'Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen relative font-mono">
      <div className="relative">
        {/* Border animation */}
        <div className="absolute inset-0 pointer-events-none rounded form-border-animation" />

        {/* Login form */}
        <form
          onSubmit={handleSubmit}
          className="relative bg-zinc-900/70 backdrop-blur-md p-8 rounded shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-white">{t('login-title')}</h2>

          {error && <div className="text-red-600 mb-4">{error}</div>}

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300">
              {t('login')}
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-600 rounded p-2 bg-zinc-800 text-white"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-300">
              {t('password')}
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-gray-600 rounded p-2 bg-zinc-800 text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 cursor-pointer"
          >
            {t('button')}
          </button>
        </form>
      </div>
    </div>
  );
}
