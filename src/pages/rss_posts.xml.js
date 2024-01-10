import rss, {
    pagesGlobToRssItems
} from '@astrojs/rss';
// https://docs.astro.build/en/guides/rss/#generating-itemseG stomlist of `<item>`s in output xml
import { getCollection } from "astro:content";

// was export const get = () => rss({})
export async function GET() {
    let posts = await getCollection('posts');
    let installPost = posts.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/apps/posts/${post.slug}/`,
    }));
    // https://stackoverflow.com/a/171256/9079640
    return rss({
        // `<title>` field in output xml
        title: "Perkedel NTLF+ASTR | RSS Blog",
        // `<description>` field in output xml
        description: 'Perkedel Technologies Division NTLF+ASTR. Our RSS Blog feeds',
        // base URL for RSS <item> links
        // SITE will use "site" from your project's astro.config.
        site: import.meta.env.SITE,
        // list of `<item>`s in output xml
        // simple example: generate items for every md file in /src/pages
        // see "Generating items" section for required frontmatter and advanced use cases
        //items: import.meta.glob('./**/*.mdx'),
        items: installPost,
        // (optional) inject custom xml
        customData: `
            <language>en-us</language>
            <copyright>© Perkedel Technologies, Some Rights Reserved</copyright>
            <category>Technology</category>
            <image>
                <url>${import.meta.env.SITE}/assets/img/perkedelbannerrender4KDCI.png</url>
                <title>Perkedel NTLF+ASTR</title>
                <link>${import.meta.env.SITE}</link>
            </image>
            <generator>@astrojs/rss</generator>
            `,
        // stylesheet: '/rss/styles.xsl',
        stylesheet: '/rss-styles.xsl',
    });

    // argh screw this, maybe we should make dedicated rss for now?
}
