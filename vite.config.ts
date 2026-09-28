import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// Custom domain root: cedroad.com/ + cedroad.com/never-have-i-ever/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        nhie: fileURLToPath(new URL('./never-have-i-ever/index.html', import.meta.url)),
        nhieLegacy: fileURLToPath(new URL('./never_have_i_ever/index.html', import.meta.url)),
      },
    },
  },
})
