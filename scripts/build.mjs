import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { faqs, guides, locations, puzzles, site } from '../src/data.mjs';
import { fieldGuideCategories, fieldGuides } from '../src/field-guides.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'public');
const puzzleMap = new Map(puzzles.map((item) => [item.id, item]));
const locationMap = new Map(locations.map((item) => [item.id, item]));
const fieldGuideMap = new Map(fieldGuides.map((item) => [item.id, item]));

const esc = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const url = (path = '/') => `${site.domain}${path}`;
const jsonLd = (data) => `<script type="application/ld+json">${JSON.stringify(data).replaceAll('<', '\\u003c')}</script>`;

function head({ title, description, path = '/', type = 'website', schemas = [], image = '/assets/images/manhattan-taxis.jpg', robots = 'index,follow' }) {
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${esc(fullTitle)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="${robots}">
  <meta name="theme-color" content="#15181c">
  <link rel="canonical" href="${url(path)}">
  <link rel="icon" href="/assets/images/favicon.png" type="image/png" sizes="512x512">
  <link rel="apple-touch-icon" href="/assets/images/favicon.png" sizes="512x512">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <meta property="og:type" content="${type}">
  <meta property="og:site_name" content="${site.name}">
  <meta property="og:title" content="${esc(fullTitle)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${url(path)}">
  <meta property="og:image" content="${url(image)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(fullTitle)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${url(image)}">
  <link rel="stylesheet" href="/assets/css/site.css">
  ${schemas.map(jsonLd).join('\n  ')}
</head>`;
}

const navItems = [
  ['Guides', '/guides/', 'guides'],
  ['Abilities', '/guides/abilities/', 'abilities'],
  ['Taxi Route', '/taxi-locations/', 'locations'],
  ['Taxi Solver', '/taxi-puzzle-solver/', 'puzzles']
];

function header(active = '') {
  const links = navItems.map(([label, href, key]) => `<a href="${href}"${active === key ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  return `<body>
<a class="skip-link" href="#main">Skip to guide</a>
<header class="site-header">
  <div class="shell nav-row">
    <a class="brand" href="/" aria-label="Resonant Field Guide home"><span class="brand-mark" aria-hidden="true">RFG</span><span><strong>RESONANT</strong><small>FIELD GUIDE / 01</small></span></a>
    <nav class="desktop-nav" aria-label="Primary navigation">${links}</nav>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" data-menu-toggle><span aria-hidden="true">MENU</span><span class="sr-only">Open navigation</span></button>
  </div>
  <nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation" data-mobile-nav>${links}</nav>
</header>`;
}

function footer() {
  return `<footer class="site-footer">
  <div class="shell footer-grid">
    <div><span class="brand-mark">RFG</span><h2>Stay oriented when Manhattan stops making sense.</h2><p>Independent field notes for CONTROL Resonant players.</p></div>
    <div><h3>Game routes</h3><a href="/guides/control-resonant-walkthrough/">Walkthrough</a><a href="/guides/all-quests/">Quest list</a><a href="/guides/abilities/">Abilities</a><a href="/guides/bosses/">Bosses</a></div>
    <div><h3>Taxi case</h3><a href="/taxi-locations/">All taxi locations</a><a href="/taxi-puzzle-solver/">Puzzle matcher</a><a href="/last-taxi/">Complete walkthrough</a><a href="/guides/">All guides</a></div>
    <div class="source-note"><h3>Editorial</h3><p>Game facts and media links point back to Remedy Entertainment.</p><a href="${site.officialGameUrl}" target="_blank" rel="noopener noreferrer">Official game page</a><a href="/about/">About and method</a><a href="/contact/">Corrections</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></div>
  </div>
  <div class="shell legal">Unofficial fan guide. Not affiliated with Remedy Entertainment. CONTROL and related names and imagery belong to their respective owners. Last field update: October 1, 2026.</div>
</footer>
<script src="/assets/js/site.js" defer></script>
</body>
</html>`;
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.name,
  url: site.domain,
  description: site.description
};

const gameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'CONTROL Resonant',
  url: site.officialGameUrl,
  gamePlatform: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
  genre: ['Action-adventure', 'Role-playing game'],
  author: { '@type': 'Organization', name: 'Remedy Entertainment' }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.domain,
  logo: url('/assets/images/favicon.png'),
  description: 'An independent editorial guide for CONTROL Resonant players.'
};

function breadcrumbs(items) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: url(item.href)
    }))
  };
  const html = `<nav class="breadcrumbs" aria-label="Breadcrumb"><div class="shell"><ol>${items.map((item, index) => `<li>${index === items.length - 1 ? esc(item.label) : `<a href="${item.href}">${esc(item.label)}</a>`}</li>`).join('')}</ol></div></nav>`;
  return { html, schema };
}

function articleSchema(title, description, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: site.launched,
    dateModified: site.launched,
    mainEntityOfPage: url(path),
    author: { '@type': 'Organization', name: site.authorName, url: url('/about/') },
    publisher: { '@type': 'Organization', name: site.name, url: site.domain }
  };
}

function editorialMeta(label = 'Field guide') {
  return `<div class="editorial-meta"><span>${esc(label)}</span><span>By ${esc(site.authorName)}</span><span>Last verified ${esc(site.lastVerified)}</span><a href="/about/#method">How we verify</a></div>`;
}

