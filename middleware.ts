import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const locales = ['en', 'fr'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Ne pas traiter les fichiers publics (ex: favicon, images)
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }

  // Si le chemin commence déjà par une locale connue, on ne redirige pas
  const pathnameIsLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameIsLocale) {
    return NextResponse.next();
  }

  // Essayer de détecter la langue du navigateur
  const acceptLanguage = request.headers.get('accept-language');
  let locale = defaultLocale;

  if (acceptLanguage) {
    const acceptedLanguages = acceptLanguage.split(',').map((lang) => lang.split(';')[0].trim());
    const matchedLocale = acceptedLanguages.find((lang) =>
      locales.includes(lang.split('-')[0])
    );
    if (matchedLocale) {
      locale = matchedLocale.split('-')[0];
    }
  }

  // Redirection vers la locale détectée
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
  redirectUrl.search = search;

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    /*
     * Appliquer ce middleware sur toutes les routes sauf les fichiers publics et api.
     * Tu peux ajuster le matcher selon tes besoins.
     */
    '/((?!_next|api|favicon.ico).*)',
  ],
};
