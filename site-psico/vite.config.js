import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/site-psico/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
