// app/auth/callback/page.tsx — dans l’app cliente

'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) {
      router.push('/login');
      return;
    }

    const loginViaToken = async () => {
      const res = await fetch('/api/auth/token-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      if (res.ok) {
        router.push('/user/userHome');
      } else {
        router.push('/login');
      }
    };

    loginViaToken();
  }, [router, searchParams]);

  return <p className="text-center mt-10">Connexion sécurisée en cours…</p>;
}
