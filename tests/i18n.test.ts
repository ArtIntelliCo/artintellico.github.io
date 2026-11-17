import { describe, expect, it } from 'vitest';
import uk from '../src/i18n/uk.json';
import ru from '../src/i18n/ru.json';
import en from '../src/i18n/en.json';
import de from '../src/i18n/de.json';
import fr from '../src/i18n/fr.json';
import es from '../src/i18n/es.json';
import pt from '../src/i18n/pt.json';
import it_ from '../src/i18n/it.json';

const translated = { de, fr, es, pt, it: it_ };

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

  it('немецкий, французский, испанский, португальский и итальянский словари повторяют структуру украинского', () => {
    for (const [locale, dict] of Object.entries(translated)) {
      expect(keyPaths(dict), locale).toEqual(keyPaths(uk));
    }
  });

  it('новые словари переведены, а не скопированы с английского', () => {
    for (const [locale, dict] of Object.entries(translated)) {
      expect(dict.hero.title, locale).not.toBe(en.hero.title);
      expect(dict.services.items.concept.details, locale).not.toBe(en.services.items.concept.details);
      expect(dict.footer.slogan, locale).not.toBe(en.footer.slogan);
    }
  });

  it('не содержат пустых строк', () => {
    for (const dict of [uk, ru, en, ...Object.values(translated)]) {
      expect(values(dict).filter((value) => value.trim() === '')).toEqual([]);
    }
  });

  it('содержат десять услуг в каждой локали', () => {
    for (const dict of [uk, ru, en, ...Object.values(translated)]) {
      expect(Object.keys(dict.services.items)).toHaveLength(10);
    }
  });
});
