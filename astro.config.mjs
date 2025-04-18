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
import yaml from '@rollup/plugin-yaml';

import markdoc from '@astrojs/markdoc';

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
    vite: {
        plugins: [yaml()]
    },
    integrations: [mdx({

    }), // image({
    //     serviceEntryPoint: '@astrojs/image/sharp',
    // }),
    sitemap(), prefetch(), partytown(), robotsTxt({
        sitemap: 'https://perkedel.netlify.app/sitemap-0.xml',
        policy: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: 'GPTBot',
                disallow: ['/',],
            },
            {
                userAgent: 'ChatGPT-User',
                disallow: ['/',],
            },
            {
                userAgent: 'Google-Extended',
                disallow: ['/',],
            },
            {
                userAgent: 'FacebookBot',
                disallow: ['/',],
            },
            {
                userAgent: 'Meta-ExternalFetcher',
                disallow: ['/',],
            },
            {
                userAgent: 'Meta-ExternalAgent',
                disallow: ['/',],
            },
            {
                userAgent: 'Amazonbot',
                disallow: ['/',],
            },
            {
                userAgent: 'Applebot',
                disallow: ['/',],
            },
            {
                userAgent: 'Applebot-Extended',
                disallow: ['/',],
            },
            {
                userAgent: 'OAI-SearchBot',
                disallow: ['/',],
            },
            {
                userAgent: 'PerplexityBot',
                disallow: ['/',],
            },
            {
                userAgent: 'YouBot',
                disallow: ['/',],
            },
            {
                userAgent: 'Omgilibot',
                disallow: ['/',],
            },
            {
                userAgent: 'Bytespider',
                disallow: ['/',],
            },
            {
                userAgent: 'CCBot',
                disallow: ['/',],
            },
            {
                userAgent: 'ClaudeBot',
                disallow: ['/',],
            },
            {
                userAgent: 'Diffbot',
                disallow: ['/',],
            },
            {
                userAgent: 'anthropic-ai',
                disallow: ['/',],
            },
            {
                userAgent: 'Claude-Web',
                disallow: ['/',],
            },
            {
                userAgent: 'cohere-ai',
                disallow: ['/',],
            },
            {
                userAgent: 'Ai2Bot',
                disallow: ['/',],
            },
            {
                userAgent: 'Ai2Bot-Dolma',
                disallow: ['/',],
            },
            {
                userAgent: 'Ai2Bot',
                disallow: ['/',],
            },
            {
                userAgent: 'FriendlyCrawler',
                disallow: ['/',],
            },
            {
                userAgent: 'Ai2Bot',
                disallow: ['/',],
            },
            {
                userAgent: 'img2dataset',
                disallow: ['/',],
            },
            {
                userAgent: 'Scrapy',
                disallow: ['/',],
            },
            {
                userAgent: 'Timpibot',
                disallow: ['/',],
            },
            {
                userAgent: 'Webzio-Extended',
                disallow: ['/',],
            },
            {
                userAgent: 'ICC-Crawler',
                disallow: ['/',],
            },
            {
                userAgent: 'ICC-Crawler',
                disallow: ['/',],
            },
        ],
        transform(content) {
            return `# Robots.txt for Perkedel ASTR.\n# use https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme to generate this.\n#by JOELwindows7\n#PerkedelTechnologies\n#GNU AGPL v3\n#\n#${robotTxtExtraSays}\n\n${content}`;
        },
    }), // embeds(),
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
    }), markdoc()],
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