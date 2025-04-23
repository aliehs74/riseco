import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({ include: ['src'] }) // This generates TypeScript declaration files
  ],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}']
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // Changed from main.tsx to index.ts
      name: 'Riseco',
      fileName: (format) => `riseco.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})