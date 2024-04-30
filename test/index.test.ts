import { describe, expect, it } from 'bun:test';
import cnLorem from '../src';

describe('phrase', () => {
  it('length', () => {
    expect(cnLorem.phrase({ len: 10 }).length).toBe(10);
    expect(cnLorem.phrase({ len: 1e6 }).length).toBe(1e6);
  });
});

describe('sentence', () => {
  it('length', () => {
    expect(cnLorem.sentence({ len: 10 }).length).toBe(10);
    expect(cnLorem.sentence({ len: 1e6 }).length).toBe(1e6);
  });
});

describe('paragraph', () => {
  it('length', () => {
    expect(cnLorem.paragraph({ len: 10 }).length).toBe(10);
    expect(cnLorem.paragraph({ len: 1e6 }).length).toBe(1e6);
  });
});

describe('article', () => {
  it('length', () => {
    expect(cnLorem.article({ len: 10 }).length).toBe(10);
    expect(cnLorem.article({ len: 1e6 }).length).toBe(1e6);
  });
});

describe('name', () => {
  it('length', () => {
    expect(cnLorem.name({ len: 3 }).length).toBe(3);
    expect(cnLorem.name({ len: 2 }).length).toBe(2);
  });
});
