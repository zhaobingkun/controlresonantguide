# Project Memory

## 2026-10-08 - Ability and Progression Evidence Refresh

- Continued authorized content quality work. Reviewed PowerPyx mission pages through links from its quest index: /control-resonant-the-incursion-fault-walkthrough/ and /control-resonant-the-subway-fault-walkthrough/.
- Corrected ability timing: Shift and Reach are introduced during Jesse’s ritual, before the Fault mission finishes. Added concise garage-key/TV and subway-entry/return-route summaries with direct mission citations and explicit source-only evidence notes. Avoided asserting controller bindings or inventing screenshots.
- Added prerequisite tables to Quest Order and Where to Go Next, mapping named campaign stages to required Faults/Resonants/research. Kept region planning and current-objective diagnosis distinct.
- Page-specific review and Article/sitemap modification dates changed only for four updated guides. Other page dates retain their prior records.
- Build/check pass: 39 sitemap URLs / 43 HTML pages; verified four dates and two five-row dependency tables. Publication pending.


## 2026-10-08 - Taxi Consolidation

- User said continue after audit. Consolidated start, payphone and ending pages into /last-taxi/ with #start and #completion sections; merged progress support into missing-taxi-fix with #progress. Four former URLs use permanent Vercel redirects, are absent from sitemap, and internal links point directly to destinations.
- Narrowed Quest List title to Main Quest List; replaced unproven missing-taxi cause statistics with diagnostic suggestions. About explicitly distinguishes source summaries from in-game testing.
- Current build: 39 indexable URLs / 43 HTML files. Enhanced check reconciles indexable HTML with sitemap and checks merged links, redirect destinations and anchors rather than requiring an arbitrary URL minimum. Build, check and diff whitespace checks pass.
- Published commit 6ec895c to origin/main. Live verification: all four merged URLs return HTTP 308 to the intended destination anchors; /last-taxi/ returns 200 with #completion; sitemap returns 200 with 39 URLs. Original gameplay evidence and editor identity still require real inputs.


## 2026-10-08 - Content Quality Audit and Corrections

- User authorized investigation after asking whether indexing reflected content quality. Added CONTENT_AUDIT_2026-10-08.md with site inventory, evidence limits and consolidation candidates.
- All 43 sitemap pages tested live: HTTP 200, no redirects, self canonicals and index,follow. This is ordinary HTTP evidence, not Googlebot/GSC live-test evidence.
- Corrected unsupported West Incursion rear-lot route to the gravity-wall approach; corrected start-guide taxi/phone order; clarified shadow matching and blackout clue. Central, Underpass and Unknown sources conflict and are now explicitly labeled rather than globally verified.
- Changed shared Last verified label to Sources reviewed; removed homepage verified-location promise and clarified source conflict does not establish randomized region mapping.
- Found Reward and Ending were unreachable through site links despite inclusion in sitemap; added links from /last-taxi/.
- Candidate consolidations: taxi start/payphone/completion/support pages and overlapping campaign-order pages. No redirects, URL removal or noindex added in this audit. Original captures and editor identity remain missing.
- npm run build and npm run check pass (43 indexable URLs / 47 HTML files). Corrections are local only; not committed, pushed or deployed. Do not attribute GSC discovered status to these issues as a confirmed cause.

## 2026-10-08 - GSC Coverage Export Review

- User supplied four coverage CSVs from Documents/controlresonantguide.app-Coverage-2026-10-08. Latest chart row is October 4, not October 8: 43 not indexed, 3 indexed, 17 impressions. October 2 and 3 show 5 and 11 impressions respectively.
- Exclusion reasons: 40 Discovered - currently not indexed; 3 Page with redirect. Non-critical issue CSV has no data rows. Export scope is all known pages, not exclusively the submitted sitemap; counts must not be equated with the 43 sitemap URLs.
- Live checks on October 8: homepage and /guides/ return HTTPS 200; robots allows all and lists the production sitemap. Local npm run check passes 47 HTML files / 43 sitemap URLs. Initial sandbox DNS failure was resolved with authorized external network access and is not evidence of a production DNS failure.
- CSVs contain no affected URL lists, so redirect correctness and per-URL crawl eligibility remain unverified. Do not attribute the 40 URLs to content quality, server overload, or penalties without further evidence.
- Next diagnostic inputs: URL lists for both exclusion categories, URL Inspection live tests for representative important pages, and sitemap processing status. Report already proves some indexing and search visibility, but does not prove core-page coverage; readiness flags left unchanged.

## 2026-10-02 - Next-Step Review

- User asked what to do next. Current local check passes for 47 HTML files and 43 sitemap URLs; AdSense readiness still fails four gates: named editor, original gameplay captures, confirmed GSC indexing, and observed reader/search activity.
- Recommended priority: verify Search Console ownership, sitemap processing and key-page indexing; verify GA4 collection; strengthen existing guides with real editor identity and original gameplay evidence; choose future content from actual query/impression data.
- Search Console submission and actual indexing must remain distinct. Existing readiness flags are project records, not proof that no pages are indexed; inspect the account before updating them.
- This review did not access Search Console or GA4 account reports. The web reader could not access the production homepage, so this session does not establish current live availability.
- Current session checkout is `/Users/zhaobingkun/dev/controlresonantguide`; the older directory recorded under Domain Decision is historical.

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

