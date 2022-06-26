import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  // ...
  root: process.cwd(),
  assetsInclude: ["**/*.psd", "**/*.png"],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./src/assets"),
      styled: path.resolve(__dirname, "./src/style"),
      utils: path.resolve(__dirname, "./src/utils"),
    },
  },
});
