/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/GithubThemedPortfolio/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
