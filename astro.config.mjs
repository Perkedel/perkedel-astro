import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
// import image from '@astrojs/image';
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import partytown from "@astrojs/partytown";
import robotsTxt from 'astro-robots-txt';
// import embeds from 'astro-embed/integration';
import remarkMermaid from 'astro-diagram/remark-mermaid';
import webmanifest from "astro-webmanifest";
import { rssSchema } from '@astrojs/rss';
import { remarkReadingTime } from './remark-reading-time.mjs';

const robotTxtExtraSays = `
# Wello
# Wow
# 
#   ███████████   ████   ████  ████   █  █ ████ ████  ████ █   
#  ██████▒██████  █   █  █     █   █  █ █  █    █   █ █    █   
# █████▒▒▒▒▒█████ ████   ████  ████   ██   ████ █   █ ████ █   
#  ██████▒██████  █      █     █ █    █ █  █    █   █ █    █   
#   ███████████   █      ████  █  █   █  █ ████ ████  ████ ████
#
`

// https://astro.build/config
export default defineConfig({
    site: 'https://perkedel.netlify.app/',
    experimental: {
        // viewTransitions: true,
    },
    // i18n: {
    //     defaultLocale: "en",
    //     locales: ["en", "id"],
    //     routing: {
    //         prefixDefaultLocale: false
    //     },
    //     fallback: {
    //         id: "en"
    //     }
    // },
    base: '/',
    integrations: [
        mdx({

        }),
        // image({
        //     serviceEntryPoint: '@astrojs/image/sharp',
        // }),
        sitemap(),
        prefetch(),
        partytown(),
        robotsTxt({
            sitemap: 'https://perkedel.netlify.app/sitemap-0.xml',
            transform(content) {
                return `# Robots.txt for Perkedel ASTR.\n# use https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme to generate this.\n#by JOELwindows7\n#PerkedelTechnologies\n#GNU AGPL v3\n#\n#${robotTxtExtraSays}\n\n${content}`;
            },
        }),
        // embeds(),
        webmanifest({
            // https://github.com/alextim/astro-lib/tree/main/packages/astro-webmanifest#readme
            /**
             * required
             **/
            name: 'Perkedel ASTR',

            /**
             * optional
             **/
            //icon: 'src/images/your-icon.svg', // source for favicon & icons
            icon: 'public/assets/svg/Perkedel_ASTR_logo.svg', // source for favicon & icons

            short_name: 'Perkedel',
            description: 'Perkedel ASTR+NTLF. Perkedel Technologies Official Website',
            start_url: '/',
            theme_color: '#0000aa',
            background_color: '#000000',
            display: 'standalone',
            lang: 'en-US',
            locales: {
                id: {
                    name: 'Perkedel ASTR',
                    short_name: 'Perkedel',
                    description: 'Perkedel ASTR+NTLF. Website Resmi Perkedel Technologies',
                    lang: 'id-ID',
                    start_url: '/',
                },
            },
        }),
    ],
    markdown: {
        shikiConfig: {
            wrap: true,
        },
        remarkPlugins: [
            // for astro-diagram..
            // remarkGfm,

            remarkMermaid,

            // ...
            remarkReadingTime
        ],
        
    },
    // server:{
    //     headers:{
            
    //     }
    // }
});