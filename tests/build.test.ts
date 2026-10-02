import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { beforeAll, describe, expect, it } from 'vitest';

/** Классическая версия сайта: переехала в /classic/. */
const pages = {
  uk: 'dist/classic/index.html',
  ru: 'dist/ru/classic/index.html',
  en: 'dist/en/classic/index.html',
};

/** Norton Commander — основной вариант, занимает корень и прежние адреса локалей. */
const retro = {
  uk: 'dist/index.html',
  ru: 'dist/ru/index.html',
  en: 'dist/en/index.html',
};

/** Ретро-варианты по своим адресам ('' — корень локали). */
const variantSlugs = ['', 'dos/', 'unix/', 'apple/', 'lisa/', 'linux/', 'mc/', 'win31/', 'winnt/', 'web90/', 'web2010/', 'ai/'];
const localePrefix = { uk: '/', ru: '/ru/', en: '/en/' };
const variantPages = Object.entries(localePrefix).flatMap(([locale, prefix]) =>
  variantSlugs.map((slug) => ({ locale, slug, url: prefix + slug, file: `dist${prefix}${slug}index.html` }))
);
const allPages = [...Object.values(pages), ...variantPages.map((page) => page.file)];

const slogans = {
  uk: 'Ми бачили, як зароджувалося IT.',
  ru: 'Мы видели, как зарождалось IT.',
  en: 'We saw IT being born.',
};

const read = (path: string) => readFileSync(path, 'utf8');

beforeAll(() => {
  execSync('npm run build', { stdio: 'inherit' });
});

describe('страницы локалей', () => {
  it('собираются все три локали и редирект /uk/', () => {
    for (const path of Object.values(pages)) {
      expect(existsSync(path), path).toBe(true);
    }
    expect(existsSync('dist/uk/index.html')).toBe(true);
  });

  it('объявляют собственный язык', () => {
    expect(read(pages.uk)).toContain('<html lang="uk"');
    expect(read(pages.ru)).toContain('<html lang="ru"');
    expect(read(pages.en)).toContain('<html lang="en"');
  });

  it('указывают canonical на себя', () => {
    expect(read(pages.uk)).toContain('rel="canonical" href="https://artintellico.com/classic/"');
    expect(read(pages.ru)).toContain('rel="canonical" href="https://artintellico.com/ru/classic/"');
    expect(read(pages.en)).toContain('rel="canonical" href="https://artintellico.com/en/classic/"');
  });

  it('перечисляют все альтернативные языки и x-default', () => {
    for (const path of Object.values(pages)) {
      const html = read(path);
      expect(html, path).toContain('hreflang="x-default" href="https://artintellico.com/en/classic/"');
      expect(html, path).toContain('hreflang="uk" href="https://artintellico.com/classic/"');
      expect(html, path).toContain('hreflang="ru" href="https://artintellico.com/ru/classic/"');
      expect(html, path).toContain('hreflang="en" href="https://artintellico.com/en/classic/"');
    }
  });

  it('переносят контейнер GTM вместе с noscript-фолбэком', () => {
    for (const path of Object.values(pages)) {
      const html = read(path);
      expect(html, path).toContain('GTM-W3Z644V');
      expect(html, path).toContain('<noscript>');
    }
  });

  it('отдают на /uk/ переход на корень', () => {
    const html = read('dist/uk/index.html');
    expect(html).toContain('http-equiv="refresh"');
    expect(html).toContain('/');
  });

  it('не тянут наследие 2019 года', () => {
    for (const path of Object.values(pages)) {
      const html = read(path).toLowerCase();
      expect(html, path).not.toContain('jquery');
      expect(html, path).not.toContain('bootstrap');
      expect(html, path).not.toContain('fonts.googleapis.com');
      expect(html, path).not.toContain('themefisher');
    }
  });

  it('используют уникальные заголовки для каждой локали', () => {
    const titles = Object.values(pages).map((path) => /<title>(.*?)<\/title>/s.exec(read(path))?.[1]);
    expect(new Set(titles).size).toBe(3);
  });
});

