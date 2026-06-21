# AGENTS.md

This project is Mike Van Horn's personal portfolio site.

## Project Context

- Design spec (historical, superseded in places): `docs/superpowers/specs/2026-06-16-portfolio-site-design.md`
- Implementation plan (historical, superseded in places): `docs/superpowers/plans/2026-06-16-portfolio-site.md`
- Current truth lives in **Settled Decisions** below; where these docs conflict with it, Settled Decisions win.

## Design Tokens

- paper: `#FAF7F1`
- ink: `#211C16`
- muted: `#6B6359`
- clay: `#B5532A`
- green: `#2E4034`
- line: `#E6DFD3`
- card: `#FFFFFF`
- typography: unified to **Inter** (sans-serif) for both display and body. The original Fraunces serif was retired; `--font-serif` and `--font-sans` both alias the Inter stack. Do not reintroduce a serif or display face.

## Standing Rules

- verify each page with Browser Use against the Editorial Warm spec before committing
- use current Astro docs not memory
- static site / near-zero client JS / no new dependencies without asking

## Settled Decisions (as of 2026-06-20)

These override anything in the historical design spec/plan that conflicts.

- **Typography:** all-Inter sans-serif. Fraunces was dropped (`@fontsource-variable/fraunces` uninstalled); the Inter Latin subset is self-hosted in `src/styles/fonts.css`. Do not add a serif or display face.
- **EY:** the incoming EY internship is intentionally NOT on the site until it begins (Fall 2026, Ho Chi Minh City). Do not add it before then.
- **Waaban:** public copy describes it ONLY as an "AI-powered market-analysis platform." Never mention a trading terminal, HMM / regime detection, hosting, or co-founder names anywhere public.
- **Public contact:** a single email, `contact@michaelvanhorn.me`. Do not expose a personal Gmail, phone number, or street address.
- **Research:** `/research` is an abstract-only summary of a co-authored manuscript (full paper available on request). Do not host the full manuscript.
- **Internationalization (i18n):** the site is multilingual — English (default, **unprefixed** URLs), **Vietnamese** (`/vi/…`), **Spanish** (`/es/…`), **Ojibwe / Anishinaabemowin** (`/oj/…`) — via Astro native i18n + a no-JS `<details>` language switcher (`src/components/LangSwitcher.astro`). Hard constraints:
  - Do NOT change `astro.config` `i18n.routing.prefixDefaultLocale: false` — English URLs must stay unprefixed (SEO + existing links).
  - Do NOT change `build.format: 'file'` or `vercel.json` `cleanUrls`/`trailingSlash`. Nested locale routes (`/vi/work/<slug>`) emit `vi/work/<slug>.html` and rely on the existing cleanUrls mapping; breaking it 404s the locale routes (same class of bug as the earlier site-wide 404).
  - All UI/chrome strings live in `src/i18n/ui.ts` (typed, per-locale) with helpers (`getLangFromUrl`, `useTranslations`, `localizePath`, `switchLocalePath`, `localeFromEntryId`). Collection translations live in `src/content/{work,writing}/{vi,es}/`; English entries stay flat. Static pages render shared `src/components/pages/*` (or `Work/Writing` index/detail) components with a `lang` prop.
  - Keep it zero client JS and CSP-safe — never add a translate widget or third-party script.
  - **Do NOT translate proper nouns:** "Michael Van Horn", project names (Waaban, Woodhouse, Marked in Red, m365-bridge, Obsidian AI), orgs/tech (Meet Minneapolis, EY, University of Minnesota, GitHub, Next.js, Supabase, Leaflet, RAND American Life Panel, OLPD), URLs, and stat/method values. Preserve the Waaban softening + MMIWG2S/Two-Spirit + co-authored-manuscript framing in every language.
  - **When you edit English content, update the matching `vi`/`es` strings/files too.** Vietnamese is AI-translated pending a native-speaker review.
  - Ojibwe (`oj`) is a CURATED PARTIAL locale — only `nav.work`, `nav.writing`, `home.hero.kicker`, `home.why.statement`, `about.story.p1`, and `footer.signoff` are in Ojibwe; all other keys intentionally fall back to English. Strings were human-sourced/verified from the Ojibwe People's Dictionary (Red Lake/Southwestern, double-vowel). Status: pending Red Lake elder review. DO NOT machine-translate the rest of `oj`. `/oj/` Work and Writing intentionally render English content (no `oj` markdown).
