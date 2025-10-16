/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // makes a static /out folder
  images: { unoptimized: true } // required for Hostinger static hosting
};

export default nextConfig;