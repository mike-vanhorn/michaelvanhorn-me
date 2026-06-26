# Open-source section — live GitHub repos on the home page — design

**Date:** 2026-06-25
**Status:** Approved (design), pending implementation plan.
**Scope:** One new home-page section that renders Mike's public GitHub repos as an interactive, filterable card grid, fed live from the GitHub API and growing on its own as repos are made public.

## Goal

Add a section to the portfolio home page that shows Mike's public repositories as a filterable grid of cards. It must:

- Show the **2 public repos today** (`michaelvanhorn-me`, `marked-in-red`) and **auto-include new ones** as Mike flips currently-private repos public — with no re-authoring and, ideally, no redeploy.
- Look populated and on-brand even at a small repo count.
- Match the existing portfolio aesthetic (warm paper/clay/green, Inter, `--radius` 4px) and reuse existing components/patterns.
- Be localized across the four site locales (en/vi/es/oj).

Non-goal: a curated/hand-authored project list (that already exists as "Selected work"). This section is specifically the **live, self-updating** view of public code.

## Decisions locked during brainstorming

| Decision | Choice |
|---|---|
| What it visualizes | Overview of **all public repos** (not one repo's internals, not contribution graph) |
| Data source | **Live** from the GitHub API for `mike-vanhorn`; grows automatically as repos go public |
| Refresh model | **Baked snapshot at build + live client refresh** (resilient + auto-updating) |
| Placement | **New section on the home page**, right after "Selected work" |
| Visual style | **Filterable card grid** (chosen over orbiting "constellation" and sized "bubbles") |
| Heading | Kicker **"Open source"**, title **"Built in public"** |

## Account / data facts (verified 2026-06-25)

- Canonical account: **`mike-vanhorn`** (the old `vanhorm206-debug` handle now 404s — renamed). `site.ts` already points here.
- Public repos: `michaelvanhorn-me` (TypeScript/Astro), `marked-in-red` (TypeScript).
- Private (will surface automatically once made public): `townfolk` (JS), `obsidian-task-hub` (Python), `waaban-legacy-streamlit` (Python), `van-horn-editorial` (HTML), `vault-ssot` (Python), `github-connect-helper` (TS), `michael-s-website-review` (TS).

## Placement

- New component `src/components/OpenSourceSection.astro`, rendered inside `src/components/pages/HomePage.astro` **immediately after the "Selected work" `<section>`** and before "Writing". Both sections are "things I built," so they belong adjacent.
- Uses the same section shell as its neighbors: `<section class="home-section card-section">` → `<div class="wide section-inner">`, so it inherits the page's spacing, borders, and width tokens for free.
- No new routes, no nav changes. The section is localized inline like the rest of the home page.

## Data model & refresh

This implements the agreed **baked snapshot + live refresh** model.

### Build time (snapshot)

In `OpenSourceSection.astro` frontmatter (runs at `astro build` for static output):

1. `fetch('https://api.github.com/users/mike-vanhorn/repos?type=owner&sort=updated&per_page=100')` (unauthenticated; public repos only; one request).
2. Normalize each repo to a minimal shape:
   `{ name, description, language, stars, updatedAt, url, archived }`
   (from `name`, `description`, `language`, `stargazers_count`, `updated_at`, `html_url`, `archived`).
3. Filter out forks (`!repo.fork`).
4. Sort by `updatedAt` descending.
5. Wrap the whole thing in `try/catch`. On any failure (rate limit, network), fall back to a tiny hardcoded **seed array** of the two known public repos so a transient build hiccup never ships an empty section.

The normalized array is embedded in the page as JSON (see Architecture). The GitHub username is read from `site.ts` (add a `githubUser: 'mike-vanhorn'` field, or derive it from the existing `github` URL).

### View time (live refresh)

One inline script in the component:

1. On load, render the grid + filter chips immediately from the **baked JSON** (instant paint; works even if GitHub is down at view time).
2. Then re-fetch the same GitHub endpoint **client-side**. On success, treat live as source of truth and re-render (this is what makes a newly-public repo appear **with no redeploy**). On failure (403 rate-limit, offline), silently keep the baked cards.
3. `<noscript>` fallback: a single "View my GitHub →" link to the profile.

### Tradeoff accepted

The card markup has **one source of truth: a single JS render function** (no Astro-template/JS-template duplication). Consequence: this section is JS-rendered rather than static HTML. Acceptable because it is explicitly the interactive piece, it still paints instantly from baked data, and the `<noscript>` link covers the no-JS case. (If we later want crawler-visible repo names, we can add server-rendered cards mirroring the same field set — out of scope for v1.)

## Card contents & states

Each card (whole card links to `repo.url`):

- **Name** — repo name, 14px/500, ink.
- **Language** — colored dot + language name, top-right. Color map: TypeScript `#2F6DB0`, JavaScript `#C9A227`, Python `#4B7B3A`, HTML `#B5532A`; unknown/`null` language → neutral gray dot + "—".
- **Description** — GitHub `description`; if empty, fall back to a generic localized line (e.g. "{Language} repository", or omit gracefully).
- **Meta row** — star count shown **only when > 0** (with `ti-star` icon; no sad "0 ★"); "updated {relative}" computed at view time via `Intl.RelativeTimeFormat` localized to `lang`; "view on GitHub" affordance with `ti-external-link`.
- **Archived** — if `repo.archived`, show a small "archived" tag.

Card visual = the existing `ProjectCard.astro` treatment (white `--card`, `1px solid --line`, `--radius`, clay hover border) so it reads as native.

## Filtering & sorting

- **Language chips** generated dynamically from the languages present in the data (so the control auto-adjusts as repos grow). "All" chip selected by default; chips styled as pills (active = ink fill, paper text).
- Clicking a chip filters cards client-side by primary language. No `sendPrompt`/server round-trip.
- **Sort:** most-recently-updated first (matches the API `sort=updated`).
- Forks excluded; archived included (tagged).

## Component architecture

**Files touched**
- `src/components/OpenSourceSection.astro` — **new.** Build-time fetch + normalize + seed fallback; renders `SectionHeading` (kicker/title), an empty chips container, an empty grid container, the baked JSON, a labels JSON, the inline render/refresh script, and the `<noscript>` link.
- `src/components/pages/HomePage.astro` — import and place the new section after "Selected work".
- `src/i18n/ui.ts` — add `home.opensource.*` keys (see i18n).
- `src/data/site.ts` — add `githubUser: 'mike-vanhorn'` (or derive from `github`).

**Data flow**
1. Frontmatter builds `repos` (normalized, filtered, sorted) + a `labels` object serialized from `useTranslations(lang)` (the client script can't call `useTranslations`, so needed strings are passed as data).
2. `<script type="application/json" id="os-repos">` holds the baked repos; `<script type="application/json" id="os-labels">` holds labels + `lang` + `githubUrl`.
3. A single inline `<script>` defines `renderCard(repo, labels)` and `renderChips(repos)`, renders from baked JSON, wires the filter, then live-fetches and re-renders on success.

This keeps the unit self-contained: one file owns the section's data, markup, and behavior, with one render function as the card's single source of truth.

## i18n

New keys under `home.opensource.*`, authored for **en / vi / es**:

- `home.opensource.kicker` = "Open source"
- `home.opensource.title` = "Built in public"
- `home.opensource.all` = "All" (filter chip)
- `home.opensource.viewOnGitHub` = "view on GitHub"
- `home.opensource.updated` = "updated" (or a format string for relative time)
- `home.opensource.archived` = "archived"
- `home.opensource.descFallback` = e.g. "{lang} repository"
- `home.opensource.viewProfile` = "View my GitHub" (noscript + empty-state link)

**Ojibwe (`oj`): intentional English fallback — no `oj` keys added.** This is consistent with the documented Ojibwe locale discipline (a curated, verified subset; everything else falls back to English via `ui[lang][key] ?? ui[defaultLang][key]`). When the pending Red Lake elder review happens, a fluent speaker can add `oj` strings for these keys then; until then they correctly render English.

## Accessibility

- Section wrapped with `aria-labelledby` pointing at the `SectionHeading` title id (same pattern as sibling sections).
- Filter chips are real `<button>`s with `aria-pressed` reflecting the active state.
- Decorative icons `aria-hidden`; the card link has an accessible name (repo name + "on GitHub").
- Language is never communicated by the color dot alone — the language name is always shown as text.
- `<noscript>` provides a usable path to the same content.

## Error handling & edge cases

- Build fetch fails → seed array (2 known repos) ships; client refresh repairs at view time.
- Client fetch fails / rate-limited (403) → keep baked cards silently.
- Zero public repos (shouldn't happen, but) → render the "View my GitHub →" link instead of an empty grid.
- Empty `description` → localized fallback line.
- `null` language → neutral dot + "—"; such repos still appear under "All" but not under any language chip.
- Number formatting: star counts are integers; relative time via `Intl.RelativeTimeFormat` (no float artifacts).

## Verification

- `npm run build` succeeds; the section appears on `/`, `/vi`, `/es`, `/oj` with correct localized labels (oj = English fallback).
- With network available, the live refresh updates the grid; simulate failure (offline) and confirm baked cards remain.
- Filter chips filter correctly; "All" resets.
- Cards link to the right repos; hover state matches `ProjectCard`.
- Lighthouse/scan: no layout shift beyond the initial baked→live swap; `<noscript>` link present.

## Out of scope (YAGNI)

- Per-repo language **breakdown** (would need N extra API calls) — primary `language` only.
- Authenticated API / GitHub token in Vercel — unnecessary for listing public repos; revisit only if rate limits bite.
- Server-rendered (crawler-visible) cards — can be added later mirroring the same fields.
- Stars/forks/contribution graphs, README previews, pinned-repo ordering.
- A dedicated `/code` route — explicitly chose a home-page section.

## Open items

- Confirm `descFallback` wording per language.
- Confirm whether archived repos should be hidden entirely instead of tagged (currently: shown + tagged).
