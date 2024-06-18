// @ts-check

/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: [
            {
              loader: "@svgr/webpack",
              // https://stackoverflow.com/a/77957478/10783280
              options: {
                svgoConfig: {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
          as: "*.js",
        },
      },
    },
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,

      use: {
        loader: "@svgr/webpack",
        // https://stackoverflow.com/a/77957478/10783280
        options: {
          svgoConfig: {
            plugins: [
              {
                name: "preset-default",
                params: {
                  overrides: {
                    removeViewBox: false,
                  },
                },
              },
            ],
          },
        },
      },
    });

    return config;
  },

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    additionalData: `@import "mixins"; @import "variables";`,
  },
};
