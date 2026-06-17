# michaelvanhorn.me

Michael Van Horn's personal portfolio — the human side of AI in the workplace. HRD research, built projects, and writing on AI adoption and job stress.

## Stack

- [Astro 6](https://astro.build) — static site generation (no client JS framework)
- Content collections for `work` and `writing` entries (Markdown + typed frontmatter)
- Deployed on [Vercel](https://vercel.com)

## Commands

All commands run from the project root:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the local dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## Adding content

Content is driven by two collections defined in `src/content.config.ts`.

### Add a work entry

Create a Markdown file in `src/content/work/`. Frontmatter shape:

```yaml
---
title: Project Name
role: Co-founder & CEO
dates: 2026–present
order: 1            # sort order in the work list (lower = first)
summary: One-line description shown on cards and the detail header.
status: Active      # optional badge text
links:              # optional
  - label: Visit site
    url: https://example.com
draft: false        # optional; true hides it from the build
---

Markdown body for the project detail page.
```

The page is served at `/work/<filename>`.

### Add a writing entry

Create a Markdown file in `src/content/writing/`. Frontmatter shape:

```yaml
---
title: Post title
date: 2026-05-20            # YYYY-MM-DD
dek: Optional one-line summary shown in lists and as the meta description.
tags: ["AI", "job stress"] # optional
draft: false               # optional; true hides it from the build
---

Markdown body for the post.
```

The post is served at `/writing/<filename>`.
