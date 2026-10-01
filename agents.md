# Resonant Field Guide Project Guide

## Background

Resonant Field Guide is an independent, English-language SEO guide for CONTROL Resonant. Its first cluster covers The Last Taxi Side Story; its second covers campaign progression, traversal abilities, Ability Barriers, resets, Resonants, and early build decisions.

## Goals

- Give a stuck player a useful answer within the first screen.
- Keep verified location facts separate from variable or conflicting puzzle reports.
- Maintain distinct, internally linked clusters for Side Stories, progression, abilities, bosses, builds, and future collectibles.
- Use `https://controlresonantguide.app` as the production canonical domain.

## Boundaries

- This is an unofficial editorial guide and must not imply affiliation with Remedy Entertainment.
- Do not host pirated files, game downloads, mods, cheats, account sales, or copied walkthrough text.
- Do not invent rewards, quest steps, puzzle mappings, or official statements.
- Attribute official screenshots and link to Remedy sources.

## Working Rules

- Read this file and `memory.md` before each work session.
- Record meaningful implementation decisions and corrections in `memory.md`.
- Keep core page copy in generated HTML. JavaScript may enhance progress tracking and filtering, but must not be required to read the guide.
- Every indexable page needs a unique title, description, H1, canonical, breadcrumbs, and useful internal links.
- Run `npm run build` and `npm run check` before publishing.
- Do not submit the site to AdSense until `npm run adsense:check` passes. Manual readiness flags must reflect real, verified conditions rather than being changed only to silence the check.
- Thin utility pages should remain useful to visitors but use `noindex,follow` and stay out of the sitemap. Do not create search variants or near-duplicate pages to inflate the URL count.

## Design Direction

- Editorial concept: an FBC traffic-investigation board built from Manhattan wayfinding, case-file labels, and taxi signals.
- Palette: asphalt ink, paper white, taxi yellow, signal blue, anomaly violet, and sparing alert red.
- Avoid generic neon sci-fi gradients, oversized dashboard cards, and rounded marketing UI.
- Signature interaction: a seven-zone investigation route with local progress plus an observation-based taxi puzzle matcher.
