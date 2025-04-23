import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig  } from 'vitest/config'

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
  },
  // اضافه کردن تنظیمات بیلد برای حالت لایبرری
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'), // یا 'src/main.tsx' اگر از TS استفاده می‌کنید
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