describe('шапка и подвал', () => {
  it('дают переключатель на две другие локали', () => {
    const uk = read(pages.uk);
    expect(uk).toContain('href="/ru/classic/"');
    expect(uk).toContain('href="/en/classic/"');

    const ru = read(pages.ru);
    expect(ru).toContain('href="/classic/"');
    expect(ru).toContain('href="/en/classic/"');
  });

  it('дают в шапке выбор варианта сайта на том же языке', () => {
    for (const [locale, path] of Object.entries(pages)) {
      const header = read(path).split('<header')[1]?.split('</header>')[0] ?? '';
      const prefix = localePrefix[locale as keyof typeof localePrefix];
      expect(header, path).toContain('data-variant-switcher');
      for (const slug of variantSlugs) {
        expect(header, `${path} → ${prefix}${slug}`).toContain(`href="${prefix}${slug}"`);
      }
    }
  });

  it('запоминают язык для DOS-версии', () => {
    for (const path of Object.values(pages)) {
      expect(read(path), path).toContain('aic-lang');
    }
  });

  it('помечают текущий язык как активный', () => {
    expect(read(pages.ru)).toContain('aria-current="true"');
  });

  it('выстраивают языки в порядке UK, EN, RU', () => {
    for (const path of Object.values(pages)) {
      const order = [...read(path).matchAll(/>(UK|EN|RU)</g)].map((m) => m[1]);
      expect(order, path).toEqual(['UK', 'EN', 'RU']);
    }
  });

  it('показывают текущий год в подвале', () => {
    const year = String(new Date().getFullYear());
    for (const path of Object.values(pages)) {
      expect(read(path), path).toContain(year);
    }
  });

  it('показывают юридическое наименование на языке локали', () => {
    expect(read(pages.uk)).toContain('ТОВ «АртІнтелліко»');
    expect(read(pages.ru)).toContain('ООО «АртИнтеллико»');
    expect(read(pages.en)).toContain('ArtIntelliCo LLC');
  });

  it('не показывают код ЄДРПОУ', () => {
    for (const path of Object.values(pages)) {
      expect(read(path), path).not.toContain('40656107');
    }
  });

  it('не выводят пустые реквизиты', () => {
    for (const path of Object.values(pages)) {
      const html = read(path);
      expect(html, path).not.toMatch(/ЄДРПОУ\s*<|ЄДРПОУ\s*·|Адреса:\s*</);
    }
  });

  it('пишут название компании без опечатки', () => {
    for (const path of Object.values(pages)) {
      expect(read(path), path).toContain('ArtIntelliCo');
      expect(read(path), path).not.toContain('AtrIntelliCo');
    }
  });
});

describe('первый экран', () => {
  it('содержит заголовок из словаря своей локали', () => {
    expect(read(pages.uk)).toContain('Ми створюємо ІТ рішення, що працюють');
    expect(read(pages.ru)).toContain('Мы создаём работающие ИТ решения');
    expect(read(pages.en)).toContain('We build IT solutions that work');
  });

  it('содержит ровно один h1 на страницу', () => {
    for (const path of Object.values(pages)) {
      expect(read(path).match(/<h1[\s>]/g)?.length, path).toBe(1);
    }
  });

  it('содержит canvas для нейросетевого фона', () => {
    for (const path of Object.values(pages)) {
      expect(read(path), path).toContain('data-neural-canvas');
    }
  });

  it('отдаёт фразы печатающейся строки в HTML, а не только из JS', () => {
    const hero = (path: string) => read(path).split('id="services"')[0];
    expect(hero(pages.uk)).toContain('розробляємо SaaS-платформи');
    expect(hero(pages.ru)).toContain('разрабатываем SaaS-платформы');
    expect(hero(pages.en)).toContain('build SaaS platforms');
  });

  it('красит печатающуюся строку в цвета логотипа', () => {
    for (const path of Object.values(pages)) {
      const hero = read(path).split('id="services"')[0];
      expect(hero, path).toMatch(/data-colors="[^"]*20769F/i);
      expect(hero, path).toMatch(/data-colors="[^"]*DF542F/i);
      expect(hero, path).toMatch(/data-colors="[^"]*1D2A46/i);
    }
  });

  it('прячет декоративную анимацию от скринридеров, оставляя текст', () => {
    for (const path of Object.values(pages)) {
      const html = read(path);
      expect(html, path).toMatch(/data-typed-output[^>]*aria-hidden="true"/);
      expect(html, path).toContain('sr-only');
    }
  });

  it('встраивает логотип как inline-SVG с подписью', () => {
    for (const path of Object.values(pages)) {
      const html = read(path);
      expect(html, path).toContain('<svg');
      expect(html, path).toContain('role="img"');
    }
  });
});

