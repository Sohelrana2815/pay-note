import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Matches any hostname
        port: "",
        pathname: "/**", // Matches any path
      },
    ],
  },
};

export default nextConfig;
