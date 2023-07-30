import { defineConfig } from "vite";
import legacy from '@vitejs/plugin-legacy'
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid(), legacy({ targets: ['Chrome 50']})],
  build: {
    outDir: "dist/vite-solid",
  },
  base: "./",
  server: {
    port: 3000,
  },
});
