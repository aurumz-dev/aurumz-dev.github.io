import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://aurumz-dev.github.io',
  base: '/',
  integrations: [ preact() ],
});
