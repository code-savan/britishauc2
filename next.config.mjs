/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        unoptimized: true
    },
    trailingSlash: false,
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/index.html',
            },
            {
                source: '/:path((?!_next|index.html).*)',
                destination: '/index.html',
            },
        ]
    },
};

export default nextConfig;
