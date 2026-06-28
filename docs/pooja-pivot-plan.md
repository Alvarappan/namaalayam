# Pooja-First Pivot — Planning Doc

> Status: **Brainstorm / reference doc.** Not yet built. This captures the agreed direction
> for shifting Nam Aalayam from a temple encyclopedia to a Pooja / Dosha / Tithi platform.
> Last updated: 2026-06-28.

## 1. The pivot in one line

Shift the focus from **temples** to **Poojas, Doshas, and Tithis**. All existing temple and
festival content is preserved — the temple encyclopedia becomes the trust/credibility layer
and the "venue" behind poojas, not the front door.

Reference model: <https://vedamandir.com/en/pujas> (transactional puja-booking marketplace;
primary filters are Festivals · Tithis · Doshas · Location).

## 2. Decisions locked in

| Question | Decision |
|---|---|
| Product goal | **Real booking marketplace** (full transactional, built in phases) |
| Front door / lead pillar | **Blend — Poojas · Doshas · Tithis get equal billing** |
| Role of the 25-temple encyclopedia | **Demote to a tab** — content fully preserved, just not the homepage focus |
| Fulfillment (who performs poojas) | **Not decided** — design the data model vendor-agnostic; hand-curate the catalog ourselves to start |
| Phase 1 "Book Now" behaviour | **Both** — a structured enquiry form + a WhatsApp fast-path |
| Branding | "Nam Aalayam / namaalayam.com" **stays for now**; revisit later |

## 3. Phased build plan

The end goal is the full marketplace, but a real transaction flow has non-code dependencies
(payment gateway, business entity/KYC, a database, fulfillment partners, GST/refund policy).
So we phase it:

- **Phase 1 — Repositioning (frontend only, ships without a backend).**
  Pooja-first information architecture: Poojas / Doshas / Tithis pillars, pooja catalog,
  dosha & tithi landing pages, temples demoted to a tab. "Book Now" → enquiry form +
  WhatsApp. No DB needed; all the value of the repositioning, none of the infra risk.
- **Phase 2 — Real bookings.** Add a database + auth + cart/checkout + payment gateway
  (Razorpay — UPI/cards, supports marketplace split-payouts). "My Bookings" / "My Subscriptions".
  NOTE: bookings/orders/payment state **cannot** live in the current static TS files — this
  phase forces a DB (e.g. Postgres/Supabase) and server actions. Biggest architectural change.
- **Phase 3 — Fulfillment.** Priest/temple performance dashboard, prasadam shipping + tracking,
  video/photo delivery, multi-temple vendor onboarding + payouts.

## 4. Information architecture (Phase 1)

New navbar: `Poojas · Doshas · Tithis · Temples · Calendar` (first three are the focus).

```
/poojas                  → catalog. Filters: deity · problem/dosha · tithi/occasion · temple
/poojas/[slug]           → product page: significance, benefits, dosha(s) it remedies,
                            next dates (from tithi rule via panchang.ts), what you provide
                            (name/gotra/nakshatra/sankalpa), price tiers, Book (form + WhatsApp)
/doshas                  → grid of the 6 doshas
/doshas/[slug]           → signs → astrological significance → remedies → relevant poojas → Book CTA
/tithis                  → the auspicious-day axis
/tithis/[slug]           → meaning + significance + poojas + do/avoid + next occurrence (panchang.ts)
/temples, /temples/[slug]→ UNCHANGED, fully preserved — just demoted in nav
/calendar/*              → UNCHANGED
```

