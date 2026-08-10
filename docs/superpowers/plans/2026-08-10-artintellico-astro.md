# План реализации: перевод artintellico.com на Astro

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Перевести одностраничный сайт artintellico.com с Middleman 4.3.5 / Ruby 2.6 на Astro с тремя реально работающими локалями (uk в корне, `/ru/`, `/en/`), базовым SEO и автоматическим деплоем на GitHub Pages.

**Architecture:** Одна разметка страницы, три тонкие обёртки в `src/pages/` передают локаль в общие компоненты, все тексты живут в JSON-словарях `src/i18n/`. Украинский словарь задаёт тип, остальные типизируются по нему, поэтому пропущенный перевод ломает сборку. На выходе — статика без внешних блокирующих зависимостей, публикуемая GitHub Actions.

**Tech Stack:** Astro 7.2.0, Tailwind CSS 4.3.3 (через `@tailwindcss/vite`), `@astrojs/sitemap` 3.7.3, Vitest, TypeScript, Node 24, GitHub Actions.

**Спецификация:** `docs/superpowers/specs/2026-08-10-artintellico-modernization-design.md`

## Global Constraints

- Домен и `site` в конфиге: `https://artintellico.com`
- Локали: `uk` (по умолчанию, без префикса), `ru`, `en`. Порядок в переключателе: UK · RU · EN
- Контейнер GTM переносится без изменений: `GTM-W3Z644V`, включая `<noscript>`-фолбэк
- Телефон: `+380960566642`. Email: `io@artintellico.com` (в старом коде домен написан с ошибкой — `artintelico.com`, повторять её нельзя)
- Палитра из логотипа: `#1D2A46` (тёмно-синий), `#20769F` (синий), `#E7B744` (охра), `#DF542F` (терракота)
- Название компании везде пишется `ArtIntelliCo` (в старом подвале было `AtrIntelliCo`)
- Год в подвале вычисляется при сборке, не зашивается
- Никаких внешних CDN: ни Google Fonts, ни Bootstrap, ни jQuery. Единственная внешняя загрузка — GTM
- Формы обратной связи в объёме нет
- Ветка работы: `astro-rewrite`, ответвляется от `development`
- Каждый коммит — на английском, в формате Conventional Commits

---

## Файловая структура

| Файл | Ответственность |
|---|---|
| `astro.config.mjs` | site, i18n-роутинг, редирект `/uk`, sitemap, Tailwind-плагин |
| `src/i18n/uk.json`, `ru.json`, `en.json` | все тексты сайта |
| `src/i18n/index.ts` | загрузка словаря по локали, типы, карта «локаль → путь» |
| `src/data/services.ts` | порядок и ключи девяти услуг (без текстов) |
| `src/layouts/Base.astro` | `<html lang>`, мета, canonical, hreflang, OG, JSON-LD, GTM |
| `src/components/Header.astro` | шапка |
| `src/components/LangSwitcher.astro` | единственное место, знающее соответствие «локаль → URL» |
| `src/components/Logo.astro` | фирменный inline-SVG |
| `src/components/Hero.astro` | первый экран |
| `src/components/Services.astro` | сетка девяти услуг |
| `src/components/Contacts.astro` | контактная секция |
| `src/components/Footer.astro` | подвал |
| `src/pages/index.astro`, `ru/index.astro`, `en/index.astro` | обёртки по локали |
| `src/styles/global.css` | Tailwind + фирменные токены |
| `tests/i18n.test.ts` | паритет ключей словарей |
| `tests/build.test.ts` | проверки собранного HTML |
| `.github/workflows/deploy.yml` | сборка и публикация |

---

### Task 1: Скелет проекта и работающая сборка

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/styles/global.css`, `src/pages/index.astro`, `.gitignore`, `vitest.config.ts`
- Test: `tests/smoke.test.ts`

**Interfaces:**
- Consumes: ничего
- Produces: рабочие команды `npm run dev`, `npm run build`, `npm test`; путь сборки `dist/`

- [ ] **Step 1: Создать ветку от development**

```bash
cd /Users/aleksus/Documents/Projects/artintellico/artintellicosite
git checkout development
git checkout -b astro-rewrite
```

- [ ] **Step 2: Инициализировать проект вручную**

Middleman-файлы пока остаются на месте, они удаляются в Task 10. Astro ставится рядом. Интерактивный `npm create astro` не используется намеренно — его набор флагов меняется от версии к версии, а нам нужен воспроизводимый результат.

```bash
npm init -y
npm install astro
npm install @astrojs/sitemap tailwindcss @tailwindcss/vite
npm install -D vitest typescript
mkdir -p src/pages src/styles src/layouts src/components src/i18n src/data public tests
```

- [ ] **Step 3: Записать tsconfig.json и скорректировать package.json**

`tsconfig.json`:

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"],
  "compilerOptions": {
    "resolveJsonModule": true,
    "allowImportingTsExtensions": false
  }
}
```

В `package.json` заменить блок `scripts` целиком на:

```json
"scripts": {
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "check": "astro check",
  "test": "vitest run"
}
```

и добавить на верхнем уровне `"type": "module"`.

