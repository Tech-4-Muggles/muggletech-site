/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,                // ✅ ensures images are served directly (no optimizer)
    formats: ['image/avif', 'image/webp'], // ✅ allows modern formats if present
    minimumCacheTTL: 60,              // ✅ helps browsers cache static assets properly
  },
};

export default nextConfig;