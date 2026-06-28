/** @type {import('next').NextConfig} */

// const nextConfig = {
//     turbo: {
//         resolveAlias: {
//             canvas: './empty-module.ts',
//         },
//     },
// };

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        pathname: '/**',
      },
    ],
  },
};


export default nextConfig;