- [ ] **Step 4: Записать astro.config.mjs**

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://artintellico.com',
  i18n: {
    locales: ['uk', 'ru', 'en'],
    defaultLocale: 'uk',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  redirects: {
    '/uk': '/',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'uk',
        locales: { uk: 'uk-UA', ru: 'ru-UA', en: 'en-US' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

- [ ] **Step 5: Записать фирменные токены в src/styles/global.css**

```css
@import "tailwindcss";

@theme {
  --color-brand-navy: #1D2A46;
  --color-brand-blue: #20769F;
  --color-brand-ochre: #E7B744;
  --color-brand-terracotta: #DF542F;
  --font-sans: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

:focus-visible {
  outline: 2px solid var(--color-brand-blue);
  outline-offset: 2px;
}
```

- [ ] **Step 6: Добавить vitest.config.ts**

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    testTimeout: 180_000,
  },
});
```

- [ ] **Step 7: Создать временную стартовую страницу**

`src/pages/index.astro` — заведомо неполная, с английским языком в разметке; следующий шаг это и ловит:

```astro
---
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>ArtIntelliCo</title>
  </head>
  <body>
    <h1>ArtIntelliCo</h1>
  </body>
</html>
```

- [ ] **Step 8: Написать падающий smoke-тест**

`tests/smoke.test.ts`:

```ts
import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { beforeAll, describe, expect, it } from 'vitest';

beforeAll(() => {
  execSync('npm run build', { stdio: 'inherit' });
});

describe('сборка проекта', () => {
  it('создаёт главную страницу', () => {
    expect(existsSync('dist/index.html')).toBe(true);
  });

  it('главная объявляет украинский язык и подключает стили', () => {
    const html = readFileSync('dist/index.html', 'utf8');
    expect(html).toContain('<html lang="uk"');
    expect(html).toMatch(/<link[^>]+rel="stylesheet"/);
  });
});
```

- [ ] **Step 9: Убедиться, что тест падает**

Run: `npm test`
Expected: FAIL — страница отдаёт `lang="en"` и не подключает ни одного стиля.

- [ ] **Step 10: Довести страницу до зелёного теста**

`src/pages/index.astro`:

```astro
---
import '../styles/global.css';
---

<!doctype html>
<html lang="uk">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>ArtIntelliCo</title>
  </head>
  <body class="font-sans text-brand-navy">
    <h1>ArtIntelliCo</h1>
  </body>
