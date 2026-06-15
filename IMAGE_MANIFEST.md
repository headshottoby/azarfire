# Image Manifest — Azar Fire

All assets downloaded from the Figma local asset server and stored in `public/assets/images/`.

| Filename | Type | Size | Used in | Status |
|----------|------|------|---------|--------|
| `hero-fire-services.jpg` | JPEG | 459 KB | Hero background | OK |
| `logo-azar.png` | PNG (470×234, RGBA) | 24 KB | Navbar logo | OK |
| `service-fire-risk-assessment.jpg` | JPEG | 12 KB | Services card 1 | OK (low-res — flag for higher source from client) |
| `service-fire-door-inspections.jpg` | JPEG | 8 KB | Services card 2 | OK (low-res — flag for higher source from client) |
| `service-fire-door-installation.jpg` | JPEG | 615 KB | Services card 3 | OK |
| `service-fire-door-maintenance.jpg` | JPEG | 230 KB | Services card 4 | OK |
| `service-fire-stopping-surveys.jpg` | JPEG | 136 KB | Services card 5 | OK |
| `service-fire-stopping-installations.jpg` | JPEG | 233 KB | Services card 6 | OK |
| `icon-call.svg` | SVG | 4.8 KB | Contact — Call card | OK |
| `icon-email.svg` | SVG | 1.6 KB | Contact — Email card | OK |
| `icon-address.svg` | SVG | 1.7 KB | Contact — Address card | OK |
| `icon-arrow-white.svg` | SVG | 0.7 KB | Bottom services CTA arrow | OK |
| `icon-arrow-petrol.svg` | SVG | 0.7 KB | "Find Out More" card arrow | OK |
| `line-divider.svg` | SVG | 0.26 KB | Services divider line | OK |
| `line-divider-footer.svg` | SVG | 0.26 KB | Footer copyright divider | OK |

## Notes

- Figma exported all photos as JPEGs with `.png` extensions — renamed after `file` verification.
- Two service photos (Fire Risk Assessment, Fire Door Inspections) are notably smaller (8–12 KB) than peers (130–600 KB). They will still render but at lower fidelity. If the client supplies higher-resolution masters, swap them in by filename.
- The "Passive Fire Protection" editorial section in Figma has a placeholder grey block (#D9D9D9) where an image should go. No real image was supplied — the build renders a styled placeholder so the layout is preserved; replace `passive-fire-protection.jpg` when available.

## Failed downloads

None.
