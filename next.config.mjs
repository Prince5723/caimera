/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com", 'framerusercontent.com', 'aceternity.com', 'plus.unsplash.com','panels-cdn.imgix.net','images.unsplash.com', 'assets.aceternity.com'],
      },
      eslint: {
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
