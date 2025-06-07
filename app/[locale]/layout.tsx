import { ReactNode } from 'react';
import { getMessagesAndLocale } from '../../i18n/request';
import IntlProviderWrapper from '../../components/IntlProviderWrapper';
import LayoutWrapper from '../../components/LayoutWrapper';

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale, messages } = await getMessagesAndLocale(params.locale);

  return (
    <html lang={locale}>
      <body>
        <IntlProviderWrapper locale={locale} messages={messages}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </IntlProviderWrapper>
      </body>
    </html>
  );
}
