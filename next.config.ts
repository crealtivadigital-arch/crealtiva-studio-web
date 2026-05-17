import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.crealtivaestudio.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "crealtivastudio.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
