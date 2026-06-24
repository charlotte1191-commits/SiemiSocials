# Redesign Brief: Charlotte Siemianowicz — Portfolio Site

This is a prompt to hand to Claude Code for a redesign pass. It documents the
current build in full — stack, design tokens, every page/component, the real
content already in place, and a handful of known caveats — so the redesign
starts from an accurate picture instead of guessing.

---

## Stack

- Vite + React (plain JSX, no TypeScript)
- React Router (`react-router-dom`) — client-side routing, multi-page site
- Plain CSS — one global token file (`src/styles/tokens.css`) + one CSS file
  per component/page, no Tailwind/CSS-in-JS/UI framework
- Fonts: **Fraunces** (serif, headings/display, italic used as an accent
  style) and **Inter** (sans, body/UI), loaded via Google Fonts `<link>` tags
  in `index.html`
- Deploys to Vercel (`vercel.json` has an SPA rewrite so `/about`,
  `/portfolio`, etc. don't 404 on direct load/refresh)

## Current design tokens (`src/styles/tokens.css`)

```css
--blush: #F3E6E0;
--oat: #EFE7DA;
--rose: #C98E84;
--deep: #A66B78;        /* "Rosewood" panel colour */
--panel-muted: #F3DFE3; /* secondary text on --deep backgrounds — paired with --deep */
--ink: #34292A;
--paper: #FBF6F1;
--line: #E4D5CC;

--font-display: 'Fraunces', serif;
--font-body: 'Inter', sans-serif;
--eyebrow-size: 12px;
--eyebrow-tracking: 0.22em;
--radius-card: 24px;
--max-width: 1280px;
```

Global utility classes already defined: `.eyebrow` (uppercase tracked label,
rose), `.italic-accent`, `.button-primary` (pill button, rose→deep on hover).

A redesign is free to replace any of this — palette, type, spacing scale —
but note `--deep`/`--panel-muted` are a deliberately matched pair (panel
background + readable secondary text on top of it); if you change one,
recheck contrast on the other.

## Routes / pages

```
/                  → Home
/about             → About
/portfolio         → Portfolio (grid)
/portfolio/:slug   → ProjectDetail (case study)
/contact           → Contact
```

Shared `Layout` component wraps every page: full split-panel hero nav only
appears on Home; About/Portfolio/Contact get a slim top bar (same rosewood
background, logo left, nav right). `ScrollToTop` resets scroll position on
every route change (added because client-side nav was otherwise preserving
scroll position from the previous page).

## Home page, top to bottom

1. **Hero** (`Hero.jsx`) — split layout: left panel (~420px, `--deep`
   background) with logo, nav (desktop nav is actually centered inside the
   right-hand stage area now, not the left panel — see "recent tweaks"
   below), "Meet / Charlotte" heading, role line, and an intro paragraph.
   Portrait photo (`public/portrait.jpg`) is a positioned, overlapping block
   bleeding from the panel into the stage. Right side ("stage") has a
   behind-the-scenes photo (`public/Behindthescenespic1.png`) in a floating
   rounded card, plus a vertical "Explore Our Work" label with a down arrow.
2. **BrandLogos** (`BrandLogos.jsx`) — replaced an earlier "scroll reveal
   window" section entirely. Currently just text pill badges (no real logo
   images yet) for: IT Cosmetics, Milkybar, Smarties, Aero, Munchies, Nestlé
   Cereals, Cheerios, Shreddies, Nesquik. Comment in the file flags exactly
   where to swap in real `<img>` logos once sourced.
3. **AboutTeaser** — two-column "About" teaser linking to `/about`, real
   copy already in place (Nestlé Confectionery → Cereals career summary).
4. **Services** — 6 service cards (`ServiceCard.jsx`), numbered tags
   ("01. Strategy" through "06. Copy"), hover lifts + background shift.
5. **WorkPreview** — 3 project cards pulled from the same shared
   `data/projects.js` array used by the Portfolio page (so they link to the
   same real case studies, not duplicated content). Cards capped at 280px
   wide via `minmax(0, 280px)` columns — they were stretching too large at a
   plain `1fr`/3-column split.
6. **StatsBand** — 4 stats, reused identically on About page. Currently:
   `+59% Reach vs Target` (real, confirmed for public use) plus three
   reworded-without-exact-figures stats (`Strong` Organic Engagement Growth,
   `Multi-Market` Campaign Reach, `Multiple` Brand Collaborations) — see
   "content notes" below for why.
7. **ContactCta** — closing CTA linking to `/contact`.

A global `ClickSparkle` component (mounted once in `App.jsx`) pops a small
burst of pink sparkle dots at the cursor on every click, site-wide, purely
decorative (`pointer-events: none`).

## About page

