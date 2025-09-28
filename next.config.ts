import { url } from "inspector";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images :{
    remotePatterns:[new URL("https://ecommerce.routemisr.com/**/**")]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
   typescript: {
    ignoreBuildErrors: true,
  },
  
};


export default nextConfig;
