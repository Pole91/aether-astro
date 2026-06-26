import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [],
  server: {
    host: '0.0.0.0',
    port: 4321
  }
});
