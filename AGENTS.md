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

## Settled Decisions (as of 2026-06-17)

These override anything in the historical design spec/plan that conflicts.

- **Typography:** all-Inter sans-serif. Fraunces was dropped (`@fontsource-variable/fraunces` uninstalled); the Inter Latin subset is self-hosted in `src/styles/fonts.css`. Do not add a serif or display face.
- **EY:** the incoming EY internship is intentionally NOT on the site until it begins (Fall 2026, Ho Chi Minh City). Do not add it before then.
- **Waaban:** public copy describes it ONLY as an "AI-powered market-analysis platform." Never mention a trading terminal, HMM / regime detection, hosting, or co-founder names anywhere public.
- **Public contact:** a single email, `contact@michaelvanhorn.me`. Do not expose a personal Gmail, phone number, or street address.
- **Research:** `/research` is an abstract-only summary of a co-authored manuscript (full paper available on request). Do not host the full manuscript.
