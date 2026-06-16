import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
	loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		role: z.string(),
		dates: z.string(),
		order: z.number(),
		summary: z.string(),
		links: z
			.array(
				z.object({
					label: z.string(),
					url: z.string(),
				}),
			)
			.optional(),
		status: z.string().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { work };