function sourceRecord(context = 'Location and puzzle details') {
  return `<section class="source-record"><span class="kicker">Evidence record</span><h2>How this page was checked</h2><p>${esc(context)} were compared across two independent launch-week walkthroughs. Official game identity and release facts are checked against Remedy Entertainment. Where puzzle-to-zone reports conflict, this guide labels the pairing as reported and tells players to follow the live visual clue.</p><ul><li><a href="${site.officialGameUrl}" target="_blank" rel="noopener noreferrer">Remedy: official CONTROL Resonant page</a></li><li><a href="${site.taxiOverviewUrl}" target="_blank" rel="noopener noreferrer">GamesRadar: seven-location overview</a></li><li><a href="${site.taxiWalkthroughUrl}" target="_blank" rel="noopener noreferrer">PowerPyx: quest walkthrough and reward</a></li></ul></section>`;
}

function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } }))
  };
}

function pageHero(kicker, title, intro, code) {
  return `<section class="page-hero"><div class="shell page-hero-grid"><div><span class="kicker">${esc(kicker)}</span><h1>${esc(title)}</h1><p>${esc(intro)}</p></div><div class="file-stamp"><span>ACTIVE CASE</span><strong>${esc(code)}</strong><small>MANHATTAN / FIELD COPY</small></div></div></section>`;
}

function locationCard(item, interactive = false) {
  const puzzle = puzzleMap.get(item.puzzle);
  return `<article class="location-card" data-zone-card="${item.id}">
    ${interactive ? `<label class="case-check"><input type="checkbox" data-zone-check="${item.id}"><span aria-hidden="true"></span><span class="sr-only">Mark ${esc(item.name)} complete</span></label>` : ''}
    <div class="case-number">${item.number}</div>
    <div class="case-copy"><span class="case-zone">${esc(item.name)}</span><h3>${esc(item.label)}</h3><p>${esc(item.intro)}</p><div class="case-meta"><span>${esc(puzzle.name)}</span><span>${esc(item.confidence)}</span></div><a href="/locations/${item.id}/">Open location file <span aria-hidden="true">-&gt;</span></a></div>
  </article>`;
}

function puzzleCard(item) {
  return `<article class="puzzle-card"><span class="signal-dot" aria-hidden="true"></span><div><span class="kicker">Observed signal</span><h3>${esc(item.name)}</h3><p>${esc(item.short)}</p><a href="/puzzles/${item.id}/">Read the solution <span aria-hidden="true">-&gt;</span></a></div></article>`;
}

function fieldGuideCard(item, index = 0) {
  return `<article><span>${String(index + 1).padStart(2, '0')} / ${esc(item.eyebrow)}</span><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p><a href="/guides/${item.id}/">Open field guide <span aria-hidden="true">-&gt;</span></a></article>`;
}

function fieldSourceRecord(item) {
  return `<section class="source-record"><span class="kicker">Evidence record</span><h2>How this guide was checked</h2><p>${esc(item.title)} was independently summarized from current launch-week quest, boss, and progression references. The page separates confirmed dependencies from route advice and avoids treating one build choice as universally correct.</p><ul>${item.sources.map((source) => `<li><a href="${source.url}" target="_blank" rel="noopener noreferrer">${esc(source.label)}</a></li>`).join('')}</ul></section>`;
}

function progressBoard() {
  return `<section class="case-board" aria-labelledby="route-title"><div class="shell">
    <div class="board-header"><div><span class="kicker">Personal route log</span><h2 id="route-title">Seven taxis. One open case.</h2><p>Mark each Threshold after all three selections are confirmed. Progress stays in this browser only.</p></div><div class="progress-copy"><strong data-progress-count>0 / 7</strong><span>THRESHOLDS CLOSED</span><button class="text-button" type="button" data-reset-progress>Reset log</button></div></div>
    <div class="progress-track" aria-hidden="true"><span data-progress-bar></span></div>
    <div class="location-list">${locations.map((item) => locationCard(item, true)).join('')}</div>
  </div></section>`;
}

function solverPanel(compact = false) {
  return `<section class="solver${compact ? ' solver-compact' : ''}" aria-labelledby="solver-title"><div class="shell solver-grid">
    <div><span class="kicker">Threshold decoder</span><h2 id="solver-title">What is changing around the taxis?</h2><p>Choose the strongest clue you can see. The matcher gives the rule to test, not a hard-coded car number.</p></div>
    <div class="solver-console" data-solver>
      <div class="solver-options" role="list" aria-label="Visible puzzle clues">
        ${puzzles.map((item) => `<button type="button" data-solver-choice="${item.id}"><span>${esc(item.signal)}</span><small>${esc(item.name)}</small></button>`).join('')}
      </div>
      <div class="solver-result" data-solver-result aria-live="polite"><span class="result-label">FIELD INSTRUCTION</span><h3>Pick the clue that changes.</h3><p>Watch one full cycle before choosing. Position alone is never enough evidence.</p></div>
    </div>
  </div></section>`;
}

