/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      },
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
};

export default nextConfig;
