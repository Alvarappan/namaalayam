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
| `src/app/page.tsx` | Homepage — assembles all home sections |
| `src/app/temples/page.tsx` | Temple directory with search + filters |
| `src/app/temples/[slug]/page.tsx` | Static temple detail page (SSG via generateStaticParams) |

## Page Structure

```
/ → Homepage (Hero, Categories, FeaturedTemples, Festivals, Poojas, CTA)
/temples → Directory (live search + filter by deity/state)
/temples/[slug] → Detail page (history, timings, travel, festivals, poojas, nearby temples)
```

## Temple Categories

`shiva` · `vishnu` · `murugan` · `shakti` · `krishna` · `ayyappa` · `mixed`

## Design

- Dark theme: `bg-stone-950` base, `bg-stone-900` cards
- Accent: `amber-500` / `orange-500` gradient
- Icons: `lucide-react`

## Still To Build

- Rich detail for remaining 19 temples in `templeDetails.ts`
- `/festivals` page
- `/puja` booking page
- `/travel` guides
- Temple photos
- Light color theme option
- Multilingual support (Tamil, Telugu, Kannada, Malayalam)
