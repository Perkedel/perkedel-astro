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
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }).optional(),
      relatedPosts: z.array(reference('posts')).optional(),
      tags: z.array(z.string()).optional(),
      isNSFW: z.boolean(),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};
