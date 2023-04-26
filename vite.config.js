import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ command, mode }) => ({
  base: command === "serve" ? "" : "/",
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      formats: ["es"],
      entry: path.resolve(__dirname, "src/App.jsx"),
      name: "plugin-twp-cam",
      fileName: "dynamic-component",
    },
  },
  publicDir: "public",
  server: {
    port: 3000,
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(mode),
  },
}));
