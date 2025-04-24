import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss()
  ],
  server: {
    open: true,
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['jokenpo-y65v.onrender.com'],
  },
})
