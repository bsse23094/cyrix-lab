import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cyrix-lab",
  assetPrefix: "/cyrix-lab/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
