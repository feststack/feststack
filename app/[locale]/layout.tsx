import { ReactNode } from 'react'
import { getMessages } from 'next-intl/server'
import IntlProviderWrapper from '../../components/IntlProviderWrapper'
import LayoutWrapper from '../../components/LayoutWrapper'

interface Props {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  const messages = await getMessages({ locale })

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
