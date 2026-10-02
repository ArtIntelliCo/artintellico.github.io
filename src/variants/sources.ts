import type { RetroVariantId } from './index';

/*
 * Исходники ретро-вариантов: каждый — бывшая самодостаточная HTML-страница,
 * разложенная на стили, разметку <body> и скрипт. Шрифты вынесены в public/fonts/,
 * единицы 100vh/100dvh заменены на var(--aic-vh), чтобы под вариантом оставалось
 * место для футера (см. frame.css).
 */
const styles = import.meta.glob<string>('./*/style.css', { query: '?raw', import: 'default', eager: true });
const markups = import.meta.glob<string>('./*/markup.html', { query: '?raw', import: 'default', eager: true });
const scripts = import.meta.glob<string>('./*/script.js', { query: '?raw', import: 'default', eager: true });
const htmlAttrs = import.meta.glob<Record<string, string>>('./*/html.json', { import: 'default', eager: true });

/** Варианты, построенные на текстах из словарей (window.AIC.content). */
const contentVariants = new Set<RetroVariantId>(['winnt', 'web90', 'web2010']);

export function variantSource(id: RetroVariantId) {
  return {
    css: styles[`./${id}/style.css`],
    markup: markups[`./${id}/markup.html`],
    script: scripts[`./${id}/script.js`],
    /** Атрибуты <html> из оригинала (например, data-monitor) — на них завязаны стили. */
    htmlAttrs: htmlAttrs[`./${id}/html.json`] ?? {},
    /** Вариант берёт тексты из window.AIC.content, а не из своей копии в script.js. */
    usesContent: contentVariants.has(id),
  };
}
