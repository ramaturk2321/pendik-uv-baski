import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const hizmetler = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/hizmetler' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroDesc: z.string(),
    order: z.number(),
    icon: z.string(),
    shortDesc: z.string(),
    features: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      desc: z.string(),
    })),
    process: z.array(z.object({
      step: z.string(),
      title: z.string(),
      desc: z.string(),
    })),
    useCases: z.array(z.string()),
    faq: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })),
  }),
});

const projeler = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projeler' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    images: z.array(z.string()).optional(),
    material: z.string(),
    date: z.string(),
    order: z.number().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    image: z.string(),
    category: z.string(),
    date: z.string(),
    author: z.string().default('Pendik UV Baskı'),
    published: z.boolean().default(true),
  }),
});

export const collections = { hizmetler, projeler, blog };
