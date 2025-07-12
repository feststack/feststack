import './globals.css'
import { getMessagesAndLocale } from '../i18n-local/request'
import IntlProviderWrapper from '../components/IntlProviderWrapper'
import LayoutWrapper from '../components/LayoutWrapper'
import { AuthProvider } from '../hooks/useAuthContext'  // <-- ajoute cet import

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { locale, messages } = await getMessagesAndLocale()

  return (
    <html lang={locale}>
      <body>
        <IntlProviderWrapper locale={locale} messages={messages}>
          <AuthProvider>   {/* <-- ajoute ici le AuthProvider */}
            <LayoutWrapper>{children}</LayoutWrapper>
          </AuthProvider>
        </IntlProviderWrapper>
      </body>
    </html>
  )
}
