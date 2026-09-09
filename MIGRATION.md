# Migrating from FlairUp to ShipStyles

ShipStyles is the new canonical name for FlairUp. The API and runtime
styling behavior are unchanged — only the package, repository, and docs
moved.

## Package swap

```bash
npm uninstall flairup
npm install shipstyles
```

```diff
- import { createSheet, cx } from 'flairup';
+ import { createSheet, cx } from 'shipstyles';
```

```diff
- const { createSheet, cx } = require('flairup');
+ const { createSheet, cx } = require('shipstyles');
```

The public API is unchanged: `createSheet`, `cx`, and the
`CreateSheetInput`, `CreateSheetOptions`, `SheetRootNode`, and `Styles`
types work exactly as before. CSS generation, hashing, composition, SSR
behavior, DOM mounting, and output semantics are identical.

## What stays the same (on purpose)

- **Style-tag IDs.** Existing generated style-tag IDs retain the legacy
  `flairup-` prefix in ShipStyles 1.x for SSR and hydration compatibility.
  Treat the generated ID as an implementation detail; it may change in a
  future major version. Consumers must not depend on it.
- **History.** The FlairUp repository, its releases, tags, issues, and
  CHANGELOG remain available. A temporary `flairup` compatibility package
  that re-exports ShipStyles will remain available during the transition.

## What to avoid

- Do not install both `flairup` and `shipstyles` deliberately. Pick one:
  new code should depend on `shipstyles`.
- Do not hardcode generated class names or style-tag IDs — they are content
  hashes and implementation details.

## Links

- Canonical repository: https://github.com/ealush/shipstyles
- npm package: https://www.npmjs.com/package/shipstyles
- Docs: https://ealush.github.io/shipstyles
