# Azar Fire — Design System

The single source of truth for building new pages so they match the homepage. All tokens
live in [`src/styles/global.css`](src/styles/global.css); use the CSS variables rather than
hard-coded values. This doc explains what they are and how they're used.

---

## 1. Colours

### Brand palette

| Token | Hex | Use |
|---|---|---|
| `--color-petrol` | `#00344d` | Primary dark. Dark section backgrounds, headings on light, primary text accents |
| `--color-petrol-deep` | `#00283d` | Footer background, dark-button hover |
| `--color-petrol-mid` | `#002f46` | Subtle petrol step (rarely used) |
| `--color-mustard` | `#d9a629` | Accent. Eyebrows, script labels, primary button, highlights, the gold heading line |
| `--color-mustard-hover` | `#c4941f` | Primary-button hover |
| `--color-warm-white` | `#f4f2f1` | Light "off-white" section background, cards, full-screen menu |
| `--color-charcoal` | `#232323` | Default body text |
| `--color-grey` | `#6b6b6b` | Secondary/body text on light |
| `--color-grey-soft` | `#999999` | Muted labels, placeholders |
| `--color-white` | `#ffffff` | White sections, text on dark |

### Lines / hairlines

| Token | Value | Use |
|---|---|---|
| `--color-line` | `rgba(0,52,77,0.12)` | Borders/dividers on light backgrounds (cards, navbar, form fields) |
| `--color-line-light` | `rgba(255,255,255,0.14)` | Borders/dividers on dark backgrounds (footer divider, process connector) |

### Text-on-dark opacities (convention, not tokens)

On petrol backgrounds, layer white at reduced opacity instead of new colours:
`rgba(255,255,255,0.9)` strong body · `0.72` body · `0.65` muted · `0.55` labels.

### Section background rhythm

Sections alternate to create contrast. Keep this cadence on new pages:

```
Navbar      → white (rgba 0.96)
Hero        → petrol (dark) + photo & gradient
Section A   → white
Section B   → petrol (dark)
Section C   → warm-white
Contact     → white
Footer      → petrol-deep (dark)
```

On **dark** sections: headings white, accents mustard, body white@72%.
On **light** sections: headings petrol, body grey, accents mustard.

---

## 2. Typography

### Families (loaded from Google Fonts in `BaseLayout.astro`)

- **`--font-body` / `--font-heading`** → **Inter** (weights 400, 500, 600, 700, 800). Used for everything — headings and body.
- **`--font-script`** → **Kaushan Script** (400). Decorative only — the small gold section labels ("Core services", "Our process", "Advice", "Contact"). Never use for body or anything that must be crisp/legible at small sizes.

### Type scale (em — scales fluidly with viewport)

| Token | em | ~px | Typical use |
|---|---|---|---|
| `--fs-xs` | 0.75em | 12 | Tiny labels, form micro-copy |
| `--fs-sm` | 0.875em | 14 | Eyebrows, nav links, buttons, meta |
| `--fs-base` | 1em | 16 | Body text, card descriptions |
| `--fs-md` | 1.125em | 18 | Lead/intro paragraphs, footer links |
| `--fs-lg` | 1.375em | 22 | Card titles |
| `--fs-xl` | 2em | 32 | Process step numbers, small headings |
| `--fs-2xl` | 2.75em | 44 | Section H2 |
| `--fs-3xl` | 3.5em | 56 | Hero H1 |

For oversized display text (e.g. the full-screen menu links), use a `clamp()`:
`clamp(2.25em, 6vw, 3.5em)`.

### Heading conventions

- Global reset sets all headings to **Inter, weight 700, `letter-spacing: -0.02em`, `line-height: --lh-tight (1.08)`, colour charcoal**.
- **Override per use:** section H2s use **weight 800** and recolour (petrol on light / white on dark). Hero H1 uses **weight 800**.
- One `<h1>` per page (the hero). Sections use `<h2>`; cards/steps use `<h3>`.

### Line-heights (always unitless)

