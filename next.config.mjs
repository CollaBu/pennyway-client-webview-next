/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        });
        return config;
      },
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
};

export default nextConfig;
