/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_CONFIG_DATA_URL,
      },
    ],
  },
  i18n,
};

module.exports = nextConfig;
