# Contributing to ShipStyles

## Setup

```bash
git clone https://github.com/ealush/shipstyles.git
cd shipstyles
npm ci
```

The website is a separate Next.js app with its own dependencies:

```bash
cd website
npm ci
```

`website` depends on the local package (`"shipstyles": "file:.."`), so build
the library before building the site: `npm run build` from the repository
root.

## Repository layout

- `src/` — the runtime (`createSheet`, `cx`, keyframes, sheet mounting).
- `src/__tests__/` — Vitest unit and behavior suites.
- `acceptance/` — packed-package tests (`node:test`) run against a real
  tarball in ESM, CJS, TypeScript, and Vite consumers.
- `website/` — Next.js documentation site, statically exported to GitHub
  Pages under `/shipstyles`.
- `brand/` — canonical logo masters and design tokens. Edit the masters,
  not the website's copies under `website/public/`.
- `BRAND.md` — logo and palette usage rules.

## Commit convention

[Conventional Commits](https://www.conventionalcommits.org/). Releases are
cut by semantic-release from `main`:

- `fix:` → patch, `feat:` → minor, `feat!:` / `BREAKING CHANGE:` → major.
- `docs:`, `chore:`, `ci:`, `test:`, `refactor:` do not release.

Do not create version commits or tags by hand; the release workflow owns
`CHANGELOG.md`, `package.json` version bumps, tags, and GitHub releases.

## Test commands

```bash
npm run lint        # eslint over src/
npm run test        # vitest unit suites
npm run test:all    # unit suites + packed-package acceptance
npm pack --dry-run  # inspect publish contents
```

Website:

```bash
cd website
npm run lint
npm run build       # static export; verify no /shipstyles path regressions
```

## PR expectations

- Keep runtime behavior changes out of rebrand/chore PRs.
- Add or update tests for behavior changes; keep existing CSS-generation
  snapshots byte-identical unless the change is the point.
- Never depend on generated style-tag IDs (`flairup-` prefix) in new code;
  they are a backward-compatibility detail, covered only by the dedicated
  regression test.
- Run the full gates (`npm run test:all`, website lint + build) before
  requesting review.
