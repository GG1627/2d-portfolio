import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Add the rule to handle SVG imports using @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // This enables importing SVGs as React components
    });

    return config;
  },
};

export default nextConfig;
