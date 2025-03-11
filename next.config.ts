/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // This replaces the need for 'next export'
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig