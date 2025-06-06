/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost" },
      { protocol: "https", hostname: "ap-south-1.graphassets.com" },
      { protocol: "https", hostname: "www.camelodev.tech" },
      { protocol: "https", hostname: "camelodev.tech" },
      { protocol: "https", hostname: "camelodev-portfolio.vercel.app" },
    ],
  },
};

export default nextConfig;