</html>
```

- [ ] **Step 11: Убедиться, что тест проходит**

Run: `npm test`
Expected: PASS

- [ ] **Step 12: Создать .gitignore**

```
node_modules/
dist/
.astro/
.DS_Store
```

- [ ] **Step 13: Коммит**

```bash
git add package.json package-lock.json astro.config.mjs tsconfig.json vitest.config.ts .gitignore src tests
git commit -m "chore: scaffold Astro project with Tailwind, sitemap and Vitest"
```

---

### Task 2: Словари трёх локалей и защита от пропущенного перевода

**Files:**
- Create: `src/i18n/uk.json`, `src/i18n/ru.json`, `src/i18n/en.json`, `src/i18n/index.ts`, `src/data/services.ts`
- Test: `tests/i18n.test.ts`

**Interfaces:**
- Consumes: ничего
- Produces:
  - `locales: readonly ['uk','ru','en']`, тип `Locale`
  - `t(locale: Locale): Dictionary` — словарь локали
  - `localePath: Record<Locale, string>` — `{ uk: '/', ru: '/ru/', en: '/en/' }`
  - `htmlLang: Record<Locale, string>`, `ogLocale: Record<Locale, string>`
  - `serviceKeys: readonly ServiceKey[]` — порядок девяти услуг

- [ ] **Step 1: Написать падающий тест паритета ключей**

`tests/i18n.test.ts`:

```ts
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

  it('содержат девять услуг в каждой локали', () => {
    for (const dict of [uk, ru, en]) {
      expect(Object.keys((dict as { services: { items: Record<string, unknown> } }).services.items)).toHaveLength(9);
    }
  });
});
```

- [ ] **Step 2: Убедиться, что тест падает**

Run: `npx vitest run tests/i18n.test.ts`
Expected: FAIL — модули `../src/i18n/uk.json` не найдены.

- [ ] **Step 3: Создать украинский словарь**

`src/i18n/uk.json`:

```json
{
  "meta": {
    "title": "Розробка та підтримка ІТ рішень для бізнесу — ArtIntelliCo",
    "description": "ArtIntelliCo — розробка ІТ рішень: e-commerce, портали, SaaS, машинне навчання, штучний інтелект, технічна підтримка."
  },
  "nav": {
    "skipToContent": "Перейти до вмісту",
    "services": "Послуги",
    "contacts": "Контакти",
    "languageLabel": "Вибір мови"
  },
  "hero": {
    "title": "Ми створюємо корисні ІТ рішення для вашого бізнесу",
    "text": "Команда ArtIntelliCo допомагає цифровізувати ваші бізнес-процеси шляхом розробки та впровадження сучасних ІТ рішень."
  },
  "services": {
    "heading": "Чим ми можемо бути корисні?",
    "items": {
      "concept": {
        "title": "Розробка концепції ІТ рішення",
        "text": "Аналізуємо вашу потребу в ІТ рішеннях, розробляємо бізнес-вимоги, підбираємо готове рішення або складаємо вимоги до розробки, зрозумілі і бізнесу, і розробникам."
      },
      "ux": {
        "title": "Дизайн продукту (UX/UI)",
        "text": "Проводимо дослідження користувачів і продукту, проєктуємо інтерфейси та виконуємо їх дизайн, проводимо юзабіліті-тестування та експертну оцінку."
      },
      "web": {
        "title": "Web-розробка",
        "text": "Розробляємо вебзастосунки будь-якої складності: корпоративні сайти, маркетплейси, інтернет-магазини, системи бронювання та інше."
      },
      "mobile": {
        "title": "Мобільні застосунки",
        "text": "Розробляємо мобільні застосунки для iOS та Android, а також панелі адміністрування до них."
      },
      "ai": {
        "title": "Рішення зі штучним інтелектом",
        "text": "Пропонуємо рішення на базі штучного інтелекту та машинного навчання."
      },
      "crm": {
        "title": "Розробка CRM та ERP",
        "text": "Розробляємо спеціалізовані CRM та ERP системи з урахуванням особливостей ваших бізнес-процесів."
      },
      "cloud": {
        "title": "Хмарні рішення",
        "text": "Допомагаємо перенести всю вашу інфраструктуру або її частину до хмари Amazon Web Services."
      },
      "api": {
        "title": "API та інтеграції",
        "text": "Розробляємо API для ваших ІТ-систем та виконуємо інтеграцію з іншими системами."
      },
      "support": {
        "title": "Технічна підтримка",
        "text": "Забезпечуємо технічну підтримку ваших ІТ-систем та їх подальший розвиток."
      }
    }
  },
  "contacts": {
    "heading": "Розкажіть про вашу задачу",
    "text": "Якщо у вас є пропозиція щодо співпраці або ви хочете дізнатися більше про наші рішення та досвід — зателефонуйте нам або напишіть на пошту.",
    "phoneLabel": "Телефон",
    "emailLabel": "Пошта"
  },
  "footer": {
    "rights": "Усі права захищено."
  }
}
```

- [ ] **Step 4: Создать русский словарь**

`src/i18n/ru.json`:

```json
{
  "meta": {
    "title": "Разработка и поддержка ИТ решений для бизнеса — ArtIntelliCo",
    "description": "ArtIntelliCo — разработка ИТ решений: e-commerce, порталы, SaaS, машинное обучение, искусственный интеллект, техническая поддержка."
  },
  "nav": {
    "skipToContent": "Перейти к содержимому",
    "services": "Услуги",
    "contacts": "Контакты",
    "languageLabel": "Выбор языка"
  },
  "hero": {
    "title": "Мы создаём полезные ИТ решения для вашего бизнеса",
    "text": "Команда ArtIntelliCo помогает цифровизировать ваши бизнес-процессы путём разработки и внедрения современных ИТ решений."
  },
  "services": {
    "heading": "Чем мы можем быть полезны?",
    "items": {
      "concept": {
        "title": "Разработка концепции ИТ решения",
        "text": "Анализируем вашу потребность в ИТ решениях, разрабатываем бизнес-требования, подбираем готовое решение или составляем требования на разработку, понятные и бизнесу, и разработчикам."
      },
      "ux": {
        "title": "Дизайн продукта (UX/UI)",
        "text": "Проводим исследования пользователей и продукта, проектируем интерфейсы и выполняем их дизайн, проводим юзабилити-тестирование и экспертную оценку."
      },
      "web": {
        "title": "Web-разработка",
        "text": "Разрабатываем веб-приложения любой сложности: корпоративные сайты, маркетплейсы, интернет-магазины, системы бронирования и другое."
      },
      "mobile": {
        "title": "Мобильные приложения",
        "text": "Разрабатываем мобильные приложения для iOS и Android, а также панели администрирования к ним."
      },
      "ai": {
        "title": "Решения с искусственным интеллектом",
        "text": "Предлагаем решения на базе искусственного интеллекта и машинного обучения."
      },
      "crm": {
        "title": "Разработка CRM и ERP",
        "text": "Разрабатываем специализированные CRM и ERP системы с учётом особенностей ваших бизнес-процессов."
      },
      "cloud": {
        "title": "Облачные решения",
        "text": "Помогаем перенести всю вашу инфраструктуру или её часть в облако Amazon Web Services."
      },
      "api": {
        "title": "API и интеграции",
        "text": "Разрабатываем API для ваших ИТ-систем и выполняем интеграцию с другими системами."
      },
      "support": {
        "title": "Техническая поддержка",
        "text": "Обеспечиваем техническую поддержку ваших ИТ-систем и их дальнейшее развитие."
      }
    }
  },
  "contacts": {
    "heading": "Расскажите о вашей задаче",
    "text": "Если у вас есть предложение о сотрудничестве или вы хотите узнать больше о наших решениях и опыте — позвоните нам или напишите на почту.",
    "phoneLabel": "Телефон",
    "emailLabel": "Почта"
  },
  "footer": {
    "rights": "Все права защищены."
  }
}
```

- [ ] **Step 5: Создать английский словарь**

`src/i18n/en.json`:

```json
{
  "meta": {
    "title": "Software development and IT support for business — ArtIntelliCo",
    "description": "ArtIntelliCo builds IT solutions: e-commerce, portals, SaaS, machine learning, artificial intelligence and ongoing technical support."
  },
  "nav": {
    "skipToContent": "Skip to content",
    "services": "Services",
    "contacts": "Contacts",
    "languageLabel": "Language"
  },
  "hero": {
    "title": "We build IT solutions that work for your business",
    "text": "The ArtIntelliCo team helps you digitalise business processes by designing and delivering modern IT solutions."
  },
  "services": {
    "heading": "How we can help",
    "items": {
      "concept": {
        "title": "IT solution concept",
        "text": "We analyse what you actually need, define business requirements, and either select an existing product or write a development specification that both business and engineers can work from."
      },
      "ux": {
        "title": "Product design (UX/UI)",
        "text": "We research users and product, design interfaces, and run usability testing and expert reviews."
      },
      "web": {
        "title": "Web development",
        "text": "We build web applications of any complexity: corporate sites, marketplaces, online stores, booking systems and more."
      },
      "mobile": {
        "title": "Mobile apps",
        "text": "We develop iOS and Android applications together with the admin panels behind them."
      },
      "ai": {
        "title": "AI-powered solutions",
        "text": "We deliver solutions built on artificial intelligence and machine learning."
      },
      "crm": {
        "title": "CRM and ERP development",
        "text": "We build custom CRM and ERP systems shaped around how your business actually works."
      },
      "cloud": {
        "title": "Cloud solutions",
        "text": "We migrate your infrastructure, in full or in part, to Amazon Web Services."
      },
      "api": {
        "title": "APIs and integrations",
        "text": "We design APIs for your systems and integrate them with the tools you already use."
      },
      "support": {
        "title": "Technical support",
        "text": "We keep your systems running and continue to improve them."
      }
    }
  },
  "contacts": {
    "heading": "Tell us about your project",
    "text": "If you have a partnership proposal or want to know more about our solutions and experience — give us a call or drop us an email.",
    "phoneLabel": "Phone",
    "emailLabel": "Email"
  },
  "footer": {
    "rights": "All rights reserved."
  }
}
```

- [ ] **Step 6: Создать i18n/index.ts**

```ts
import en from './en.json';
import ru from './ru.json';
import uk from './uk.json';

