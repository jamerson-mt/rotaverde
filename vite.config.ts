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
      'manager': path.resolve(__dirname, './src/domains/active/manager'),
      'auth': path.resolve(__dirname, './src/domains/auth'),
      'portuguese': path.resolve(__dirname, './src/domains/portuguese'),
      'reasoning': path.resolve(__dirname, './src/domains/reasoning'),
      'teacher': path.resolve(__dirname, './src/domains/teacher'),
      'technology': path.resolve(__dirname, './src/domains/technology'),
      'user': path.resolve(__dirname, './src/domains/active/user'),
    },
  },

  server: {
    proxy: {
      '/api': {
        target: 'https://idipibex.online/api/',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})

