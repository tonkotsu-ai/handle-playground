# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project Overview

This is `handle-playground`, a small standalone Vite + React + TypeScript site used as a demo project for Handle Studio. It is a single-page editorial personal site that should stay easy to edit live in Handle.

The visual direction is documented in `DESIGN.md` and `DESIGN.json`. Treat those files as the source of truth for design decisions.

## Common Commands

- `npm install` installs dependencies.
- `npm run dev` starts the Vite dev server. The configured port is `5180` in `vite.config.ts`.
- `npm run build` runs `tsc` and then builds with Vite.
- `npm run preview` previews the production build.

## Code Structure

- `src/main.tsx` mounts the React app.
- `src/App.tsx` composes the page sections.
- `src/content.ts` owns the editable site content and exported data types.
- `src/components/` contains small presentational components for each section.
- `src/index.css` defines Tailwind v4 theme tokens for colors and fonts.

Keep content changes in `src/content.ts` when possible. Keep section layout and markup in the relevant component.

## TypeScript and React Conventions

- Use strict TypeScript and keep exports typed.
- Prefer simple function components with typed props.
- Import shared content types from `src/content.ts`.
- Keep components small and presentational; avoid adding app-wide state unless the requested feature truly needs it.
- Use Tailwind utility classes and existing theme tokens instead of ad hoc CSS.
- Do not introduce new dependencies unless they are clearly needed.

## Styling Rules

This site follows the "Printed Personal Page" system:

- Keep the main reading column at `max-w-2xl` with generous vertical spacing such as `space-y-24`.
- Use the theme colors from `src/index.css`: `paper`, `ink`, `ink-muted`, and `rule`.
- Do not use pure `#000` or `#fff`.
- Do not add accent colors, gradients, shadows, glass effects, or nested card treatments.
- The sticky nav is the only place for `backdrop-blur`.
- Use monospace uppercase section rubrics: `text-xs font-mono uppercase tracking-widest text-ink-muted`.
- The large display serif treatment should appear only once, on the hero name.
- Links should signal hover with underline, not color changes or background fills.
- Project tiles use a solid `backgroundColor` from `gradient[0]`; avoid actual gradients so the tile remains Handle-editable.

## Accessibility and UX

- Preserve semantic landmarks: `nav`, `main`, `section`, and `footer`.
- Keep nav links and section `id` values in sync.
- Use meaningful link text and maintain keyboard-friendly native elements.
- Avoid decorative interaction patterns that make the simple editorial page harder to scan.

## Verification

Before considering code changes complete, run:

```bash
npm run build
```

For purely documentation-only changes, a build is optional, but still check the edited Markdown for clarity and project accuracy.
