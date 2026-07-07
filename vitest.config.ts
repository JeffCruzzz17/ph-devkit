import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@ph-devkit/core': fileURLToPath(new URL('./packages/core/src/index.ts', import.meta.url)),
      '@ph-devkit/react': fileURLToPath(new URL('./packages/react/src/index.ts', import.meta.url))
    }
  },
  test: {
    environment: 'jsdom',
    globals: false,
    include: ['packages/**/*.test.{ts,tsx}', 'website/src/**/*.test.{ts,tsx}'],
    setupFiles: ['./test/setup.ts']
  }
});