export const locales = ['uk', 'ru', 'en'] as const;
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
```

- [ ] **Step 7: Создать src/data/services.ts**

```ts
export const serviceKeys = [
  'concept',
  'ux',
  'web',
  'mobile',
  'ai',
  'crm',
  'cloud',
  'api',
  'support',
] as const;

export type ServiceKey = (typeof serviceKeys)[number];
```

- [ ] **Step 8: Убедиться, что тесты и типы проходят**

Run: `npx vitest run tests/i18n.test.ts && npm run check`
Expected: PASS. `astro check` не сообщает об ошибках типов — присвоение `ru` и `en` в `Record<Locale, Dictionary>` проверяет, что структура совпадает с украинской.

- [ ] **Step 9: Коммит**

```bash
git add src/i18n src/data tests/i18n.test.ts
git commit -m "feat: add uk/ru/en dictionaries with key parity check"
```

---

### Task 3: Базовый layout, три страницы, hreflang и редирект /uk/

**Files:**
- Create: `src/layouts/Base.astro`, `src/pages/ru/index.astro`, `src/pages/en/index.astro`
- Modify: `src/pages/index.astro`
- Test: `tests/build.test.ts`
- Delete: `tests/smoke.test.ts` (его проверки поглощает `build.test.ts`)

**Interfaces:**
- Consumes: `t`, `locales`, `localePath`, `htmlLang`, `ogLocale`, тип `Locale` из `src/i18n`
- Produces: `Base.astro` с пропсом `{ locale: Locale }` и слотом для содержимого страницы

- [ ] **Step 1: Написать падающий тест собранного HTML**

`tests/build.test.ts`:

```ts
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
```

- [ ] **Step 2: Удалить smoke-тест и убедиться, что новый падает**

```bash
rm tests/smoke.test.ts
npm test
```

Expected: FAIL — `dist/ru/index.html` отсутствует, canonical и hreflang не найдены.

- [ ] **Step 3: Написать Base.astro**

```astro
---
import { htmlLang, localePath, locales, ogLocale, t, type Locale } from '../i18n';
import '../styles/global.css';

interface Props {
  locale: Locale;
}

const { locale } = Astro.props;
const dict = t(locale);
const site = Astro.site!;
const canonical = new URL(localePath[locale], site).href;
const ogImage = new URL('/og-image.png', site).href;

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ArtIntelliCo',
  url: site.href,
  logo: ogImage,
  email: 'io@artintellico.com',
  telephone: '+380960566642',
};
---

