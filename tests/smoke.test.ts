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
