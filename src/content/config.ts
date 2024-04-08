// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Define your collection(s)
const portfolioCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    date: z.string(),
    url: z.string().optional(),
    img: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  portfolio: portfolioCollection,
};
