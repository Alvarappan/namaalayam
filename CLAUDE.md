# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**namaalayam.com** — A South Indian temple encyclopedia, travel guide, and devotional platform covering temples across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, and Telangana.

## Commands

```bash
# Start development server
cd D:/Temple/namaalayam
npm run dev
# → runs on http://localhost:3000

# Build for production
npm run build

# Deploy (push to GitHub, Vercel auto-deploys)
git add .
git commit -m "your message"
git push
```

## Architecture

- **Framework:** Next.js 16 (App Router, TypeScript, Tailwind CSS)
- **Deployment:** Vercel → namaalayam.com (GitHub: Alvarappan/namaalayam)
- **Data:** Static TypeScript files (no database yet)
- **Caching:** Layout uses `revalidate = 3600` (ISR) so today's panchang widget in the navbar refreshes hourly without forcing every page dynamic.

## Brand naming

- **UI / display text:** `Nam Aalayam` (two words) — "Nam" in stone-900, "Aalayam" in orange-600. Tamil subtitle `நம் ஆலயம்`.
- **Domain / metadata / SEO:** `Namaalayam` / `namaalayam.com` (one word — SEO continuity).

## Key Files

### Data
| File | Purpose |
|------|---------|
| `src/data/temples.ts` | All 25 temple records + the homepage `festivals` array (16 entries; `featured: false` keeps a festival off the homepage Trending grid but still generates its detail page). |
| `src/data/templeDetails.ts` | Rich per-temple detail. Required fields: `timings`, `entryFee`, `dressCode`, `bestTime`, `travelInfo`, `highlights`, `history`, `architecture`, `festivals`, `poojas`, `nearbyTemples`. Optional rich fields (preferred when present): `mythology`, `architectureFeatures[]`, `subShrines[]`, `visitorLogistics`, `sevas[]` (richer than `poojas`), `faqs[]`. Five temples fully deep-detailed so far: **madurai-meenakshi**, **tirupati-venkateswara**, **brihadeeswara-thanjavur**, **ramanathaswamy-rameswaram**, and **sabarimala-ayyappa** — all have every optional field populated. All other temples render via the default fallback in `getTempleDetail()`. |
| `src/data/festivalDetails.ts` | Rich detail per festival. 16 festivals detailed: original 8 — `karthigai-deepam`, `mahamaham`, `brahmotsavam-tirupati`, `chithirai-festival`, `aadi-perukku`, `pongala-attukal`, `skanda-sashti`, `sabarimala-season`. 3 Madurai-specific — `aavani-moolam`, `navaratri-golu`, `float-festival-madurai`. 3 Tirumala-specific — `vaikunta-ekadasi-tirupati`, `rathasapthami-tirupati`, `pushpa-yagam-tirupati`. 2 added for Brihadeeswara — `maha-shivaratri` (pan-Shaivite, cross-linked to 6 Shiva temples), `sadayam-vizha-thanjavur`. |
| `src/data/imageCredits.ts` | Image source / license credits for temple photos. |

### App routes
| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout. Sets cream `bg-amber-50` body. Renders `<Navbar rightSlot={<TodayPanchang />} />` (server-rendered panchang in navbar). `export const revalidate = 3600`. |
| `src/app/page.tsx` | Homepage — assembles Hero, Categories, Featured Temples, Festivals (filtered to `featured !== false`), CTA. |
| `src/app/temples/page.tsx` | Temple directory with search + filters. |
| `src/app/temples/[slug]/page.tsx` | Static temple detail page (SSG via `generateStaticParams`). Layout: hero (image overlay) → full-width row of 4 quick cards → 2-column main+sidebar grid. Conditionally renders mythology / architecture-features grid / sub-shrines / sevas / FAQs only if those optional fields exist. |
| `src/app/festivals/[slug]/page.tsx` | Static festival detail page — Overview, Significance, Story, Rituals, When & Where, For Devotees, Related Temples. SSG via `generateStaticParams`. |
| `src/app/calendar/page.tsx` | Calendar landing — 4 language cards (Tamil active; others "Coming soon"). |
| `src/app/calendar/tamil/page.tsx` | Tamil Daily Calendar — daily panchang + monthly grid. Reads `?date=YYYY-MM-DD` from search params. |

