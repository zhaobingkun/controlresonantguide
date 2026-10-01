import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const publicRoot = join(root, 'public');
const config = JSON.parse(await readFile(join(root, 'adsense-readiness.json'), 'utf8'));

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
}

const files = await walk(publicRoot);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const sitemap = await readFile(join(publicRoot, 'sitemap.xml'), 'utf8');
const hardFailures = [];
const warnings = [];

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const canonical = html.match(/<link rel="canonical" href="([^"]+)">/)?.[1];
  const noindex = /<meta name="robots" content="[^"]*noindex/.test(html);
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] || '';
  const words = main.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ').trim().split(/\s+/).filter(Boolean).length;
  if (noindex && canonical && sitemap.includes(`<loc>${canonical}</loc>`)) hardFailures.push(`${canonical}: noindex URL appears in sitemap`);
  if (!noindex && words < 220) hardFailures.push(`${canonical}: only ${words} words in main content`);
  if (!noindex && /will be added before production launch/i.test(main)) hardFailures.push(`${canonical}: contains a launch placeholder`);
  if (!noindex && !file.endsWith('/index.html') && !file.endsWith('index.html')) warnings.push(`${canonical}: unexpected page path`);
}

const labels = {
  domainLive: 'Production domain resolves publicly',
  validHttps: 'HTTPS is valid and HTTP redirects to HTTPS',
  workingContact: 'A working public correction/contact route is visible',
  namedPublisherProfile: 'A real publisher or editor profile is visible',
  originalGameplayCaptures: 'Original gameplay captures support the core guides',
  searchConsoleIndexed: 'Core pages are indexed in Search Console',
  organicTrafficObserved: 'Real search impressions or reader activity has been observed',
  secondContentClusterPublished: 'A second substantial guide cluster is published'
};

for (const [key, label] of Object.entries(labels)) {
  if (!config[key]) hardFailures.push(label);
}

console.log(`AdSense readiness audit: ${htmlFiles.length} HTML files checked.`);
if (warnings.length) console.log(`Warnings:\n- ${warnings.join('\n- ')}`);
if (hardFailures.length) {
  console.error(`Not ready to submit:\n- ${hardFailures.join('\n- ')}`);
  process.exit(1);
}
console.log('READY: automated and manual launch gates are marked complete. Perform one final policy review before applying.');
