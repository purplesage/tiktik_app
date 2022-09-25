/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["w7.pngwing.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
