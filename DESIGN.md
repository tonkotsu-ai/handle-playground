---
name: Handle Playground
description: A hand-set editorial personal site, printed in cream and ink.
colors:
  paper: "#faf8f3"
  ink: "#1a1a1a"
  ink-muted: "#6b6b6b"
  rule: "#e8e4d9"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "4.5rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.2em"
rounded:
  none: "0px"
  md: "8px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  xxl: "96px"
components:
  nav:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "16px 24px"
  availability-pill:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
    typography: "{typography.label}"
  project-tile:
    rounded: "{rounded.md}"
  link-muted:
    textColor: "{colors.ink-muted}"
    typography: "{typography.body}"
---

# Design System: Handle Playground

## 1. Overview

**Creative North Star: "The Printed Personal Page"**

This system behaves like a short editorial monograph set on warm uncoated paper. A single narrow column of type runs down the middle of a cream field. Display type is a high-contrast serif; body is a quiet humanist sans; labels are a uniform-width monospace in full uppercase, spaced wide like a chapter mark. There is exactly one page of content, read top to bottom, and nothing competes with the type. The only chromatic object on the page is a single ink-colored availability pill. Everything else is paper, ink, and rule.

The system rejects the vocabulary of product-marketing pages. No hero gradient, no card grid of feature tiles, no glassmorphism, no pastel illustrations, no CTA stack. Density is low and rhythm is even: sections are separated by 96px of air, and the column never widens beyond ~640px so body lines stay comfortably under 75ch. Depth is conveyed entirely by typographic weight and a single 1px rule; there are no shadows in the system.

**Key Characteristics:**
- One narrow measure (max-width 672px / 42rem) holds every reading surface.
- Type-driven hierarchy: one display serif, one body sans, one mono used only for labels.
- Flat by doctrine: no shadows, no elevation, no tonal layering.
- Restrained color strategy: two neutrals, one ink, one rule — no accent hue.
- Section rubrics are monospace uppercase with wide tracking, never sentence case.

## 2. Colors: The Paper-and-Ink Palette

Two neutrals carry the entire page. The palette is deliberately a two-card deck: the surface (paper) and the mark (ink), plus a muted fade of ink for secondary voice and a single rule color for dividers.

### Neutral
- **Paper** (`#faf8f3`, `oklch(97.5% 0.01 85)`): the background for every surface, navigation bar (at 80% opacity with a backdrop blur), and footer. Warm-cream, tinted slightly yellow; never pure white.
- **Ink** (`#1a1a1a`, `oklch(21% 0.003 85)`): all primary type, the availability pill's fill, and any foreground mark. Near-black, tinted faintly toward paper; never pure `#000`.
- **Ink Muted** (`#6b6b6b`, `oklch(50% 0.003 85)`): secondary text — rubrics, dates, roles, excerpts, social labels. A single step of recession; there is no third step.
- **Rule** (`#e8e4d9`, `oklch(91% 0.012 85)`): 1px horizontal dividers under the nav and above the footer. The only decorative line weight permitted.

### Named Rules
**The Two-Neutrals Rule.** The system ships with paper + ink + one recession step (ink-muted) and one rule color. No accent hue, no chart colors, no gradients. If a new surface "needs" a color to work, the design needs rework, not a color.

**The Tinted Neutral Rule.** Every neutral is tinted toward the paper hue (~85° chroma 0.003–0.012). Pure `#000` and pure `#fff` are forbidden; they read as screen-native and break the printed-page illusion.

## 3. Typography

