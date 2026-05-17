import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Docker/Kubernetes deployment — produces a self-contained server
  output: "standalone",
};

export default nextConfig;