Heading, pull-quote (real: "The best social campaigns don't feel like
marketing. They feel like the moment everyone's already talking about."),
3 real bio paragraphs (Nestlé Cereals/Confectionery career history + L'Oréal
background), skill pills, an education line, then the shared `StatsBand`.

## Portfolio page

Grid of `WorkCard`s (4:5 aspect cover image, category tag, title,
description, "View Case Study →" link — both the image and the text link
navigate to the case study, this was a deliberate fix since clicking the
photo did nothing before). 3 real case studies + 3 generic bracket-placeholder
ones (`[Campaign Name] × [Brand Name]`) still waiting on more material.

## ProjectDetail (case study) page — and the one fully-built example

Generic template: back link, category eyebrow, title, optional `meta` row
(Role/Platforms/Scope/Year), hero image, and an `approach` paragraph block
(falls back to placeholder copy if a project has no `approach` array).

The fully-realized example is `cereals-superman` (Superman × Nestlé /
Shreddies on-pack promotion). It additionally renders a `PhoneShowcase`
section, which is the most built-out piece of UI on the site:

- **PhoneCarousel** — 3 realistic phone mockups (thin bezel, pill notch,
  status bar, real reel video, tap-to-pause) in one horizontally
  scrollable/swipeable row. Center phone is full-scale and plays; side
  phones are scaled down (~78%), dimmed, and paused. Scrolling/swiping or
  clicking a side phone brings it to center; whichever phone leaves center
  auto-pauses. Defaults to centering the array's middle index on load —
  important: centering is done by directly setting `track.scrollLeft`
  (`PhoneCarousel.jsx`), NOT `element.scrollIntoView()`, because
  `scrollIntoView` was found to also scroll the whole page vertically to
  bring this mid-page section into view, which fought the `ScrollToTop`
  behavior on navigation.
- Background of this top part (`.phone-showcase`) is `--blush`.
- Below the carousel, a separate section (`.showcase-followup`, `--paper`
  background — deliberately split into its own `<section>` so only the
  phones area keeps the blush tint) holds a subtitle, a text paragraph, and
  a `PostGrid` of real campaign photos (3 columns, real Instagram screenshots
  — these already have their own handle/likes/caption baked into the photo
  itself, so `PostGrid` deliberately does NOT add its own card chrome
  around them, just a rounded-corner + shadow treatment, full image visible
  via `object-fit: contain`, no cropping).
- The "Reels" word in the "A look inside the Reels" heading has an animated
  underline (draws itself in via `scaleX` on mount) and two small twinkling
  pink `✦` sparkles positioned just outside its top-left/top-right corners.

## Contact page

Intro copy, contact details list (real: `Siemisocials@outlook.com`, York, UK),
and `ContactForm` — first/last name, email, company, message. Submits via
`console.log` + a "Thanks, I'll be in touch" confirmation state. Explicitly
**not** wired to a real backend yet (flagged with a TODO comment — needs
Formspree/serverless function/etc. before launch).

## Content/copy notes — read before changing stats or case-study numbers

Several specific performance figures in this build come from an internal
Nestlé document (Charlotte's CV/internal profile), not material cleared for
public use:

- **Confirmed for public use:** the Superman/Cereals "+59% vs Target" figure.
  It's used as-is wherever it appears.
- **NOT yet confirmed:** exact Milkybar TikTok engagement count, GOLD
  campaign OTS figure, and the "14 brand collaborations" figure. These are
  currently worded WITHOUT their specific numbers (e.g. "Strong Organic
  Engagement Growth" instead of an exact figure) pending Charlotte's
  sign-off on citing exact internal numbers publicly. If you change these
  back to specific numbers, that's Charlotte's call to make, not a styling
  decision — don't just restore them because they "sound more impressive."
- Three Portfolio cards (`project-4/5/6` in `data/projects.js`) are
  intentionally still generic `[Campaign Name] × [Brand Name]` placeholders
  — there isn't more real case-study material yet for those slots.
- Personal/bio colour (motherhood, amateur theatre, being a Taylor Swift fan)
  was deliberately kept OUT of the About page — it came from an internal
  team personality slide, not material written for public consumption.
  Charlotte would need to decide deliberately to add anything like that.

## Assets already in the project (don't re-request these from Charlotte)

```
public/portrait.jpg                          — Charlotte's headshot (hero)
public/Behindthescenespic1.png               — homepage "stage" photo
public/homepagebehindthesceensvid.MP4        — a BTS video, currently UNUSED
                                                anywhere (was tried in two
                                                spots and removed both times;
                                                still sitting in public/ if
                                                a redesign wants to use it)
public/shots/*.png (6 files)                  — currently UNUSED (was used
                                                for a "scroll reveal window"
                                                section that got replaced by
                                                BrandLogos; still available)
public/projects/superman-nestle/
  cover.jpg, IMG_0236–0241.jpg (6 photos)     — Superman × Nestlé case study
  1.MP4, 2.MP4, 8.MP4                         — the three reels in the phone carousel
```

No real brand logo image files exist yet (BrandLogos section uses text
badges) — Charlotte needs to source those herself (other companies'
trademarks), not something to scrape from the web.

## A few implementation gotchas worth knowing before you touch related code

- `background-attachment: fixed` was tried and abandoned for a "look through
  a window into a fixed backdrop" effect — works but isn't reliably
  supported on iOS Safari (falls back to normal scrolling there, not broken,
  just less dramatic). Mentioned in case a redesign wants that effect back.
- The phone carousel's initial/centering scroll logic intentionally avoids
  `scrollIntoView()` for the reason noted above (fights page-level
  scroll-to-top). Any redesign of carousel-style components should set
  `scrollLeft` directly on the scroll container instead.
- `WorkCard` wraps both the image and the text link in the same `<Link>`
  target — this was a deliberate fix (the image used to not be clickable).
- React Router's `<Link>`/`NavLink` is used for all internal navigation;
  `WorkCard`'s `link` prop auto-detects internal (`/...`) vs external links
  and renders `<Link>` vs `<a>` accordingly.

---

## What to do with this brief

Treat this as ground truth for "what exists today," not a constraint on the
redesign itself — palette, layout, type, animations, and structure are all
open to change. The goal of this document is just to make sure a fresh
session doesn't re-ask Charlotte for assets/copy that already exist, doesn't
accidentally re-introduce a figure that's pending sign-off, and understands
why a couple of non-obvious implementation choices were made the way they
were.
