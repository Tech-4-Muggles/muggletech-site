/** @type {import('next').NextConfig} */
const nextConfig = {
  // standard Next.js output so server actions / API routes can run on Vercel
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    // you can keep this, or remove it if you want Vercel's image optimizer
    unoptimized: true,
  },
  trailingSlash: false,
};
