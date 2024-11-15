module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5001/api/:path*', // Proxy to backend
      },
    ];
  },
  images: {
    domains: ['img.icons8.com'],  
  },
};
