import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'public': path.resolve(__dirname, './public'),
      'img': path.resolve(__dirname, './public/img'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
