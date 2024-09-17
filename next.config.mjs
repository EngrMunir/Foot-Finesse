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

export default nextConfig;
