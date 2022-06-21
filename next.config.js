/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  async headers() {
    return [
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, max-age=0, must-revalidate'
          }
        ]
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
