import LoginClient from './LoginClient'

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function LoginPage({ params }: Props) {
  const resolvedParams = await params;
  return <LoginClient locale={resolvedParams.locale} />;
}

