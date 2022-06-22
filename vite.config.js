import { defineConfig } from 'vite';

export default defineConfig({
  // ...
  root: process.cwd(),
  assetsInclude: ['**/*.psd'],
});