function home() {
  const schemas = [websiteSchema, organizationSchema, gameSchema, faqSchema(faqs)];
  return `${head({ title: 'CONTROL Resonant Taxi Guide', description: site.description, schemas })}${header()}
<main id="main">
  <section class="home-hero">
    <img src="/assets/images/manhattan-taxis.jpg" alt="A Threshold street lined with yellow taxis in CONTROL Resonant" width="1920" height="1080">
    <div class="hero-scrim"></div>
    <div class="shell hero-content"><div class="hero-file"><span>CASE CR-07 / SIDE STORY</span><span>STATUS: OPEN</span></div><h1>The Last Taxi<br><em>Field Guide</em></h1><p>Find all seven cabs, read the Threshold signals, and finish Mila's strangest route through warped Manhattan.</p><div class="hero-actions"><a class="button button-yellow" href="#route">Track all 7 taxis</a><a class="button button-ghost" href="#solver">Identify my puzzle</a></div><div class="hero-proof"><span><strong>7</strong> verified locations</span><span><strong>6</strong> puzzle patterns</span><span><strong>0</strong> invented car numbers</span></div></div>
    <div class="image-credit">Screenshot: Remedy Entertainment via GamesRadar</div>
  </section>
  <section class="dispatch"><div class="shell dispatch-grid"><div><span class="dispatch-label">Quick answer</span><p>Each taxi leads to a three-round Threshold test. Answer Mila's payphone, identify the one changing signal, and use the green traffic light as confirmation.</p></div><a href="/last-taxi/">Read the complete quest walkthrough <span aria-hidden="true">-&gt;</span></a></div></section>
  <div id="route">${progressBoard()}</div>
  <div id="solver">${solverPanel()}</div>
  <section class="evidence"><div class="shell evidence-grid"><div class="evidence-image"><img src="/assets/images/paranatural-beacon.jpg" alt="Dylan fighting a Resonant enemy in the West Incursion Zone" width="1920" height="1080" loading="lazy"><span>MANHATTAN / ANOMALY FILE</span></div><div class="evidence-copy"><span class="kicker">Before you choose</span><h2>The puzzle may travel. The evidence does not.</h2><p>Published walkthroughs agree on the seven taxi locations, but they do not fully agree that every puzzle is permanently locked to one district. That is why this guide starts with what is visible: roof signs, lamp rhythm, blackouts, mold, or shadows.</p><p>Zone pages still show the most commonly reported pairing so you know what to expect. If your encounter differs, trust the live clue and use the matcher.</p><a class="line-link" href="/taxi-puzzle-solver/">Compare all puzzle patterns <span aria-hidden="true">-&gt;</span></a></div></div></section>
  <section class="method"><div class="shell"><div class="section-heading"><span class="kicker">Three-part method</span><h2>Find it. Read it. Confirm it.</h2></div><div class="method-grid"><article><span>01</span><h3>Anchor on a landmark</h3><p>Use the warehouse, cinema, garage, research ledge, or Evac Building. District names alone are too broad.</p></article><article><span>02</span><h3>Observe a full cycle</h3><p>Walk around the row. Watch the lamps twice. Move the portable light consistently. Let the scene reveal its rule.</p></article><article><span>03</span><h3>Wait for green</h3><p>A green traffic signal confirms the correct cab. Complete all three rounds before marking the zone closed.</p></article></div></div></section>
  <section class="faq-section"><div class="shell faq-grid"><div><span class="kicker">Field desk</span><h2>Questions players hit on this route</h2><p>Short answers first, with the uncertain bits labeled honestly.</p></div><div class="faq-list">${faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div></div></section>
  <section class="related"><div class="shell"><div class="section-heading"><span class="kicker">Beyond the taxi route</span><h2>Continue through Manhattan</h2></div><div class="mini-grid"><a href="/guides/control-resonant-walkthrough/"><span>CAMPAIGN</span><strong>Walkthrough</strong><small>Keep all three quest tracks moving.</small></a><a href="/guides/abilities/"><span>PROGRESSION</span><strong>Abilities</strong><small>Shift, Reach, barriers, and resets.</small></a><a href="/guides/bosses/"><span>COMBAT</span><strong>Resonants</strong><small>Boss access and ability rewards.</small></a></div></div></section>
  <section class="official-band"><div class="shell"><div><span class="kicker">Source discipline</span><h2>Unofficial help, official game links.</h2><p>Resonant Field Guide is independent. Release facts and promotional media are checked against Remedy; puzzle instructions are original field summaries.</p></div><a class="button button-dark" href="${site.officialNewsUrl}" target="_blank" rel="noopener noreferrer">Open Remedy release note</a></div></section>
</main>${footer()}`;
}

function locationsHub() {
  const path = '/taxi-locations/';
  const bc = breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Taxi locations', href: path }]);
  const desc = 'All seven CONTROL Resonant taxi locations with landmarks, route notes, puzzle clues, and an in-browser completion checklist.';
  return `${head({ title: 'All 7 Taxi Locations in CONTROL Resonant', description: desc, path, schemas: [bc.schema, articleSchema('All 7 Taxi Locations in CONTROL Resonant', desc, path)] })}${header('locations')}${bc.html}<main id="main">${pageHero('Route index', 'All 7 Taxi Locations', 'A landmark-first route through Downtown, Central, Evacuation Zone, West Incursion Zone, The Park, Underpass, and Unknown.', 'CR-07 / LOCATIONS')} ${progressBoard()}<section class="content-band"><div class="shell prose-grid"><article><span class="kicker">Route notes</span><h2>How to use this location list</h2><p>Open the zone you are currently exploring and follow the landmark route. Each file distinguishes the physical taxi location from the puzzle commonly reported there. If the puzzle does not match, switch to the observation-based solver rather than forcing the expected answer.</p><p>The checklist is deliberately local. It never connects to CONTROL Resonant or reads a save file. Mark a zone only after the third taxi selection is confirmed and Dylan exits the Threshold.</p></article><aside class="field-note"><strong>Blocked route?</strong><p>Underpass access can depend on later traversal progress. Clear another available taxi and return after opening the deeper research route.</p><a href="/guides/missing-taxi-fix/">Open missing-taxi checks</a></aside></div></section></main>${footer()}`;
}

