import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}']
  }
})