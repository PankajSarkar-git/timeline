import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // Ensure correct base path
  build: {
    outDir: "dist", // Output directory
  },
  plugins: [react()],
  server: {
    // Allow connections from other devices for testing in WebView
    host: true,
    port: 3000,
    open: true, // Automatically open in browser for testing
    headers: {
      "Access-Control-Allow-Origin": "*", // CORS fix for WebView
    },
  },
  preview: {
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow in preview mode
    },
  },
});
