import { url } from "inspector";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images :{
    remotePatterns:[new URL("https://ecommerce.routemisr.com/**/**")]
  },
   typescript: {
    // لو فيه أخطاء TypeScript، يتخطاها
    ignoreBuildErrors: true,
  },
    eslint: {
    // يتجاهل أخطاء ESLint
    ignoreDuringBuilds: true,
  },
 
  
};


export default nextConfig;