describe('блок услуг', () => {
  it('выводит десять карточек в каждой локали', () => {
    for (const path of Object.values(pages)) {
      expect(read(path).match(/<article/g)?.length, path).toBe(10);
    }
  });

  it('имеет якорь для навигации', () => {
    for (const path of Object.values(pages)) {
      expect(read(path), path).toContain('id="services"');
    }
  });

  it('предлагает инфраструктуру на базе Red Hat', () => {
    expect(read(pages.uk)).toContain('Інфраструктура компанії на базі Red Hat');
    expect(read(pages.ru)).toContain('Инфраструктура компании на базе Red Hat');
    expect(read(pages.en)).toContain('Company infrastructure on Red Hat');
  });

  it('переводит названия услуг', () => {
    expect(read(pages.uk)).toContain('Хмарні рішення');
    expect(read(pages.ru)).toContain('Облачные решения');
    expect(read(pages.en)).toContain('Cloud solutions');
  });

  it('предлагает разработку SaaS вместо прежнего блока UX/UI', () => {
    expect(read(pages.uk)).toContain('Розробка SaaS рішень');
    expect(read(pages.ru)).toContain('Разработка SaaS решений');
    expect(read(pages.en)).toContain('SaaS development');

    for (const path of Object.values(pages)) {
      expect(read(path), path).not.toContain('UX/UI');
    }
  });
});

describe('блок партнёров', () => {
  it('идёт сразу после блока услуг', () => {
    for (const path of Object.values(pages)) {
      const html = read(path);
      expect(html.indexOf('id="partners"'), path).toBeGreaterThan(html.indexOf('id="services"'));
      expect(html.indexOf('id="partners"'), path).toBeLessThan(html.indexOf('id="contacts"'));
    }
  });

  it('перечисляет всех семерых партнёров', () => {
    for (const path of Object.values(pages)) {
      const html = read(path);
      for (const partner of ['Red Hat', 'Microsoft', 'Amazon Web Services', 'Veeam', 'VMware', 'Dell', 'UNIO24']) {
        expect(html, `${path} / ${partner}`).toContain(partner);
      }
    }
  });

  it('переводит заголовок блока', () => {
    expect(read(pages.uk)).toContain('Наші партнери');
    expect(read(pages.ru)).toContain('Наши партнёры');
    expect(read(pages.en)).toContain('Our partners');
  });

  it('встраивает семь логотипов как inline-SVG', () => {
    for (const path of Object.values(pages)) {
      const section = read(path).split('id="partners"')[1]?.split('id="contacts"')[0] ?? '';
      expect(section.match(/<svg/g)?.length, path).toBe(7);
      for (const title of ['Red Hat', 'Microsoft', 'Amazon Web Services', 'Veeam', 'VMware', 'Dell', 'UNIO24']) {
        expect(section, `${path} / ${title}`).toContain(`<title>${title}</title>`);
      }
    }
  });

  it('показывает логотипы в фирменных цветах, а не монохромом', () => {
    const section = read(pages.uk).split('id="partners"')[1]?.split('id="contacts"')[0] ?? '';
    for (const color of ['#F25022', '#00A4EF', '#e00', '#00b336', '#007db8', '#ff5702']) {
      expect(section.toLowerCase(), color).toContain(color.toLowerCase());
    }
  });

  it('делает логотип UNIO24 ссылкой на сайт партнёра в новой вкладке', () => {
    for (const path of Object.values(pages)) {
      const section = read(path).split('id="partners"')[1]?.split('id="contacts"')[0] ?? '';
      const link = section.match(/<a[^>]*href="https:\/\/unio24\.com\/?"[^>]*>/)?.[0] ?? '';
      expect(link, path).not.toBe('');
      expect(link, path).toContain('target="_blank"');
      expect(link, path).toMatch(/rel="[^"]*noopener[^"]*"/);
      expect(section.match(/<a /g)?.length, path).toBe(1);
    }
  });
});

