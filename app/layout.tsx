import './globals.css'
import { getMessagesAndLocale } from '../i18n/request'
import IntlProviderWrapper from '../components/IntlProviderWrapper'
import LayoutWrapper from '../components/LayoutWrapper'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { locale, messages } = await getMessagesAndLocale()

  return (
    <html lang={locale}>
      <body>
        <IntlProviderWrapper locale={locale} messages={messages}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </IntlProviderWrapper>
      </body>
    </html>
  )
}
