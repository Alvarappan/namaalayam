// Pooja catalog — the central, bookable entity of the platform.
// Each pooja maps to a deity, a venue (a temple slug from src/data/temples.ts),
// the dosha(s) it remedies (slugs from src/data/doshas.ts), and a tithi rule that
// drives its "next date" (computed live from src/lib/panchang.ts later).
// Modeled to migrate cleanly to a database in Phase 2.

import { temples, type Temple } from "./temples";

export type PoojaType = "Homam" | "Abhishekam" | "Archana" | "Seva";

export interface PriceTier {
  label: string; // "Individual" | "Family" | "Group Homam Share"
  price: string; // display string; numbers finalised once fulfillment is decided
  note?: string;
}

export interface Pooja {
  slug: string;
  name: string;
  type: PoojaType;
  deity: string;
  /** Venue — a temple slug from src/data/temples.ts. */
  templeSlug: string;
  /** Doshas this pooja remedies — slugs from src/data/doshas.ts. */
  doshaSlugs: string[];
  /** Short benefit / intent label, e.g. "Marriage delays", "Wealth & debt relief". */
  problem: string;
  /** Human-readable scheduling rule, e.g. "Pradosham (Trayodashi)". */
  tithiRule: string;
  /** One-line hook for cards. */
  tagline: string;
  /** Intro paragraph for the detail page. */
  summary: string;
  /** Key benefits of performing the pooja. */
  benefits: string[];
  priceTiers: PriceTier[];
  /** Surfaced on the homepage "Featured Poojas" grid when true. */
  featured: boolean;
}

