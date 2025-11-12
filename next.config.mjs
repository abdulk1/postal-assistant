/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tell Next to produce pre-rendered static files in ./out
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Optional if deploying behind a subpath/reverse proxy:
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
