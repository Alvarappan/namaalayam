// Dosha records — the "problem" axis of the pooja-first platform.
// Each dosha has a concept page (/doshas/[slug]) following the schema:
// signs → astrological significance → remedies → relevant poojas → "Book this Pooja" CTA.
// `poojaSlugs` link to src/data/poojas.ts; `templeSlug` is the canonical remedy temple
// (a slug from src/data/temples.ts) used as the venue.

export interface DoshaTheme {
  gradient: string; // tailwind from-/to- for card background
  border: string;
  accent: string; // text colour for headings / links
  bg: string; // hover glow
  chip: string; // small badge background
}

export interface Dosha {
  slug: string;
  name: string;
  /** Other common names, e.g. "Kuja / Sevvai / Chevvai Dosha". */
  altNames?: string;
  /** Governing planet / force. */
  planet: string;
  /** One-line hook for cards. */
  tagline: string;
  /** Intro paragraph for the detail page. */
  summary: string;
  /** Symptoms / signs a person may have this dosha. */
  signs: string[];
  /** Astrological significance — why it arises in the chart. */
  significance: string;
  /** Recommended remedies (rituals, conduct, donations). */
  remedies: string[];
  /** Slugs of remedy poojas (src/data/poojas.ts). */
  poojaSlugs: string[];
  /** Canonical remedy temple (slug from src/data/temples.ts) — the venue. */
  templeSlug: string;
  /** Most auspicious days / tithis for the remedy. */
  bestDays: string;
  theme: DoshaTheme;
}

