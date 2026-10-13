import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.postcodelite.com',
  output: 'static',
  integrations: [sitemap()],
  trailingSlash: 'never'
});
