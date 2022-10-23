import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
// import image from '@astrojs/image';
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import partytown from "@astrojs/partytown";
import robotsTxt from 'astro-robots-txt';
import embeds from 'astro-embed/integration';
import remarkMermaid from 'astro-diagram/remark-mermaid';

// https://astro.build/config
export default defineConfig({
    site: 'https://perkedel.netlify.app',
    integrations: [mdx(),
        // image({
        //     serviceEntryPoint: '@astrojs/image/sharp',
        // }),
        sitemap(), prefetch(), partytown(), embeds(), robotsTxt()
    ],
    markdown: {
        remarkPlugins: [
            // for astro-diagram..
            // remarkGfm,

            remarkMermaid,

            // ...
        ],
    },
    legacy: {
        astroFlavoredMarkdown: false,
    },
});