describe('контакты', () => {
  it('дают рабочую почту', () => {
    for (const path of Object.values(pages)) {
      expect(read(path), path).toContain('href="mailto:io@artintellico.com"');
    }
  });

  it('нигде не показывают телефон', () => {
    for (const path of Object.values(pages)) {
      const html = read(path);
      expect(html, path).not.toContain('tel:');
      expect(html, path).not.toContain('380960566642');
      expect(html, path).not.toContain('096 056 66 42');
    }
  });

  it('не содержат битого домена из старой версии', () => {
    for (const path of Object.values(pages)) {
      expect(read(path), path).not.toContain('io@artintelico.com');
    }
  });

  it('не содержат заглушку о реконструкции', () => {
    const html = Object.values(pages).map(read).join('\n').toLowerCase();
    expect(html).not.toContain('реконструкц');
  });

  it('имеют якорь для навигации', () => {
    for (const path of Object.values(pages)) {
      expect(read(path), path).toContain('id="contacts"');
    }
  });
});

describe('статические файлы', () => {
  it('содержат robots.txt со ссылкой на sitemap', () => {
    expect(existsSync('dist/robots.txt')).toBe(true);
    expect(read('dist/robots.txt')).toContain('https://artintellico.com/sitemap-index.xml');
  });

  it('генерируют sitemap со всеми локалями', () => {
    expect(existsSync('dist/sitemap-index.xml')).toBe(true);
    const sitemap = read('dist/sitemap-0.xml');
    expect(sitemap).toContain('https://artintellico.com/');
    expect(sitemap).toContain('https://artintellico.com/ru/');
    expect(sitemap).toContain('https://artintellico.com/en/');
    for (const page of variantPages) {
      expect(sitemap, page.url).toContain(`<loc>https://artintellico.com${page.url}</loc>`);
    }
    expect(sitemap).toContain('https://artintellico.com/classic/');
    expect(sitemap).toContain('https://artintellico.com/ru/classic/');
    expect(sitemap).toContain('https://artintellico.com/en/classic/');
  });

  it('сохраняют привязку домена и иконки', () => {
    expect(read('dist/CNAME').trim()).toBe('artintellico.com');
    expect(existsSync('dist/favicon.ico')).toBe(true);
    expect(existsSync('dist/apple-touch-icon.png')).toBe(true);
    expect(existsSync('dist/og-image.png')).toBe(true);
  });
});

