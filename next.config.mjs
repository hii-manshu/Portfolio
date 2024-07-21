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
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/hemanshu.vercel\.app\/.*$/, // Adjust the regex for your actual domain
        handler: "NetworkFirst", // Network first strategy for dynamic content
        options: {
          cacheName: "dynamic-content",
          expiration: {
            maxEntries: 50, // Maximum number of cached entries
            maxAgeSeconds: 60 * 60 * 24 * 7, // Cache duration: 1 week
          },
        },
      },
    ],
  },
});
