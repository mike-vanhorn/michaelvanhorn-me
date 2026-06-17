# Michael Van Horn — Portfolio Site · Design Spec

**Date:** 2026-06-16
**Owner:** Mike Van Horn
**Builder:** OpenAI Codex (via Mike relaying prompts); Claude is planner/reviewer

> **HISTORICAL RECORD, superseded in places.** This is the original 2026-06-16 design spec. The live site has since diverged; see `AGENTS.md` "Settled Decisions" for current truth. Notable deltas: typography unified to Inter (Fraunces dropped); the EY reference was removed until the internship begins (Fall 2026); Waaban public copy is softened to "AI-powered market-analysis platform" only (no trading/HMM/co-founder specifics); public email is contact@michaelvanhorn.me; a /research abstract page was added. Do not use this doc to reintroduce any of the above.
**Status:** Approved design, pending spec review → implementation plan

---

## 1. Goal

A polished, hireable personal-brand site that positions Mike as **"the human side of AI in the workplace."** It must read as credible and thoughtful to the people who can hire or admit him, with his built projects backing the thesis rather than leading it.

**One-sentence test:** A recruiter or grad-program reviewer lands on the homepage and, within ten seconds, understands that Mike studies and builds for AI-and-people at the intersection of HRD and organizational change.

## 2. Audience & success criteria

**Primary audience:** HRD / people-ops / AI-enablement employers, graduate programs, and Mike's professional network.

**Success criteria:**
- Loads fast and looks polished on first paint (this is a credibility signal for the audience).
- The AI-and-work thesis + manuscript are unmistakably the center of gravity.
- Identity and equity lens are present as a genuine differentiator, not decoration.
- Projects (Waaban, Woodhouse, Obsidian system) are reachable and legible to a non-technical reader.
- Résumé is one click away; contact is obvious.
- Mike can publish a new writing piece by adding a markdown file and pushing to git.

## 3. Positioning & voice

- **Positioning line:** "I help people and organizations work *well* with AI." (working copy — final words TBD)
- **Voice:** thoughtful, plain, confident; researcher-who-also-builds. No hype, no buzzword soup. External-professional register.
- **Identity:** woven into the story. Anishinaabe, Red Lake Nation descendant; raised on the Red Lake Nation (Ponemah/Redby), now based in the Twin Cities. Framed through *why* he does this work (who AI helps, who it leaves out, how organizations carry communities through change) — present in the hero/"why this work" block and the About page. Never tokenized. **Exact hometown phrasing is Mike's to confirm in final copy.**

## 4. Information architecture

```
/                     Home
/work                 Projects index
/work/waaban          Waaban — AI trading terminal (co-founder & CEO)
/work/woodhouse       Woodhouse — self-built task system
/work/obsidian-ai     Obsidian AI memory + agent system
/writing              Writing index (notes on AI & work)
/writing/[slug]       Individual posts (markdown)
/about                Full bio, identity story, experience timeline, résumé
/contact              Thin reachability page (email + LinkedIn + location)
```

Global nav: **Work · Writing · About · Contact.** Logo/name returns to Home. The global **footer** carries contact + LinkedIn on every page, so reachability never requires navigating to /contact; the /contact page is a thin canonical landing for the nav link.

## 5. Content blueprint (per page)

**Home** — see §6 (section-by-section).

**Work index** — short intro line; cards for the three projects, each linking to its detail page. Card = name, one-line role/what, one-line outcome.

**Work detail pages** — consistent template: title, role, dates, "what it is," "what I did / my role," outcome or status, links (live site / repo where appropriate), optional screenshot.
- *Waaban:* AI trading terminal; HMM regime detection; co-founder & CEO with Bryce Frenzel (CFO) and Shreesh Chaturvedi (CTO); hosted on Lovable.dev. **Brand note:** real company with partners — copy reviewed by Mike before publish; co-founders named only with their OK.
- *Woodhouse:* self-built personal task manager replacing Asana; localhost dashboard backed by a private GitHub repo via Express proxy. Frame as "I build the systems I need."
- *Obsidian AI:* personal AI memory + agent system (knowledge files, hooks, skills, a "Townfolk" agent layer). The vault itself stays private; show the architecture and ideas, not its contents.

**Writing index** — reverse-chronological list of posts (title, date, 1-line dek). Launches with 1–2 seed pieces; can ship empty with a tasteful "coming soon" if seeds aren't ready.

**Writing post** — markdown content collection; title, date, body, optional tags.

**About** — full bio; the identity/"how I got here" story; experience timeline (Meet Minneapolis ECI 2026–, Waaban co-founder & CEO 2025–, EY incoming Fall 2026 Ho Chi Minh City); education (UMN CEHD/OLPD, HRD, grad Dec 2026); résumé download (PDF).

**Contact** — thin canonical page: email **vanhorm206@gmail.com** (shown directly), LinkedIn (linkedin.com/in/michaelvanhorn06), location (St. Paul / Minneapolis). The same email + LinkedIn also live in the global footer on every page, so this page is for the nav link, not the only path to reach Mike.

## 6. Homepage section spec (top → bottom)

1. **Hero** — kicker ("The human side of AI in the workplace"), serif headline ("I help people and organizations work *well* with AI"), one-paragraph subline, two CTAs ("Read the work" → /work, "Get in touch" → /contact). Type-driven, no headshot for now.
2. **Why this work** — short identity + equity framing paragraph. The differentiator block.
3. **Featured · Research** — the AI Adoption & Job Stress manuscript, given centerpiece weight: title, 2–3 sentence summary (incl. "read by leadership / required reading for the exec team"), CTA "Read the manuscript" → PDF or dedicated page.
4. **Selected work** — three cards: Waaban / Woodhouse / Obsidian AI, linking to detail pages; CTA to /work.
5. **Writing** — teaser of latest posts (or "coming soon"); CTA to /writing.
6. **Experience** — compact timeline (Meet Minneapolis, Waaban, EY-incoming) + "Download résumé (PDF)."
7. **Contact footer** — deep-green band: "Let's talk about AI and people," email, LinkedIn, michaelvanhorn.me.

