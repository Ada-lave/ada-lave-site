# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server at localhost:4321
npm run build    # production build (also runs TypeScript check)
npm run preview  # serve the built dist/
```

No test runner is configured. Use `npm run build` to validate TypeScript and catch errors.

## Architecture

Single-page personal site (`src/pages/index.astro`) that composes standalone section components. No routing, no islands, no client-side JS frameworks — all components are server-rendered Astro except for small `<script>` blocks for interactivity.

### Data layer (single source of truth)

All content lives in `src/data/`. To update personal info, edit **only** `src/data/config.ts` — values propagate automatically to every component that imports it.

| File | Contents |
|------|----------|
| `src/data/config.ts` | `site` object (name, email, github, telegram, location, stack), `nav` links, `socials` |
| `src/data/skills.ts` | Skill groups with proficiency levels |
| `src/data/projects.ts` | Project cards |
| `src/data/traits.ts` | "About me" trait cards |
| `src/data/stack.ts` | Config panel tabs + dependency data for Cargo.toml / go.mod / requirements.txt |

TypeScript interfaces for all data shapes are in `src/types.ts`.

### Shared utilities

- `src/scripts/tabs.ts` — `initTabs(config)` handles tab switching for both Hero (code language tabs) and Skills (config file tabs). Import in `<script>` blocks.
- `src/components/SectionHeading.astro` — section title with a `slot="prefix"` for the inline code line above the `<h2>`.

### Syntax highlighting

The code panels (Hero, Skills, Contact) use hand-written `<span class="c-*">` markup. CSS classes are defined in `src/styles/global.css`:
- `c-keyword`, `c-type`, `c-fn`, `c-string`, `c-comment`, `c-macro`, `c-punct`, `c-bracket`

In `Skills.astro`, the config panel HTML is generated programmatically in the frontmatter from `src/data/stack.ts` and injected via `set:html`. Edit `stack.ts` to change dependencies/versions; do not manually edit the generated HTML strings.

### Styling

Tailwind v4 via `@tailwindcss/vite` (no `tailwind.config.*` file needed). Design tokens are CSS custom properties in `src/styles/global.css` — do not inline one-off color values; use the existing `#ce422b` (accent red), `#f0f0f0` (text), `#909090` (muted), `#1a1a1a` (card bg) pattern already established throughout.