Homepage rebuild: Hero "Find a pooja for your need" → three pillar cards (By Pooja / By Dosha /
By Today's Tithi) → trending/this-week poojas (panchang-driven) → temples demoted to a strip → CTA.

### Key reuse / edge
`src/lib/panchang.ts` already computes tithis. So `/tithis/pradosham` shows "next Pradosham: Tue 7 Jul"
automatically, and a pooja with `tithiRule: "pradosham"` surfaces its real next date with zero manual
upkeep — vedamandir's "Saturday, 27 June" line, but auto-generated. Genuine differentiator.

### New data entities (static TS now, modeled to migrate to a DB cleanly)
- `src/data/poojas.ts` — central catalog. `Pooja` = slug, name, type (archana/abhishekam/homam/seva),
  deity, venue temple-slug, `doshaTags[]`, `tithiRule`, benefits/significance, price tiers,
  what-devotee-provides (name/gotra/nakshatra/sankalpa), fulfillment (prasadam/video), availability.
- `src/data/doshas.ts` — dosha concept records + remedy pooja slugs.
- `src/data/tithis.ts` — tithi concept records; "next date" computed live via `panchang.ts`.

Festivals (existing 16) fold into the Tithis/occasions axis later.

## 5. The 6 Doshas (high-priority spec)

Per-dosha page schema: **signs/symptoms → astrological significance → recommended remedies →
relevant poojas → CTA "Book this Pooja".**

| Dosha | What it is | Canonical remedy temple (in the 25) | Remedy poojas | Tithi/day |
|---|---|---|---|---|
| **Pitru Dosha** | Ancestral debt — unappeased forefathers; blocks lineage, progeny, prosperity | Rameswaram (Agni Theertham tarpanam) | Tila Homam, Tarpanam, Narayana Bali | Amavasya, Mahalaya Paksha |
| **Naga Dosha** (Sarpa) | Serpent curse — delays in marriage & childbirth, skin/eye ailments | Srikalahasti | Sarpa Samskara, Naga Pratishtha, Ksheera Abhishekam | Naga Panchami, Ayilyam |
| **Mangal Dosha** (Kuja/Sevvai) | Mars affliction — marriage delays, marital discord, temper | Vaitheeswaran Kovil (Angaraka sthalam) | Mangal Dosha Nivarana Pooja, Angaraka Homam | Tuesdays |
| **Guru Chandal Dosha** | Jupiter + Rahu — clouded judgment, guru/dharma conflicts | ⚠ gap — anchored at Brihadeeswara (Dakshinamurthy) | Guru Shanti / Dakshinamurthy Pooja, Guru Graha Homam | Thursdays |
| **Kala Sarpa Dosha** | All planets between Rahu & Ketu — recurring obstacles | Srikalahasti (canonical kshetra) | Kala Sarpa Dosha Nivarana Homam, Rahu Kalam Pooja | Rahu Kalam, Panchami |
| **Rahu / Ketu Dosha** | Shadow-planet afflictions — anxiety, illusions, sudden reversals | Srikalahasti | Rahu-Ketu Sarpa Dosha Pooja, Rahu Kalam Abhishekam | Rahu Kalam |

**Gaps to resolve later:**
- *Guru:* textbook Guru temple is Alangudi (not in the 25). Options: (a) add Alangudi as temple #26,
  (b) anchor at Brihadeeswara's Dakshinamurthy shrine (chosen for now — Dakshinamurthy is the guru deity),
  (c) keep venue-flexible / first-party.
- *Shani (Saturn) dosha:* the other dosha devotees ask for constantly; its temple is Thirunallar
  (not in the 25). Obvious 7th-dosha + temple candidate when expanding.

## 6. The Tithi set (high-priority spec)

Per-tithi page schema: **meaning → spiritual significance → recommended poojas → do/avoid →
upcoming calendar (next occurrence via panchang.ts).**

| Tithi / Day | Meaning | Recommended poojas | Do / Avoid |
|---|---|---|---|
| **Pradosham** (Trayodashi) | Twilight window sacred to Shiva, twice monthly | Pradosha Abhishekam, Mrityunjaya | Do: Shiva abhishekam · Avoid: starting ventures |
| **Amavasya** (new moon) | Ancestor day | Tarpanam, Pitru rituals | Do: remember ancestors · Avoid: auspicious starts |
| **Pournami** (full moon) | Peak lunar energy, Devi/Lakshmi | Satyanarayana, Lakshmi, Kalyana | Do: vratham, donation |
| **Ekadasi** | Vishnu fasting day | Sudarshana, Vishnu archana | Do: fast/japa · Avoid: rice, heavy food |
| **Sashti** | Murugan's day | Skanda Sashti, Soora Samharam | Do: Murugan vratham |
| **Chaturthi** (Sankatahara) | Ganesha — obstacle removal | Ganapathi Homam | Do: new ventures |
| **Ashtami / Navami** | Shakti / Durga days | Chandi Homam, Durga pooja | Do: Devi worship |
| **Ayilyam / Naga Panchami** | Serpent worship days | Naga / Sarpa poojas | Do: naga dosha remedies |

## 7. Starter Pooja Catalog (20 — the product spine)

Each pooja: deity · venue (existing temple slug) · dosha tag(s) · tithi rule · price tier.
(List is a starting point; will be refined/expanded toward 25+ later.)

| # | Pooja | Type | Deity | Venue (temple slug) | Dosha tag | Tithi rule |
|---|---|---|---|---|---|---|
| 1 | Pitru Dosha Tila Homam & Tarpanam | Homam | Shiva/Pitru | ramanathaswamy-rameswaram | pitru-dosha | Amavasya |
| 2 | Sarpa Samskara (Naga Dosha) Pooja | Abhishekam | Naga/Shiva | srikalahasti-temple | naga-dosha | Naga Panchami / Ayilyam |
| 3 | Rahu-Ketu Sarpa Dosha Pooja | Abhishekam | Rahu-Ketu | srikalahasti-temple | rahu-ketu-dosha, naga-dosha | Rahu Kalam |
| 4 | Kala Sarpa Dosha Nivarana Homam | Homam | Shiva | srikalahasti-temple | kalasarpa-dosha | Panchami / Rahu Kalam |
| 5 | Mangal (Sevvai) Dosha Nivarana Pooja | Archana | Angaraka/Murugan | vaitheeswaran-kovil | mangal-dosha | Tuesdays |
| 6 | Angaraka Navagraha Homam | Homam | Angaraka | vaitheeswaran-kovil | mangal-dosha | Tuesdays / Sashti |
| 7 | Guru (Dakshinamurthy) Shanti Pooja | Homam | Dakshinamurthy | brihadeeswara-thanjavur | guru-chandal-dosha | Thursdays |
| 8 | Navagraha Shanti Homam | Homam | Navagraha | vaitheeswaran-kovil | all-doshas | Sunday / Sashti |
| 9 | Pradosha Abhishekam | Abhishekam | Shiva | kapaleeswarar-mylapore | shani-relief | Pradosham |
| 10 | Maha Mrityunjaya Homam | Homam | Shiva | arunachaleswarar-thiruvannamalai | health-longevity | Pradosham |
| 11 | Ayushya Homam | Homam | Dhanvantari/Shiva | vaitheeswaran-kovil | health | birth nakshatra |
| 12 | Swayamvara / Kalyana Pooja (marriage) | Archana | Meenakshi/Parvati | madurai-meenakshi | mangal-dosha (marriage) | Pournami / Fridays |
| 13 | Uthra Kalyanam Marriage Blessing | Seva | Sthanumalayan | thanumalayan-suchindram | marriage-delays | Pournami |
| 14 | Santana Gopala Homam (progeny) | Homam | Krishna | guruvayur-krishna | naga/pitru (progeny) | Ashtami / Rohini |
| 15 | Lakshmi Kubera Homam (wealth/debt) | Homam | Lakshmi | padmanabhaswamy-trivandrum | debt-relief | Friday / Pournami |
| 16 | Sudarshana Homam (protection) | Homam | Vishnu | ranganathaswamy-srirangam | obstacles/enemies | Ekadasi |
| 17 | Skanda Sashti Pooja | Abhishekam | Murugan | tiruchendur-murugan | obstacles | Sashti |
| 18 | Ganapathi Homam (new beginnings) | Homam | Ganesha | ekambareswarar-kanchipuram | obstacles | Sankatahara Chaturthi |
| 19 | Chandi Homam (Shakti protection) | Homam | Durga/Bhagavathy | attukal-bhagavathy | protection | Ashtami / Navaratri |
| 20 | Aditya Hridaya Surya Pooja | Archana | Surya | simhachalam-visakhapatnam | health/authority | Sunday / Rathasapthami |

Price tiers (modeled now, numbers TBD on fulfillment): **Individual / Family / Group homam share.**

## 8. How it interlinks

```
Dosha page (Mangal Dosha) ──lists──► Poojas #5, #6, #12
        │                                   │
        └── "Book this Pooja" CTA ──────────┘
                                            ▼
Pooja page (#5) ──venue──► vaitheeswaran-kovil (existing temple page)
        │        ──tithi──► Tuesdays ──panchang.ts──► "next: Tue 7 Jul"
        ▼
   Book (form + WhatsApp)
```

Three new data files drive everything — `poojas.ts`, `doshas.ts`, `tithis.ts` — plus the existing
`panchang.ts` for every "next date."

## 9. Build progress

**Phase 1 landing page — DONE (2026-06-28).** Shipped pooja-first homepage + working pages:
- New homepage sections: `PoojaHero`, `PillarsSection`, `TodayTithiSection` (live panchang),
  `DoshasSection`, `FeaturedPoojas`, `TemplesStrip` (temples demoted), kept `CTASection`.
- Data files: `src/data/doshas.ts` (6), `src/data/poojas.ts` (10), `src/data/tithis.ts` (8).
- Routes: `/poojas`, `/poojas/[slug]` (with booking), `/doshas`, `/doshas/[slug]`, `/tithis`.
- Booking: `BookPooja` component (WhatsApp + enquiry form) on every pooja page; dosha pages
  route into it via "Book this Pooja". Config in `src/lib/contact.ts` (PLACEHOLDER number/email).
- Navbar reordered: Poojas · Doshas · Tithis · Temples · Festivals · Calendar.
- Old homepage sections (CategoriesSection, FeaturedTemples, FestivalsSection) kept, unwired.

## 10. Open items / next steps

- [ ] Replace placeholder `WHATSAPP_NUMBER` / `CONTACT_EMAIL` in `src/lib/contact.ts` before launch.
- [ ] **Make every pooja page fully bookable** (vedamandir-style) as the catalog grows — booking
      block is already in place; extend to each new pooja.
- [ ] **Add images** as we go — pooja/deity banners into `public/images/poojas/`, wired into
      `PoojaCard` and the pooja hero.
- [ ] Refine & expand the pooja catalog (10 → 20 → 25+) when ready.
- [ ] Decide Guru-dosha venue (Alangudi as #26 vs Brihadeeswara/Dakshinamurthy vs first-party).
- [ ] Consider Shani dosha (#7) + Thirunallar temple when expanding.
- [ ] More high-priority features to be added (per product owner).
- [ ] Phase 2: database + auth + cart + Razorpay checkout for real paid bookings.
