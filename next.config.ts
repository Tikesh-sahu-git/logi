import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",   // 🔥 required for GitHub Pages
//   images: {
//     unoptimized: true,
//   },
//   /* config options here */
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

// Get repo name from environment variable
const repoName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split("/")[1]
  : "";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },

  // ✅ Automatically apply basePath only in production
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

module.exports = nextConfig;