### Components
| File | Purpose |
|------|---------|
| `src/components/ui/Navbar.tsx` | Sticky white navbar. Logo (left) · centered nav links + "Book Pooja" CTA · `rightSlot` (right). Client component (mobile menu state). |
| `src/components/ui/Footer.tsx` | Footer with link sections + brand. Cream/stone-100 background. |
| `src/components/ui/GopuramIcon.tsx` | Brand mark — tiered South Indian gopuram silhouette as inline SVG. Used wherever the brand icon is needed (not a 🛕 emoji). |
| `src/components/home/HeroSection.tsx` | Homepage hero — warm gradient bg, title, search bar + suggestions + stats. Client component (search state). |
| `src/components/home/TodayPanchang.tsx` | Server component rendering today's date + Abhijit Muhurta + Rahu Kalam as a compact 3-line text block. Wraps in a `<Link>` to `/calendar/tamil`. Passed into the Navbar via the layout's `rightSlot` prop. |
| `src/components/home/CategoriesSection.tsx` | Light pastel deity-category cards (Shiva/Vishnu/Murugan/Shakti). |
| `src/components/home/FeaturedTemples.tsx` | 25 temple cards (white with light category badges). |
| `src/components/home/FestivalsSection.tsx` | Filters `featured !== false` to keep the homepage Trending grid tight. |
| `src/components/home/CTASection.tsx` | Saffron-orange gradient banner with explore/book CTAs. |
| `src/components/temples/TempleCard.tsx` · `TempleGrid.tsx` · `TempleFilters.tsx` | Directory page components. |
| `src/components/temples/TempleQuickCards.tsx` | Client component — 4 colour-coded cards at the top of every temple detail page (Temple Timings / Entry Fee / Best Time to Visit / How to Reach). Each opens a centred modal with full details (daily schedule, fee table, crowd tips, travel + Google Maps actions). Modals share UX: backdrop click · ESC · X · body scroll lock. |
| `src/components/temples/VisitorLogisticsCard.tsx` | Client component — small teaser card in the sidebar that opens a modal popup showing the temple's gates, cloak room, mobile/camera policy, accessibility, parking, etc. Only renders when `detail.visitorLogistics` is defined. |
| `src/components/temples/TempleFAQ.tsx` | Client component — accordion-style FAQ section. Shows the top 5 questions by default with a "View N more questions" button that toggles to "Show fewer". Renders only when `detail.faqs` is defined. |
| `src/components/calendar/MonthPicker.tsx` | Client-only `<select>` for month navigation on the calendar page. |

| `src/lib/panchang.ts` | Panchang computation wrapper around `mhah-panchang`. Exposes `getTamilPanchang(date)` and `getMonthPanchang(year, month)`. Includes Tamil name maps (Tithi, Nakshatra, Yoga, Karana, months, 60-year cycle) and derived Rahu Kalam / Yamagandam / Kuligai / Abhijit Muhurta. Defaults to Madurai coords. Server-side only. |

## Page Structure

```
/ → Homepage (Hero, Categories, FeaturedTemples, Festivals, CTA)
/temples → Directory (live search + filter by deity/state)
/temples/[slug] → Detail page — hero, 4 quick cards, mythology (optional), history, architecture + features grid (optional), sub-shrines (optional), highlights, festivals (linked to detail pages), sevas/poojas, FAQs (optional). Sidebar: Visitor Logistics popup (optional) · Location/Map · Tags · Nearby Temples · Book a Pooja CTA.
/festivals/[slug] → Festival detail page (significance, story, rituals, devotee guide, related temples)
/calendar → Landing page — pick a language (Tamil active; others coming soon)
/calendar/tamil → Tamil daily panchang + monthly grid; URL-driven date selection via `?date=`
```

The navbar (visible on every page) carries today's panchang summary in its right slot, linking to `/calendar/tamil`.

## Temple Categories

`shiva` · `vishnu` · `murugan` · `shakti` · `krishna` · `ayyappa` · `mixed`

## Design

