'use client';

import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations();

  const features = t.raw('about.features.list');
  const featureList = Array.isArray(features) ? features : [];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-justify font-mono">
      <div className="bg-zinc-900/70 backdrop-blur-md p-10 rounded-lg">
        <h2 className="text-4xl font-bold mb-6">{t('about_title')}</h2>
        <p className="mb-6 text-lg leading-relaxed">{t('about_intro')}</p>
      </div>

      <div className="bg-zinc-900/70 backdrop-blur-md p-10 rounded-lg mt-10">
        <h3 className="text-2xl font-semibold mt-8 mb-4">{t('about_goal_title')}</h3>
        <p className="mb-6">{t('about_goal_text')}</p>
      </div>

      <div className="bg-zinc-900/70 backdrop-blur-md p-10 rounded-lg mt-10">
        <h3 className="text-2xl font-semibold mt-8 mb-4">{t('about_features_title')}</h3>
        <ul className="list-disc pl-6 space-y-3">
          {featureList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="bg-zinc-900/70 backdrop-blur-md p-10 rounded-lg mt-10">
        <h3 className="text-2xl font-semibold mt-8 mb-4">{t('about_tech_title')}</h3>
        <p className="mb-6">{t('about_tech_text')}</p>
      </div>

      <div className="bg-zinc-900/70 backdrop-blur-md p-10 rounded-lg mt-10">
        <h3 className="text-2xl font-semibold mt-8 mb-4">{t('about_multilang_title')}</h3>
        <p className="mb-6">{t('about_multilang_text')}</p>
      </div>

      <div className="bg-zinc-900/70 backdrop-blur-md p-10 rounded-lg mt-10">
        <h3 className="text-2xl font-semibold mt-8 mb-4">{t('about_security_title')}</h3>
        <p className="mb-6">{t('about_security_text')}</p>
      </div>

      <div className="bg-zinc-900/70 backdrop-blur-md p-10 rounded-lg mt-10">
        <h3 className="text-2xl font-semibold mt-8 mb-4">{t('about_evolution_title')}</h3>
        <p className="mb-6">{t('about_evolution_text')}</p>
      </div>

      <div className="bg-zinc-900/70 backdrop-blur-md p-10 rounded-lg mt-10">
        <p className="text-xl font-medium">{t('about_cta')}</p>
      </div>
    </div>
  );
}
