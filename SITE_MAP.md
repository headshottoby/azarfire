# Site Map — Azar Fire

**Figma File Key:** `qErFoESyCEfXCUm5AgqQ9Q`
**Source URL:** https://www.figma.com/design/qErFoESyCEfXCUm5AgqQ9Q/Cleaning-services-website-landing-page--Community-?node-id=2048-409
**Container Max-Width:** `1440px` (content frame 1170px)
**Framework:** Astro

## Pages

### Page: Home
Node ID: `2048:222`
Frame: `2048:223` (Azar Homepage, 1423 × 6288)
Route: `/`
File: `src/pages/index.astro`

#### Sections (top → bottom)

| Order | Section | Node ID | Component | Background | Notes |
|-------|---------|---------|-----------|------------|-------|
| 1 | Navigation Bar | `2048:321` | Navbar | white | Logo (left), 5 links (centre), Get-in-touch CTA (right) |
| 2 | Hero | `2048:308` | Hero | petrol blue + photo + gradient | Big headline w/ inline italic accent, sub, 2 CTAs |
| 3 | Services | `2048:226` | Services | white | Decorative "Our Services" + headline + 6 cards in 2 rows of 3 + bottom CTA |
| 4 | Trust Bar | `2048:302` | TrustBar | charcoal `#232323` | "Meet Our Clients" stripe, full-width |
| 5 | Passive Fire Protection (editorial) | `2048:332` (+ titles `2048:400/401`) | PassiveFireProtection | white | Image left, headlines + long-form body + CTA right |
| 6 | Contact Info + Form | `2048:339` | ContactSection | warm white `#F4F2F1` | "Find us" 3 info cards left, form right, decorative "Contact Us" overlay |
| 7 | Footer | `2048:380` | Footer | petrol blue | Logo, 2 link columns, divider, copyright |

## Shared Components

| Component | Description | Used in |
|-----------|-------------|---------|
| Button (`btn-primary/outline/dark/charcoal`) | CSS utility class, not a component | Hero, Services, Contact, Nav |
| Find-out-more link | Outline pill w/ arrow, `.btn-find-out-more` | Service cards |

## Images Required (from Figma)

| Asset | Used in | Filename |
|-------|---------|----------|
| Logo (white + dark variants) | Navbar, Footer | `logo-azar.png` / `logo-azar-white.png` |
| Hero background | Hero | `hero-fire-services.png` |
| Service card 1 (Fire Risk Assessment) | Services | `service-fire-risk-assessment.png` |
| Service card 2 (Fire Door Inspections) | Services | `service-fire-door-inspections.png` |
| Service card 3 (Fire Door Installation) | Services | `service-fire-door-installation.png` |
| Service card 4 (Fire Door Maintenance) | Services | `service-fire-door-maintenance.png` |
| Service card 5 (Fire Stopping Surveys) | Services | `service-fire-stopping-surveys.png` |
| Service card 6 (Fire Stopping Installations) | Services | `service-fire-stopping-installations.png` |
| Passive fire protection image | PassiveFireProtection | `passive-fire-protection.png` |
| Call icon | Contact | `icon-call.svg` |
| Email icon | Contact | `icon-email.svg` |
| Address icon | Contact | `icon-address.svg` |
| Arrow icon (find out more) | Services | `icon-arrow.svg` |
