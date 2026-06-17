# Portfolio Site (michaelvanhorn.me) Implementation Plan

> **HISTORICAL RECORD, superseded in places.** This is the original 2026-06-16 implementation plan. The live site has since diverged; see `AGENTS.md` "Settled Decisions" for current truth. Notable deltas: typography unified to Inter (Fraunces dropped); the EY reference was removed until the internship begins (Fall 2026); Waaban public copy is softened to "AI-powered market-analysis platform" only (no trading/HMM/co-founder specifics); public email is contact@michaelvanhorn.me; a /research abstract page was added. Do not use this doc to reintroduce any of the above.

> **For agentic workers:** This plan is executed by **OpenAI Codex (GPT-5.5)** via Mike relaying prompts (the `work-with-codex` workflow). Claude plans/reviews; Codex builds. Steps use checkbox (`- [ ]`) syntax for tracking. Each task ends in a **Browser Use verification gate** (Codex runs the dev server, opens the page, visually verifies against the design spec, fixes deviations) and a commit.

**Goal:** Ship a fast, polished, hireable personal-brand site for Mike Van Horn at michaelvanhorn.me that positions him as "the human side of AI in the workplace."

**Architecture:** Static Astro site, Editorial Warm design system, markdown content collections for Writing + Work, deployed free on Vercel with the Spaceship-registered custom domain. Near-zero client JS.

**Tech Stack:** Astro 5 (static), TypeScript content collections, plain CSS with custom-property design tokens, Fraunces + Inter via Fontsource, `@astrojs/sitemap`, Vercel hosting.

**Authority:** Design spec at `docs/superpowers/specs/2026-06-16-portfolio-site-design.md`. The spec wins on any conflict.

**Altitude note (intentional):** This plan pins *exact* file paths, data contracts (collection schemas + frontmatter), design tokens (full CSS), component prop interfaces + responsibilities, page section order, and per-page visual acceptance criteria. It does **not** dictate every line of component markup, capable agent (Codex) generates markup to satisfy the tokens + the approved mockup + the acceptance criteria, then self-verifies via Browser Use. Framework boilerplate that churns between Astro versions (e.g. the content-collection `loader` signature) must be written against **current Astro docs** (Codex: use web search), not from memory.

**Approved visual reference:** `.superpowers/brainstorm/92802-1781634001/content/homepage-layout.html` (direction A, "Editorial Warm").

---

## Codex execution conventions (apply to every task)

- **Model:** GPT-5.5 (Thinking). 400K context, hold the whole repo + this plan.
- **Verify before commit:** run `npm run dev`, use Browser Use to open the affected route(s) at `http://localhost:4321`, check the acceptance criteria, fix anything off. Then `npm run build` must succeed with zero errors.
- **Docs over memory:** for Astro API specifics (content layer `glob` loader, image handling, config), use web search against the current Astro docs.
- **Commits:** one focused commit per task, conventional-commit messages.
- **No placeholder lorem in shipped pages:** use the real-shaped draft copy in this plan; final wording is Mike's to approve later (flagged in Phase 7).
- **A11y/perf baseline always:** semantic HTML, alt text, visible focus states, AA contrast (the token palette already meets this), responsive mobile-first.

---

## File structure (created across the plan)

```
mike-portfolio/
  package.json
  astro.config.mjs
  tsconfig.json
  .gitignore                      (exists)
  public/
    favicon.svg
    resume.pdf                    (Mike supplies; placeholder until then)
    og-default.png                (generated in Phase 7)
  src/
    content.config.ts             (collection schemas — Phase 4/5)
    content/
      work/                       (waaban.md, woodhouse.md, obsidian-ai.md)
      writing/                    (seed posts)
    styles/
      tokens.css                  (design tokens)
      global.css                  (base element styles)
    layouts/
      BaseLayout.astro            (html head, SEO/OG, fonts, global CSS)
      PageLayout.astro            (nav + footer + <main> wrapper)
      PostLayout.astro            (writing post chrome)
    components/
      Nav.astro
      Footer.astro
      SectionHeading.astro        (kicker + title)
      Button.astro                (solid + ghost variants)
      ProjectCard.astro
      ExperienceItem.astro
      PostListItem.astro
      ContactBand.astro
    pages/
      index.astro                 (home)
      work/index.astro
      work/[...slug].astro
      writing/index.astro
      writing/[...slug].astro
      about.astro
      contact.astro
      404.astro
```

