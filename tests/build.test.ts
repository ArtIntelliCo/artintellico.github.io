import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { beforeAll, describe, expect, it } from 'vitest';

const pages = {
  uk: 'dist/index.html',
  ru: 'dist/ru/index.html',
  en: 'dist/en/index.html',
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
    expect(read(pages.uk)).toContain('rel="canonical" href="https://artintellico.com/"');
    expect(read(pages.ru)).toContain('rel="canonical" href="https://artintellico.com/ru/"');
    expect(read(pages.en)).toContain('rel="canonical" href="https://artintellico.com/en/"');
  });

  it('перечисляют все альтернативные языки и x-default', () => {
    for (const path of Object.values(pages)) {
      const html = read(path);
      expect(html, path).toContain('hreflang="x-default" href="https://artintellico.com/"');
      expect(html, path).toContain('hreflang="uk" href="https://artintellico.com/"');
      expect(html, path).toContain('hreflang="ru" href="https://artintellico.com/ru/"');
      expect(html, path).toContain('hreflang="en" href="https://artintellico.com/en/"');
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
    expect(uk).toContain('href="/ru/"');
    expect(uk).toContain('href="/en/"');

    const ru = read(pages.ru);
    expect(ru).toContain('href="/"');
    expect(ru).toContain('href="/en/"');
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

  it('показывают код ЄДРПОУ с подписью на языке локали', () => {
    expect(read(pages.uk)).toContain('ЄДРПОУ 40656107');
    expect(read(pages.ru)).toContain('ЕГРПОУ 40656107');
    expect(read(pages.en)).toContain('Company ID 40656107');
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
    expect(read(pages.uk)).toContain('Ми створюємо корисні ІТ рішення');
    expect(read(pages.ru)).toContain('Мы создаём полезные ИТ решения');
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
  it('выводит девять карточек в каждой локали', () => {
    for (const path of Object.values(pages)) {
      expect(read(path).match(/<article/g)?.length, path).toBe(9);
    }
  });

  it('имеет якорь для навигации', () => {
    for (const path of Object.values(pages)) {
      expect(read(path), path).toContain('id="services"');
    }
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
  });

  it('сохраняют привязку домена и иконки', () => {
    expect(read('dist/CNAME').trim()).toBe('artintellico.com');
    expect(existsSync('dist/favicon.ico')).toBe(true);
    expect(existsSync('dist/apple-touch-icon.png')).toBe(true);
    expect(existsSync('dist/og-image.png')).toBe(true);
  });
});
