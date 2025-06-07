import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // ✅ Set this to '/' or '/repo-name/' if deploying from GitHub Pages
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://home-services-backend-6uc8.vercel.app/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
