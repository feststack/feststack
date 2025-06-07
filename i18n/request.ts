export async function getMessagesAndLocale(localeParam?: string) {
  const locale = localeParam || 'en'; // fallback sur 'en' si pas défini

  const messages = (await import(`../messages/${locale}.json`)).default;
  return { locale, messages };
}