**Display Font:** Instrument Serif (with Georgia, serif fallback)
**Body Font:** Inter (with system-ui, sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (with Menlo, monospace fallback)

**Character:** A high-contrast transitional serif against a quiet humanist sans, with a uniform-width mono reserved for eyebrow rubrics. Instrument Serif's sharp terminals and thin strokes carry all display weight; Inter disappears into the page and lets the serif breathe.

### Hierarchy
- **Display** (Instrument Serif, 400, `text-7xl` / 4.5rem, line-height 1, `tracking-tight`): reserved for the one hero name at the top of the page. Appears exactly once.
- **Title** (Inter, 500, `text-lg` / 1.125rem, line-height ~1.4): project names and writing titles. Carries `group-hover:underline` to signal link targets.
- **Body** (Inter, 400, `text-base` / 1rem, `leading-relaxed` / 1.625): paragraph copy in About, writing excerpts, social handles. Measure capped at ~65ch by the `max-w-xl` column.
- **Label** (JetBrains Mono, 400, `text-xs` / 0.75rem, `tracking-widest` / 0.2em, uppercase, `text-ink-muted`): every section rubric ("About", "Selected Work", "Writing", "Elsewhere") and the availability pill copy. The rubric is the tell — no other treatment signals a section break.

### Named Rules
**The Mono Rubric Rule.** Every section opens with a monospace, uppercase, wide-tracked label in ink-muted. Never a larger sans headline. The rubric is the section break; there are no horizontal rules between sections, no decorative marks.

**The One Display Rule.** The serif display size appears once, on the hero name. Everything downstream uses the sans title size at most. A second display-size element anywhere on the page is a fault.

## 4. Elevation

The system is flat by doctrine. There are no shadows, no blurs on content, no tonal surface layers, no cards with elevation. Depth is carried by:

1. The `border-b border-rule` line under the sticky nav.
2. The `border-t border-rule` line above the footer.
3. A single `ring-1 ring-inset ring-black/5` on project tiles — a 1px inset ring at ~5% opacity, present only to give the color-block tile a crisp edge against the cream paper.

The nav uses `backdrop-blur-sm` over `bg-paper/80` — this is the one blur in the system, and it exists solely to keep the page name legible when body content scrolls under it. It is not a stylistic glass effect.

### Named Rules
**The Flat-By-Default Rule.** No `box-shadow` declarations exist in the system. If a surface needs visual separation, use the rule color as a 1px line or add typographic whitespace. Never add a shadow.

**The One Blur Rule.** The sticky nav is the only element permitted to use `backdrop-filter`. Blur is a functional legibility tool here, not a decorative treatment.

## 5. Components

### Availability Pill (signature)
- **Character:** the page's one chromatic object — ink-on-paper inverse, small and confident.
- **Shape:** `rounded-full` (pill).
- **Fill:** ink background, paper text.
- **Typography:** mono label (`text-xs`), no tracking widening on this specific use.
- **Internal mark:** a 6px (`h-1.5 w-1.5`) paper-colored dot `mr-2` before the text — suggests a live status indicator.
- **Padding:** `px-3 py-1`.
- **States:** none. This element does not respond to hover; it is informational, not interactive.

### Navigation
- **Style:** sticky top, full-width, `backdrop-blur-sm bg-paper/80` with a `border-b border-rule`.
- **Layout:** same 672px column width as the main content, flex-justified with the display name on the left and two nav links on the right.
- **Typography:** brand name uses display serif at `text-lg`; link labels are sans `text-sm`.
- **States:** hover adds a plain underline to the link. No color change, no active-pill, no indicator.

### Project Tile (card)
- **Character:** a four-by-three block of a single solid color with a typographic caption below.
- **Shape:** `aspect-[4/3]`, `rounded-lg` (8px).
- **Fill:** a single solid color from the project's `gradient[0]` field. The color IS the artwork.
- **Edge:** `ring-1 ring-inset ring-black/5` — a near-invisible inset ring to hold the edge against paper.
- **Caption:** title and description on one `group-hover:underline` line (ink for name, ink-muted for the em-separated description); role and year on a second `text-sm text-ink-muted` line with a middle-dot separator.
- **Spacing:** `mt-4` between tile and caption; tiles stack with `space-y-12`.

### Writing Entry
- **Character:** unstyled editorial list — title, date, excerpt. No card, no container, no background.
- **Typography:** sans title (`text-lg font-medium`), muted date (`text-sm text-ink-muted`), muted excerpt (`text-base text-ink-muted leading-relaxed`).
- **States:** title underlines on hover.
- **Rhythm:** entries separated by `space-y-8`.

### Footer Link (Elsewhere)
- **Character:** a two-column list of social rows, each a label + handle pair with baseline-aligned type.
- **Layout:** `grid-cols-1 sm:grid-cols-2`, `gap-3`.
- **Typography:** label is `text-sm text-ink-muted`; handle is `text-base` in ink.
- **States:** the handle underlines on hover. The label does not.

### Named Rules
**The No-Card Rule.** Writing entries, About paragraphs, and footer links never live inside cards. The column itself is the container. Only the project tile wears a visual frame, because its content is a color block, not type.

**The Hover Underline Rule.** Every link target in the system reveals itself by underline on hover. No color shifts, no icon reveals, no background fills. If something can't be made affordant by an underline, it's probably not a link.

## 6. Do's and Don'ts

### Do:
- **Do** keep the reading column at `max-w-2xl` (672px) and add air between sections with `space-y-24` (96px). Rhythm comes from spacing, not rules.
- **Do** open every section with a monospace uppercase `tracking-widest` rubric in `text-ink-muted`.
- **Do** use solid colors for project tiles. The handle app cannot edit gradients yet — a single `backgroundColor` keeps the tile editable.
- **Do** tint neutrals toward the paper hue (warm yellow, ~85°, chroma ≤0.012). Paper is `#faf8f3`, not `#ffffff`.
- **Do** reserve the display serif size for the hero name only. One display size per page.
- **Do** signal links with `group-hover:underline`, not color change.

### Don't:
- **Don't** introduce an accent color. The palette is two neutrals plus ink. A pink highlight, a green success state, a brand-blue link: all out of scope.
- **Don't** reach for `box-shadow`. This system is flat by doctrine. Use a 1px rule or whitespace.
- **Don't** add nested cards. The project tile is the only framed element; writing and footer items live directly in the column.
- **Don't** use `#000` or `#fff` anywhere. They read as screen-native and break the cream-paper world.
- **Don't** apply gradients — neither to tiles (the handle app can't edit them yet) nor to text (`background-clip: text` is banned outright).
- **Don't** replace the mono rubric with a larger sans or serif headline. The rubric is the section break.
- **Don't** widen the column for "more space to work with." The narrow measure is the design.
- **Don't** add `border-left` or `border-right` stripes as decorative accents on list items or callouts.
