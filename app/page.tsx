import { getMessagesAndLocale } from '../i18n/request';
import IntlProviderWrapper from '../components/IntlProviderWrapper';
import LoginPage from '../components/user/LoginPage';

export default async function Page() {
  const { locale, messages } = await getMessagesAndLocale();

  return (
    <IntlProviderWrapper locale={locale} messages={messages}>
      <LoginPage />
    </IntlProviderWrapper>
  );
}