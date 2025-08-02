import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  ssr: false,
  /* config options here */
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },

  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ]
  },
};

export default nextConfig;
