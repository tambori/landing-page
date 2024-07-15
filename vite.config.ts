import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// image optimization
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";


// path resolution config
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/")
    }
  },
  plugins: [
    TanStackRouterVite(),
    ViteImageOptimizer(),
    react()
  ],
})
