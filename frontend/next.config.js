/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "test",
            value: "from next",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: "/:path*",
        },
        {
          source: "/mvc/:path*",
          destination: "http://localhost:8080/:path*",
        },
        {
          source: "/rest/:path*",
          destination: "http://localhost:8080/rest/:path*",
        },
        {
          source: "/css/:path*",
          destination: "http://localhost:8080/css/:path*",
        },
        {
          source: "/js/:path*",
          destination: "http://localhost:8080/js/:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
