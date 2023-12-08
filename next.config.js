/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["crm.medicomyazilim.com"],
  },
  i18n: {
    locales: ["tr", "en", "de"],
    defaultLocale: "tr",
  },
};

module.exports = nextConfig;
