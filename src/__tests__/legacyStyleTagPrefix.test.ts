import { createSheet } from '../index.js';
import { afterEach, describe, expect, it } from 'vitest';

afterEach(() => {
  document.querySelectorAll('style[id^="flairup-"]').forEach((node) => {
    node.remove();
  });
});

// ShipStyles 1.x intentionally retains the legacy flairup- style-tag ID
// prefix so server-rendered tags hydrate without duplication. Treat the
// generated ID as an implementation detail; it may change in a future
// major version.
describe('legacy flairup- style-tag prefix', () => {
  it('keeps the legacy prefix for newly mounted sheets', () => {
    const sheet = createSheet('legacyPrefix');
    sheet.create({ box: { color: 'red' } });

    expect(
      document.querySelectorAll('style#flairup-legacyPrefix'),
    ).toHaveLength(1);
  });

  it('adopts a server-rendered flairup-{name} tag without duplicating it', () => {
    const server = createSheet('legacyAdopt', null);
    server.create({ box: { color: 'red' } });

    const serverTag = document.createElement('style');
    serverTag.id = 'flairup-legacyAdopt';
    serverTag.innerHTML = server.getStyle();
    document.head.appendChild(serverTag);

    const client = createSheet('legacyAdopt');
    expect(client.isApplied()).toBe(true);
    client.create({ box: { color: 'red' }, extra: { width: '10px' } });

    expect(document.querySelectorAll('style#flairup-legacyAdopt')).toHaveLength(
      1,
    );
    const css =
      document.querySelector('style#flairup-legacyAdopt')?.innerHTML ?? '';
    expect(css.match(/color:red/g)).toHaveLength(1);
    expect(css).toContain('width:10px');
  });
});
