import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import image from '@astrojs/image';
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://perkedel.netlify.app',
  integrations: [mdx(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap(), prefetch(), partytown()]
});