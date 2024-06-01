import pkg from "next";
const { default: NextConfig } = pkg;
import runtimeCaching from "next-pwa/cache.js";
import withPWA from "next-pwa";

/** @type {NextConfig} */
const nextConfig = {};

const enhancedNextConfig = withPWA({
  ...nextConfig,
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
});

export default enhancedNextConfig;
