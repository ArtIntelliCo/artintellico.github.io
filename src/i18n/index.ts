import en from './en.json';
import ru from './ru.json';
import uk from './uk.json';

/** Порядок задаёт и переключатель языков в шапке, и список hreflang. */
export const locales = ['uk', 'en', 'ru'] as const;
export type Locale = (typeof locales)[number];

/** Украинский словарь задаёт форму: остальные локали обязаны ей соответствовать. */
export type Dictionary = typeof uk;

const dictionaries: Record<Locale, Dictionary> = { uk, ru, en };

export function t(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export const localePath: Record<Locale, string> = {
  uk: '/',
  ru: '/ru/',
  en: '/en/',
};

export const htmlLang: Record<Locale, string> = {
  uk: 'uk',
  ru: 'ru',
  en: 'en',
};

export const ogLocale: Record<Locale, string> = {
  uk: 'uk_UA',
  ru: 'ru_UA',
  en: 'en_US',
};

export const localeName: Record<Locale, string> = {
  uk: 'UK',
  ru: 'RU',
  en: 'EN',
};