---

## Phase 1 — Scaffold + live deploy skeleton

Goal: a deployed, empty-but-styled Astro site reachable at michaelvanhorn.me before any content exists. Get the URL live early so every later phase is verifiable in production.

### Task 1.1: Initialize the Astro project

**Files:** Create `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/pages/index.astro` (temporary).

- [ ] **Step 1:** In `~/Sites/mike-portfolio`, scaffold Astro into the existing directory (it already has `.git` and `.gitignore`). Use the current Astro create command with the "minimal/basics" TypeScript template. Codex: confirm exact flags against current Astro docs.

```bash
npm create astro@latest -- --template minimal --typescript strict --no-install --no-git .
npm install
```

- [ ] **Step 2:** Add dependencies:

```bash
npm install @astrojs/sitemap @fontsource-variable/fraunces @fontsource-variable/inter
```

- [ ] **Step 3:** Set `astro.config.mjs` with the production site URL + sitemap:

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://michaelvanhorn.me',
  integrations: [sitemap()],
});
```

- [ ] **Step 4:** Replace `src/pages/index.astro` with a one-line placeholder (`<h1>Michael Van Horn</h1>`) just to prove the build.

- [ ] **Step 5 (verify):** `npm run dev`, Browser Use → open `http://localhost:4321`, confirm the heading renders. Then `npm run build` succeeds.

- [ ] **Step 6 (commit):**

```bash
git add -A && git commit -m "chore: scaffold Astro project with sitemap + fonts"
```

### Task 1.2: Create GitHub repo + deploy to Vercel

**Files:** none (infra).

- [ ] **Step 1:** Create a public GitHub repo under Mike's account (`gh repo create michaelvanhorn-me --public --source=. --remote=origin --push`). Mike runs `gh` if Codex can't auth.
- [ ] **Step 2:** In Vercel, import the repo (Vercel auto-detects Astro, no adapter needed for static). Trigger first deploy.
- [ ] **Step 3 (verify):** Browser Use → open the `*.vercel.app` URL, confirm the placeholder renders in production.
- [ ] **Step 4 (commit):** none (deploy is automatic on push).

### Task 1.3: Wire the custom domain

**Files:** none (DNS).

- [ ] **Step 1:** In Vercel → Project → Domains, add `michaelvanhorn.me` and `www.michaelvanhorn.me`. Vercel shows the required A / CNAME records.
- [ ] **Step 2:** Mike adds those exact records in the Spaceship DNS dashboard. (Codex provides the values + click-path; Mike performs the DNS change.)
- [ ] **Step 3 (verify):** after propagation, Browser Use → open `https://michaelvanhorn.me`, confirm it serves the placeholder over HTTPS (Vercel auto-provisions the cert).

**Checkpoint:** Live, secured, custom-domain site (empty but real). Stop and show Mike before Phase 2.

---

## Phase 2 — Design system (tokens, fonts, layouts, nav, footer)

Goal: the Editorial Warm system as reusable primitives, so every page inherits the look for free.

### Task 2.1: Design tokens

**Files:** Create `src/styles/tokens.css`.

- [ ] **Step 1:** Write the exact token set from the spec:

```css
:root {
  --paper:  #FAF7F1;
  --ink:    #211C16;
  --muted:  #6B6359;
  --clay:   #B5532A;
  --green:  #2E4034;
  --line:   #E6DFD3;
  --card:   #FFFFFF;

  --font-serif: "Fraunces Variable", Georgia, "Times New Roman", serif;
  --font-sans:  "Inter Variable", system-ui, -apple-system, sans-serif;

  --maxw-prose:  720px;
  --maxw-wide:   980px;
  --space-section: clamp(2.5rem, 6vw, 4.5rem);
  --radius: 4px;
}
```

- [ ] **Step 2 (verify):** referenced in `global.css` next task; no standalone visual check.
- [ ] **Step 3 (commit):** `git commit -m "feat: add Editorial Warm design tokens"`

### Task 2.2: Global base styles + fonts

**Files:** Create `src/styles/global.css`; import fonts + CSS in `BaseLayout.astro` (Task 2.3).

