import { describe, expect, it } from 'bun:test';
import { cnLorem } from '../src';

describe('phrase', () => {
  it('length', () => {
    expect(cnLorem.phrase({ length: 10 }).length).toBe(10);
    expect(cnLorem.phrase({ length: 1e6 }).length).toBe(1e6);
  });
});

describe('sentence', () => {
  it('length', () => {
    expect(cnLorem.sentence({ length: 10 }).length).toBe(10);
    expect(cnLorem.sentence({ length: 1e6 }).length).toBe(1e6);
  });
});

describe('paragraph', () => {
  it('length', () => {
    expect(cnLorem.paragraph({ length: 10 }).length).toBe(10);
    expect(cnLorem.paragraph({ length: 1e6 }).length).toBe(1e6);
  });
});

describe('article', () => {
  it('length', () => {
    expect(cnLorem.article({ length: 10 }).length).toBe(10);
    expect(cnLorem.article({ length: 1e6 }).length).toBe(1e6);
  });
});

describe('name', () => {
  it('length', () => {
    expect(cnLorem.name(true).length).toBe(3);
  });
});