<!doctype html>
<html lang={htmlLang[locale]}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{dict.meta.title}</title>
    <meta name="description" content={dict.meta.description} />

    <link rel="canonical" href={canonical} />
    <link rel="alternate" hreflang="x-default" href={new URL('/', site).href} />
    {locales.map((item) => (
      <link rel="alternate" hreflang={htmlLang[item]} href={new URL(localePath[item], site).href} />
    ))}

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="ArtIntelliCo" />
    <meta property="og:title" content={dict.meta.title} />
    <meta property="og:description" content={dict.meta.description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:locale" content={ogLocale[locale]} />
    {locales
      .filter((item) => item !== locale)
      .map((item) => <meta property="og:locale:alternate" content={ogLocale[item]} />)}
    <meta name="twitter:card" content="summary_large_image" />

    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

    <script type="application/ld+json" set:html={JSON.stringify(organization)} />

    <script is:inline>
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-W3Z644V');
    </script>
  </head>
  <body class="font-sans text-brand-navy antialiased">
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-W3Z644V"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
        title="Google Tag Manager"></iframe>
    </noscript>

    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2"
      >{dict.nav.skipToContent}</a
    >

    <main id="main">
      <slot />
    </main>
  </body>
</html>
```

- [ ] **Step 4: Переписать src/pages/index.astro**

```astro
---
import Base from '../layouts/Base.astro';
---

<Base locale="uk" />
```

- [ ] **Step 5: Создать src/pages/ru/index.astro**

```astro
---
import Base from '../../layouts/Base.astro';
---

<Base locale="ru" />
```

- [ ] **Step 6: Создать src/pages/en/index.astro**

```astro
---
import Base from '../../layouts/Base.astro';
---

<Base locale="en" />
```

- [ ] **Step 7: Прогнать тесты**

Run: `npm test`
Expected: PASS по всем проверкам, кроме возможного падения на `dist/uk/index.html` — если редирект не сгенерировался, проверить, что в `astro.config.mjs` присутствует блок `redirects: { '/uk': '/' }`, и пересобрать.

- [ ] **Step 8: Коммит**

```bash
git add -A src/layouts src/pages tests
git commit -m "feat: add base layout with hreflang, canonical, OG and JSON-LD"
```

---

### Task 4: Шапка с переключателем языков и подвал

**Files:**
- Create: `src/components/Header.astro`, `src/components/LangSwitcher.astro`, `src/components/Footer.astro`
- Modify: `src/layouts/Base.astro`
- Test: `tests/build.test.ts`

**Interfaces:**
- Consumes: `localePath`, `localeName`, `locales`, `t`, тип `Locale`
- Produces: `Header` и `Footer`, оба принимают `{ locale: Locale }`

- [ ] **Step 1: Дописать падающие проверки в tests/build.test.ts**

Добавить в конец файла:

```ts
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
```

- [ ] **Step 2: Убедиться, что тесты падают**

Run: `npm test`
Expected: FAIL — в HTML нет ни ссылок на другие локали, ни года.

- [ ] **Step 3: Создать LangSwitcher.astro**

```astro
---
import { localeName, localePath, locales, t, type Locale } from '../i18n';

interface Props {
  locale: Locale;
}

const { locale } = Astro.props;
const dict = t(locale);
---

<nav aria-label={dict.nav.languageLabel} class="flex items-center gap-1 text-sm font-semibold">
  {
    locales.map((item) =>
      item === locale ? (
        <span aria-current="true" class="rounded px-2 py-1 text-brand-blue">
          {localeName[item]}
        </span>
      ) : (
        <a href={localePath[item]} class="rounded px-2 py-1 text-brand-navy/60 hover:text-brand-blue">
          {localeName[item]}
        </a>
      )
    )
  }
</nav>
```

- [ ] **Step 4: Создать Header.astro**

```astro
---
import LangSwitcher from './LangSwitcher.astro';
import { localePath, t, type Locale } from '../i18n';

interface Props {
  locale: Locale;
}

const { locale } = Astro.props;
const dict = t(locale);
---

<header class="sticky top-0 z-40 border-b border-brand-navy/10 bg-white/95 backdrop-blur">
  <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
    <a href={localePath[locale]} class="text-lg font-bold tracking-tight">ArtIntelliCo</a>

    <div class="flex items-center gap-4">
      <nav class="hidden gap-4 text-sm font-medium uppercase tracking-wide sm:flex">
        <a href="#services" class="hover:text-brand-blue">{dict.nav.services}</a>
        <a href="#contacts" class="hover:text-brand-blue">{dict.nav.contacts}</a>
      </nav>
      <LangSwitcher locale={locale} />
    </div>
  </div>
</header>
```

- [ ] **Step 5: Создать Footer.astro**

```astro
---
import { t, type Locale } from '../i18n';

interface Props {
  locale: Locale;
}

const { locale } = Astro.props;
const dict = t(locale);
const year = new Date().getFullYear();
---

<footer class="border-t border-brand-navy/10 py-8 text-center text-sm text-brand-navy/60">
  <p>© {year} ArtIntelliCo. {dict.footer.rights}</p>
</footer>
```

- [ ] **Step 6: Подключить их в Base.astro**

В блоке импортов добавить:

```astro
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
```

В разметке заменить участок от skip-ссылки до `</body>` на:

```astro
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2"
      >{dict.nav.skipToContent}</a
    >

    <Header locale={locale} />

    <main id="main">
      <slot />
    </main>

    <Footer locale={locale} />
```

- [ ] **Step 7: Прогнать тесты**

Run: `npm test`
Expected: PASS

- [ ] **Step 8: Коммит**

```bash
git add src/components src/layouts tests/build.test.ts
git commit -m "feat: add header with language switcher and footer"
```

---

### Task 5: Первый экран с фирменным логотипом

**Files:**
- Create: `src/components/Logo.astro`, `src/components/Hero.astro`
- Modify: `src/pages/index.astro`, `src/pages/ru/index.astro`, `src/pages/en/index.astro`
- Test: `tests/build.test.ts`

**Interfaces:**
- Consumes: `t`, тип `Locale`
- Produces: `Hero` с пропсом `{ locale: Locale }`; `Logo` без пропсов

- [ ] **Step 1: Дописать падающую проверку**

Добавить в `tests/build.test.ts`:

```ts
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
```

- [ ] **Step 2: Убедиться, что тест падает**

Run: `npm test`
Expected: FAIL — заголовков и SVG в HTML нет.

- [ ] **Step 3: Извлечь исходный SVG логотипа из Middleman-версии**

```bash
git show development:source/index.html.erb | sed -n '/<svg width="239px"/,/<\/svg>/p' > /tmp/logo.svg
wc -l /tmp/logo.svg
```

Ожидается непустой файл: элемент `<svg>` с группой путей заливок `#20769F`, `#E7B744`, `#DF542F`, `#1D2A46`, `#E87F34`.

- [ ] **Step 4: Создать Logo.astro на основе извлечённого SVG**

Скопировать содержимое `/tmp/logo.svg` в `src/components/Logo.astro` и привести открывающий тег к виду:

```astro
<svg
  viewBox="0 0 239 290"
  role="img"
  aria-label="ArtIntelliCo"
  class="h-auto w-full max-w-[239px]"
  xmlns="http://www.w3.org/2000/svg"
>
```

Атрибуты `width` и `height` из открывающего тега удалить — размер задаёт CSS. Все `<path>` и `<polygon>` внутри оставить без изменений.

- [ ] **Step 5: Создать Hero.astro**

```astro
---
import Logo from './Logo.astro';
import { t, type Locale } from '../i18n';

interface Props {
  locale: Locale;
}

const { locale } = Astro.props;
const dict = t(locale);
---

<section class="mx-auto max-w-6xl px-4 py-16 sm:py-24">
  <div class="grid items-center gap-10 md:grid-cols-[3fr_2fr]">
    <div>
      <h1 class="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{dict.hero.title}</h1>
      <p class="mt-6 max-w-2xl text-lg text-brand-navy/80">{dict.hero.text}</p>
    </div>
    <div class="justify-self-center md:justify-self-end">
      <Logo />
    </div>
  </div>
</section>
```

- [ ] **Step 6: Подключить Hero на всех трёх страницах**

`src/pages/index.astro`:

```astro
---
import Base from '../layouts/Base.astro';
import Hero from '../components/Hero.astro';
---

<Base locale="uk">
  <Hero locale="uk" />
</Base>
```

`src/pages/ru/index.astro`:

```astro
---
import Base from '../../layouts/Base.astro';
import Hero from '../../components/Hero.astro';
---

<Base locale="ru">
  <Hero locale="ru" />
</Base>
```

`src/pages/en/index.astro`:

```astro
---
import Base from '../../layouts/Base.astro';
import Hero from '../../components/Hero.astro';
---

<Base locale="en">
  <Hero locale="en" />
</Base>
```

- [ ] **Step 7: Прогнать тесты**

Run: `npm test`
Expected: PASS

- [ ] **Step 8: Коммит**

```bash
git add src/components/Logo.astro src/components/Hero.astro src/pages tests/build.test.ts
git commit -m "feat: add hero section with brand logo"
```

---

### Task 6: Сетка девяти услуг

**Files:**
- Create: `src/components/Services.astro`
- Modify: `src/pages/index.astro`, `src/pages/ru/index.astro`, `src/pages/en/index.astro`
- Test: `tests/build.test.ts`

**Interfaces:**
- Consumes: `serviceKeys` из `src/data/services.ts`, `t`, тип `Locale`
- Produces: `Services` с пропсом `{ locale: Locale }`, секция с `id="services"`

- [ ] **Step 1: Дописать падающую проверку**

Добавить в `tests/build.test.ts`:

```ts
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
```

- [ ] **Step 2: Убедиться, что тест падает**

Run: `npm test`
Expected: FAIL — элементов `<article>` в HTML нет.

- [ ] **Step 3: Создать Services.astro**

```astro
---
import { serviceKeys } from '../data/services';
import { t, type Locale } from '../i18n';

interface Props {
  locale: Locale;
}

const { locale } = Astro.props;
const dict = t(locale);
---

<section id="services" class="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
  <h2 class="text-center text-2xl font-bold sm:text-3xl">{dict.services.heading}</h2>

  <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {
      serviceKeys.map((key) => (
        <article class="rounded-lg border border-brand-navy/10 p-6 transition hover:border-brand-blue/40">
          <h3 class="text-lg font-bold">{dict.services.items[key].title}</h3>
          <p class="mt-3 text-brand-navy/80">{dict.services.items[key].text}</p>
        </article>
      ))
    }
  </div>
</section>
```

- [ ] **Step 4: Подключить Services на трёх страницах**

В каждой странице добавить импорт и вставить компонент сразу после `<Hero ... />`. Для `src/pages/index.astro`:

```astro
---
import Base from '../layouts/Base.astro';
import Hero from '../components/Hero.astro';
import Services from '../components/Services.astro';
---

<Base locale="uk">
  <Hero locale="uk" />
  <Services locale="uk" />
</Base>
```

Для `src/pages/ru/index.astro` и `src/pages/en/index.astro` — то же самое с путями `../../` и своей локалью в обоих компонентах.

- [ ] **Step 5: Прогнать тесты**

Run: `npm test`
Expected: PASS

- [ ] **Step 6: Коммит**

```bash
git add src/components/Services.astro src/pages tests/build.test.ts
git commit -m "feat: add services grid driven by dictionaries"
```

---

### Task 7: Контактная секция

**Files:**
- Create: `src/components/Contacts.astro`
- Modify: `src/pages/index.astro`, `src/pages/ru/index.astro`, `src/pages/en/index.astro`
- Test: `tests/build.test.ts`

**Interfaces:**
- Consumes: `t`, тип `Locale`
- Produces: `Contacts` с пропсом `{ locale: Locale }`, секция с `id="contacts"`

- [ ] **Step 1: Дописать падающую проверку**

Добавить в `tests/build.test.ts`:

```ts
describe('контакты', () => {
  it('дают рабочие телефон и почту', () => {
    for (const path of Object.values(pages)) {
      const html = read(path);
      expect(html, path).toContain('href="tel:+380960566642"');
      expect(html, path).toContain('href="mailto:io@artintellico.com"');
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
```

- [ ] **Step 2: Убедиться, что тест падает**

Run: `npm test`
Expected: FAIL — ссылок `tel:` и `mailto:` в HTML нет.

- [ ] **Step 3: Создать Contacts.astro**

```astro
---
import { t, type Locale } from '../i18n';

interface Props {
  locale: Locale;
}

const { locale } = Astro.props;
const dict = t(locale);
---

<section id="contacts" class="scroll-mt-20 bg-brand-navy py-16 text-white">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-bold sm:text-3xl">{dict.contacts.heading}</h2>
    <p class="mt-4 max-w-2xl text-white/80">{dict.contacts.text}</p>

    <dl class="mt-8 grid gap-6 sm:grid-cols-2">
      <div>
        <dt class="text-sm uppercase tracking-wide text-white/60">{dict.contacts.phoneLabel}</dt>
        <dd class="mt-1 text-xl font-semibold">
          <a href="tel:+380960566642" class="hover:text-brand-ochre">+38 096 056 66 42</a>
        </dd>
      </div>
      <div>
        <dt class="text-sm uppercase tracking-wide text-white/60">{dict.contacts.emailLabel}</dt>
        <dd class="mt-1 text-xl font-semibold">
          <a href="mailto:io@artintellico.com" class="hover:text-brand-ochre">io@artintellico.com</a>
        </dd>
      </div>
    </dl>
  </div>
</section>
```

- [ ] **Step 4: Подключить Contacts на трёх страницах**

В каждой странице добавить импорт и вставить `<Contacts locale="..." />` после `<Services ... />`.

- [ ] **Step 5: Прогнать тесты**

Run: `npm test`
Expected: PASS

- [ ] **Step 6: Коммит**

```bash
git add src/components/Contacts.astro src/pages tests/build.test.ts
git commit -m "feat: add contacts section with corrected email domain"
```

---

### Task 8: Статические файлы, robots.txt и sitemap

**Files:**
- Create: `public/robots.txt`, `public/CNAME`, `public/og-image.png`
- Copy: иконки из `source/images/` в `public/`
- Test: `tests/build.test.ts`

**Interfaces:**
- Consumes: `@astrojs/sitemap` из Task 1
- Produces: `dist/robots.txt`, `dist/sitemap-index.xml`, `dist/CNAME`, набор иконок в корне

- [ ] **Step 1: Дописать падающую проверку**

Добавить в `tests/build.test.ts`:

```ts
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
```

- [ ] **Step 2: Убедиться, что тест падает**

Run: `npm test`
Expected: FAIL — `dist/robots.txt` и `dist/CNAME` отсутствуют.

- [ ] **Step 3: Создать public/robots.txt**

```
User-agent: *
Allow: /

Sitemap: https://artintellico.com/sitemap-index.xml
```

- [ ] **Step 4: Создать public/CNAME**

```
artintellico.com
```

- [ ] **Step 5: Перенести иконки из старого проекта**

```bash
cp source/images/favicon.ico public/favicon.ico
cp source/images/apple-touch-icon.png public/apple-touch-icon.png
cp source/images/apple-touch-icon-*.png public/
rm -f public/favicon.svg
```

- [ ] **Step 6: Подготовить og-image.png**

Картинка для превью в мессенджерах: ровно 1200×630, тёмно-синий фон `#1D2A46`, по центру фирменный логотип. Сгенерировать скриптом, чтобы результат был воспроизводим:

```bash
npm install -D sharp
node --input-type=module -e "
import sharp from 'sharp';
const logo = await sharp('source/images/artintellico.png').resize({ height: 420, fit: 'inside' }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#1D2A46' } })
  .composite([{ input: logo, gravity: 'center' }])
  .png()
  .toFile('public/og-image.png');
console.log('og-image.png created');
"
```

Проверить размеры:

```bash
node --input-type=module -e "
import sharp from 'sharp';
const { width, height } = await sharp('public/og-image.png').metadata();
console.log(width, height);
"
```

Expected: `1200 630`

- [ ] **Step 7: Прогнать тесты**

Run: `npm test`
Expected: PASS

- [ ] **Step 8: Коммит**

```bash
git add public tests/build.test.ts
git commit -m "feat: add robots.txt, CNAME, icons and OG image"
```

---

### Task 9: Автоматический деплой через GitHub Actions

**Files:**
- Create: `.github/workflows/deploy.yml`
- Test: ручная проверка запуска workflow

**Interfaces:**
- Consumes: `npm run build` из Task 1
- Produces: публикацию `dist/` на GitHub Pages при пуше в `development`

- [ ] **Step 1: Создать workflow**

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [development]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v7
      - name: Build site
        uses: withastro/action@v6

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5
```

- [ ] **Step 2: Проверить, что тесты и типы всё ещё зелёные**

Run: `npm run check && npm test`
Expected: PASS

- [ ] **Step 3: Коммит**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: build and deploy to GitHub Pages via Actions"
```

- [ ] **Step 4: Зафиксировать старую сборку тегом**

```bash
git tag legacy-middleman-build origin/master
```

- [ ] **Step 5: Действие, которое выполняет владелец репозитория вручную**

В настройках репозитория `ArtIntelliCo/artintellico.github.io` → Settings → Pages → Build and deployment → Source переключить с «Deploy from a branch» на «GitHub Actions». До этого переключения workflow соберёт сайт, но публикация не произойдёт.

---

### Task 10: Уборка Middleman и финальная проверка

**Files:**
- Delete: `config.rb`, `Gemfile`, `Gemfile.lock`, `source/`, `locales/`, `build/`, `.sass-cache/`, `CNAME` (корневой, дублируется в `public/`)
- Create: `README.md`
- Test: `tests/build.test.ts` (полный прогон)

**Interfaces:**
- Consumes: всё, созданное в Task 1–9
- Produces: репозиторий без следов Middleman

- [ ] **Step 1: Убедиться, что все нужные ассеты уже перенесены**

```bash
ls public/favicon.ico public/apple-touch-icon.png public/og-image.png
grep -c '<svg' src/components/Logo.astro
```

Expected: файлы на месте, в `Logo.astro` есть элемент `<svg>`. Если чего-то нет — вернуться к Task 5 и Task 8, не удаляя `source/`.

- [ ] **Step 2: Удалить наследие Middleman**

```bash
git rm -r --quiet config.rb Gemfile Gemfile.lock source locales CNAME
git rm -r --cached --quiet build .sass-cache 2>/dev/null || true
rm -rf build .sass-cache
```

- [ ] **Step 3: Написать README.md**

```markdown
# artintellico.com

Одностраничный сайт ArtIntelliCo на Astro. Три локали: украинская в корне,
русская в `/ru/`, английская в `/en/`.

## Разработка

    npm install
    npm run dev

## Проверки

    npm run check   # типы и разметка Astro
    npm test        # сборка + проверки готового HTML

## Тексты

Все тексты сайта лежат в `src/i18n/{uk,ru,en}.json`. Украинский словарь задаёт
структуру: если в русском или английском не хватает ключа, `npm run check`
падает. Разметка страницы одна на все локали.

## Деплой

Пуш в ветку `development` запускает GitHub Actions, которые собирают сайт и
публикуют его на GitHub Pages. Собирать и заливать вручную не нужно.

История Middleman-версии сайта доступна в теге `legacy-middleman-build`.
```

- [ ] **Step 4: Полный прогон проверок**

Run: `npm run check && npm test`
Expected: PASS, все проверки Task 3–8 зелёные.

- [ ] **Step 5: Визуальная проверка трёх локалей**

```bash
npm run build
npx --yes serve dist -l 4321 &
sleep 2
curl -s -o /dev/null -w "uk %{http_code}\n" http://localhost:4321/
curl -s -o /dev/null -w "ru %{http_code}\n" http://localhost:4321/ru/
curl -s -o /dev/null -w "en %{http_code}\n" http://localhost:4321/en/
```

Затем открыть каждую в браузере на ширине 375 px и 1440 px и убедиться: логотип не искажён, карточки услуг перестраиваются в одну колонку, переключатель языков виден и работает, тёмная контактная секция читается.

- [ ] **Step 6: Коммит**

```bash
git add -A
git commit -m "chore: remove Middleman sources and document the new setup"
```

- [ ] **Step 7: Влить в development**

```bash
git checkout development
git merge --no-ff astro-rewrite -m "feat: rebuild site on Astro with uk/ru/en locales"
```

Пуш выполняет владелец репозитория после ревью — план его не делает.

---

## Что проверить после первого деплоя

Эти проверки выполняются на живом домене и в план-задачи не входят, потому что зависят от ручного переключения источника Pages:

- `https://artintellico.com/` открывает украинскую версию
- `https://artintellico.com/uk/` перебрасывает на корень
- `https://artintellico.com/robots.txt` и `/sitemap-index.xml` отвечают 200
- В Google Search Console добавлены и отправлены sitemap; в отчёте по международному таргетингу нет ошибок hreflang
- В Google Tag Manager видны заходы — контейнер `GTM-W3Z644V` жив
