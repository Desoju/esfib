import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './src',
  publicDir: '../public',
  server: {
    hmr: false,
  },
  build: {
    outDir: '../dist',
    modulePreload: false,
  },
  plugins: [react()],
  css: {
    // Prevent generation of source maps
    devSourcemap: false, // Disable source maps for development
    // You can set extract to false if you want CSS in the JS bundle
    extract: true, // Keep this as true if you want separate CSS files
  },
});