`--lh-tight 1.08` (headings) · `--lh-snug 1.2` · `--lh-base 1.5` (body default) · `--lh-relaxed 1.65` (paragraphs/intros).

### Eyebrow & script-label patterns

- **`.eyebrow`** — uppercase, `--fs-sm`, weight 600, `letter-spacing: 0.08em`, mustard. The hero adds a small mustard dot before the text.
- **`.script`** — Kaushan Script, mustard, set around `1.75em`, sits directly above the section H2.

---

## 3. Spacing & layout

### Fluid scaling system (important)

The `<body>` `font-size` is `--size-font`, which scales with viewport width. Because of this,
**use `em` for almost everything** (font-size, padding, margin, gap, width, height, radius) —
values then scale proportionally across breakpoints automatically.

**Use `px` only for:** `1px` borders, `box-shadow` offsets/blur, and `letter-spacing`.
**Line-height is always unitless.**

### Container

`.container` = `max-width: var(--size-container)` (caps at 1440px), centred, with
`padding-inline: var(--container-padding)`. Wrap every section's content in `.container`.

`--container-padding` per breakpoint:

| Breakpoint | Value |
|---|---|
| Desktop (≥992px) | `5.5em` (88px) |
| Tablet (≤991px) | `2.5em` |
| Mobile (≤767px) | `1.375em` |
| Small mobile (≤479px) | `1.25em` |

### Breakpoints (desktop-first, `max-width`)

```css
@media (max-width: 991px) { /* tablet */ }
@media (max-width: 767px) { /* mobile landscape */ }
@media (max-width: 479px) { /* mobile portrait */ }
```

The fluid system handles font-size/spacing automatically — media queries are only for
**layout changes** (grid columns, stacking, full-width buttons, image crops).

### Section padding convention

Vertical section padding: **`6em` top & bottom on desktop, `4.5em` on tablet (≤991px)**.
Dark "feature" sections (hero/process) can vary slightly; keep within this range.

### Radius

| Token | em | Use |
|---|---|---|
| `--radius-sm` | 0.5em (8) | Inputs, small controls, burger button |
| `--radius-md` | 0.75em (12) | Form fields, icon tiles |
| `--radius-lg` | 1.25em (20) | Cards, image panels, banners |
| `--radius-pill` | 999px | Buttons, badges, accreditation pill |

### Shadows (px values — don't convert to em)

