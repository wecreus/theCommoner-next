// @ts-check

/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    additionalData: `@import "mixins"; @import "variables";`,
  },
};
