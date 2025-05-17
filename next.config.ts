const withNextIntl = require('next-intl/plugin')({
  // chemin relatif vers ton fichier request.ts
  request: './i18n/request.ts',
  // optionnel : désactive la détection automatique des locales si tu veux gérer toi-même
  localeDetection: false,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // tes autres configs Next.js
};

module.exports = withNextIntl(nextConfig);