## 2026-10-02 - GitHub and Production Launch

- Created the public GitHub repository `https://github.com/zhaobingkun/controlresonantguide` and pushed `main` over SSH.
- Initial site commit: `5417e31b3f7030b9fb2bbb8fabb9b33c1168877d` (`Launch CONTROL Resonant field guide`).
- Canonical redirect commit: `23d563b29629fdc8152b00214f4d5eae0aec7d29` (`Redirect www traffic to canonical domain`).
- Connected the repository to Vercel project `zhaobingkuns-projects-b2b82dc8/controlresonantguide`.
- Cloudflare DNS uses DNS-only A records for both `@` and `www`, each pointing to Vercel at `76.76.21.21`.
- Production is published through the stable aliases `https://controlresonantguide.app` and `https://www.controlresonantguide.app`; Vercel's Git-connected production deployment was confirmed `Ready` after the launch commits.
- Added a permanent host redirect so `www.controlresonantguide.app` returns HTTP 308 to the matching path on `controlresonantguide.app`.
- Production verification passed: apex HTTPS returns 200 with HSTS, `/guides/` returns 200, `robots.txt` references the production sitemap, `sitemap.xml` exposes 37 canonical URLs, and the homepage canonical and Open Graph URL use the apex domain.
- Local release checks still pass: 41 generated HTML files and 37 sitemap URLs.

## 2026-10-02 - PNG Site Icon

- Rasterized the existing black, taxi-yellow, and anomaly-violet field-card mark into a 512x512 RGBA PNG at `src/assets/images/favicon.png`.
- The generated HTML now uses the PNG for the browser favicon and Apple Touch Icon, and the Organization schema exposes it as the site logo.
- Kept the SVG source in the repository as the editable master artwork.

## 2026-10-02 - Google Analytics

- Added the GA4 Google tag with measurement ID `G-QTD5JHM4Z2` to the shared HTML head template.
- All generated pages now load `gtag.js` asynchronously and initialize the same GA4 property exactly once per document.

## 2026-10-02 - Puzzle Hub and Activity Guides

- Replaced the missing `/puzzles/` route with a real puzzle hub. It links the six existing Last Taxi patterns, the taxi matcher, Freeze Frame, Power Lines, and Every Dog Has Her Day.
- Added `/puzzles/freeze-frame/` with all 14 camera routes, access gates, final Downtown containment guidance, and a localStorage checklist. Cross-check: two cameras in each of seven zones; a camera disappearing after seeing Dylan is a failed approach, not completion.
- Added `/guides/power-lines/` as one substantial mission page rather than thin station variants. It covers Perimeter, Factory, East Park, Vanished Platform A, Vanished Platform B, and the Dr. Florez completion step.
- Added `/guides/mysterious-dog-locations/` with seven toy returns plus the final Gap interaction. Treat this as seven regional dogs but eight tracked stops; the eighth has no new toy and closes the Side Story.
- Added the activity cluster to `/guides/`, direct discovery links on the homepage, a Puzzles item in primary navigation, and updated footer routes.
- Build now produces 41 indexable URLs and 45 HTML files. `npm run build` and `npm run check` pass. Production DNS and HTTPS are verified, so those AdSense flags are now true; `npm run adsense:check` still intentionally fails the five remaining trust and audience gates.
- Browser QA passed at 1440px and 390px. The four new routes have one H1, production canonicals, no horizontal overflow, and no console errors. Freeze Frame localStorage persistence and reset were both verified.

## 2026-10-02 - Painting, Laundry, and Public Corrections

- Added `/puzzles/painting-puzzle/` with the four sold-work selections, visual subject cues, switch behavior, reward, and a failure checklist. The stable solution is Journey middle, Windows left, Thunder left, and Tides middle when facing each painting group.
- Added `/puzzles/laundry-puzzle/` with the seven-line binary code, a room-oriented table, a non-binary route, reward details, and door troubleshooting. The page explicitly reconciles the six-row and seven-row numbering used by different walkthroughs; both describe the same six active machines.
- Expanded Puzzle Hub, Guides hub, and footer discovery links. Build now produces 43 indexable URLs and 47 HTML files.
- Replaced the Contact placeholder with a public GitHub Issues correction route and marked the working-contact readiness gate complete. A GitHub account is required to submit, and the page warns visitors not to post personal information.
- Updated Privacy to disclose GA4, localStorage checklists, public GitHub correction submissions, and external-site policies. The utility pages remain `noindex,follow` and outside the sitemap.
- Desktop and 390px mobile QA passed for the new routes. The Laundry table scrolls inside its own container without widening the page; both pages have one H1, production canonicals, and no console errors.
- `npm run build` and `npm run check` pass. `npm run adsense:check` now remains blocked only by a real named editor, original gameplay captures, confirmed GSC indexing, and observed search or reader activity. GSC submission alone must not be marked as indexing.
