# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**namaalayam.com** — A South Indian temple encyclopedia, travel guide, and devotional platform covering temples across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, and Telangana.

## Commands

```bash
# Start development server
cd C:/Temple/namaalayam
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

## Key Files

| File | Purpose |
|------|---------|
| `src/data/temples.ts` | All 25 temple records — name, slug, category, deity, state, tags, rating |
| `src/data/templeDetails.ts` | Rich detail per temple — timings, travel, history, festivals, poojas. 6 temples fully detailed; rest have defaults. |
| `src/data/festivalDetails.ts` | Rich detail per festival — intro, significance, story, rituals, when/where, devotee guide, related temple slugs. All 8 festivals fully detailed. |
| `src/app/page.tsx` | Homepage — assembles all home sections |
| `src/app/temples/page.tsx` | Temple directory with search + filters |
| `src/app/temples/[slug]/page.tsx` | Static temple detail page (SSG via generateStaticParams) |
| `src/app/festivals/[slug]/page.tsx` | Static festival detail page — Overview, Significance, Story, Rituals, When & Where, For Devotees, Related Temples. SSG via generateStaticParams. |
| `src/app/calendar/page.tsx` | Calendar landing — 4 language cards (Tamil active; others "Coming soon") |
| `src/app/calendar/tamil/page.tsx` | Tamil Daily Calendar — daily panchang + monthly grid. Reads `?date=YYYY-MM-DD` from search params. |
| `src/lib/panchang.ts` | Panchang computation wrapper around `mhah-panchang`. Exposes `getTamilPanchang(date)` and `getMonthPanchang(year, month)`. Includes Tamil name maps (Tithi, Nakshatra, Yoga, Karana, months, 60-year cycle) and derived Rahu Kalam / Yamagandam / Kuligai / Abhijit Muhurta. Defaults to Madurai coords. |
| `src/components/calendar/MonthPicker.tsx` | Client-only `<select>` for month navigation on the calendar page. |
| `src/components/ui/GopuramIcon.tsx` | Brand mark — tiered South Indian gopuram silhouette as inline SVG. Used in Navbar, Footer, and CTASection. Use this (not a 🛕 emoji) wherever the brand icon is needed. |

## Page Structure

```
/ → Homepage (Hero, Categories, FeaturedTemples, Festivals, CTA)
/temples → Directory (live search + filter by deity/state)
/temples/[slug] → Detail page (history, timings, travel, festivals, poojas, nearby temples)
/festivals/[slug] → Festival detail page (significance, story, rituals, devotee guide, related temples)
/calendar → Landing page — pick a language (Tamil active; others coming soon)
/calendar/tamil → Tamil daily panchang + monthly grid; URL-driven date selection via `?date=`
```

## Temple Categories

`shiva` · `vishnu` · `murugan` · `shakti` · `krishna` · `ayyappa` · `mixed`

## Design

- Dark theme: `bg-stone-950` base, `bg-stone-900` cards
- Accent: `amber-500` / `orange-500` gradient
- Icons: `lucide-react`

## Calendar (Panchang)

- **Library:** `mhah-panchang` (npm) — Swiss Ephemeris-based, no API key, server-side only.
- **Scope:** Only Tamil is built. Malayalam, Telugu, Kannada are placeholder cards on `/calendar`.
- **To add a new language:** copy `src/app/calendar/tamil/page.tsx` to `src/app/calendar/<lang>/page.tsx`, add language-specific name maps to `src/lib/panchang.ts` (e.g. `getMalayalamPanchang`), then flip `available: true` for that card in `src/app/calendar/page.tsx`.
- **Date selection** is URL-driven (`?date=YYYY-MM-DD`) so the page stays a server component and URLs are shareable.

## Image Assets

| Folder | Contents |
|--------|----------|
| `public/images/temples/` | Temple photos — filename matches the slug stem (e.g. `tirupati.jpg`, `meenakshi.jpg`). Referenced by `Temple.image` in `temples.ts`. |
| `public/images/deities/` | Deity portraits used by the homepage category cards: `shiva.png`, `vishnu.png`, `murugan.png`, `shakti.png`. Square images render best (cropped to a circle). Referenced in `src/components/home/CategoriesSection.tsx`. |
| `public/images/festivals/` | Festival banners used by the homepage "Sacred Calendar · Trending Festivals" cards. Filename = festival `slug` from `temples.ts` (e.g. `karthigai-deepam.png`, `pongala-attukal.png`). Landscape images (~800×450) render best. Referenced in `src/components/home/FestivalsSection.tsx`. |

## Still To Build

- Rich detail for remaining 19 temples in `templeDetails.ts`
- `/festivals` index/listing page (individual `/festivals/[slug]` pages exist)
- `/puja` booking page
- `/travel` guides
- Temple photos
- Light color theme option
- Calendar pages for Malayalam, Telugu, Kannada (Tamil shipped)
- Multilingual UI translation (Tamil, Telugu, Kannada, Malayalam)
