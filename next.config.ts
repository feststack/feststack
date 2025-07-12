import { NextConfig } from 'next';
import { Configuration } from 'webpack'; // 👈 on importe le type Webpack
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config: Configuration): Configuration { // 👈 typage ajouté ici
    config.resolve = {
      ...(config.resolve || {}),
      alias: {
        ...(config.resolve?.alias || {}),
        '@': path.resolve(__dirname),
      },
    };
    return config;
  },
};

export default withNextIntl(nextConfig);
