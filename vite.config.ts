// vite.config.ts
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), viteReact(), tsconfigPaths()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  server: {
    host: "0.0.0.0",
  },
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
});
