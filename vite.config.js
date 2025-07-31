// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/wedding-invitation-dyyh.github.io/", // 👈 GitHub Pages용 경로
  plugins: [react()],
});