| Token | Value | Use |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(0,40,61,0.06)` | Subtle |
| `--shadow-md` | `0 12px 32px rgba(0,40,61,0.10)` | Cards, image panels (esp. on hover) |
| `--shadow-lg` | `0 24px 60px rgba(0,40,61,0.16)` | Elevated overlays |

### Transitions

`--transition-fast` = `150ms ease` (hovers, colours).
`--transition-base` = `280ms cubic-bezier(0.4,0,0.2,1)` (movement, reveals).

---

## 4. Buttons

All buttons share `.btn` (pill, `--fs-sm`, weight 600, `padding: 0.9375em 1.625em`, 1px
transparent border, active state nudges down 1px). Add a variant:

| Class | Look | Use |
|---|---|---|
| `.btn-primary` | Mustard fill, petrol text | Main CTA ("Request a consultation", "Send enquiry", "Call us") |
| `.btn-dark` | Petrol fill, white text | Secondary on light ("Speak to a consultant") |
| `.btn-light` | White fill, petrol text | Secondary on dark ("View services" in hero) |
| `.btn-outline` | Transparent, white border/text | Ghost button on dark |
| `.btn-outline-dark` | Transparent, petrol border/text | Ghost button on light |

Icons inside buttons: inline `<svg>` at ~`1.1em`, `stroke="currentColor"`, with `gap: 0.5em`.

---

## 5. Reusable component patterns

- **Cards** (service cards): `--color-warm-white` bg, `1px var(--color-line)` border,
  `--radius-lg`, padding ~`2em`. Hover: lift `translateY(-4px)` + `--shadow-md` + a mustard
  bottom accent line. Title `--fs-lg`/700/petrol; body `--fs-base`/grey.
- **Badges / pills**: pill shape, small index or check icon (mustard), `--fs-sm`. On dark:
  `rgba(255,255,255,0.06)` bg + `rgba(255,255,255,0.16)` border.
- **Icon tile**: `~3em` square, `--radius-md`, warm-white bg + line border, petrol icon;
  inverts to petrol bg / mustard icon on hover (see contact details).
- **Numbered steps**: big mustard number (`--fs-xl`/800), mustard node dot with glow
  (`box-shadow: 0 0 0 4px rgba(217,166,41,0.18)`), thin connector line in `--color-line-light`.
- **Image bands / panels**: `--radius-lg`, `overflow: hidden`, `--shadow-md`; control crop
  with `aspect-ratio` + `object-fit: cover` + `object-position`. Give a taller `aspect-ratio`
  on mobile so subjects aren't cut off.
- **Full-screen menu**: fixed warm-white overlay, large centred Inter links that stagger in
  (slow open ~0.5s, quick close ~0.18–0.22s). ⚠️ The bar must **not** use `backdrop-filter`
  while the overlay is a descendant — it traps `position: fixed` to the bar. (We dropped the
  blur for this reason.)

---

## 6. Motion / scroll reveal

- Add `data-reveal` to any element to fade + rise in on scroll. Add
  `data-reveal-delay="120ms"` (or stagger via `:nth-child`) for sequencing.
- Implemented once with a tiny `IntersectionObserver` in `BaseLayout.astro`; elements start
  hidden and get `.is-visible`. Respects `prefers-reduced-motion` and shows everything if JS
  is off (progressive enhancement — content is never reveal-locked).

---

## 7. Page-build conventions

- **Stack:** Astro, static output. Components in `src/components/*.astro` with scoped
  `<style>`. New pages = files in `src/pages/`, composed from components inside `BaseLayout`.
- **Near-zero JS:** the site ships **0 external JS files** (only two tiny inlined scripts:
  scroll-reveal + nav toggle). Keep it that way — prefer CSS; add JS only when essential.
- **Images:** put photos in `src/assets/images/` and render with Astro's `<Image>` (auto
  WebP + responsive `widths`/`sizes`). `loading="eager"` + `fetchpriority="high"` for
  above-the-fold (hero); `loading="lazy"` otherwise. Logos/icons/SVGs can stay in
  `public/assets/images/` and be referenced directly.
- **Section structure:** `<section>` (full-width background) → `.container` (centred,
  padded) → content. Backgrounds go on the section; content never touches the container edge.
- **Anchors:** in-page links use `#section-id`; `html { scroll-padding-top: 5.5em }` offsets
  the sticky navbar.

---

## 8. SEO & accessibility baseline

- One `<h1>` per page; logical `h2`→`h3` order; `<main>`, `<nav>`, `<footer>`, `<section>`.
- Every `<img>` has descriptive `alt` (decorative ones use `alt=""` + `aria-hidden`).
- Unique `<title>` + meta description per page; canonical + Open Graph in `BaseLayout`.
- Visible focus: `:focus-visible` → 2px mustard outline. Skip-to-content link on the page.
- Form inputs have associated `<label>`s; icon-only controls have `aria-label`.
- Favicon: `/public/favicon.svg` (petrol tile + mustard flame).

---

## 9. Quick reference — most-used values

```
Petrol #00344d · Mustard #d9a629 · Warm-white #f4f2f1 · Charcoal #232323
Font: Inter (body+headings) · Kaushan Script (gold labels only)
Section H2: --fs-2xl / 800 · Hero H1: --fs-3xl / 800 · Body: --fs-base or --fs-md / 1.65
Section padding: 6em desktop, 4.5em tablet · Container pad: 5.5em → 2.5em → 1.375em
Cards & panels: --radius-lg · Buttons & pills: --radius-pill
Use em everywhere; px only for 1px borders, shadows, letter-spacing; line-height unitless.
```