function locationPage(item) {
  const path = `/locations/${item.id}/`;
  const puzzle = puzzleMap.get(item.puzzle);
  const bc = breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Taxi locations', href: '/taxi-locations/' }, { label: item.name, href: path }]);
  const title = `${item.name} Taxi Location`;
  const desc = `Find the ${item.name} taxi in CONTROL Resonant with its landmark route, reported puzzle, missed-location checks, and completion steps.`;
  const related = locations.filter((loc) => loc.id !== item.id).slice(Math.max(0, Number(item.number) - 2), Math.max(0, Number(item.number) - 2) + 3);
  return `${head({ title, description: desc, path, type: 'article', schemas: [bc.schema, articleSchema(title, desc, path)] })}${header('locations')}${bc.html}<main id="main">
    ${pageHero(`Taxi ${item.number} / ${item.name}`, `${item.name} Taxi Location`, item.intro, `CR-07 / ${item.number}`)}
    <section class="article-layout"><div class="shell article-grid"><article class="article-body">${editorialMeta('Location file')}<div class="answer-box"><span>DIRECT ROUTE</span><p>${esc(item.route)}</p></div><h2>Where to find the ${esc(item.name)} taxi</h2><p>${esc(item.route)}</p><div class="landmark"><span>LANDMARK</span><strong>${esc(item.landmark)}</strong></div><h2>Why players miss this taxi</h2><p>${esc(item.whyMissed)}</p><h2>How to confirm the right approach</h2><p>${esc(item.confirmation)}</p><h2>Step-by-step route</h2><ol class="route-steps">${item.steps.map((step) => `<li>${esc(step)}</li>`).join('')}</ol><h2>Commonly reported puzzle</h2><p><strong>${esc(puzzle.name)}:</strong> ${esc(puzzle.short)}</p><p>${esc(puzzle.answer)}</p><div class="caution"><strong>Field caution</strong><p>${esc(item.warning)}</p></div><h2>How to confirm completion</h2><p>Do not leave after one correct cab. The local Threshold runs for three rounds. Wait for the green traffic signal each time, finish the return sequence, and then mark this zone complete in the route log.</p>${sourceRecord(`${item.name} route and puzzle details`)}</article><aside class="article-rail"><div class="rail-file"><span>FILE STATUS</span><strong>${esc(item.confidence)}</strong></div><div><span class="kicker">At a glance</span><dl><dt>Zone</dt><dd>${esc(item.name)}</dd><dt>Landmark</dt><dd>${esc(item.label)}</dd><dt>Reported test</dt><dd><a href="/puzzles/${puzzle.id}/">${esc(puzzle.name)}</a></dd><dt>Rounds</dt><dd>3 confirmed picks</dd></dl></div><a class="button button-yellow full" href="/taxi-puzzle-solver/">My puzzle looks different</a></aside></div></section>
    <section class="related"><div class="shell"><div class="section-heading"><span class="kicker">Continue the route</span><h2>Nearby case files</h2></div><div class="mini-grid">${related.map((loc) => `<a href="/locations/${loc.id}/"><span>${loc.number}</span><strong>${esc(loc.name)}</strong><small>${esc(loc.label)}</small></a>`).join('')}</div></div></section>
  </main>${footer()}`;
}

function puzzleHub() {
  const path = '/taxi-puzzle-solver/';
  const bc = breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Puzzle solver', href: path }]);
  const desc = 'Identify the active CONTROL Resonant taxi puzzle by visible clues, then use the correct three-round rule without guessing a car number.';
  return `${head({ title: 'The Last Taxi Puzzle Solver', description: desc, path, schemas: [bc.schema, articleSchema('The Last Taxi Puzzle Solver', desc, path)] })}${header('puzzles')}${bc.html}<main id="main">${pageHero('Observation first', 'The Last Taxi Puzzle Solver', 'Choose what changes in the Threshold. The solution is based on the live signal, not a fixed taxi position.', 'CR-07 / DECODER')}${solverPanel(true)}<section class="puzzle-library"><div class="shell"><div class="section-heading"><span class="kicker">All known patterns</span><h2>Six ways the Threshold identifies a cab</h2></div><div class="puzzle-grid">${puzzles.map(puzzleCard).join('')}</div><div class="caution wide"><strong>Why no car numbers?</strong><p>Taxi order and camera approach are less reliable than the environmental rule. A guide that says “pick the third cab” can fail when the row is entered from the other side or the encounter variant changes.</p></div></div></section></main>${footer()}`;
}

