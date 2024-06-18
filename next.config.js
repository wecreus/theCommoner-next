// @ts-check

/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack']
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    additionalData: `@import "mixins"; @import "variables";`,
  },
};


