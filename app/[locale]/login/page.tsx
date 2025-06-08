import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import LoginPage from '@/components/user/LoginPage';
 
export default function HomePage() {
  return <LoginPage />
}