export const poojas: Pooja[] = [
  {
    slug: "pitru-dosha-tila-homam",
    name: "Pitru Dosha Tila Homam & Tarpanam",
    type: "Homam",
    deity: "Pitru Devatas & Lord Shiva",
    templeSlug: "ramanathaswamy-rameswaram",
    doshaSlugs: ["pitru-dosha"],
    problem: "Ancestral debt & progeny",
    tithiRule: "Amavasya (new moon)",
    tagline: "Appease the forefathers and unblock the family line.",
    summary:
      "A sesame (tila) homam and tarpanam performed to honour and liberate unappeased ancestors, classically at Rameswaram's Agni Theertham. It releases the karmic debt that blocks progeny, prosperity, and progress in the lineage.",
    benefits: [
      "Relief from Pitru Dosha and ancestral karma",
      "Blessings for children and continuation of the family line",
      "Removal of recurring, unexplained obstacles to progress",
    ],
    priceTiers: [
      { label: "Individual", price: "On request" },
      { label: "Family", price: "On request", note: "Includes spouse & children in sankalpa" },
    ],
    featured: true,
  },
  {
    slug: "sarpa-samskara-pooja",
    name: "Sarpa Samskara (Naga Dosha) Pooja",
    type: "Abhishekam",
    deity: "Naga Devata & Lord Shiva",
    templeSlug: "srikalahasti-temple",
    doshaSlugs: ["naga-dosha"],
    problem: "Marriage & childbirth delays",
    tithiRule: "Naga Panchami · Ayilyam nakshatra",
    tagline: "Lift the serpent's curse on marriage and progeny.",
    summary:
      "The Sarpa Samskara rite with milk (ksheera) abhishekam to the Naga deity at Srikalahasti, the Rahu-Ketu kshetra. Performed to relieve Naga Dosha and its hold over marriage and childbirth.",
    benefits: [
      "Relief from Naga / Sarpa Dosha",
      "Removal of obstacles to marriage and conception",
      "Easing of recurring skin and eye ailments linked to the dosha",
    ],
    priceTiers: [
      { label: "Individual", price: "On request" },
      { label: "Couple", price: "On request" },
    ],
    featured: true,
  },
  {
    slug: "rahu-ketu-dosha-pooja",
    name: "Rahu-Ketu Sarpa Dosha Pooja",
    type: "Abhishekam",
    deity: "Rahu & Ketu",
    templeSlug: "srikalahasti-temple",
    doshaSlugs: ["rahu-ketu-dosha", "naga-dosha"],
    problem: "Anxiety & sudden reversals",
    tithiRule: "Rahu Kalam windows",
    tagline: "Calm the shadow planets and steady your fortune.",
    summary:
      "Abhishekam and archana to Rahu and Ketu performed during the Rahu Kalam at Srikalahasti — the temple where the shadow planets are worshipped together. Pacifies their afflictions over the mind and fortune.",
    benefits: [
      "Relief from Rahu and Ketu dosha and dasha hardships",
      "Calmer mind — relief from anxiety, confusion, and obsession",
      "Protection from sudden, unexplained reversals",
    ],
    priceTiers: [
      { label: "Individual", price: "On request" },
      { label: "Family", price: "On request" },
    ],
    featured: true,
  },
  {
    slug: "kala-sarpa-dosha-homam",
    name: "Kala Sarpa Dosha Nivarana Homam",
    type: "Homam",
    deity: "Nagaraja & Lord Shiva",
    templeSlug: "srikalahasti-temple",
    doshaSlugs: ["kalasarpa-dosha", "rahu-ketu-dosha"],
    problem: "Recurring obstacles",
    tithiRule: "Panchami · Rahu Kalam",
    tagline: "Break free of the serpent's coil.",
    summary:
      "The Kala Sarpa Dosha Nivarana Homam at Srikalahasti, the foremost kshetra for this ritual. Performed to release the grip of the Rahu-Ketu axis when all planets are hemmed within it.",
    benefits: [
      "Relief from Kala Sarpa Dosha",
      "Removal of repeated obstacles that undo progress",
      "Protection from sudden reversals; smoother path to success",
    ],
    priceTiers: [
      { label: "Individual", price: "On request" },
      { label: "Group Homam Share", price: "On request", note: "Shared sankalpa with other devotees" },
    ],
    featured: true,
  },
  {
    slug: "mangal-dosha-nivarana-pooja",
    name: "Mangal (Sevvai) Dosha Nivarana Pooja",
    type: "Archana",
    deity: "Angaraka (Mars) & Lord Murugan",
    templeSlug: "vaitheeswaran-kovil",
    doshaSlugs: ["mangal-dosha"],
    problem: "Marriage delays & discord",
    tithiRule: "Tuesdays (Chevvai)",
    tagline: "Cool Mars's heat over your marriage.",
    summary:
      "Archana and Angaraka homam at Vaitheeswaran Kovil, the Angaraka navagraha sthalam, to pacify Mangal (Sevvai / Manglik) Dosha. Recommended before marriage to clear delays and discord.",
    benefits: [
      "Relief from Mangal / Manglik Dosha",
      "Removal of delays and friction in marriage",
      "Calmer temperament and marital harmony",
    ],
    priceTiers: [
      { label: "Individual", price: "On request" },
      { label: "Couple", price: "On request" },
    ],
    featured: true,
  },
  {
    slug: "guru-dakshinamurthy-shanti",
    name: "Guru (Dakshinamurthy) Shanti Pooja",
    type: "Homam",
    deity: "Sri Dakshinamurthy (Guru)",
    templeSlug: "brihadeeswara-thanjavur",
    doshaSlugs: ["guru-chandal-dosha"],
    problem: "Clouded judgment & guidance",
    tithiRule: "Thursdays (Guruvaram)",
    tagline: "Restore the clarity of the inner teacher.",
    summary:
      "Guru Shanti homam and Dakshinamurthy pooja to strengthen Jupiter and dissolve the Guru Chandal yoga. Performed at the Dakshinamurthy shrine of the great Brihadeeswara temple.",
    benefits: [
      "Relief from Guru Chandal Dosha",
      "Clearer judgment and restored faith in guidance",
      "Support for higher education and dharmic progress",
    ],
    priceTiers: [
      { label: "Individual", price: "On request" },
      { label: "Family", price: "On request" },
    ],
    featured: true,
  },
  {
    slug: "navagraha-shanti-homam",
    name: "Navagraha Shanti Homam",
    type: "Homam",
    deity: "The Nine Planets (Navagraha)",
    templeSlug: "vaitheeswaran-kovil",
    doshaSlugs: ["mangal-dosha", "rahu-ketu-dosha", "guru-chandal-dosha"],
    problem: "Overall planetary balance",
    tithiRule: "Sundays · Sashti",
    tagline: "Harmonise all nine planets at once.",
    summary:
      "A comprehensive homam invoking all nine planets to balance their combined influence on the chart. A broad remedy when multiple grahas are afflicted or the specific dosha is uncertain.",
    benefits: [
      "Balances the combined effect of all nine planets",
      "Relief when several doshas act together",
      "General protection, health, and steady fortune",
    ],
    priceTiers: [
      { label: "Individual", price: "On request" },
      { label: "Group Homam Share", price: "On request" },
    ],
    featured: false,
  },
  {
    slug: "swayamvara-kalyana-pooja",
    name: "Swayamvara Parvati Kalyana Pooja",
    type: "Archana",
    deity: "Goddess Meenakshi & Lord Sundareswarar",
    templeSlug: "madurai-meenakshi",
    doshaSlugs: ["mangal-dosha"],
    problem: "Marriage delays",
    tithiRule: "Pournami · Fridays",
    tagline: "Invoke the divine wedding for your own.",
    summary:
      "Swayamvara archana invoking the celestial marriage of Meenakshi and Sundareswarar at Madurai — sought by those facing delays in finding a suitable match or in fixing a marriage.",
    benefits: [
      "Removal of obstacles to marriage",
      "Blessings for a suitable and harmonious match",
      "Complements Mangal Dosha remedies",
    ],
    priceTiers: [
      { label: "Individual", price: "On request" },
      { label: "On behalf of family", price: "On request" },
    ],
    featured: true,
  },
  {
    slug: "lakshmi-kubera-homam",
    name: "Lakshmi Kubera Homam",
    type: "Homam",
    deity: "Goddess Lakshmi & Lord Kubera",
    templeSlug: "padmanabhaswamy-trivandrum",
    doshaSlugs: [],
    problem: "Wealth & debt relief",
    tithiRule: "Fridays · Pournami",
    tagline: "Invite prosperity and clear lingering debt.",
    summary:
      "A homam invoking Lakshmi (wealth) and Kubera (treasure) together to attract prosperity, clear debt, and stabilise finances — offered at the famously prosperous Padmanabhaswamy temple.",
    benefits: [
      "Attracts wealth and financial stability",
      "Relief from chronic debt and money blocks",
      "Blessings for business growth and abundance",
    ],
    priceTiers: [
      { label: "Individual", price: "On request" },
      { label: "Business / Family", price: "On request" },
    ],
    featured: true,
  },
  {
    slug: "santana-gopala-homam",
    name: "Santana Gopala Homam",
    type: "Homam",
    deity: "Bala Krishna (Santana Gopala)",
    templeSlug: "guruvayur-krishna",
    doshaSlugs: ["naga-dosha", "pitru-dosha"],
    problem: "Progeny & childbirth",
    tithiRule: "Ashtami · Rohini nakshatra",
    tagline: "Blessings for healthy children.",
    summary:
      "The Santana Gopala homam invoking the child-form of Krishna at Guruvayur, performed by couples seeking the blessing of healthy progeny and relief from obstacles to childbirth.",
    benefits: [
      "Blessings for conception and healthy children",
      "Relief from progeny-related doshas",
      "Protection for mother and child",
    ],
    priceTiers: [
      { label: "Couple", price: "On request" },
      { label: "Family", price: "On request" },
    ],
    featured: false,
  },
];

export const featuredPoojas = poojas.filter((p) => p.featured);

export const poojaBySlug = (slug: string): Pooja | undefined =>
  poojas.find((p) => p.slug === slug);

export const poojasForDosha = (doshaSlug: string): Pooja[] =>
  poojas.filter((p) => p.doshaSlugs.includes(doshaSlug));

/** Venue temple record for a pooja (or undefined if the slug is unknown). */
export const poojaVenue = (pooja: Pooja): Temple | undefined =>
  temples.find((t) => t.slug === pooja.templeSlug);
