import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Deployed to https://ruwan97.github.io/My-Portfolio/ (GitHub Pages project site).
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/My-Portfolio/',
})