## 7. Design system — "Editorial Warm"

**Palette (tokens):**
| Token | Hex | Use |
|---|---|---|
| `--paper` | `#FAF7F1` | page background (warm cream) |
| `--ink` | `#211C16` | primary text (near-black brown) |
| `--muted` | `#6B6359` | secondary text |
| `--clay` | `#B5532A` | primary accent (CTAs, kickers, links) |
| `--green` | `#2E4034` | secondary accent (contact band, "why this work" kicker) |
| `--line` | `#E6DFD3` | hairlines, card borders |
| `--card` | `#FFFFFF` | alternating section / card surface |

**Typography:**
- Display / headings: **Fraunces** (variable serif; weights 400–600; optical sizing). Warm, editorial, modern. Self-hosted via Fontsource for performance + no layout shift.
- Body / UI: **Inter** (400/500/600). Self-hosted via Fontsource.
- Kickers/labels: Inter, 11px, uppercase, letter-spacing ~0.14em.

**Layout & feel:** generous whitespace; max content width ~760–820px for prose, wider for the hero/cards; left-aligned; alternating paper/white section backgrounds with hairline separators; subtle, restrained (no heavy animation). Accessible contrast (WCAG AA), full keyboard nav, semantic HTML, responsive mobile-first.

**Components:** Nav, Footer, Hero, SectionHeading (kicker + title), ProjectCard, ExperienceItem, PostListItem, Button (solid clay + ghost-clay variants), ContactBand.

## 8. Technical architecture

- **Framework:** Astro (latest). Static output. Near-zero client JS by default.
- **Content:** Astro **content collections** — `writing` (markdown posts) and `work` (markdown project entries) with typed frontmatter schemas (title, date, role, summary, links, draft flag, etc.). Adding a post = new `.md` + `git push`.
- **Styling:** plain CSS with custom properties (tokens above) or a light utility layer; no heavy UI framework. Fraunces + Inter via `@fontsource`.
- **Structure (target):**
  ```
  src/
    pages/        index, work/index, work/[slug], writing/index, writing/[slug], about, contact
    content/      writing/*.md, work/*.md  (+ config.ts schemas)
    components/   Nav, Footer, Hero, ProjectCard, ...
    layouts/      BaseLayout, PageLayout, PostLayout
    styles/       tokens.css, global.css
    assets/       (résumé PDF, any images)
  public/         favicon, og image, resume.pdf
  ```
- **SEO/meta:** per-page `<title>`/description, Open Graph + Twitter card image, sitemap, robots. A clean OG card matters for LinkedIn shares.
- **Hosting:** Vercel (free tier), auto-deploy on push to `main`.
- **Domain:** `michaelvanhorn.me` (registered at Spaceship, 1 yr). Add domain in Vercel; set the two DNS records Vercel specifies at Spaceship; enable HTTPS (automatic).
- **Repo:** new GitHub repo under Mike's account; local at `~/Sites/mike-portfolio`.

## 9. Build approach (Codex hand-off)

Claude designs/plans/reviews; **Codex implements**, with Mike relaying prompts via the `work-with-codex` workflow. Phasing (each phase = one reviewable Codex hand-off):

1. **Scaffold** — Astro project, base layout, tokens/fonts, Nav/Footer, deploy a "hello" build to Vercel + wire the domain. (Get a live URL early.)
2. **Homepage** — all seven sections with placeholder-but-real-shaped copy.
3. **Work** — index + three detail pages + `work` content collection.
4. **Writing** — index + post template + `writing` collection + 1–2 seed posts.
5. **About + résumé + contact** — bio/identity/timeline, résumé PDF, contact.
6. **Polish** — SEO/OG, responsive QA, a11y pass, performance check, 404.

## 10. Open items / assets needed from Mike

- **Real copy** — hero line, "why this work" paragraph, manuscript summary, project blurbs, About/bio, seed writing pieces. (Claude can draft; Mike approves voice.)
- **Résumé PDF** — current file to drop at `/public/resume.pdf`.
- **Headshot** — none on file. Launching type-driven; portrait optional later.
- **Manuscript** — decide: link a hosted PDF vs a dedicated on-site page. Confirm what's shareable publicly.
- **Waaban publish OK** — confirm co-founder names + company details are cleared to show publicly.
- **OG/share image** — simple branded card (can generate).

## 11. Out of scope (YAGNI for v1)

- CMS / admin UI (markdown + git is the workflow).
- Contact form/backend (raw email for now; form is a later swap if spam warrants).
- Dark mode, i18n, analytics dashboards, comments, newsletter.
- Any React/heavy interactivity.

## 12. Decisions log

| Decision | Choice |
|---|---|
| Primary goal | Hireable hub — "human side of AI in the workplace" |
| Content set | Manuscript (centerpiece), Waaban, Woodhouse + Obsidian AI, Writing section, résumé PDF, contact/links |
| Identity | Woven into the story (hero + About) |
| Visual direction | A — Editorial Warm (Fraunces + Inter; cream/ink/clay/green) |
| Tech | Astro + Vercel, static, markdown content collections |
| Build | Codex implements via Mike; Claude plans/reviews |
| Domain | michaelvanhorn.me (Spaceship) |
| Public email | vanhorm206@gmail.com (shown directly) |
| Headshot | None yet — type-driven hero |
