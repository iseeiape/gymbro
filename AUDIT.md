# GymBro.ro + TikTok Pipeline Audit

Date: 2026-07-27
Site source: `/home/unu/hermes-workspace/gymbro`
TikTok source: `/home/unu/hermes-workspace/tiktok-gymbro`
Status: copied from OpenClaw, dependencies installed, production build passes

## Build status

- `npm ci` passed.
- `npm run build` passed.
- Next.js build generated 513 pages.
- Static/SSG sections include:
  - `/alimente/[slug]` — 200 pages
  - `/diete/[slug]` — 100 pages
  - `/exercitii/[slug]` — 100 pages
  - `/blog/[slug]` — 67 articles
  - calculators/tools/resources/yoga/meditation pages

## What is already strong

GymBro is much more mature than SmartMoneyDEX from an SEO perspective.

Already present:

- `metadataBase` in `app/layout.tsx`
- canonical URL on root
- `app/sitemap.ts`
- `app/robots.ts`
- global schema:
  - `WebSite`
  - `Organization`
  - `SoftwareApplication`
  - `FAQPage`
- page-level schema on several tools
- strong Romanian keyword targeting
- large programmatic SEO base
- Google Analytics installed
- Google Search Console verification meta present
- TikTok pipeline already has 21 finished sets

Conclusion: GymBro is not dead. It has a real SEO foundation and enough indexable surface to deserve another push.

## Main risks / problems

### 1. Credibility risk from inflated proof signals

Examples in `app/layout.tsx`:

- `12,500+ utilizatori activi`
- `AggregateRating` with `ratingValue: 4.9`
- `reviewCount: 12500`

If these are not real, this is risky.

Why it matters:
- Google can treat fake review/schema signals as spam.
- Users may distrust the site if claims feel inflated.
- TikTok traffic landing on a site with exaggerated claims can convert worse.

Recommendation:
- Remove fake `aggregateRating` unless real data exists.
- Replace `12,500+ utilizatori activi` with softer truthful copy:
  - “Gratuit, fără cont”
  - “Creat pentru România”
  - “Calculatoare și planuri personalizate”

### 2. Brand/social mismatch

In schema/social metadata:

- Twitter: `@gymbro_ro`
- TikTok schedule/content references: `@gymbro.romania`
- Schema sameAs includes `https://tiktok.com/@gymbro.ro`

Risk:
- Fragmented brand identity.
- Search engines and users may not connect the properties.

Recommendation:
- Decide one canonical handle set.
- Update schema and metadata to match real accounts.

### 3. TikTok content has quality bugs

Found in `weekly-plan.json`:

- `ma跟踪 caloriile` — Chinese characters accidentally inserted
- `Nimenu` instead of `Nimeni`
- `pujinmi seminte`
- `#ofice` hashtag typo
- `#inaintedupai` hashtag typo
- some texts are good, but several need Romanian cleanup

Impact:
- Lower perceived quality.
- Worse retention/shares.
- Weak brand trust.

Recommendation:
- Run a Romanian proofreading pass over all TikTok text overlays/captions.
- Add a QA step before generating final slides.

### 4. TikTok posting schedule may be too aggressive

Current schedule says:
- 3 posts/day
- 7 days
- 21 sets

For a fresh or recovering account, 3/day can be risky if quality is inconsistent.

Recommendation:
- Restart with 1/day for 7 days.
- Use best 7 sets first.
- Measure retention, profile visits, CTR to site.
- Then move to 2/day only if quality stays high.

### 5. Conversion path should be simpler

Many TikTok captions point generally to GymBro.ro.

Better:
- send each post to the exact relevant tool/page:
  - calories posts → `/calculator`
  - meal prep posts → `/meal-prep`
  - supplement posts → `/suplimente` or specific blog article
  - beginner gym posts → `/program-antrenament`

Recommendation:
- Add per-set destination URL metadata in `weekly-plan.json`.
- Build UTM links per set.

### 6. Dependency/security hygiene

`npm ci` reported 10 vulnerabilities in GymBro.

Not urgent for SEO, but worth cleaning later.

## SEO opportunities

### A. Refresh metadata/copy to be more trustworthy
Replace inflated claims with specific Romanian value props:
- “Calculator calorii gratuit în română”
- “Plan alimentar pe 7 zile cu buget în lei”
- “Program de sală pentru începători”
- “Fără cont, fără abonament”

### B. Add comparison/commercial pages
Good affiliate/SEO pages:
- `cele mai bune proteine în România`
- `creatina preț România`
- `suplimente începători România`
- `meal prep Lidl vs Kaufland`

### C. Add TikTok-specific landing pages
Instead of sending all traffic to homepage:
- `/lp/calculator`
- `/lp/meal-prep`
- `/lp/program-incepatori`

Benefits:
- Better message match
- Easier analytics
- Higher conversion

### D. Add UTM + analytics dashboard
Track:
- set id
- post date
- views
- profile visits
- link clicks
- site sessions
- email captures

## TikTok pipeline recommended reset

### Phase 1 — cleanup
- Fix Romanian typos in all captions/texts
- Add exact destination URL per set
- Choose best 7 sets only

### Phase 2 — restart posting
- 1 post/day for 7 days
- Best posting window only: probably 18:00–21:00
- Same sound style/format to reduce variables

### Phase 3 — measure
Track for each post:
- views after 2h / 24h / 48h
- watch time if available
- profile visits
- link clicks
- site sessions from TikTok

### Phase 4 — scale winners
If one angle works, make 5 variations:
- calculator shock
- meal prep budget
- transformation story
- myth busting supplements
- beginner gym mistakes

## Recommended first work package

### Site
1. Remove/replace fake proof signals
2. Normalize social handles/schema
3. Add TikTok landing pages
4. Add UTM conventions
5. Clean top 20 TikTok captions/texts

### TikTok
1. Proofread all 21 sets
2. Pick best 7
3. Assign exact landing page per set
4. Restart with 1/day schedule

## Bottom line

GymBro deserves another chance. The SEO foundation is strong, the site builds, and the content surface is large enough to matter. The biggest fixes are not technical — they are trust, message match, and TikTok quality control.
