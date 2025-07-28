import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://aurumz-rgb.github.io',
  base: '/',
  integrations: [preact()],
  vite: {
    resolve: {
      alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
      },
    },
  },
});
