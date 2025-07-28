/** @type {import('@remix-run/dev').AppConfig} */
export default {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "functions/_worker.js", // ✅ required for SSR on Cloudflare Pages
  server: "./server.js", // use this entrypoint
};
