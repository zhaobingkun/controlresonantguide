import { access, readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const publicRoot = join(root, 'public');
const errors = [];
const titles = new Map();

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) paths.push(...await walk(path));
    else paths.push(path);
  }
  return paths;
}

const files = await walk(publicRoot);
const htmlFiles = files.filter((file) => file.endsWith('.html'));

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const name = relative(publicRoot, file);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)">/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)">/)?.[1];
  const h1Count = (html.match(/<h1[ >]/g) || []).length;
  if (!title) errors.push(`${name}: missing title`);
  if (!canonical) errors.push(`${name}: missing canonical`);
  if (!description) errors.push(`${name}: missing description`);
  if (title && title.length > 65) errors.push(`${name}: title is ${title.length} characters`);
  if (description && description.length > 160) errors.push(`${name}: description is ${description.length} characters`);
  if (h1Count !== 1) errors.push(`${name}: expected one H1, found ${h1Count}`);
  if (title && !name.startsWith('404')) {
    if (titles.has(title)) errors.push(`${name}: duplicate title with ${titles.get(title)}`);
    titles.set(title, name);
  }

  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = match[1].split('#')[0].split('?')[0];
    if (!href || href.startsWith('/assets/')) continue;
    const target = href === '/' ? join(publicRoot, 'index.html') : href.endsWith('/') ? join(publicRoot, href, 'index.html') : join(publicRoot, href);
    try { await access(target); } catch { errors.push(`${name}: broken internal link ${href}`); }
  }
}

for (const required of ['robots.txt', 'sitemap.xml', 'assets/css/site.css', 'assets/js/site.js', 'assets/images/manhattan-taxis.jpg', 'assets/images/paranatural-beacon.jpg']) {
  try { await access(join(publicRoot, required)); } catch { errors.push(`missing ${required}`); }
}

const sitemap = await readFile(join(publicRoot, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
if (urls.length < 37) errors.push(`sitemap has only ${urls.length} URLs`);

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files and ${urls.length} sitemap URLs.`);
