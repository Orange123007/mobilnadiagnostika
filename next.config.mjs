/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  i18n: {
    locales: ['bg', 'en'],
    defaultLocale: 'bg'
  }
};

export default nextConfig;
