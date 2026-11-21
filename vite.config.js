import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' 使用相对路径，保证 dist 可托管在任意路径（CloudStudio / Vercel / Netlify / 子目录）
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
