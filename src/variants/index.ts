import { t, type Locale } from '../i18n';
import { defaultVariant as defaultVariantId } from './default';

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
  'xmas',
] as const;
export type VariantId = (typeof variantIds)[number];

/** Варианты, которые собираются из src/variants/<id>/ (все, кроме классического). */
export type RetroVariantId = Exclude<VariantId, 'classic'>;

/** Вариант на главной странице; меняется в ./default.ts. */
export const defaultVariant = defaultVariantId as RetroVariantId;

interface Variant {
  /** Путь внутри локали: '' — корень локали (у варианта по умолчанию). */
  slug: string;
  /** Собственный адрес варианта, когда он не на главной. */
  ownSlug: string;
  /** Год появления системы, которую изображает вариант. */
  year?: string;
  name: string | Record<Locale, string>;
}

const variantList: Record<VariantId, Omit<Variant, 'slug'>> = {
  classic: { ownSlug: 'classic/', name: { uk: 'Класичний сайт', ru: 'Классический сайт', en: 'Classic site' } },
  apple: { ownSlug: 'apple/', year: '1977', name: 'Apple ][' },
  dos: { ownSlug: 'dos/', year: '1981', name: 'DOS' },
  lisa: { ownSlug: 'lisa/', year: '1983', name: 'Apple Lisa' },
  nc: { ownSlug: 'nc/', year: '1986', name: 'Norton Commander' },
  unix: { ownSlug: 'unix/', year: '1986', name: 'UNIX 4.3 BSD' },
  win31: { ownSlug: 'win31/', year: '1993', name: 'Windows 3.11' },
  mc: { ownSlug: 'mc/', year: '1994', name: 'Midnight Commander' },
  winnt: { ownSlug: 'winnt/', year: '1996', name: 'Windows NT 4.0' },
  linux: { ownSlug: 'linux/', year: '1996', name: 'Linux, X11 + fvwm' },
  web90: { ownSlug: 'web90/', year: '1998', name: { uk: 'Сайт 90-х', ru: 'Сайт 90-х', en: '90s website' } },
  web2010: { ownSlug: 'web2010/', year: '2012', name: { uk: 'Сайт 2010-х', ru: 'Сайт 2010-х', en: '2010s website' } },
  ai: { ownSlug: 'ai/', year: String(new Date().getFullYear()), name: 'AI' },
  xmas: { ownSlug: 'xmas/', year: String(new Date().getFullYear()), name: { uk: 'Різдво', ru: 'Рождество', en: 'Christmas' } },
};

export const variants = Object.fromEntries(
  variantIds.map((id) => [id, { ...variantList[id], slug: id === defaultVariant ? '' : variantList[id].ownSlug }])
) as Record<VariantId, Variant>;

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

/** Заголовок страницы варианта; у главной страницы и классического сайта — заголовок сайта. */
export function variantTitle(id: VariantId, locale: Locale): string {
  const title = t(locale).meta.title;
  return id === defaultVariant || id === 'classic' ? title : `${variantName(id, locale)} — ${title}`;
}
