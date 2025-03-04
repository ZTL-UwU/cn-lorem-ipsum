import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

import path from 'node:path';
import autoprefixer from 'autoprefixer';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
