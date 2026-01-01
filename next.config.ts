import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: [
            "encrypted-tbn0.gstatic.com",
            "yt3.googleusercontent.com",
            "i.namu.wiki",
            "an2-img.amz.wtchn.net",
            "www.wishbucket.io",
            "mblogthumb-phinf.pstatic.net",
            "encrypted-tbn0.gstatic.com",
            "media.bunjang.co.kr",
            "biz.chosun.com",
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
    output: "standalone",
};

export default nextConfig;
