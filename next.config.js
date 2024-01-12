/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_CONFIG_DATA_URL],
  },
  i18n,
};

module.exports = nextConfig;
