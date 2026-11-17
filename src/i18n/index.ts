import de from './de.json';
import en from './en.json';
import es from './es.json';
import fr from './fr.json';
import it from './it.json';
import pt from './pt.json';
import ru from './ru.json';
import uk from './uk.json';

/** Порядок задаёт переключатели языков (в шапке и во всех вариантах) и список hreflang. */
export const locales = ['en', 'de', 'fr', 'es', 'pt', 'it', 'uk', 'ru'] as const;
export type Locale = (typeof locales)[number];

/** Украинский словарь задаёт форму: остальные локали обязаны ей соответствовать. */
export type Dictionary = typeof uk;

const dictionaries: Record<Locale, Dictionary> = { uk, ru, en, de, fr, es, pt, it };

export function t(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Классическая версия сайта: живёт в /classic/, основной стала DOS-версия. */
export const localePath: Record<Locale, string> = {
  uk: '/classic/',
  ru: '/ru/classic/',
  en: '/en/classic/',
  de: '/de/classic/',
  fr: '/fr/classic/',
  es: '/es/classic/',
  pt: '/pt/classic/',
  it: '/it/classic/',
};

/** Префикс адресов локали: украинская — в корне, остальные — в /<код>/. */
export const localePrefix: Record<Locale, string> = Object.fromEntries(
  locales.map((locale) => [locale, locale === 'uk' ? '/' : `/${locale}/`])
) as Record<Locale, string>;


export const htmlLang: Record<Locale, string> = {
  uk: 'uk',
  ru: 'ru',
  en: 'en',
  de: 'de',
  fr: 'fr',
  es: 'es',
  pt: 'pt',
  it: 'it',
};

export const ogLocale: Record<Locale, string> = {
  uk: 'uk_UA',
  ru: 'ru_UA',
  en: 'en_US',
  de: 'de_DE',
  fr: 'fr_FR',
  es: 'es_ES',
  pt: 'pt_PT',
  it: 'it_IT',
};

export const localeName: Record<Locale, string> = {
  uk: 'UK',
  ru: 'RU',
  en: 'EN',
  de: 'DE',
  fr: 'FR',
  es: 'ES',
  pt: 'PT',
  it: 'IT',
};

/** Название языка на нём самом — для выпадающих списков языков. */
export const localeNative: Record<Locale, string> = {
  uk: 'Українська',
  en: 'English',
  ru: 'Русский',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  pt: 'Português',
  it: 'Italiano',
};
