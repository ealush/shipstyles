# ShipStyles brand

ShipStyles
Ship styled UI packages without CSS imports or bundler setup.

## Concept

The mark is a sailboat whose sail carries `{ }` — shipping styles, written in
code. The hull sits on two waves. Outlines use ShipStyles Navy; sail, hull,
and reversed variants use White; the avatar tile uses ShipStyles Blue.

## Palette

| Token            | Hex       | Use                                      |
| ---------------- | --------- | ---------------------------------------- |
| ShipStyles Navy  | `#071A39` | Logo outlines, braces, primary text      |
| ShipStyles Blue  | `#3292EA` | Avatar tile, brand backgrounds, accents  |
| White            | `#FFFFFF` | Sail, hull, reversed logo                |

Matching CSS custom properties and JSON tokens live in
[`brand/tokens/`](tokens/brand-tokens.json).

## Canonical assets

All masters live under [`brand/`](brand/README.md):

- `svg/shipstyles-mark.svg` — full-color mark for light backgrounds.
- `svg/shipstyles-mark-navy.svg` — single-color mark for light backgrounds.
- `svg/shipstyles-mark-white.svg` — single-color mark for dark backgrounds.
  The white mark is the only variant designed for dark backgrounds; the navy
  structure of the full-color mark is intentionally not for navy backgrounds.
- `svg/shipstyles-mark-monochrome.svg` — single-color master.
- `svg/shipstyles-avatar.svg` — blue rounded-square avatar for npm, GitHub,
  and social profiles.
- `svg/shipstyles-lockup-horizontal.svg` — mark plus wordmark for website
  headers and documentation.
- `svg/shipstyles-lockup-horizontal-white.svg` — reversed lockup for dark
  headers.

The website serves copies from `website/public/` (favicons, PWA icons,
manifest, social card, in-page lockups). Those copies are generated from the
`brand/` masters; edit the masters, not the copies.

## Usage rules

- Prefer SVG whenever the destination supports it.
- Use the full-color mark on white, pale neutral, or ShipStyles Blue.
- Use the white monochrome mark on dark backgrounds.
- Keep at least 10% of the mark's width as clear space around it.
- Minimum size for the detailed mark is 32 px. The 16 px export exists only
  for legacy favicon contexts (the ICO also contains 32 px and 48 px frames).
- Do not stretch, rotate, add effects, recolor individual parts, or alter
  the braces.

The horizontal lockup uses DejaVu Sans Bold converted to vector paths, so it
has no external font dependency.
