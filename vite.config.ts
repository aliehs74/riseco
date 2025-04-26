import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.{test,spec,stories}.{ts,tsx}'],
      outDir: 'dist'
    })
  ],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}']
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Riseco',
      fileName: (format) => `riseco.${format}.js`
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.names.includes('style')) return 'customBtnStyle.css';
          return assetInfo.names.join(',');
     },
  
      }
    }
  }
})