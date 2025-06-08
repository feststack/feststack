import { NextIntlClientProvider } from 'next-intl';
import nextIntlConfig from '../../next-intl.config.js';
import type { ReactNode } from 'react';
import Header from '../../components/navbar/Header';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className="relative min-h-screen">
        {/* Vidéo en arrière-plan */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/bg/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay optionnel pour améliorer lisibilité */}
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 -z-5" />

        {/* Contenu au-dessus */}
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          timeZone={nextIntlConfig.timezone}
        >
          <Header currentLocale={locale} />
          <main className="relative z-10">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
