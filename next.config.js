module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'popup.yeastyboysbread.com',
            },
          ],
          destination: '/popup/:path*',
        },
      ],
    };
  },
};
