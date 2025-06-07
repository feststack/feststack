import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {}, // Objet vide, ou supprime si non utilisé
  },
  // NE PAS mettre la clé i18n ici avec App Router !
};

export default nextConfig;
