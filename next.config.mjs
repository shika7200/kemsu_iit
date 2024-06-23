/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
  images: {
    domains: ['mats-kemsu.pockethost.io'],
  },
};

export default nextConfig;