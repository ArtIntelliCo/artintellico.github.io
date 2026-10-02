import { t, type Locale } from '../i18n';

/**
 * Варианты оформления сайта. Порядок задаёт переключатель в футере:
 * сначала классический сайт, дальше — по хронологии систем.
 */
export const variantIds = [
  'classic',
  'apple',
  'dos',
  'lisa',
  'nc',
  'unix',
  'win31',
  'mc',
  'winnt',
  'linux',
  'web90',
  'web2010',
  'ai',
] as const;
export type VariantId = (typeof variantIds)[number];

/** Варианты, которые собираются из src/variants/<id>/ (все, кроме классического). */
export type RetroVariantId = Exclude<VariantId, 'classic'>;

interface Variant {
  /** Путь внутри локали: '' — корень локали. */
  slug: string;
  /** Год появления системы, которую изображает вариант. */
  year?: string;
  name: string | Record<Locale, string>;
}

export const variants: Record<VariantId, Variant> = {
  classic: { slug: 'classic/', name: { uk: 'Класичний сайт', ru: 'Классический сайт', en: 'Classic site' } },
  apple: { slug: 'apple/', year: '1977', name: 'Apple ][' },
  dos: { slug: 'dos/', year: '1981', name: 'DOS' },
  lisa: { slug: 'lisa/', year: '1983', name: 'Apple Lisa' },
  nc: { slug: '', year: '1986', name: 'Norton Commander' },
  unix: { slug: 'unix/', year: '1986', name: 'UNIX 4.3 BSD' },
  win31: { slug: 'win31/', year: '1993', name: 'Windows 3.11' },
  mc: { slug: 'mc/', year: '1994', name: 'Midnight Commander' },
  winnt: { slug: 'winnt/', year: '1996', name: 'Windows NT 4.0' },
  linux: { slug: 'linux/', year: '1996', name: 'Linux, X11 + fvwm' },
  web90: { slug: 'web90/', year: '1998', name: { uk: 'Сайт 90-х', ru: 'Сайт 90-х', en: '90s website' } },
  web2010: { slug: 'web2010/', year: '2012', name: { uk: 'Сайт 2010-х', ru: 'Сайт 2010-х', en: '2010s website' } },
  ai: { slug: 'ai/', year: String(new Date().getFullYear()), name: 'AI' },
};

const localePrefix: Record<Locale, string> = { uk: '/', ru: '/ru/', en: '/en/' };

export function variantPath(id: VariantId, locale: Locale): string {
  return localePrefix[locale] + variants[id].slug;
}

export function variantPaths(id: VariantId): Record<Locale, string> {
  return { uk: variantPath(id, 'uk'), ru: variantPath(id, 'ru'), en: variantPath(id, 'en') };
}

export function variantName(id: VariantId, locale: Locale): string {
  const { name } = variants[id];
  return typeof name === 'string' ? name : name[locale];
}

export const variantSlugs = Object.fromEntries(variantIds.map((id) => [id, variants[id].slug])) as Record<
  VariantId,
  string
>;

/** Заголовок страницы варианта; у Norton Commander, главной страницы, — заголовок сайта. */
export function variantTitle(id: VariantId, locale: Locale): string {
  const title = t(locale).meta.title;
  return id === 'nc' || id === 'classic' ? title : `${variantName(id, locale)} — ${title}`;
}
