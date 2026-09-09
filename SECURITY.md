# Security policy

## Supported versions

Only the current `shipstyles@1.x` release line receives security fixes.
The legacy `flairup` package line is in compatibility mode: it re-exports
ShipStyles and will not receive independent fixes — upgrade to `shipstyles`.

## Reporting a vulnerability

Do not open a public issue for a suspected vulnerability. Report it
privately through
[GitHub Security Advisories](https://github.com/ealush/shipstyles/security/advisories/new)
for this repository.

Include:

- Affected versions and a minimal reproduction.
- The impact you see (unexpected CSS output, DOM behavior, build output).
- Any workaround you found.

You will receive an initial response within a reasonable time, and fixes
are released through the normal semantic-release flow once validated.
