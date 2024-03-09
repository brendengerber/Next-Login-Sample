/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACK_END_URL: process.env.BACK_END_URL,
      }
};

export default nextConfig;
