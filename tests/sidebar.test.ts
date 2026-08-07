import { describe, test, expect } from 'bun:test';

function flatten(items: { id: string; children?: any[] }[]): { id: string }[] {
  const result: { id: string }[] = [];
  for (const item of items) {
    result.push(item);
    if (item.children) result.push(...flatten(item.children));
  }
  return result;
}

function filterItems(items: { label: string }[], query: string) {
  if (!query) return items;
  const q = query.toLowerCase();
  return items.filter(i => i.label.toLowerCase().includes(q));
}

describe('flatten', () => {
  test('flat list stays flat', () => {
    const items = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
    expect(flatten(items).map(i => i.id)).toEqual(['a', 'b', 'c']);
  });

  test('nested items are flattened', () => {
    const items = [
      { id: 'a' },
      { id: 'b', children: [{ id: 'b1' }, { id: 'b2' }] },
      { id: 'c' },
    ];
    expect(flatten(items).map(i => i.id)).toEqual(['a', 'b', 'b1', 'b2', 'c']);
  });
});

describe('filterItems', () => {
  const items = [{ label: 'Home' }, { label: 'Dashboard' }, { label: 'Settings' }];

  test('empty query returns all', () => {
    expect(filterItems(items, '')).toEqual(items);
  });

  test('matches substring', () => {
    expect(filterItems(items, 'da')).toEqual([{ label: 'Dashboard' }]);
  });

  test('case insensitive', () => {
    expect(filterItems(items, 'SETTINGS')).toEqual([{ label: 'Settings' }]);
  });

  test('no match returns empty', () => {
    expect(filterItems(items, 'zzz')).toEqual([]);
  });
});


import { sectionForActiveHref, sectionIds, initialOpenSections } from '../src/sections.js';
import type { NavItem } from '../src/types.js';

const NAV: NavItem[] = [
  { id: 'today', label: 'Today', children: [{ id: 'home', href: '/', label: 'Home' }, { id: 'review', href: '/review', label: 'Review' }] },
  { id: 'agents', label: 'Agents', children: [{ id: 'team', href: '/team', label: 'Team' }] },
  { id: 'analyze', label: 'Analyze', children: [{ id: 'insights', href: '/insights', label: 'Insights' }, { id: 'search', href: '/search', label: 'Search' }] },
  { id: 'settings', href: '/settings', label: 'Settings' },
];

describe('sectionIds', () => {
  test('lists only items with children', () => {
    expect(sectionIds(NAV)).toEqual(['today', 'agents', 'analyze']);
  });
});

describe('sectionForActiveHref', () => {
  test('finds the section holding the active page', () => {
    expect(sectionForActiveHref(NAV, '/insights')?.id).toBe('analyze');
  });

  test('returns null for a top-level page', () => {
    expect(sectionForActiveHref(NAV, '/settings')).toBeNull();
  });

  test('returns null for an unknown href', () => {
    expect(sectionForActiveHref(NAV, '/missing')).toBeNull();
  });

  test('returns null for an empty href', () => {
    expect(sectionForActiveHref(NAV, '')).toBeNull();
  });
});

describe('initialOpenSections', () => {
  test('every section open by default', () => {
    expect([...initialOpenSections(NAV, null)]).toEqual(['today', 'agents', 'analyze']);
  });

  test('persisted state is authoritative (user closed sections stay closed)', () => {
    expect([...initialOpenSections(NAV, ['analyze'])]).toEqual(['analyze']);
    expect([...initialOpenSections(NAV, ['today', 'agents'])]).toEqual(['today', 'agents']);
  });

  test('empty persisted list stays closed for all sections', () => {
    expect([...initialOpenSections(NAV, [])]).toEqual([]);
  });
});