- [ ] **Step 1:** In `global.css`: CSS reset (box-sizing, margin reset), `body { background: var(--paper); color: var(--ink); font-family: var(--font-sans); line-height: 1.6; }`, headings use `var(--font-serif)` with weight 500 and tightened line-height, links use `var(--clay)` with visible hover + focus-visible outline, a `.kicker` utility (11px, uppercase, letter-spacing .14em, `var(--clay)`), and container utilities (`.prose` max-width `--maxw-prose`, `.wide` max-width `--maxw-wide`, centered with horizontal padding).
- [ ] **Step 2 (verify):** confirmed visually in Task 2.4.
- [ ] **Step 3 (commit):** `git commit -m "feat: global base styles + typography"`

### Task 2.3: BaseLayout (head, SEO, fonts)

**Files:** Create `src/layouts/BaseLayout.astro`.

**Props interface:** `{ title: string; description: string; ogImage?: string; }`

- [ ] **Step 1:** Build the `<html lang="en">` document. In `<head>`: charset, viewport, `<title>{title}</title>`, `<meta name="description">`, canonical link, Open Graph (`og:title`, `og:description`, `og:type=website`, `og:url`, `og:image` defaulting to `/og-default.png`), Twitter card (`summary_large_image`), favicon link. Import fonts and global CSS at the top frontmatter:

```astro
---
import '@fontsource-variable/fraunces';
import '@fontsource-variable/inter';
import '../styles/tokens.css';
import '../styles/global.css';
const { title, description, ogImage = '/og-default.png' } = Astro.props;
const canonical = new URL(Astro.url.pathname, Astro.site);
---
```

- [ ] **Step 2:** Render `<slot />` inside `<body>`.
- [ ] **Step 3 (verify):** build succeeds; head tags present in output HTML.
- [ ] **Step 4 (commit):** `git commit -m "feat: BaseLayout with SEO + OG + fonts"`

### Task 2.4: Nav, Footer, PageLayout

**Files:** Create `src/components/Nav.astro`, `src/components/Footer.astro`, `src/layouts/PageLayout.astro`.

- [ ] **Step 1 (Nav):** name "Michael Van Horn" (serif) links to `/`; right-side links Work `/work`, Writing `/writing`, About `/about`, Contact `/contact` (Contact in `--clay`). Sticky or static top bar on `--paper` with a hairline bottom border. Mark the current page (`aria-current="page"`). Mobile: collapse to a simple stacked/disclosure menu (no heavy JS, a `<details>` or CSS-only toggle is fine).
- [ ] **Step 2 (Footer):** `--green` band or hairline-topped block repeating nav links + `vanhorm206@gmail.com` (mailto) + LinkedIn (`https://linkedin.com/in/michaelvanhorn06`) + "michaelvanhorn.me". Present on every page.
- [ ] **Step 3 (PageLayout):** wraps `BaseLayout`, renders `<Nav />`, `<main><slot /></main>`, `<Footer />`. Props pass through to BaseLayout (`title`, `description`, `ogImage`).
- [ ] **Step 4 (verify):** point `index.astro` at PageLayout temporarily. Browser Use → open `http://localhost:4321`, confirm: cream background, serif nav brand, clay Contact link, footer with working mailto + LinkedIn. Resize to mobile width (Browser Use) — nav must remain usable, no overflow.
- [ ] **Step 5 (commit):** `git commit -m "feat: Nav, Footer, PageLayout"`

### Task 2.5: Shared UI components

**Files:** Create `Button.astro`, `SectionHeading.astro`, `ProjectCard.astro`, `ExperienceItem.astro`, `PostListItem.astro`, `ContactBand.astro`.

**Prop interfaces (pin these names exactly, later tasks depend on them):**
- `Button`: `{ href: string; variant?: 'solid' | 'ghost'; }` + slot label. Solid = clay bg / paper text; ghost = clay border + clay text, transparent bg. `--radius`, ~9px/18px padding.
- `SectionHeading`: `{ kicker: string; title?: string; accent?: 'clay' | 'green'; }` — renders `.kicker` (color per `accent`, default clay) + optional serif `<h2>`.
- `ProjectCard`: `{ name: string; blurb: string; href: string; }` — white card, hairline border, serif name, muted blurb, whole card linked.
- `ExperienceItem`: `{ org: string; role: string; dates: string; }` — one timeline row (org bold ink, role+dates muted).
- `PostListItem`: `{ title: string; date: Date; dek?: string; href: string; }` — title (serif link), formatted date (muted), optional dek.
- `ContactBand`: no props — `--green` background, paper text, serif line "Let's talk about AI and people.", then email + LinkedIn + michaelvanhorn.me.

