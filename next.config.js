/** @type {import('next').NextConfig} */
const pathPrefix = process.env.NODE_ENV === 'production'
  ? '/portfolio'
  : '';

const nextConfig = {
    output: "export",
    assetPrefix: pathPrefix,
    env: {
        pathPrefix,
    },
};

module.exports = nextConfig
