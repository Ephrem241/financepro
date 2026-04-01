/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the project root so Turbopack doesn't pick up a stray
  // package-lock.json higher up in the directory tree.
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
