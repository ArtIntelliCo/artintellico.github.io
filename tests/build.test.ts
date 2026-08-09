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

  it('показывают текущий год в подвале', () => {
    const year = String(new Date().getFullYear());
    for (const path of Object.values(pages)) {
      expect(read(path), path).toContain(year);
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
});
