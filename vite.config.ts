import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// GitHub project Pages: https://cedroad.github.io/Cedroad/
// Override with VITE_BASE=/ for a custom-domain root (cedroad.com).
export default defineConfig({
  base: process.env.VITE_BASE || '/Cedroad/',
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
        privacy: fileURLToPath(
          new URL('./never-have-i-ever-privacy-policy/index.html', import.meta.url),
        ),
      },
    },
  },
})
