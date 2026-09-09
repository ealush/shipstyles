// GitHub Pages serves the site under /shipstyles, but Vercel serves it at the
// root. Vercel sets VERCEL=1 automatically, so only use the basePath for
// non-Vercel production builds (gh-pages). Dev keeps no basePath.
const basePath =
  process.env.VERCEL || process.env.NODE_ENV !== 'production'
    ? ''
    : '/shipstyles';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath,
  trailingSlash: true,
};

export default nextConfig;
