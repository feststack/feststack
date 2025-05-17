import type { NextRequest } from 'next/server';

export function getLocale(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const locale = pathname.split('/')[1];

  if (['en', 'fr'].includes(locale)) {
    return locale;
  }
  return 'fr'; // fallback
}
