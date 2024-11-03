import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Match all domains
      }
    ]},
    experimental: {
      ppr: "incremental",
      after: true // Enable the unstable_after feature
    },
    devIndicators: {
      appIsrStatus: true,
      buildActivity: true,
      buildActivityPosition: "bottom-right"
    },
};

export default nextConfig;