function puzzlePage(item) {
  const path = `/puzzles/${item.id}/`;
  const bc = breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Puzzle solver', href: '/taxi-puzzle-solver/' }, { label: item.name, href: path }]);
  const title = `${item.name} - Taxi Solution`;
  const desc = `Solve the ${item.name} in CONTROL Resonant using the live visual clue, reported round sequence, and common mistake to avoid.`;
  const zones = locations.filter((loc) => loc.puzzle === item.id);
  return `${head({ title, description: desc, path, type: 'article', schemas: [bc.schema, articleSchema(title, desc, path)] })}${header('puzzles')}${bc.html}<main id="main">${pageHero('Threshold pattern', item.name, item.short, `CR-07 / ${item.id.toUpperCase()}`)}<section class="article-layout"><div class="shell article-grid"><article class="article-body">${editorialMeta('Puzzle file')}<div class="answer-box"><span>SOLUTION RULE</span><p>${esc(item.answer)}</p></div><h2>How to read the puzzle</h2><ol class="route-steps">${item.details.map((detail) => `<li>${esc(detail)}</li>`).join('')}</ol><h2>Why this clue works</h2><p>The Last Taxi hides the correct cab by changing one environmental property across the row. Your job is to isolate that property, keep the comparison consistent, and ignore visual damage or position that does not change with the test.</p><div class="caution"><strong>Most common mistake</strong><p>${esc(item.mistake)}</p></div><h2>If your zone shows a different puzzle</h2><p>Use the live clue. Current public walkthroughs disagree on whether every pattern is permanently fixed to a single zone, so the zone pairing below is an expectation rather than a guarantee.</p>${sourceRecord(`${item.name} behavior and round sequence`)}</article><aside class="article-rail"><div class="rail-file"><span>PRIMARY SIGNAL</span><strong>${esc(item.signal)}</strong></div><div><span class="kicker">Commonly reported in</span>${zones.length ? zones.map((loc) => `<a class="rail-link" href="/locations/${loc.id}/">${esc(loc.name)} <span>-&gt;</span></a>`).join('') : '<p>Variable reports</p>'}</div><a class="button button-yellow full" href="/taxi-puzzle-solver/">Back to matcher</a></aside></div></section><section class="related"><div class="shell"><div class="section-heading"><span class="kicker">Compare signals</span><h2>Other puzzle patterns</h2></div><div class="puzzle-grid">${puzzles.filter((p) => p.id !== item.id).slice(0, 3).map(puzzleCard).join('')}</div></div></section></main>${footer()}`;
}

function questPage() {
  const path = '/last-taxi/';
  const bc = breadcrumbs([{ label: 'Home', href: '/' }, { label: 'The Last Taxi', href: path }]);
  const desc = "Complete walkthrough for The Last Taxi in CONTROL Resonant: find seven cabs, solve the Threshold tests, and claim the Untapped Coffee Cup Artifact.";
  return `${head({ title: 'The Last Taxi Complete Walkthrough', description: desc, path, type: 'article', schemas: [bc.schema, articleSchema('The Last Taxi Complete Walkthrough', desc, path), faqSchema(faqs)] })}${header('quest')}${bc.html}<main id="main">${pageHero('Side Story walkthrough', 'The Last Taxi', "A complete field route for Mila's seven taxi encounters, with variable puzzle reports separated from verified landmarks.", 'CR-07 / MASTER FILE')}<section class="article-layout"><div class="shell article-grid"><article class="article-body">${editorialMeta('Master quest file')}<div class="answer-box"><span>QUEST SUMMARY</span><p>Find seven abnormal taxis across Manhattan, answer Mila at each payphone, and complete three signal-based selections inside every Threshold.</p></div><h2>How The Last Taxi works</h2><p>This is a distributed Side Story rather than one continuous mission space. Each region contains a taxi encounter. The physical locations are stable enough to route by landmarks; the exact puzzle-to-zone mapping is less certain in current guides.</p><h2>Recommended route</h2><ol class="route-steps">${locations.map((loc) => `<li><a href="/locations/${loc.id}/"><strong>${esc(loc.name)}:</strong> ${esc(loc.label)}</a></li>`).join('')}</ol><h2>The rule shared by every Threshold</h2><p>Every test asks you to identify the odd taxi through an observable signal. That signal can be a roof sign, a combination of lights, a streetlight rhythm, a blackout behavior, repairable parts, or a cast shadow. A green traffic light confirms a correct choice.</p><h2>When to mark a taxi complete</h2><p>Wait until all three rounds finish and Dylan exits the Threshold. Leaving after one correct selection can make it difficult to tell which region remains incomplete later.</p><div class="caution"><strong>Reward note</strong><p>The reported completion reward is the Untapped Coffee Cup Artifact. If you completed the quest at launch and received nothing, update the game: version 1.4.0 fixed an issue that could prevent The Last Taxi rewards from being granted.</p></div>${sourceRecord('The seven-region route, quest completion steps, and reward details')}</article><aside class="article-rail"><div class="rail-file"><span>CASE COUNT</span><strong>7 taxis / 21 confirmed picks</strong></div><a class="rail-link" href="/taxi-locations/">Open the route tracker <span>-&gt;</span></a><a class="rail-link" href="/taxi-puzzle-solver/">Open the puzzle matcher <span>-&gt;</span></a><a class="rail-link" href="/guides/missing-taxi-fix/">Taxi not appearing? <span>-&gt;</span></a></aside></div></section><section class="faq-section"><div class="shell faq-grid"><div><span class="kicker">Quest FAQ</span><h2>Before closing the file</h2></div><div class="faq-list">${faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div></div></section></main>${footer()}`;
}

function guidesHub() {
  const path = '/guides/';
  const bc = breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: path }]);
  const desc = 'CONTROL Resonant walkthroughs for quest order, Shift, Reach, Ability Barriers, bosses, builds, and The Last Taxi.';
  const clusters = fieldGuideCategories.map((category) => {
    const items = fieldGuides.filter((item) => item.category === category.id);
    return `<section class="guide-cluster"><div class="shell"><div class="cluster-heading"><div><span class="kicker">${esc(category.label)}</span><h2>${esc(category.title)}</h2></div><p>${esc(category.description)}</p></div><div class="guide-grid field-guide-grid">${items.map(fieldGuideCard).join('')}</div></div></section>`;
  }).join('');
  return `${head({ title: 'CONTROL Resonant Guides', description: desc, path, schemas: [bc.schema] })}${header('guides')}${bc.html}<main id="main">${pageHero('Guide desk', 'CONTROL Resonant Field Guides', 'Walkthrough routes, quest dependencies, movement powers, Ability Barriers, bosses, and The Last Taxi support.', 'RFG / GUIDE INDEX')}${clusters}<section class="guide-cluster taxi-support"><div class="shell"><div class="cluster-heading"><div><span class="kicker">Taxi support</span><h2>The Last Taxi troubleshooting</h2></div><p>Start the Side Story, understand Mila's calls, and recover a route or progress state without risking a working save.</p></div><div class="guide-grid">${guides.map((guide, index) => `<article><span>${String(index + 1).padStart(2, '0')} / ${esc(guide.eyebrow)}</span><h3>${esc(guide.title)}</h3><p>${esc(guide.description)}</p><a href="/guides/${guide.id}/">Open support guide <span aria-hidden="true">-&gt;</span></a></article>`).join('')}</div></div></section></main>${footer()}`;
}

