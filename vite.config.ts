import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Deployed to https://ruwan97.github.io (GitHub Pages user site, repo ruwan97/ruwan97.github.io).
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