describe('ретро-варианты', () => {
  it('собираются для каждого языка по своему адресу', () => {
    for (const page of variantPages) {
      expect(existsSync(page.file), page.file).toBe(true);
      expect(read(page.file), page.file).toContain(`<html lang="${page.locale}"`);
    }
  });

  it('указывают canonical на себя и связывают языки через hreflang', () => {
    for (const page of variantPages) {
      const html = read(page.file);
      expect(html, page.file).toContain(`rel="canonical" href="https://artintellico.com${page.url}"`);
      for (const [locale, prefix] of Object.entries(localePrefix)) {
        expect(html, page.file).toContain(`hreflang="${locale}" href="https://artintellico.com${prefix}${page.slug}"`);
      }
      expect(html, page.file).toContain(`hreflang="x-default" href="https://artintellico.com/en/${page.slug}"`);
    }
  });

  it('используют уникальные заголовки', () => {
    const titles = variantPages.map((page) => /<title>(.*?)<\/title>/s.exec(read(page.file))?.[1]);
    expect(new Set(titles).size).toBe(variantPages.length);
  });

  it('подключают GTM', () => {
    for (const page of variantPages) {
      expect(read(page.file), page.file).toContain('GTM-W3Z644V');
    }
  });

  it('отдают весь текст сайта без JavaScript', () => {
    for (const page of variantPages) {
      const fallback = read(page.file).split('class="nojs"')[1]?.split('</noscript>')[0] ?? '';
      expect(fallback.match(/<h1>/g)?.length, page.file).toBe(1);
      expect(fallback.match(/<h3>/g)?.length, page.file).toBe(10);
      expect(fallback, page.file).toContain('href="mailto:io@artintellico.com"');
      expect(fallback, page.file).toContain('href="https://unio24.com/"');
    }
    expect(read(retro.uk)).toContain('Ми створюємо ІТ рішення, що працюють');
    expect(read(retro.ru)).toContain('Мы создаём работающие ИТ решения');
    expect(read(retro.en)).toContain('We build IT solutions that work');
  });

  it('не содержат ссылок на старые адреса тем', () => {
    for (const page of variantPages) {
      const html = read(page.file);
      expect(html, page.file).not.toMatch(/["'](index|console|unix|apple|lisa|redhat|mc|win31|ai)\.html["']/);
      expect(html, page.file).not.toMatch(/https:\/\/artintellico\.com\/\$\{lang/);
    }
  });

  it('берут шрифты файлами, а не base64', () => {
    for (const page of variantPages) {
      expect(read(page.file), page.file).not.toContain('data:font/');
    }
  });
});

describe('перелинковка и футер', () => {
  it('на каждой странице есть ссылки на все варианты на том же языке', () => {
    for (const page of variantPages) {
      const html = read(page.file);
      const prefix = localePrefix[page.locale as keyof typeof localePrefix];
      for (const slug of [...variantSlugs, 'classic/']) {
        if (slug === page.slug) continue;
        expect(html, `${page.file} → ${prefix}${slug}`).toContain(`href="${prefix}${slug}"`);
      }
      expect(html, page.file).toContain('aria-current="page"');
    }
    for (const [locale, path] of Object.entries(pages)) {
      const html = read(path);
      const prefix = localePrefix[locale as keyof typeof localePrefix];
      for (const slug of variantSlugs) {
        expect(html, `${path} → ${prefix}${slug}`).toContain(`href="${prefix}${slug}"`);
      }
    }
  });

  it('показывают слоган на языке страницы', () => {
    for (const [locale, path] of Object.entries(pages)) {
      expect(read(path), path).toContain(slogans[locale as keyof typeof slogans]);
    }
    for (const page of variantPages) {
      expect(read(page.file), page.file).toContain(slogans[page.locale as keyof typeof slogans]);
    }
  });

  it('нигде не показывают код ЄДРПОУ', () => {
    for (const path of allPages) {
      expect(read(path), path).not.toContain('40656107');
    }
  });
});

describe('язык по умолчанию', () => {
  it('отправляет на английскую версию за пределами Украины, кроме роботов', () => {
    for (const page of [...variantPages.map((p) => p.file), ...Object.values(pages)]) {
      const html = read(page);
      expect(html, page).toContain('Europe/Kyiv');
      expect(html, page).toContain("location.replace(url(aicId, 'en')");
      expect(html, page).toMatch(/bot\|crawl/);
    }
  });
});
