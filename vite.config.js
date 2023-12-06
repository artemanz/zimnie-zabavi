import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  base: "",
  root: resolve("src"),
  publicDir: resolve("public"),
  build: {
    emptyOutDir: true,
    outDir: resolve("dist"),
  },
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve("src/partials"),
    }),
  ],
});
