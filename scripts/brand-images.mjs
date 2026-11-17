/*
 * Логотип с контуром и картинки из него: public/logo.svg, превью для соцсетей og-image.png,
 * favicon.ico и apple-touch-icon*.png.
 *
 * Исходник знака — src/assets/logo-mark.svg (цветные фрагменты без контура). Тёмно-синие
 * фрагменты сливаются с тёмным фоном, поэтому знак обводится белым контуром: под цветными
 * фрагментами лежит их белая копия с толстой обводкой. Получается «вырезанный из бумаги» знак:
 * на белом фоне выглядит как раньше, на тёмном — с чётким краем.
 *
 * Запуск: node scripts/brand-images.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const root = new URL('../', import.meta.url);
const source = readFileSync(new URL('src/assets/logo-mark.svg', root), 'utf8');

/* Фрагменты знака: <path d> и <polygon points> с их цветом */
const shapes = [...source.matchAll(/<(path|polygon)\b([^>]*?)\/?>(?:<\/\1>)?/g)].map(([, tag, attrs]) => {
  const geo = tag === 'path' ? `d="${/\bd="([^"]+)"/.exec(attrs)[1]}"` : `points="${/\bpoints="([^"]+)"/.exec(attrs)[1]}"`;
  const fill = /\bfill="([^"]+)"/.exec(attrs)[1];
  return { tag, geo, fill };
});
const [, mx, my] = /translate\(([-\d.]+),\s*([-\d.]+)\)/.exec(source);
const W = 239;
const H = 290;

/**
 * Знак с белым контуром.
 * outline — толщина контура снаружи в единицах знака (ширина знака 239);
 * minPx — минимальная толщина в пикселях экрана, чтобы контур не пропадал на маленьком логотипе
 * (vector-effect: non-scaling-stroke; только для браузеров).
 */
function mark({ outline, minPx = 0 }) {
  const pad = Math.ceil(outline + 1);
  const back = (extra) =>
    shapes.map(({ tag, geo }) => `<${tag} ${geo} fill="#fff" stroke="#fff" stroke-width="${outline * 2}" stroke-linejoin="round"${extra}/>`).join('');
  const body = [
    back(''),
    minPx ? back(` stroke-width="${minPx * 2}" vector-effect="non-scaling-stroke"`).replaceAll(`stroke-width="${outline * 2}" `, '') : '',
    shapes.map(({ tag, geo, fill }) => `<${tag} ${geo} fill="${fill}"/>`).join(''),
  ].join('');
  return {
    viewBox: `${-pad} ${-pad} ${W + pad * 2} ${H + pad * 2}`,
    width: W + pad * 2,
    height: H + pad * 2,
    inner: `<g transform="translate(${mx} ${my})">${body}</g>`,
  };
}

const svg = ({ viewBox, inner }, extra = '') =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}"${extra}><title>ArtIntelliCo</title>${inner}</svg>\n`;

/* public/logo.svg: контур 5 единиц, но не тоньше 1.5 px на экране */
writeFileSync(new URL('public/logo.svg', root), svg(mark({ outline: 5, minPx: 1.5 })));

/* Иконки: прозрачный фон, контур толще, чтобы читался на маленьком размере и на тёмной подложке iOS */
const iconMark = (size) => mark({ outline: size <= 32 ? 14 : size <= 76 ? 10 : 7 });
async function icon(size) {
  const m = iconMark(size);
  const scale = size / Math.max(m.width, m.height);
  const w = Math.round(m.width * scale);
  const h = Math.round(m.height * scale);
  const png = await sharp(Buffer.from(svg(m, ` width="${w}" height="${h}"`)), { density: 72 * Math.max(1, scale * 4) })
    .resize(w, h)
    .png()
    .toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: png, left: Math.round((size - w) / 2), top: Math.round((size - h) / 2) }])
    .png()
    .toBuffer();
}

for (const size of [57, 72, 76, 114, 120, 144, 152, 180]) {
  writeFileSync(new URL(`public/apple-touch-icon-${size}x${size}.png`, root), await icon(size));
}
writeFileSync(new URL('public/apple-touch-icon.png', root), await icon(57));

/* favicon.ico: PNG-кадры 16, 24, 32, 48, 64 в контейнере ICO */
const sizes = [16, 24, 32, 48, 64];
const frames = await Promise.all(sizes.map(icon));
const head = Buffer.alloc(6 + 16 * frames.length);
head.writeUInt16LE(0, 0);
head.writeUInt16LE(1, 2);
head.writeUInt16LE(frames.length, 4);
let offset = head.length;
frames.forEach((frame, i) => {
  const e = 6 + i * 16;
  head.writeUInt8(sizes[i] % 256, e);
  head.writeUInt8(sizes[i] % 256, e + 1);
  head.writeUInt16LE(1, e + 4);
  head.writeUInt16LE(32, e + 6);
  head.writeUInt32LE(frame.length, e + 8);
  head.writeUInt32LE(offset, e + 12);
  offset += frame.length;
});
writeFileSync(new URL('public/favicon.ico', root), Buffer.concat([head, ...frames]));

/* og-image.png 1200×630: знак с контуром и название на фирменном тёмно-синем */
const og = mark({ outline: 6 });
const ogH = 350;
const ogW = Math.round((og.width / og.height) * ogH);
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#1D2A46"/>
  <svg x="${(1200 - ogW) / 2}" y="70" width="${ogW}" height="${ogH}" viewBox="${og.viewBox}">${og.inner}</svg>
  <text x="600" y="530" text-anchor="middle" fill="#fff" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="700" font-size="60">ArtIntelliCo</text>
</svg>`;
await sharp(Buffer.from(ogSvg)).png().toFile(new URL('public/og-image.png', root).pathname);

console.log('logo.svg, favicon.ico, apple-touch-icon*.png, og-image.png — готово');
