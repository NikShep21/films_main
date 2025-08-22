
import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
 sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
  images: {
    remotePatterns: [new URL('https://image.tmdb.org/t/p/**')],
  },
};

export default nextConfig;