- **Theme:** Cream + saffron + gold (devotional palette, matched to reference sites like srimandir.com).
- **Base:** `bg-amber-50` (warm ivory). Cards on `bg-white` with `border-amber-200` and subtle shadow.
- **Primary accent:** `orange-500` / `orange-600` (saffron) — used for CTAs, headings, link hovers.
- **Secondary accent:** `amber-500` / `amber-600` (gold) — used in gradients with orange.
- **Body text:** `text-stone-900` (headings) / `text-stone-700` (body) / `text-stone-600` (muted).
- **Hero & CTA banners:** `bg-gradient-to-br from-orange-500 to-amber-500` with white text — high-contrast saffron pop.
- **Category accent colours** (deity cards): blue (Shiva), violet (Vishnu), orange (Murugan), rose (Shakti).
- **Icons:** `lucide-react`.

Temple detail page heroes keep dark gradient overlays over the temple image for text readability — everything below the hero is light cream.

## Calendar (Panchang)

- **Library:** `mhah-panchang` (npm) — Swiss Ephemeris-based, no API key, server-side only.
- **Scope:** Only Tamil is built. Malayalam, Telugu, Kannada are placeholder cards on `/calendar`.
- **To add a new language:** copy `src/app/calendar/tamil/page.tsx` to `src/app/calendar/<lang>/page.tsx`, add language-specific name maps to `src/lib/panchang.ts` (e.g. `getMalayalamPanchang`), then flip `available: true` for that card in `src/app/calendar/page.tsx`.
- **Date selection** is URL-driven (`?date=YYYY-MM-DD`) so the page stays a server component and URLs are shareable.
- **Navbar widget:** `TodayPanchang` runs `getTamilPanchang(new Date())` server-side; refreshed hourly via the layout's `revalidate = 3600`.

## Image Assets

| Folder | Contents |
|--------|----------|
| `public/images/temples/` | Temple photos — filename matches the slug stem (e.g. `tirupati.jpg`, `meenakshi.jpg`). Referenced by `Temple.image` in `temples.ts`. |
| `public/images/deities/` | Deity portraits used by the homepage category cards: `shiva.png`, `vishnu.png`, `murugan.png`, `shakti.png`. Square images render best (cropped to a circle). Referenced in `src/components/home/CategoriesSection.tsx`. |
| `public/images/festivals/` | Festival banners used by the homepage "Trending Festivals" cards. Filename = festival `slug` from `temples.ts` (e.g. `karthigai-deepam.png`, `pongala-attukal.png`). Landscape images (~800×450) render best. |

## Patterns to follow

### Adding rich content for another temple
Mirror the pattern in `templeDetails.ts` for `madurai-meenakshi` or `tirupati-venkateswara`. All rich fields are optional — the detail page renders them only when present.

### Adding a festival
1. Add an entry to the `festivals` array in `src/data/temples.ts` (with `slug`). Set `featured: false` to keep it off the homepage Trending grid but still generate the detail page.
2. Add a matching entry in `festivalDetails.ts` with full intro/significance/story/rituals/whenWhere/forDevotees/relatedTempleSlugs.
3. Optionally drop a 800×450 banner at `public/images/festivals/<slug>.png`.
4. If linked from a temple page, add `slug: "<festival-slug>"` to the relevant entry in that temple's `festivals` array in `templeDetails.ts` to make the festival card clickable.

### Adding a popup / modal
Follow the pattern in `VisitorLogisticsCard.tsx` or `TempleQuickCards.tsx`: client component with `useState` for open state, ESC handler, body scroll lock, backdrop click to close, X button. Backdrop is `bg-stone-900/60 backdrop-blur-sm`, modal is `bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-hidden flex flex-col`.

## Still To Build

- Deep rich detail (mythology, architectureFeatures, subShrines, visitorLogistics, sevas, faqs) for the remaining 22 temples in `templeDetails.ts`.
- `/festivals` index/listing page (individual `/festivals/[slug]` pages exist).
- `/puja` booking page.
- `/travel` guides.
- More festival detail pages for the remaining un-detailed festivals (e.g. Aippasi Brahmotsavam at Brihadeeswara, Aadi Pooram for Brihannayaki).
- Calendar pages for Malayalam, Telugu, Kannada (Tamil shipped).
- Multilingual UI translation (Tamil, Telugu, Kannada, Malayalam).
- Online seva booking integration (currently sevas show fees with no `bookingUrl`).
- Photo gallery / virtual tour for temples.
