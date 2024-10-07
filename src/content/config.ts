import { defineCollection, z } from "astro:content";

const booksCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        color: z.string(),
        readtime: z.number(),
        description: z.string(),
        buy: z.object({
            spain: z.string().url(),
            usa: z.string().url(),
        }),
    }),
});

export const collections = {
    books: booksCollection,
};
