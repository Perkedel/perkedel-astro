// https://docs.astro.build/en/guides/content-collections/#migrating-from-file-based-routing
// Import utilities from `astro:content`
import { z, reference, defineCollection } from "astro:content";
import { rssSchema } from '@astrojs/rss';
// Define a schema for each collection you'd like to validate.
const postsCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string().optional(),
      author: z.string().default('Anonymous'),
      image: z.object({
        url: z.string(),
        alt: z.string().default('a thumbnail image'),
      }).optional(),
      relatedPosts: z.array(reference('posts')).optional(),
      tags: z.array(z.string()).optional(),
      footnote: z.string().optional(),
      isNSFW: z.boolean(),
      nsfw: z.boolean().default(false).optional(),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};
