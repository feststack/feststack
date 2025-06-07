import { NextIntlClientProvider } from 'next-intl';
import nextIntlConfig from '../../next-intl.config.js';
import type { ReactNode } from 'react';
import Header from '../../components/navbar/Header'

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>; // ✅ params est désormais un `Promise`
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params; // ✅ on attend la résolution de `params`
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          timeZone={nextIntlConfig.timezone}
        >
          <Header currentLocale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
