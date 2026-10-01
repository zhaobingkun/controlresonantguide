# Project Memory

## 2026-10-01 - Initial Build

- Working brand: **Resonant Field Guide**.
- Working domain: `resonantfieldguide.com`; WHOIS returned no match during the initial check, but registration was not completed in this task.
- The first content cluster is The Last Taxi rather than a broad, thin CONTROL Resonant wiki.
- Seven reported zones: Downtown, Central, Evacuation Zone, West Incursion Zone, The Park, Underpass, and Unknown.
- Current guides disagree on whether each puzzle is permanently tied to a zone. Copy must tell players to identify the puzzle from visible evidence and describe zone pairings as commonly reported, not guaranteed.
- Reward correction after the first draft: PowerPyx identifies the reward as the Untapped Coffee Cup Artifact, and Update 1.4.0 fixes a launch issue that could prevent The Last Taxi rewards from being granted. Reward and FAQ copy were updated before delivery.
- Final first release contains 28 indexable URLs plus a 404 page. `npm run build` and `npm run check` pass.
- Browser QA passed at 1280px desktop and 390px mobile with no horizontal overflow. LocalStorage progress survives reload, Reset clears it, and the clue matcher returns the expected solution rule.
- Local preview uses port 4174. The hero image is an in-game Last Taxi Threshold screenshot credited to Remedy Entertainment via GamesRadar.
- Official game facts and images should come from Remedy pages/media kits where practical; strategy details should be independently summarized and corrected as gameplay evidence improves.

## 2026-10-01 - AdSense Readiness Audit

- Google guidance emphasizes unique, valuable content, clear navigation, good user experience, and people-first evidence; it does not prescribe a target word count.
- Added visible editorial ownership, verification dates, methodology links, and source records to substantive guide pages.
- Added unique missed-location and approach-confirmation sections to each of the seven location pages.
- Expanded the Guides hub, Reward page, and Ending page after the automated audit identified them as thin.
- Contact, Privacy, and Terms remain accessible but now use `noindex,follow` and are excluded from the sitemap. The site now has 25 indexable URLs plus utility and 404 pages.
- Added `ADSENSE_READINESS.md`, `adsense-readiness.json`, and `npm run adsense:check`. The audit passes all current content-depth checks but intentionally remains blocked on real-world launch requirements: live HTTPS domain, working contact, named publisher profile, original gameplay captures, Search Console indexing, observed reader activity, and a second substantive content cluster.

## 2026-10-01 - Progression Expansion

- Expanded from 25 to 37 indexable URLs by adding 12 independently written field guides across progression, abilities, and combat.
- New progression pages cover the campaign walkthrough, quest structure, recommended quest order, and a route-blocker diagnostic.
- New ability pages cover the system overview, Shift, Reach, Ability Barriers, and category-based respecs in the Gap.
- New combat pages cover all Resonants and Hedron, the first post-Artist ability choice, and early-game priorities.
- Rebuilt `/guides/` as the cross-cluster hub, added homepage and footer discovery links, and raised the sitemap check minimum to 37 URLs.
- Each new page contains roughly 560-660 words in `<main>`, unique metadata, Breadcrumb and Article schema, current source records, and related internal links.
- Marked `secondContentClusterPublished` true because the non-Taxi cluster now exists. AdSense remains blocked on the other real-world launch and trust requirements.

## 2026-10-01 - Domain Decision

- User selected `controlresonantguide.app` as the production domain after comparing available `.com` and `.app` options.
- Keep **Resonant Field Guide** as the visible brand and maintain prominent independent fan-guide labeling because the domain contains the full game name.
- Updated the canonical base so canonical URLs, Open Graph URLs, structured data, `sitemap.xml`, and `robots.txt` build against `https://controlresonantguide.app`.
- The canonical local working directory is `/Users/zhaobingkun/dev/controlresonantguide.app`; the previous `/Users/zhaobingkun/dev/resonantfieldguide.com` directory is retained only as a migration snapshot.
