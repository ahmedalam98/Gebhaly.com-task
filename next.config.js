/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

module.exports = {
  // add the domain of fakestoreAPI images to the domains array
  images: {
    domains: ["fakestoreapi.com"],
  },
  nextConfig,
};