function fieldGuidePage(item) {
  const path = `/guides/${item.id}/`;
  const bc = breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: item.title, href: path }]);
  const related = item.related.map((id) => fieldGuideMap.get(id)).filter(Boolean);
  const active = item.id === 'abilities' || item.category === 'abilities' ? 'abilities' : 'guides';
  const content = item.sections.map((section) => `<h2>${esc(section.title)}</h2>${section.paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join('')}`).join('');
  return `${head({ title: item.title, description: item.description, path, type: 'article', schemas: [bc.schema, articleSchema(item.title, item.description, path)] })}${header(active)}${bc.html}<main id="main">${pageHero(item.eyebrow, item.title, item.lead, `RFG / ${item.category.toUpperCase()}`)}<section class="article-layout"><div class="shell article-grid"><article class="article-body">${editorialMeta('Field guide')}<div class="answer-box"><span>DIRECT ANSWER</span><p>${esc(item.lead)}</p></div>${content}${fieldSourceRecord(item)}</article><aside class="article-rail"><div class="rail-file"><span>GUIDE CLUSTER</span><strong>${esc(fieldGuideCategories.find((category) => category.id === item.category)?.title || 'CONTROL Resonant')}</strong></div>${related.map((entry) => `<a class="rail-link" href="/guides/${entry.id}/">${esc(entry.title)} <span>-&gt;</span></a>`).join('')}<a class="rail-link" href="/last-taxi/">The Last Taxi <span>-&gt;</span></a><a class="button button-yellow full" href="/guides/">All field guides</a></aside></div></section><section class="related"><div class="shell"><div class="section-heading"><span class="kicker">Related files</span><h2>Continue this route</h2></div><div class="mini-grid">${related.map((entry) => `<a href="/guides/${entry.id}/"><span>${esc(entry.eyebrow)}</span><strong>${esc(entry.title)}</strong><small>${esc(entry.description)}</small></a>`).join('')}</div></div></section></main>${footer()}`;
}

function guidePage(item) {
  const path = `/guides/${item.id}/`;
  const bc = breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: item.title, href: path }]);
  return `${head({ title: item.title, description: item.description, path, type: 'article', schemas: [bc.schema, articleSchema(item.title, item.description, path)] })}${header('guides')}${bc.html}<main id="main">${pageHero(item.eyebrow, item.title, item.lead, 'CR-07 / SUPPORT')}<section class="article-layout"><div class="shell article-grid"><article class="article-body">${editorialMeta('Support guide')}<div class="answer-box"><span>DIRECT ANSWER</span><p>${esc(item.lead)}</p></div>${item.sections.map(([title, body]) => `<h2>${esc(title)}</h2><p>${esc(body)}</p>`).join('')}${sourceRecord(`${item.title} troubleshooting steps`)}</article><aside class="article-rail"><div class="rail-file"><span>RELATED TOOLS</span><strong>The Last Taxi</strong></div><a class="rail-link" href="/taxi-locations/">Location tracker <span>-&gt;</span></a><a class="rail-link" href="/taxi-puzzle-solver/">Puzzle matcher <span>-&gt;</span></a><a class="rail-link" href="/last-taxi/">Complete walkthrough <span>-&gt;</span></a></aside></div></section></main>${footer()}`;
}

function simpleArticle({ slug, title, description, kicker, content, active = '' }) {
  const path = `/${slug}/`;
  const bc = breadcrumbs([{ label: 'Home', href: '/' }, { label: title, href: path }]);
  const page = simplePages.find((entry) => entry.slug === slug);
  const robots = page?.robots || 'index,follow';
  return `${head({ title, description, path, type: 'article', robots, schemas: [bc.schema, articleSchema(title, description, path)] })}${header(active)}${bc.html}<main id="main">${pageHero(kicker, title, description, 'RFG / INFO')}<section class="article-layout"><div class="shell article-grid"><article class="article-body">${editorialMeta('Site information')}${content}</article><aside class="article-rail"><div class="rail-file"><span>SITE STATUS</span><strong>Independent guide</strong></div><a class="rail-link" href="/last-taxi/">The Last Taxi walkthrough <span>-&gt;</span></a><a class="rail-link" href="${site.officialGameUrl}" target="_blank" rel="noopener noreferrer">Official game page <span>-&gt;</span></a></aside></div></section></main>${footer()}`;
}

