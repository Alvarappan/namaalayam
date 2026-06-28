// Tithi records — the "auspicious day" axis of the platform.
// Concept data for the /tithis directory. "Next occurrence" is computed live from
// src/lib/panchang.ts on the page, so it is not stored here.

export interface Tithi {
  slug: string;
  name: string;
  altName?: string;
  meaning: string;
  significance: string;
  recommendedPoojas: string[];
  doList: string[];
  avoidList: string[];
  /** Loose match against panchang.thithiEn / vaaramEn to flag "today". */
  matchKeys: string[];
}

export const tithis: Tithi[] = [
  {
    slug: "pradosham",
    name: "Pradosham",
    altName: "Trayodashi twilight",
    meaning: "The twilight hour of the 13th lunar day, sacred to Lord Shiva.",
    significance:
      "Occurring twice each lunar month, the Pradosham twilight (roughly 1.5 hours around sunset) is held to be the most auspicious window for Shiva worship, when Shiva is said to dance between the horns of Nandi.",
    recommendedPoojas: ["Pradosha Abhishekam", "Maha Mrityunjaya Homam"],
    doList: ["Abhishekam to Shiva", "Lighting lamps at dusk", "Pradosha vratham"],
    avoidList: ["Starting major new ventures", "Heavy feasting"],
    matchKeys: ["Trayodashi"],
  },
  {
    slug: "amavasya",
    name: "Amavasya",
    altName: "New moon",
    meaning: "The no-moon day, dedicated to the remembrance of ancestors.",
    significance:
      "Amavasya is the foremost day for tarpanam and shraddha rites. With the moon dark, the focus turns inward and toward the pitrus (forefathers).",
    recommendedPoojas: ["Pitru Tarpanam", "Tila Homam"],
    doList: ["Tarpanam for ancestors", "Charity and feeding the needy", "Quiet reflection"],
    avoidList: ["Auspicious beginnings (marriage, housewarming)", "Travel for new ventures"],
    matchKeys: ["Amavasya", "Amavasai"],
  },
  {
    slug: "pournami",
    name: "Pournami",
    altName: "Full moon",
    meaning: "The full-moon day of peak lunar energy, sacred to the Devi and Lakshmi.",
    significance:
      "With the moon at its fullest, Pournami is ideal for Devi and Lakshmi worship, Satyanarayana puja, and acts of charity and gratitude.",
    recommendedPoojas: ["Satyanarayana Pooja", "Lakshmi Kubera Homam", "Kalyana Pooja"],
    doList: ["Devi / Lakshmi worship", "Satyanarayana vratham", "Donation"],
    avoidList: ["Conflict and anger", "Over-indulgence"],
    matchKeys: ["Pournami", "Purnima", "Poornima"],
  },
  {
    slug: "ekadasi",
    name: "Ekadasi",
    altName: "11th lunar day",
    meaning: "The 11th lunar day, a fasting day dedicated to Lord Vishnu.",
    significance:
      "Ekadasi is observed with fasting and japa to purify body and mind. Vaikunta Ekadasi is the most powerful of the year.",
    recommendedPoojas: ["Sudarshana Homam", "Vishnu Sahasranama Archana"],
    doList: ["Fasting and japa", "Vishnu worship", "Reading scripture"],
    avoidList: ["Eating rice and grains", "Heavy, tamasic food"],
    matchKeys: ["Ekadasi", "Ekadashi"],
  },
  {
    slug: "sashti",
    name: "Sashti",
    altName: "6th lunar day",
    meaning: "The 6th lunar day, sacred to Lord Murugan.",
    significance:
      "Sashti is dedicated to Murugan; the Skanda Sashti following Deepavali, commemorating his victory over Surapadman, is the most important.",
    recommendedPoojas: ["Skanda Sashti Pooja", "Murugan Abhishekam"],
    doList: ["Murugan vratham", "Kavadi and abhishekam", "Reciting Kanda Sashti Kavasam"],
    avoidList: ["Non-vegetarian food during the vratham", "Neglecting the fast"],
    matchKeys: ["Sashti", "Shashti"],
  },
  {
    slug: "chaturthi",
    name: "Sankatahara Chaturthi",
    altName: "4th lunar day",
    meaning: "The 4th lunar day, sacred to Lord Ganesha and the remover of obstacles.",
    significance:
      "Sankatahara Chaturthi (in the waning phase) is observed to clear obstacles and is an auspicious time to begin new undertakings.",
    recommendedPoojas: ["Ganapathi Homam", "Ganesha Archana"],
    doList: ["Ganesha worship", "Beginning new ventures", "Moonrise vratham"],
    avoidList: ["Viewing the moon on Vinayaka Chaturthi", "Procrastination"],
    matchKeys: ["Chaturthi", "Chathurthi"],
  },
  {
    slug: "ashtami-navami",
    name: "Ashtami & Navami",
    altName: "8th & 9th lunar days",
    meaning: "The 8th and 9th lunar days, sacred to the Goddess (Shakti / Durga).",
    significance:
      "Ashtami and Navami — especially during Navaratri — are the most powerful days for Devi worship, Chandi Homam, and seeking protection.",
    recommendedPoojas: ["Chandi Homam", "Durga Pooja"],
    doList: ["Devi worship", "Chandi / Durga homam", "Kanya pooja"],
    avoidList: ["Anger and impurity", "Neglecting the Devi during Navaratri"],
    matchKeys: ["Ashtami", "Navami"],
  },
  {
    slug: "naga-panchami",
    name: "Naga Panchami / Ayilyam",
    altName: "Serpent worship days",
    meaning: "Days dedicated to the worship of the serpent powers (nagas).",
    significance:
      "Naga Panchami and the Ayilyam nakshatra are the prime occasions for naga worship and the remedy of Naga and Sarpa Dosha.",
    recommendedPoojas: ["Sarpa Samskara Pooja", "Naga Abhishekam"],
    doList: ["Milk abhishekam to naga shrines", "Naga / Sarpa Dosha remedies", "Worship at anthills"],
    avoidList: ["Harming serpents", "Digging the earth needlessly"],
    matchKeys: ["Panchami", "Ayilyam", "Aslesha"],
  },
];

export const tithiBySlug = (slug: string): Tithi | undefined =>
  tithis.find((t) => t.slug === slug);