export const doshas: Dosha[] = [
  {
    slug: "pitru-dosha",
    name: "Pitru Dosha",
    altNames: "Pitru Rina / Ancestral Dosha",
    planet: "Sun & Moon (the luminaries), Rahu",
    tagline: "The debt owed to unappeased ancestors.",
    summary:
      "Pitru Dosha arises when the forefathers (pitrus) of a lineage remain unappeased — through omitted rites, untimely deaths, or unfulfilled duties. It is experienced as a recurring block on the family line: difficulty conceiving, repeated obstacles to progress, and a sense that effort does not translate into results. The remedy is to honour the ancestors through tarpanam and shraddha rites, classically performed at the seashore of Rameswaram.",
    signs: [
      "Delays or repeated failure in conceiving children",
      "Persistent obstacles despite hard work and good intentions",
      "Recurring family disputes, debts, or ill-health across generations",
      "Dreams of deceased relatives or ancestors asking for something",
      "Important ventures stalling at the final step",
    ],
    significance:
      "In the natal chart, Pitru Dosha is read from afflictions to the Sun (father / paternal line) and Moon (mother / maternal line), and from Rahu's placement in the 9th house of fortune and forefathers. It signifies a karmic debt carried forward from ancestors whose post-death rites were incomplete.",
    remedies: [
      "Perform Tila Homam and Tarpanam, ideally at Rameswaram's Agni Theertham",
      "Observe shraddha rites on Amavasya and during Mahalaya Paksha",
      "Offer food and water to the needy, and feed crows and animals",
      "Plant and tend trees in the name of the departed",
    ],
    poojaSlugs: ["pitru-dosha-tila-homam"],
    templeSlug: "ramanathaswamy-rameswaram",
    bestDays: "Amavasya (new moon) · Mahalaya Paksha",
    theme: {
      gradient: "from-slate-50 to-stone-100",
      border: "border-stone-200",
      accent: "text-stone-700",
      bg: "bg-stone-100/60",
      chip: "bg-stone-100 text-stone-700",
    },
  },
  {
    slug: "naga-dosha",
    name: "Naga Dosha",
    altNames: "Sarpa Dosha / Serpent Dosha",
    planet: "Rahu & Ketu (the serpent nodes)",
    tagline: "The serpent's curse on marriage and progeny.",
    summary:
      "Naga Dosha is the affliction said to follow harm done to serpents — knowingly or in past lives — or the neglect of naga worship in a family. It most often manifests as obstacles to marriage and childbirth. The classical remedy is Sarpa Samskara and naga worship, performed with special power at Srikalahasti, the Rahu-Ketu kshetra.",
    signs: [
      "Long delays in marriage with no clear reason",
      "Difficulty conceiving or repeated miscarriage",
      "Recurring skin ailments or eye problems",
      "Frequent dreams of snakes",
      "A family history of childlessness across branches",
    ],
    significance:
      "Naga Dosha is read primarily from Rahu and Ketu — the serpent nodes — afflicting the 5th house (progeny) or the 7th house (marriage), and from their conjunction with the Moon or Venus. It marks an obstruction tied to the serpent powers that govern fertility and lineage.",
    remedies: [
      "Perform Sarpa Samskara and Naga Pratishtha at Srikalahasti",
      "Ksheera (milk) abhishekam to the Naga deity on Ayilyam and Naga Panchami",
      "Worship Rahu and Ketu; offer to anthills and serpent shrines",
      "Avoid harming serpents and support their protection",
    ],
    poojaSlugs: ["sarpa-samskara-pooja", "rahu-ketu-dosha-pooja"],
    templeSlug: "srikalahasti-temple",
    bestDays: "Naga Panchami · Ayilyam nakshatra",
    theme: {
      gradient: "from-emerald-50 to-green-100",
      border: "border-emerald-200",
      accent: "text-emerald-700",
      bg: "bg-emerald-100/60",
      chip: "bg-emerald-100 text-emerald-700",
    },
  },
  {
    slug: "mangal-dosha",
    name: "Mangal Dosha",
    altNames: "Kuja / Sevvai / Chevvai / Manglik Dosha",
    planet: "Mars (Mangal / Angaraka)",
    tagline: "Mars's heat over marriage and harmony.",
    summary:
      "Mangal Dosha (the 'Manglik' condition) arises when Mars — the planet of heat, energy and conflict — occupies certain houses in the chart. Its classic effect is delay and discord in marriage. The remedy is the Mangal Dosha Nivarana Pooja and Angaraka worship, performed at Vaitheeswaran Kovil, the Angaraka navagraha sthalam.",
    signs: [
      "Marriage repeatedly delayed or proposals falling through",
      "Friction, arguments, or separation soon after marriage",
      "A quick temper and impatience in relationships",
      "Accidents, cuts, or blood-related health issues",
      "Mismatch warnings raised during horoscope matching",
    ],
    significance:
      "Mangal Dosha is identified when Mars sits in the 1st, 2nd, 4th, 7th, 8th, or 12th house from the ascendant, Moon, or Venus. These positions turn Mars's natural heat toward the domains of marriage, home, and longevity of the partner — hence the emphasis on remedy before matrimony.",
    remedies: [
      "Perform Mangal Dosha Nivarana Pooja / Angaraka Homam at Vaitheeswaran Kovil",
      "Worship Lord Murugan and Hanuman on Tuesdays",
      "Recite the Mangal stotra and observe Tuesday vratham",
      "Charity of red items — masoor dal, red cloth — on Tuesdays",
    ],
    poojaSlugs: ["mangal-dosha-nivarana-pooja", "swayamvara-kalyana-pooja"],
    templeSlug: "vaitheeswaran-kovil",
    bestDays: "Tuesdays (Chevvai)",
    theme: {
      gradient: "from-red-50 to-rose-100",
      border: "border-red-200",
      accent: "text-red-700",
      bg: "bg-red-100/60",
      chip: "bg-red-100 text-red-700",
    },
  },
  {
    slug: "guru-chandal-dosha",
    name: "Guru Chandal Dosha",
    altNames: "Guru Chandal Yoga",
    planet: "Jupiter (Guru) with Rahu / Ketu",
    tagline: "When the teacher's wisdom is clouded by the shadow.",
    summary:
      "Guru Chandal Dosha forms when Jupiter — the great benefic of wisdom, dharma and guidance — is conjoined with Rahu (or Ketu). The shadow planet clouds Jupiter's clarity, leading to misguided judgment, conflict with teachers and elders, and a wavering moral compass. The remedy is Guru worship — classically of Dakshinamurthy, the supreme guru — to restore Jupiter's grace.",
    signs: [
      "Confused decisions and frequently misplaced trust",
      "Conflict with gurus, mentors, elders, or authority",
      "Unconventional beliefs that pull against family dharma",
      "Obstacles in higher education or spiritual progress",
      "Good opportunities slipping away through poor counsel",
    ],
    significance:
      "The yoga is read when Jupiter and Rahu (or Ketu) share a house — Rahu's amplifying, boundary-dissolving nature distorts Jupiter's discernment. It afflicts the houses of wisdom, dharma (9th), and intellect, calling for deliberate strengthening of Guru in the chart.",
    remedies: [
      "Perform Guru Shanti / Dakshinamurthy Pooja on Thursdays",
      "Worship Jupiter (Guru) and offer to Brahmins and teachers",
      "Recite the Guru stotra and Sri Dakshinamurthy stotram",
      "Charity of yellow items — turmeric, gram dal, yellow cloth",
    ],
    poojaSlugs: ["guru-dakshinamurthy-shanti"],
    templeSlug: "brihadeeswara-thanjavur",
    bestDays: "Thursdays (Guruvaram)",
    theme: {
      gradient: "from-amber-50 to-yellow-100",
      border: "border-amber-200",
      accent: "text-amber-700",
      bg: "bg-amber-100/60",
      chip: "bg-amber-100 text-amber-700",
    },
  },
  {
    slug: "kalasarpa-dosha",
    name: "Kala Sarpa Dosha",
    altNames: "Kaala Sarpa Yoga",
    planet: "Rahu & Ketu (all planets hemmed between)",
    tagline: "Life held in the serpent's coil.",
    summary:
      "Kala Sarpa Dosha forms when all seven planets are hemmed between Rahu and Ketu — the head and tail of the cosmic serpent. Life then feels gripped by an unseen coil: sustained effort meets sudden reversals, and success arrives late and hard-won. Srikalahasti is the foremost kshetra for the Kala Sarpa Dosha Nivarana ritual.",
    signs: [
      "Recurring obstacles that undo progress just as it builds",
      "Sudden, unexpected reversals in career or finances",
      "Chronic anxiety, restlessness, or disturbed sleep",
      "A sense of being 'stuck' despite genuine effort",
      "Frequent dreams of snakes or of being chased",
    ],
    significance:
      "When every planet lies on one side of the Rahu-Ketu axis, the serpent's coil concentrates karmic intensity along a single arc of the chart. Its strength varies with which houses Rahu and Ketu occupy, but the signature is a life of delayed, hard-won rewards.",
    remedies: [
      "Perform Kala Sarpa Dosha Nivarana Homam at Srikalahasti",
      "Rahu Kalam abhishekam and Rahu-Ketu worship",
      "Recite the Sarpa Suktam and Nagaraja stotra",
      "Worship Lord Shiva, who wears the serpent and tames it",
    ],
    poojaSlugs: ["kala-sarpa-dosha-homam", "rahu-ketu-dosha-pooja"],
    templeSlug: "srikalahasti-temple",
    bestDays: "Rahu Kalam windows · Panchami",
    theme: {
      gradient: "from-indigo-50 to-violet-100",
      border: "border-indigo-200",
      accent: "text-indigo-700",
      bg: "bg-indigo-100/60",
      chip: "bg-indigo-100 text-indigo-700",
    },
  },
  {
    slug: "rahu-ketu-dosha",
    name: "Rahu / Ketu Dosha",
    altNames: "Chaaya Graha Dosha (shadow-planet affliction)",
    planet: "Rahu & Ketu (the shadow planets)",
    tagline: "The shadow planets' grip on the mind and fortune.",
    summary:
      "Rahu and Ketu — the shadow planets — govern illusion, obsession, and sudden karmic turns. When either afflicts a key house, it brings anxiety, confusion, and reversals that defy ordinary explanation. Remedies focus on the Rahu Kalam window and the Rahu-Ketu sannidhi at Srikalahasti.",
    signs: [
      "Unexplained anxiety, fear, or a clouded, illusioned mind",
      "Sudden gains followed by sudden losses",
      "Obsessive thoughts, addictions, or foreign entanglements (Rahu)",
      "Detachment, confusion, or spiritual unrest (Ketu)",
      "Recurring health issues that defy diagnosis",
    ],
    significance:
      "Rahu and Ketu are not physical bodies but the points where the Moon's path crosses the Sun's. As 'chaya grahas' they cast a shadow over whichever house they occupy — Rahu amplifying worldly desire and confusion, Ketu severing and spiritualising. Their dasha periods are when the dosha is most felt.",
    remedies: [
      "Perform Rahu-Ketu Sarpa Dosha Pooja during Rahu Kalam at Srikalahasti",
      "Abhishekam to Rahu and Ketu; offer blue/grey and multi-coloured cloth",
      "Recite the Rahu and Ketu stotras and Durga Saptashati",
      "Worship Goddess Durga (for Rahu) and Lord Ganesha (for Ketu)",
    ],
    poojaSlugs: ["rahu-ketu-dosha-pooja", "kala-sarpa-dosha-homam"],
    templeSlug: "srikalahasti-temple",
    bestDays: "Rahu Kalam windows",
    theme: {
      gradient: "from-purple-50 to-fuchsia-100",
      border: "border-purple-200",
      accent: "text-purple-700",
      bg: "bg-purple-100/60",
      chip: "bg-purple-100 text-purple-700",
    },
  },
];

export const doshaBySlug = (slug: string): Dosha | undefined =>
  doshas.find((d) => d.slug === slug);
