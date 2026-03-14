import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/portfolio-minimal" : "",
  assetPrefix: isGitHubPages ? "/portfolio-minimal/" : "",
};

export default nextConfig;
