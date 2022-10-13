/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'files.stripe.com',
    ]
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
