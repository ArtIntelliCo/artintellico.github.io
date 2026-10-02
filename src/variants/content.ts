import { company } from '../data/company';
import { partners } from '../data/partners';
import { serviceKeys } from '../data/services';
import { localePath, locales, t, type Locale } from '../i18n';

/**
 * Тексты сайта для вариантов, которые берут их из словарей, а не держат свою копию
 * в script.js: window.AIC.content[lang]. Новые варианты (winnt, web90, web2010)
 * строятся на этом объекте.
 */
export function siteContent(locale: Locale) {
  const dict = t(locale);
  return {
    meta: dict.meta,
    hero: dict.hero,
    services: {
      heading: dict.services.heading,
      items: serviceKeys.map((key) => ({ key, ...dict.services.items[key] })),
    },
    partners: {
      heading: dict.partners.heading,
      items: partners.map(({ name, url, logoUrl, height }) => ({ name, logo: logoUrl, height, ...(url ? { url } : {}) })),
    },
    contacts: { ...dict.contacts, email: company.email },
    footer: {
      rights: dict.footer.rights,
      slogan: dict.footer.slogan,
      legalName: company.legalName[locale],
      year: new Date().getFullYear(),
    },
    classic: { label: dict.nav.classic, url: localePath[locale] },
  };
}

export type SiteContent = ReturnType<typeof siteContent>;

export function allSiteContent(): Record<Locale, SiteContent> {
  return Object.fromEntries(locales.map((locale) => [locale, siteContent(locale)])) as Record<Locale, SiteContent>;
}
