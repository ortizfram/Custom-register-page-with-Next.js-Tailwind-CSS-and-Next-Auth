/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media.graphassets.com",
      // google avatar
      "lh3.googleusercontent.com",
      // twitter avatar
      "pbs.twimg.com",
      // github avatar
      "avatars.githubusercontent.com",
      // email avatar...
    ],
  },
};
module.exports = nextConfig;
