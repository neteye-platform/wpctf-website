import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        // Assets under public/ are referenced by absolute URL and must stay
        // runtime URLs. Letting the compiler turn them into imports makes Vite
        // inline small files as data URIs that never invalidate when edited.
        transformAssetUrls: { includeAbsolute: false }
      }
    }),
    wasm(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: ["es2020", "edge88", "firefox78", "chrome87", "safari14"],
  },
})
