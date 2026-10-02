# AdSense Readiness Plan

## Current decision

Do not submit the first local release yet. The site has useful navigation, original interaction, and a focused purpose, but it still needs stronger first-hand evidence and publisher trust signals.

Run:

```bash
npm run build
npm run check
npm run adsense:check
```

The final command is intentionally blocked until every launch gate in `adsense-readiness.json` is verified and changed to `true`.

## Why this matters

Google says an AdSense-ready site needs enough unique, valuable content, a good user experience, and clear navigation. It also warns against cookie-cutter pages and sites that mainly summarize other sources without adding value.

Official references:

- https://support.google.com/adsense/answer/12176698
- https://support.google.com/adsense/answer/7299563
- https://support.google.com/adsense/answer/23921
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content

## Before applying

1. Completed: the final domain is live with valid HTTPS and stable canonical URLs.
2. Completed: the public Contact page links to the repository's GitHub Issues route for corrections and attribution requests.
3. Add a real publisher/editor identity and brief relevant experience. Do not invent a persona.
4. Replace or supplement launch-week third-party screenshots with original gameplay captures for all seven locations and the major puzzle types.
5. Completed: the second cluster adds 12 substantive pages for quest progression, abilities, barriers, resets, bosses, and early build decisions. Painting and Laundry puzzle pages now add direct solutions, troubleshooting, and cross-source reconciliation. Recheck these pages against original gameplay captures after launch.
6. Verify indexing in Search Console and wait for genuine impressions or reader behavior before applying.
7. Keep Privacy, Terms, Contact, empty search, error, and other low-content utility pages free of ad units.
8. Add `ads.txt` only after AdSense supplies the real publisher ID. Never publish a placeholder publisher ID.

## If AdSense rejects the site for low-value content

1. Save the exact rejection text and date. Do not guess from a generic email subject.
2. Compare the indexed URL list with the sitemap. Remove accidental thin, duplicate, tag, search, and placeholder pages from indexing.
3. Use Search Console performance data to identify pages that already answer real queries. Improve those first with original captures, tested steps, version/platform notes, and corrections.
4. Merge pages that answer the same intent. Do not inflate word count or publish near-duplicate variations.
5. Add visible evidence of who created the guide, how it was verified, and when it materially changed.
6. Check mobile navigation, broken links, HTTPS, robots, canonical tags, and crawler access again.
7. Reapply only after the changes are live and crawlable. Keep a short change log for the next review.

## Ad placement after approval

- Keep the direct answer and first useful instruction visible before any large ad.
- Do not place ads next to puzzle-choice buttons, progress checkboxes, navigation controls, or download-looking elements.
- Never label ads as guide recommendations or use arrows that point toward them.
- Do not let ads or paid promotion outnumber the page's editorial content.
