import { describe, expect, it } from 'vitest';
import uk from '../src/i18n/uk.json';
import ru from '../src/i18n/ru.json';
import en from '../src/i18n/en.json';

function keyPaths(value: unknown, prefix = ''): string[] {
  if (value === null || typeof value !== 'object') return [prefix];
  return Object.entries(value as Record<string, unknown>)
    .flatMap(([key, nested]) => keyPaths(nested, prefix ? `${prefix}.${key}` : key))
    .sort();
}

function values(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (value === null || typeof value !== 'object') return [];
  return Object.values(value as Record<string, unknown>).flatMap(values);
}

describe('словари локалей', () => {
  it('русский словарь повторяет структуру украинского', () => {
    expect(keyPaths(ru)).toEqual(keyPaths(uk));
  });

  it('английский словарь повторяет структуру украинского', () => {
    expect(keyPaths(en)).toEqual(keyPaths(uk));
  });

  it('не содержат пустых строк', () => {
    for (const dict of [uk, ru, en]) {
      expect(values(dict).filter((value) => value.trim() === '')).toEqual([]);
    }
  });

  it('содержат десять услуг в каждой локали', () => {
    for (const dict of [uk, ru, en]) {
      expect(Object.keys(dict.services.items)).toHaveLength(10);
    }
  });
});
