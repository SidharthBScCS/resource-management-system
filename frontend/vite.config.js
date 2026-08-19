import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/student": {
        target: "http://localhost:7078",
        changeOrigin: true
      },
      "/faculty": {
        target: "http://localhost:7078",
        changeOrigin: true
      },
      "/course": {
        target: "http://localhost:7078",
        changeOrigin: true
      },
      "/department": {
        target: "http://localhost:7078",
        changeOrigin: true
      },
      "/library": {
        target: "http://localhost:7078",
        changeOrigin: true
      }
    }
  }
});
