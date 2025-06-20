const withMdx = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  pageExtensions: ["tsx", "ts", "mdx", "js", "jsx"]
}

module.exports = withMdx(nextConfig);
