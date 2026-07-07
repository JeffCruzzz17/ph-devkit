import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ph-devkit/core': fileURLToPath(new URL('../packages/core/src/index.ts', import.meta.url)),
      '@ph-devkit/react': fileURLToPath(new URL('../packages/react/src/index.ts', import.meta.url))
    }
  },
  server: {
    port: 5173
  }
});
