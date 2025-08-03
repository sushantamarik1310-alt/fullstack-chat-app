import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // <-- ✅ Add this!

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  root: 'frontend', // <== points to frontend
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:5001', // <== your backend port
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './frontend/src'), // ✅ works now
    },
  },
});
