import rss, {
    pagesGlobToRssItems
} from '@astrojs/rss';
// https://docs.astro.build/en/guides/rss/#generating-itemseG stomlist of `<item>`s in output xml
import { getCollection } from "astro:content";

// was export const get = () => rss({})
export async function GET(context) {
    // let metaGlob = await import.meta.glob('./**/*.mdx');
    let metaGlob = await pagesGlobToRssItems(
        import.meta.glob('./**/*.{md,mdx}'),
    );
    let posts = await getCollection('posts');
    let mergo = {...metaGlob, ... posts};
    let installPost = posts.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/posts/${post.slug}/`,
    }));
    // https://stackoverflow.com/a/171256/9079640
    //let mergen = {...metaGlob,...installPost};
    //let mergen = Object.assign({}, metaGlob, installPost);
    return rss({
        // `<title>` field in output xml
        title: "Perkedel NTLF+ASTR | RSS",
        // `<description>` field in output xml
        description: 'Perkedel Technologies Division NTLF+ASTR. Our RSS feeds',
        // base URL for RSS <item> links
        // SITE will use "site" from your project's astro.config.
        site: import.meta.env.SITE,
        // list of `<item>`s in output xml
        // simple example: generate items for every md file in /src/pages
        // see "Generating items" section for required frontmatter and advanced use cases
        //items: import.meta.glob('./**/*.mdx'),
        items: metaGlob,
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
