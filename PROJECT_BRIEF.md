# Project Brief — Azar Fire

**Source:** Figma file `Cleaning services website landing page (Community)` (template name; content is fire safety)
**File key:** `qErFoESyCEfXCUm5AgqQ9Q`
**Source URL:** https://www.figma.com/design/qErFoESyCEfXCUm5AgqQ9Q/Cleaning-services-website-landing-page--Community-
**Homepage page id:** `2048:222` · **Homepage frame:** `2048:223` (Azar Homepage)
**Framework:** Astro

## Project

- **Brand:** Azar Fire Ltd
- **Industry:** UK fire safety consultancy & passive fire protection
- **Audience:** Building owners, landlords, facility managers
- **Voice:** Direct, plain-English, no-jargon. Reassuring authority.
- **Address:** 1 Newlin Business Park, Exchange Road, Lincoln, LN6 3AB
- **Phone:** 01522 530048
- **Email:** info@azarfire.co.uk

## Design Frame

- **Design width:** 1440px (top-level frame `2048:223` is 1423px, all section frames are 1440px wide — we use 1440 as the ideal)
- **Content max-width:** 1170px (135px horizontal padding either side)
- `--size-container-ideal` = `1440`
- `--size-container-max` = `1440px`

## Brand Colors

From Figma variables + observed values:

| Token | Hex | Use |
|-------|-----|-----|
| Petrol Blue | `#00344D` | Primary brand, hero/footer background, dark text |
| Mustard | `#D9A629` | Accent, primary CTA, headline highlight |
| Warm White | `#F4F2F1` | Section backgrounds, light text on dark |
| Charcoal | `#232323` | Default headline / body dark |
| Grey | `#4D4D4D` | Secondary text, nav links |
| White | `#FFFFFF` | Italic highlight in hero, light surfaces |
| Footer Dark | `#00344D` | Same as petrol blue |

> Note: a couple of off-by-a-shade variants appear in the file (`#00334e`, `#e1a300`). We normalize to the named variables (`#00344D`, `#D9A629`).

## Typography

| Token | Family | Weight | Size (px) | Line-height | Use |
|-------|--------|--------|-----------|-------------|-----|
| Bold (Display) | Montserrat | 700 | 52 | 1.1 | Hero & big headlines |
| Sub Heading | Montserrat | 700 | 36 | 1.1 | Section titles ("Our Services", "Find us") |
| Sub Sub Heading | Be Vietnam Pro | 600 | 24 | 1.2 | Card titles, contact label |
| Regular | Montserrat | 400 | 20 | 1.4 | Body paragraphs, lead copy |
| Small Para | Montserrat | 400 | 16 | 1.5 | Card descriptions, nav, buttons |

Italic variant: Montserrat Bold Italic — used for the inline highlight ("the people and places") in the hero.

Font sources: **Google Fonts** — Montserrat (400, 400i, 600, 700, 700i) + Be Vietnam Pro (400, 600).

### em conversions (ideal viewport 1440 / 16px base)

| px | em |
|----|----|
| 12 | 0.75 |
| 16 | 1 |
| 18 | 1.125 |
| 20 | 1.25 |
| 24 | 1.5 |
| 30 | 1.875 |
| 36 | 2.25 |
| 44 | 2.75 |
| 48 | 3 |
| 52 | 3.25 |
| 54 | 3.375 |
| 66 | 4.125 |
| 100 | 6.25 |
| 135 | 8.4375 |

Letter-spacing: kept in px verbatim (negative tracking on the 52px display only if present in Figma — none observed by default).

## Spacing

Observed scale: `4, 8, 12, 16, 20, 24, 32, 40, 56, 64, 80, 104` (px). All emitted as `em` in `global.css`.

## Border Radius

- `6px` — buttons
- `8px` — input fields
- `16–24px` — card images & decorative blocks
- `50%` — circular icon backgrounds (54px circles in Contact section)

## Shadows

Subtle elevation on cards and form fields. Recorded as a single `--shadow-card` token; refined per section as discovered.

## Container Padding (scaling :root)

- Desktop: `135px` → `8.4375em`
- Tablet (≤991px): `1.5em`
- Mobile (≤767px): `1em`

## Sections Identified (Homepage)

| Order | Section | Node | Notes |
|-------|---------|------|-------|
| 1 | Navigation Bar | `2048:321` | Logo left, links centre, CTA right |
| 2 | Hero | `2048:308` | Dark petrol bg with gradient over photo, 52px headline w/ italic accent |
| 3 | Services | `2048:226` | "Our Services" — 6 cards in 2 rows of 3 |
| 4 | Trust Bar | `2048:302` | Dark "Meet Our Clients" strip |
| 5 | Passive Fire Protection (Editorial) | `2048:332` | Image + long-form copy + CTA |
| 6 | Contact Info + Form | `2048:339` | Address/phone/email left, form right |
| 7 | Footer | `2048:380` | Logo, links columns, copyright |

## Special Interactions / Notes

- Hero uses a layered linear-gradient overlay on a background photo (petrol blue from left, fading to image right)
- Service cards: image at top, title, description, "Find Out More" link with arrow
- Contact form: name / email / message + Send button (mustard)
- Footer: dark petrol blue with mustard accent
