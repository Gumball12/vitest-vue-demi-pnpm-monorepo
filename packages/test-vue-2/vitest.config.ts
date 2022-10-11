import { defineConfig } from 'vitest/config';
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig({
  plugins: [createVuePlugin()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.ts',
  },
});