const simplePages = [
  {
    slug: 'taxi-rewards', title: 'The Last Taxi Reward', kicker: 'Reward check',
    description: 'The Last Taxi rewards the Untapped Coffee Cup Artifact; update 1.4.0 fixes a launch issue that could prevent the reward from appearing.',
    content: '<div class="answer-box"><span>SHORT ANSWER</span><p>Completing The Last Taxi rewards the Untapped Coffee Cup Artifact. Finish all seven taxi Thresholds and answer Mila\'s final call.</p></div><h2>Why did some players receive nothing?</h2><p>Game Update 1.4.0 fixed an issue where The Last Taxi could fail to grant its rewards. If you finished the Side Story on an earlier build, install the current update and check the quest and Artifact state again.</p><h2>Check the reward in this order</h2><ol class="route-steps"><li>Confirm the game is updated to version 1.4.0 or later on the title screen or platform update history.</li><li>Verify every region completed all three taxi selections, not only the first green-light confirmation.</li><li>After the seventh Threshold, return to the alley and answer Mila\'s final phone call.</li><li>Check the Artifact inventory and quest completion state after the next checkpoint save.</li></ol><h2>What else does completion count toward?</h2><p>Finding all seven taxis completes the Side Story and is reported as part of progress toward the Threshold Researcher trophy or achievement. The trophy requirement is separate from whether an older build displayed the reward correctly.</p><h2>Should an older completed save receive it?</h2><p>The patch note confirms a reward-granting fix, but platform and save-state behavior can differ. Update first, load the completed save, pass a checkpoint, and inspect the Artifact inventory before replaying the entire route. Do not delete or overwrite a working save merely to force the reward.</p><h2>How do I make sure the quest is complete?</h2><p>Finish all three selection rounds at every taxi, then answer the final phone call after the seventh encounter. Use the route tracker to revisit any region left mid-test.</p><p class="source-line">Cross-check: <a href="https://www.powerpyx.com/control-resonant-all-taxi-locations-the-last-taxi-walkthrough/" target="_blank" rel="noopener noreferrer">PowerPyx quest walkthrough</a> and <a href="https://steamdb.info/patchnotes/25600401/" target="_blank" rel="noopener noreferrer">Update 1.4.0 notes mirrored by SteamDB</a>.</p>'
  },
  {
    slug: 'taxi-ending', title: 'The Last Taxi Ending Explained', kicker: 'Spoiler-light ending note',
    description: "A spoiler-light explanation of how Mila's Side Story closes after all seven CONTROL Resonant taxi Thresholds.",
    content: '<div class="answer-box"><span>SPOILER LEVEL: LIGHT</span><p>The ending is the closure of Mila\'s cross-Manhattan taxi case after the seventh completed Threshold. This guide does not reveal late-game story material beyond that quest structure.</p></div><h2>What triggers the ending?</h2><p>Complete every taxi encounter through all three correct selections. After the seventh taxi returns Dylan to the Threshold street, go back to the alley and answer the phone one final time. The last call closes the Side Story; simply finding the seventh cab is not the final trigger.</p><h2>How do I know one taxi is unfinished?</h2><p>A taxi should not be counted after only one green signal. Each region has three selection rounds followed by the return from the Threshold. If the final call does not become available, compare all seven zones and revisit the encounter where you may have left after an early confirmation.</p><h2>Is there a hidden eighth taxi?</h2><p>No eighth location was established in the cross-checked route. The seven listed zones form the complete known set: Downtown, Central, Evacuation Zone, West Incursion Zone, The Park, Underpass, and Unknown.</p><h2>Does the ending affect the main story?</h2><p>The Last Taxi is a Side Story. Its closure resolves Mila\'s distributed taxi route without requiring this page to spoil the main campaign ending. Players can complete the route in the order their current story access allows.</p><h2>What happens after completion?</h2><p>The quest closes, the reported Untapped Coffee Cup Artifact reward is granted, and the completed taxis contribute toward Threshold Researcher progress. Version 1.4.0 fixed a launch issue that could prevent the reward from appearing, so update before diagnosing a completed quest as permanently broken.</p><h2>Where to go next</h2><p>Return to the route tracker, confirm every zone, then use the progress troubleshooting guide if your objective remains open. Preserve your existing save while checking the last incomplete encounter.</p><p class="source-line">Cross-check: <a href="https://www.powerpyx.com/control-resonant-all-taxi-locations-the-last-taxi-walkthrough/" target="_blank" rel="noopener noreferrer">PowerPyx completion sequence</a> and <a href="https://steamdb.info/patchnotes/25600401/" target="_blank" rel="noopener noreferrer">Update 1.4.0 notes</a>.</p>'
  },
  {
    slug: 'about', title: 'About Resonant Field Guide', kicker: 'Editorial file',
    description: 'How Resonant Field Guide verifies CONTROL Resonant locations, labels uncertainty, and keeps its walkthroughs independent.',
    content: '<h2>What this site is</h2><p>Resonant Field Guide is an independent player reference built around answer-first pages, landmark routes, and observation-based puzzle help. The first coverage cluster follows The Last Taxi because it is a distributed Side Story where a route tracker and visual puzzle matcher solve a real navigation problem better than a single long article.</p><h2 id="method">How the guide is produced</h2><p>Official identity, release, platform, and patch facts are checked against Remedy Entertainment or first-party update notes. Location and strategy details are compared across at least two independent walkthroughs before publication. The editorial desk then rewrites the route around durable landmarks and observable signals instead of copying another guide\'s sequence.</p><p>Where launch-week sources disagree, the page states the uncertainty. The current taxi pages distinguish stable physical locations from puzzle-to-zone pairings that may vary or have conflicting reports.</p><h2>Who edits the pages</h2><p>Pages are maintained by the Resonant Field Guide Editorial Desk. Every substantial guide includes a visible verification date and a link back to this methodology. A named publisher profile and working correction address must be added before the site is submitted for advertising review.</p><h2>Corrections and update policy</h2><p>Corrections are prioritized when they include a platform, game version, zone, progression state, and a screenshot or clip timestamp. A changed reward, route, or puzzle rule is updated in the affected guide and recorded in the project editorial notes rather than silently changing only the date.</p><h2>What this site is not</h2><p>It is not an official Remedy property, a download host, a mod marketplace, or a substitute for owning the game. CONTROL and related names and imagery belong to their respective owners.</p>'
  },
  {
    slug: 'contact', title: 'Corrections and Contact', kicker: 'Field corrections',
    description: 'Report an incorrect taxi landmark, changed puzzle pattern, or missing attribution in Resonant Field Guide.',
    robots: 'noindex,follow', indexable: false,
    content: '<h2>What makes a useful correction?</h2><p>Include the zone, platform, story progress, and the exact clue you observed. A screenshot or short clip timestamp is especially useful when the puzzle differs from a commonly reported zone pairing.</p><h2>Current contact route</h2><p>This local first release does not yet collect email addresses or form submissions. A working public contact address is a release blocker and must be added before AdSense submission.</p><h2>Attribution requests</h2><p>If an image credit or source link is incomplete, identify the page and original source so it can be corrected promptly.</p>'
  },
  {
    slug: 'privacy', title: 'Privacy', kicker: 'Site policy',
    description: 'Privacy details for the local checklist and future analytics on Resonant Field Guide.',
    robots: 'noindex,follow', indexable: false,
    content: '<h2>Checklist storage</h2><p>The taxi completion checklist is stored in your browser using localStorage. It is not sent to a server and does not connect to your CONTROL Resonant save file.</p><h2>Analytics</h2><p>This first local build does not include analytics. If privacy-respecting traffic measurement is added at launch, this policy will name the provider and data involved.</p><h2>External links</h2><p>Links to Remedy and other external resources follow the destination site\'s privacy practices.</p>'
  },
  {
    slug: 'terms', title: 'Terms and Disclaimer', kicker: 'Site policy',
    description: 'Use, accuracy, affiliation, and intellectual-property terms for Resonant Field Guide.',
    robots: 'noindex,follow', indexable: false,
    content: '<h2>Independent guide</h2><p>Resonant Field Guide is unofficial and is not affiliated with, endorsed by, or sponsored by Remedy Entertainment.</p><h2>Accuracy</h2><p>Game routes and puzzle behavior can vary by patch, progression state, or interpretation. Use the guide as editorial help, not a guarantee. Corrections are welcomed.</p><h2>Intellectual property</h2><p>CONTROL, CONTROL Resonant, characters, screenshots, and related marks belong to their respective owners. Original site text, layout, and tools may not be republished wholesale.</p>'
  }
];

