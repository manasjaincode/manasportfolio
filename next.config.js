/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['skillicons.dev'], // Your existing domain
  },
  // NEW: Add this line to transpile Swiper modules
  transpilePackages: ['swiper'],
};

module.exports = nextConfig;