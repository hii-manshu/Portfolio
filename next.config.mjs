import withPWAInit from "@ducanh2912/next-pwa";

/** @type {NextConfig} */
const nextConfig = {};

const withPWA = withPWAInit({
  dest: "public",
});
export default withPWA({
  ...nextConfig,
  dest: "public",
  register: true,
  skipWaiting: true,
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  swMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});
