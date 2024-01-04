/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.externals.push("pino-pretty", "lokijs", "encoding");
        return config;
    },
    env: {
        BASEURL: process.env.BASEURL,
        PROJECTID: process.env.PROJECTID,
    },
};

module.exports = nextConfig;
