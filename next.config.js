/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  async headers() {
    return [
      {
        source: '/images/:image*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000'
          }
        ]
      },
      {
        source: '/fonts/:font*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000'
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
