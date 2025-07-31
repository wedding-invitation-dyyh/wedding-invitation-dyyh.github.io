import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // ✅ 리포지토리 이름 쓰지 마세요!
  plugins: [react()],
});
