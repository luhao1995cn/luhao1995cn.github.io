import type { NextConfig } from "next";

const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: configuredBasePath,
  assetPrefix: configuredBasePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
