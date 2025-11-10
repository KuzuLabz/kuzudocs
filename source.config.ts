import {
  defineCollections,
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections#define-docs
export const docs = defineDocs({
  dir: './content/docs',
  docs: {
    schema: frontmatterSchema.extend({
      platforms: z.array(z.string()).default([]).optional()
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export const blogPosts = defineCollections({
  type: 'doc',
  dir: './content/blog',
  schema: frontmatterSchema.extend({
    date: z.string().date().or(z.date()),
  })
})

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
