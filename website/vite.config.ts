import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig({

  // enable this after adding wpctf.it to /etc/host
  // run sudo npm run dev

/*    server: {
    host: '0.0.0.0',
    port: 80
  },*/
  plugins: [
    vue(),
    //VueDevTools(),
    wasm(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: "ES2022",
  },
})
