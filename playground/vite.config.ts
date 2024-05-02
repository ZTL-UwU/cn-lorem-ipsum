import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

import path from 'node:path';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
});