function notFound() {
  const desc = 'The requested Resonant Field Guide case file could not be found.';
  return `${head({ title: 'Case File Not Found', description: desc, path: '/404.html', robots: 'noindex,follow' })}${header()}<main id="main"><section class="not-found"><div class="shell"><span class="file-stamp"><span>ERROR</span><strong>404</strong><small>CASE FILE MISROUTED</small></span><h1>This route folded somewhere else.</h1><p>The requested field note is not in the current archive.</p><a class="button button-yellow" href="/">Return to the taxi board</a></div></section></main>${footer()}`;
}

async function writePage(path, html) {
  const target = join(out, path === '/' ? 'index.html' : path.replace(/^\//, ''), path.endsWith('/') && path !== '/' ? 'index.html' : '');
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html);
}

await rm(out, { recursive: true, force: true });
await mkdir(join(out, 'assets', 'css'), { recursive: true });
await mkdir(join(out, 'assets', 'js'), { recursive: true });
await mkdir(join(out, 'assets', 'images'), { recursive: true });

await Promise.all([
  cp(join(root, 'src', 'styles.css'), join(out, 'assets', 'css', 'site.css')),
  cp(join(root, 'src', 'site.js'), join(out, 'assets', 'js', 'site.js')),
  cp(join(root, 'src', 'assets', 'images'), join(out, 'assets', 'images'), { recursive: true })
]);

await writePage('/', home());
await writePage('/taxi-locations/', locationsHub());
await writePage('/taxi-puzzle-solver/', puzzleHub());
await writePage('/last-taxi/', questPage());
await writePage('/guides/', guidesHub());
for (const item of locations) await writePage(`/locations/${item.id}/`, locationPage(item));
for (const item of puzzles) await writePage(`/puzzles/${item.id}/`, puzzlePage(item));
for (const item of guides) await writePage(`/guides/${item.id}/`, guidePage(item));
for (const item of fieldGuides) await writePage(`/guides/${item.id}/`, fieldGuidePage(item));
for (const item of simplePages) await writePage(`/${item.slug}/`, simpleArticle(item));
await writeFile(join(out, '404.html'), notFound());

const paths = [
  '/', '/taxi-locations/', '/taxi-puzzle-solver/', '/last-taxi/', '/guides/',
  ...locations.map((item) => `/locations/${item.id}/`),
  ...puzzles.map((item) => `/puzzles/${item.id}/`),
  ...guides.map((item) => `/guides/${item.id}/`),
  ...fieldGuides.map((item) => `/guides/${item.id}/`),
  ...simplePages.filter((item) => item.indexable !== false).map((item) => `/${item.slug}/`)
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((path) => `  <url><loc>${url(path)}</loc><lastmod>${site.launched}</lastmod></url>`).join('\n')}\n</urlset>\n`;
await writeFile(join(out, 'sitemap.xml'), sitemap);
await writeFile(join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.domain}/sitemap.xml\n`);
await cp(join(out, 'index.html'), join(root, 'preview.html'));

console.log(`Built ${paths.length} indexable pages in ${out}`);
