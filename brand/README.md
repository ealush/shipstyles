# ShipStyles brand kit

Production-ready assets for the ShipStyles `{ }` sailboat identity.

## Quick choices

| Use | Recommended asset |
| --- | --- |
| Website header or documentation | `svg/shipstyles-lockup-horizontal.svg` |
| npm, GitHub, or social avatar | `svg/shipstyles-avatar.svg` |
| Standalone mark on a light background | `svg/shipstyles-mark.svg` |
| Single-color mark on a light background | `svg/shipstyles-mark-navy.svg` |
| Mark on a dark background | `svg/shipstyles-mark-white.svg` |
| Browser favicon | `web/favicon.ico` |
| Apple touch icon | `web/apple-touch-icon.png` |
| Web app icons | `web/icon-192.png`, `web/icon-512.png` |
| Social preview | `png/social/shipstyles-social-1200x630.png` |

## Palette

| Token | Hex | Use |
| --- | --- | --- |
| ShipStyles Navy | `#071A39` | Logo outlines, braces, primary text |
| ShipStyles Blue | `#3292EA` | Avatar tile, brand backgrounds, accents |
| White | `#FFFFFF` | Sail, hull, reversed logo |

Matching CSS custom properties and JSON tokens are included in `tokens/`.

## Asset structure

- `svg/`: scalable masters, monochrome variants, avatar, and horizontal lockups.
- `png/transparent/`: transparent full-color marks from 16 to 1024 px.
- `png/avatar/`: blue rounded-square avatars from 64 to 1024 px.
- `png/monochrome/`: navy and white transparent marks.
- `png/lockup/`: horizontal logo lockups.
- `png/social/`: 1200×630 social sharing card.
- `web/`: ICO favicon, Apple touch icon, and PWA icons.
- `source/`: selected reference and transparent source extraction.
- `preview/`: visual QA sheet.
- `scripts/`: reproducible asset generator.

## Usage rules

- Prefer SVG whenever the destination supports it.
- Use the full-color transparent mark on white, pale neutral, or ShipStyles Blue.
- Use the white monochrome mark on dark backgrounds. The navy structure of the full-color mark is intentionally not designed for a navy background.
- Keep at least 10% of the mark's width as clear space around it.
- Do not stretch, rotate, add effects, recolor individual parts, or alter the braces.
- Use at least 32 px for the detailed mark. The 16 px export is available for legacy favicon contexts, but the ICO also contains 32 px and 48 px frames.

The horizontal lockup uses DejaVu Sans Bold converted to vector paths, so it has no external font dependency.