- [ ] **Step 1:** Implement each to the interface above, styled with tokens, matching the approved mockup's proportions.
- [ ] **Step 2 (verify):** build succeeds; quick visual smoke on the homepage in Phase 3.
- [ ] **Step 3 (commit):** `git commit -m "feat: shared UI components"`

---

## Phase 3 — Homepage

Goal: the seven-section homepage from spec §6, rendered in the real design system. Draft copy below is real-shaped; Mike approves final wording in Phase 7.

### Task 3.1: Assemble the homepage

**Files:** Modify `src/pages/index.astro`.

**Section order + content (use `SectionHeading`, `Button`, `ProjectCard`, `ContactBand`):**
1. **Hero** — kicker "The human side of AI in the workplace"; serif H1 "I help people and organizations work *well* with AI." (the word *well* italic); subline: "HRD researcher and builder. I study how AI adoption reshapes work and stress, and I build the tools and frameworks that make the shift humane."; two buttons: solid "Read the work" → `/work`, ghost "Get in touch" → `/contact`. No image.
2. **Why this work** (`--card` bg, green kicker) — serif paragraph: "Anishinaabe, Red Lake Nation descendant. I came to AI through people: who it helps, who it leaves out, and how organizations carry their communities through change." (Hometown phrasing left general per spec; Mike finalizes.)
3. **Featured · Research** — kicker "Featured · Research", serif "AI Adoption & Job Stress", paragraph: "My OLPD manuscript on how AI rollouts affect employee stress, read by leadership and made required reading for the executive team. The center of how I think about this work."; ghost Button "Read the manuscript" → `/about` (interim target; final target — hosted PDF vs dedicated page — resolved in Task 6.2 per Mike's decision).
4. **Selected work** (`--card` bg) — three `ProjectCard`s: Waaban / Woodhouse / Obsidian AI (blurbs from spec §5), linking to `/work/waaban`, `/work/woodhouse`, `/work/obsidian-ai`; Button "See all work" → `/work`.
5. **Writing** — kicker, line "Notes on AI and the future of work." + Button → `/writing`. (If no posts yet, show "Coming soon.")
6. **Experience** (`--card` bg) — three `ExperienceItem`s (Meet Minneapolis / Waaban / EY-incoming) + ghost Button "Download résumé (PDF)" → `/resume.pdf`.
7. **ContactBand**.

- [ ] **Step 1:** Build the page using PageLayout (title "Michael Van Horn — The human side of AI in the workplace", description = the subline).
- [ ] **Step 2 (verify):** Browser Use → open `http://localhost:4321`. Check against the approved mockup: cream paper, alternating white sections, clay CTAs, green "why this work" kicker + green contact band, Fraunces headlines, correct section order, all links resolve (even if targets are stubs). Resize to mobile — sections stack cleanly, type scales, no overflow. Fix deviations.
- [ ] **Step 3 (commit):** `git commit -m "feat: homepage"`

**Checkpoint:** Push; show Mike the Vercel preview URL.

---

## Phase 4 — Work (collection + index + detail pages)

### Task 4.1: Define the `work` collection

**Files:** Create `src/content.config.ts`, `src/content/work/{waaban,woodhouse,obsidian-ai}.md`.

**Schema contract (pin field names):**
```
work entry frontmatter:
  title: string
  role: string            # e.g. "Co-founder & CEO"
  dates: string           # e.g. "2025–present"
  order: number           # sort order on index
  summary: string         # one-line for the card
  links?: { label: string; url: string }[]
  status?: string         # e.g. "Live", "Personal project"
  draft?: boolean         # default false
body: markdown (the detail prose)
```

- [ ] **Step 1:** Write `content.config.ts` defining the `work` collection with the schema above. Codex: use the **current Astro content-layer `glob` loader** syntax (web search the current docs); pin the Zod schema fields exactly as listed.
- [ ] **Step 2:** Author the three entries with real-shaped content from spec §5:
  - `waaban.md` — role "Co-founder & CEO", status "Live", summary, body covering what it is (AI trading terminal, HMM regime detection), Mike's role, co-founders (Bryce Frenzel CFO, Shreesh Chaturvedi CTO), hosted on Lovable.dev. **Gate:** wrap the company specifics so Mike confirms publish-OK in Phase 7 (leave a clear `<!-- PENDING MIKE OK -->` comment).
  - `woodhouse.md` — "Personal project", summary, body ("systems I build", task manager replacing Asana, GitHub-backed Express proxy dashboard).
  - `obsidian-ai.md` — "Personal project", body (AI memory + agent system: knowledge files, hooks, skills, Townfolk agent layer; vault contents stay private, architecture shown).
- [ ] **Step 3 (verify):** `npm run build` typechecks the collection (schema errors surface here). Fix.
- [ ] **Step 4 (commit):** `git commit -m "feat: work content collection + entries"`

### Task 4.2: Work index page

**Files:** Create `src/pages/work/index.astro`.

- [ ] **Step 1:** `getCollection('work')`, filter out drafts, sort by `order`. Render a SectionHeading + intro line + a grid of `ProjectCard`s (linking to `/work/{id}`).
- [ ] **Step 2 (verify):** Browser Use → `/work`: three cards, correct order, styled, links resolve. Mobile: grid collapses to one column.
- [ ] **Step 3 (commit):** `git commit -m "feat: work index"`

### Task 4.3: Work detail template

**Files:** Create `src/pages/work/[...slug].astro`.

- [ ] **Step 1:** `getStaticPaths` from `getCollection('work')`. Render via PageLayout: title, role + dates (muted), status badge, links row (from `links[]`), then the rendered markdown body in a `.prose` container. Per-page `<title>`/description from frontmatter.
- [ ] **Step 2 (verify):** Browser Use → open all three detail pages: heading, meta, links, body prose all render in Editorial Warm; back-nav works. Build succeeds.
- [ ] **Step 3 (commit):** `git commit -m "feat: work detail pages"`

---

## Phase 5 — Writing (collection + index + post)

### Task 5.1: Define the `writing` collection + seed posts

**Files:** Modify `src/content.config.ts`; create `src/content/writing/*.md`.

**Schema contract:**
```
writing entry frontmatter:
  title: string
  date: Date
  dek?: string            # one-line summary for index + meta description
  tags?: string[]
  draft?: boolean         # default false
body: markdown
```

- [ ] **Step 1:** Add the `writing` collection to `content.config.ts` (current `glob` loader; pin fields).
- [ ] **Step 2:** Create 1–2 seed posts (real-shaped placeholders Mike replaces): e.g. `why-the-human-side-of-ai.md`, `what-ai-adoption-does-to-stress.md`, each with frontmatter + a few paragraphs. Mark `draft: true` if Mike prefers launching with the section visible-but-empty, otherwise `false`.
- [ ] **Step 3 (verify):** build typechecks the collection.
- [ ] **Step 4 (commit):** `git commit -m "feat: writing collection + seed posts"`

### Task 5.2: Writing index + post template

**Files:** Create `src/pages/writing/index.astro`, `src/pages/writing/[...slug].astro`, `src/layouts/PostLayout.astro`.

- [ ] **Step 1 (index):** `getCollection('writing')`, drop drafts, sort by `date` desc, render `PostListItem`s. Empty-state: "Notes are coming soon." if none published.
- [ ] **Step 2 (PostLayout + post):** `getStaticPaths`; PostLayout shows serif title, formatted date, optional tags, then `.prose` body. Per-post SEO from frontmatter (`description = dek`).
- [ ] **Step 3 (verify):** Browser Use → `/writing` lists posts newest-first; open a post, prose is readable at `--maxw-prose`, dates format correctly. Mobile readable.
- [ ] **Step 4 (commit):** `git commit -m "feat: writing index + post template"`

---

## Phase 6 — About, résumé, contact

### Task 6.1: About page

**Files:** Create `src/pages/about.astro`.

- [ ] **Step 1:** Sections via SectionHeading: full bio + the identity/"how I got here" story (woven, per spec §3, hometown phrasing general pending Mike); experience timeline (`ExperienceItem` ×3); education (UMN CEHD/OLPD, HRD, grad Dec 2026); a "Download résumé (PDF)" Button → `/resume.pdf`. Real-shaped draft copy; Mike finalizes Phase 7.
- [ ] **Step 2 (verify):** Browser Use → `/about`: reads as a coherent narrative, timeline + résumé button present, styled. Mobile.
- [ ] **Step 3 (commit):** `git commit -m "feat: about page"`

### Task 6.2: Résumé asset + manuscript link

**Files:** `public/resume.pdf` (placeholder), resolve manuscript CTA.

- [ ] **Step 1:** Drop a placeholder `resume.pdf` (clearly marked) until Mike supplies the real one; confirm `/resume.pdf` downloads.
- [ ] **Step 2:** Resolve the homepage "Read the manuscript" CTA target per Mike's Phase 7 decision (hosted PDF in `/public` vs a dedicated page). Until then it points to `/about`.
- [ ] **Step 3 (verify):** Browser Use → résumé link downloads; manuscript CTA resolves (no dead link).
- [ ] **Step 4 (commit):** `git commit -m "feat: resume asset + manuscript link"`

### Task 6.3: Contact page

**Files:** Create `src/pages/contact.astro`.

- [ ] **Step 1:** Thin page: serif heading, `vanhorm206@gmail.com` (mailto), LinkedIn, location (Twin Cities). No form (per spec §11).
- [ ] **Step 2 (verify):** Browser Use → `/contact`: mailto opens, LinkedIn correct.
- [ ] **Step 3 (commit):** `git commit -m "feat: contact page"`

---

## Phase 7 — Polish, SEO/OG, a11y, responsive, launch

### Task 7.1: OG image + favicon + 404

**Files:** `public/og-default.png`, `public/favicon.svg`, `src/pages/404.astro`.

- [ ] **Step 1:** Create a simple branded OG card (1200×630, Editorial Warm: cream bg, serif name + tagline, clay accent) and a favicon (monogram "MVH" or "M" in clay on cream). 404 page in-theme with a link home.
- [ ] **Step 2 (verify):** Browser Use → `/404` renders; OG meta resolves to the image (check head). Optionally validate the OG card in a sharing previewer.
- [ ] **Step 3 (commit):** `git commit -m "feat: OG image, favicon, 404"`

### Task 7.2: Full QA sweep

**Files:** as needed.

- [ ] **Step 1 (a11y):** Browser Use pass on every route: keyboard-tab through, visible focus, alt text, heading order, AA contrast. Fix issues.
- [ ] **Step 2 (responsive):** Browser Use at mobile + tablet widths on every route: no overflow, readable type, usable nav. Fix.
- [ ] **Step 3 (perf):** `npm run build`; confirm minimal/zero client JS shipped; run Lighthouse (Browser Use) on home — target 95+ across the board. Fix regressions.
- [ ] **Step 4 (links):** verify no dead internal links; all CTAs resolve.
- [ ] **Step 5 (commit):** `git commit -m "chore: a11y + responsive + perf QA"`

### Task 7.3: Final content pass (Mike-gated)

**Files:** copy across pages + content entries.

- [ ] **Step 1:** Mike supplies/approves: hero line, "why this work" paragraph + exact hometown phrasing, manuscript summary + CTA target decision, project blurbs, **explicit Waaban publish-OK (co-founder names)**, About/bio, seed writing pieces, the real `resume.pdf`.
- [ ] **Step 2:** Apply approved copy; remove all `PENDING MIKE OK` markers and placeholders.
- [ ] **Step 3 (verify):** Browser Use full walkthrough; build clean.
- [ ] **Step 4 (commit):** `git commit -m "content: final approved copy"`

**Launch:** confirm production `https://michaelvanhorn.me` reflects `main`, share it.

---

## Open items carried from the spec (Mike supplies before Phase 7 closes)

- Real copy (all pages) — Claude can draft, Mike approves voice.
- `resume.pdf` (real file).
- Manuscript: hosted PDF vs dedicated page (and what's publicly shareable).
- Waaban publish-OK + co-founder name clearance.
- Headshot — none yet; launching type-driven (optional later).
- OG share image — generated in Task 7.1.

## Out of scope (v1)

CMS/admin UI, contact form/backend, analytics, dark mode, i18n, comments, newsletter, any React/heavy interactivity. (Spec §11.)
