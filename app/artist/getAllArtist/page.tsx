import { getMessagesAndLocale } from '../../../i18n/request'
import IntlProviderWrapper from '../../../components/IntlProviderWrapper'
import ClientWrapper from './ClientWrapper' // Composant client qui gère le state

export default async function Page() {
  const { locale, messages } = await getMessagesAndLocale()

  return (
    <IntlProviderWrapper locale={locale} messages={messages}>
      <ClientWrapper />
    </IntlProviderWrapper>
  )
}
