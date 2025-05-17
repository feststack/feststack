import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'fr']
const defaultLocale = 'fr'

export function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl
  const locale = pathname.split('/')[1]

  if (locales.includes(locale)) {
    return NextResponse.next()
  }

  // Rediriger vers la même URL avec la langue par défaut ajoutée
  return NextResponse.redirect(`${origin}/${defaultLocale}${pathname}`)
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|robots.txt).*)'],
}
