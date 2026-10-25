import type { NextConfig } from "next";
import { SITE_URL } from "./src/app/data/site";

// Old addresses that must forward to the main domain with a permanent redirect.
const LEGACY_HOSTS = ['my-bean-store.vercel.app', 'daugiasi.com.vn'];

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return LEGACY_HOSTS.map((host) => ({
      source: '/:path*',
      has: [{ type: 'host' as const, value: host }],
      destination: `${SITE_URL}/:path*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
