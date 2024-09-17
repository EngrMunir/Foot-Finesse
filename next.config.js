/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images :{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "*",
                port: "",
                pathname:"/**"
            }
        ]
    }
};
module.exports = {
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  }

export default nextConfig;