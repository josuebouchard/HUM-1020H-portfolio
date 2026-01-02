import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://josuebouchard.github.io',
  base: '/humanities-web-portfolio',
  integrations: [tailwind(), mdx()]
});