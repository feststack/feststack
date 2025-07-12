import { cookies } from 'next/headers';

export async function getMessagesAndLocale() {
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'en';

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: 'Europe/Paris',
  };
}

// export const defaultTimeZone = 'Europe/Paris';