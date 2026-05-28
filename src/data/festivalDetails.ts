export interface FestivalDetail {
  slug: string;
  intro: string;
  significance: string;
  story: string;
  rituals: string[];
  whenWhere: {
    duration: string;
    mainTemple: string;
    otherLocations?: string[];
  };
  forDevotees: string;
  relatedTempleSlugs?: string[];
}

export const festivalDetails: Record<string, FestivalDetail> = {
  "skanda-sashti": {
    slug: "skanda-sashti",
    intro:
      "Skanda Sashti is a six-day Murugan festival commemorating the divine battle in which Lord Subrahmanya (Murugan) vanquished the demon Soorapadman. Observed primarily at Tiruchendur and the other Arupadai Veedu temples, it is the most important Murugan vratham of the year for Tamil Hindus worldwide.",
    significance:
      "The festival celebrates the triumph of good over evil — the victory of Lord Murugan over Soorapadman, Tarakasura, and Simhamukha, three demon brothers who terrorised the devas. Murugan, as commander of the celestial armies, was created from the sparks of Lord Shiva's third eye specifically for this battle. The festival is observed in the Tamil month of Aippasi (October–November) during the bright fortnight (Shukla Paksha), ending on the sixth lunar day (Sashti).",
    story:
      "When Soorapadman and his brothers harassed the devas, they prayed to Lord Shiva for help. From the third eye of Shiva, six divine sparks emerged. They were carried by the river-goddesses to the lake of Saravana, where they merged into one form — the six-faced Lord Subrahmanya (Murugan). The young Murugan, riding his peacock and wielding the vel (divine lance) given by his mother Parvati, led the celestial army to Tiruchendur on the shores of the Bay of Bengal. Over six days, the battle raged. On the sixth day — Soora Samharam day — Murugan hurled the vel at Soorapadman, who took the form of a giant mango tree to hide. The vel split the tree in two: one half became the peacock that Murugan rides, the other became the rooster on his banner. The remaining demons surrendered and were turned into companions.",
    rituals: [
      "Devotees observe a six-day fast (Skanda Sashti Vratham) — eating only once a day, abstaining from meat, alcohol, and tamasic foods.",
      "On each of the six days, special abhishekams and archanas are performed at Murugan temples.",
      "On the sixth day (Soorasamharam), a dramatic ritual enactment of Murugan's battle and victory is staged at Tiruchendur, drawing hundreds of thousands.",
      "The day after Soorasamharam, the celestial wedding of Murugan and Devasena (daughter of Indra) is celebrated as Thirukalyanam.",
      "Devotees chant the Kanda Sashti Kavacham — a powerful protective hymn composed by Devaraya Swamigal.",
      "Yellow flowers, sandalwood paste, and milk-rice (paal sadham) are offered to the deity.",
    ],
    whenWhere: {
      duration: "6 days, ending on the Sashti (sixth day) of Aippasi Shukla Paksha (October–November)",
      mainTemple: "Tiruchendur Murugan Temple — one of the Arupadai Veedu (six sacred abodes of Murugan)",
      otherLocations: ["Palani", "Swamimalai", "Thiruparankundram", "Pazhamudircholai", "Thiruthani"],
    },
    forDevotees:
      "Devotees traditionally observe the vratham at home for six days, visiting Murugan temples each evening. Those who cannot make it to Tiruchendur often watch the Soorasamharam ritual livestream. Lighting a ghee lamp, reciting the Kanda Sashti Kavacham, and offering yellow flowers (Murugan's favourite) are key observances. Many fast strictly, breaking it only on the seventh day after the Thirukalyanam darshan.",
    relatedTempleSlugs: ["tiruchendur-murugan", "palani-murugan"],
  },

  "karthigai-deepam": {
    slug: "karthigai-deepam",
    intro:
      "Karthigai Deepam is the festival of lamps celebrated on the full moon of the Tamil month Karthigai (November–December). Devotees light rows of oil lamps at homes, streets, and temples — and at Thiruvannamalai, a colossal beacon called Mahadeepam is lit atop Arunachala hill, visible for over 30 km.",
    significance:
      "The festival predates Diwali in Tamil tradition and is one of the oldest festivals of light in the world, with references in Sangam-era literature (over 2,000 years old). It commemorates the appearance of Lord Shiva as Arunachaleswarar — an infinite column of fire — to settle a dispute between Brahma and Vishnu over who was supreme.",
    story:
      "When Brahma and Vishnu argued over their relative greatness, Lord Shiva manifested as an endless pillar of fire stretching infinitely in both directions. He challenged them: whoever found an end first would be deemed supreme. Vishnu took the form of a boar (Varaha) to find the bottom; Brahma took the form of a swan to find the top. Neither succeeded. Brahma falsely claimed he had reached the top — a lie Shiva punished by decreeing he would have no temples on earth. Vishnu honestly admitted defeat and was blessed. The fire-form of Shiva eventually condensed into the Arunachala hill, which is itself worshipped as the Agni Lingam (fire lingam).",
    rituals: [
      "Devotees light rows of oil lamps (called Karthigai Deepam or Sokkappanai) at home — at the entrance, around tulsi plants, and on rooftops.",
      "At Thiruvannamalai, the Mahadeepam — a giant cauldron filled with ghee — is lit atop Arunachala hill, visible for 30 km.",
      "Millions of pilgrims perform Girivalam (14 km barefoot circumambulation of Arunachala hill).",
      "Special abhishekams to Shiva at all Shaivite temples.",
      "Sweets like Pori Urundai (puffed-rice balls) and Adai are prepared and shared.",
    ],
    whenWhere: {
      duration: "1 day (Karthigai Pournami — full moon in Karthigai month, November–December)",
      mainTemple: "Arunachaleswarar Temple, Thiruvannamalai",
      otherLocations: ["Every Shiva temple across Tamil Nadu", "Madurai Meenakshi", "Chidambaram Nataraja"],
    },
    forDevotees:
      "Light oil lamps at home from dusk to dawn. If visiting Thiruvannamalai, plan well ahead — accommodation books out months in advance. The Girivalam is best done in the cool of the night. Wear loose cotton, carry water, and walk barefoot if you can.",
    relatedTempleSlugs: ["arunachaleswarar-thiruvannamalai"],
  },

  mahamaham: {
    slug: "mahamaham",
    intro:
      "Mahamaham is a holy-dip festival held once every 12 years at the Mahamaham tank in Kumbakonam, Tamil Nadu. On the appointed day, the nine sacred rivers of India — Ganga, Yamuna, Saraswati, Narmada, Godavari, Tungabhadra, Krishna, Kaveri, and Sarayu — are believed to converge in the tank. A single bath is said to wash away sins from past lives.",
    significance:
      "Held when Jupiter (Guru) enters Leo (Simha rashi), this rare alignment occurs only once every 12 years. The convergence of the nine rivers is considered the most powerful purification opportunity in the Hindu calendar — comparable to the Kumbh Mela in scale and spiritual weight.",
    story:
      "At the end of a previous cosmic cycle (pralaya), Lord Brahma placed the seeds of all creation in a pot (kumbha) and set it adrift. After the deluge, the pot is said to have come to rest at Kumbakonam — giving the city its name. Lord Shiva is believed to have shattered the pot with an arrow, scattering the divine nectar (amrita) that landed at twelve sites, including the Mahamaham tank. The tank is considered the holiest of these.",
    rituals: [
      "Devotees take a sacred bath in the Mahamaham tank on Maha Magha day.",
      "Processional deities from the nine surrounding Shiva temples and three Vishnu temples are brought to the tank for a ritual bath (Theerthavari).",
      "Pilgrims circumambulate the tank, visiting the 16 mandapams along its banks.",
      "Special poojas are performed at Adi Kumbeswarar Temple — the main Shiva temple of Kumbakonam.",
      "Many fast on the day of the bath.",
    ],
    whenWhere: {
      duration: "1 day every 12 years (next: 2028)",
      mainTemple: "Adi Kumbeswarar Temple, Kumbakonam",
      otherLocations: ["Sarangapani Temple", "Ramaswamy Temple", "All temples around the Mahamaham tank"],
    },
    forDevotees:
      "Pilgrims plan months ahead — Kumbakonam swells from 200,000 to 5 million on the bathing day. Book accommodation in Trichy or Thanjavur (nearby). Arrive at the tank before sunrise. Crowds can be intense; go with patience and group of trusted companions.",
    relatedTempleSlugs: ["sarangapani-kumbakonam", "brihadeeswara-thanjavur"],
  },

  "brahmotsavam-tirupati": {
    slug: "brahmotsavam-tirupati",
    intro:
      "Brahmotsavam is a nine-day annual festival at the Tirumala Venkateswara Temple, where the processional deity (Malayappa Swami) is taken out daily on a different vahana (mount). It is the grandest event in the temple's calendar, drawing over five million pilgrims.",
    significance:
      "The name means 'a festival started by Brahma' — Lord Brahma is believed to have personally inaugurated it as thanksgiving to Lord Venkateswara. Each of the nine vahanas represents a different aspect of the Lord's divine play and grace. The fifth day's Garuda Seva, where the Lord rides on Garuda (his eagle mount), is the spiritual centrepiece.",
    story:
      "Tirumala Tirupati Devasthanams describes Brahma performing the original utsavam to thank Venkateswara for protecting devotees of all walks of life. Each vahana procession enacts a different relationship between the Lord and his devotees — the elephant for royalty, Hanuman for surrender, Garuda for divinity, the horse for protection, and so on. The festival culminates with Chakra Snanam on the ninth day, where the holy chakra of Sudarshana is given a sacred bath in the Pushkarini tank.",
    rituals: [
      "Day 1: Dhwajarohanam — the temple flag is hoisted to invite all gods.",
      "Day 2: Pedda Shesha Vahanam — Lord rides on the seven-hooded serpent Adi Sesha.",
      "Day 5: Garuda Seva — the most famous, with the Lord riding his eagle mount through Tirumala streets. Crowds peak.",
      "Day 7: Surya Prabha Vahanam — Sun chariot procession.",
      "Day 9: Chakra Snanam — the holy chakra is bathed in the Pushkarini; flag is lowered (Dhwajavarohanam).",
      "Daily abhishekams, special archanas, and free annadanam for all pilgrims.",
    ],
    whenWhere: {
      duration: "9 days, in the Tamil month of Purattaasi (September–October)",
      mainTemple: "Tirumala Venkateswara Temple, Tirupati",
    },
    forDevotees:
      "TTD opens special darshan booking windows months in advance. Garuda Seva day is overwhelming — plan to be in Tirumala 2–3 days before to acclimatise. Accommodation should be booked through TTD's official site. Free annadanam (food) is provided at the temple kitchens.",
    relatedTempleSlugs: ["tirupati-venkateswara", "govindarajaswamy-tirupati"],
  },

  "chithirai-festival": {
    slug: "chithirai-festival",
    intro:
      "Chithirai Tiruvizha is the 18-day grand festival of Madurai, celebrating the celestial wedding of Goddess Meenakshi to Lord Sundareswarar (Shiva). It is the largest street festival in Tamil Nadu, drawing over a million spectators to witness the temple chariots traverse the Mada streets of the old city.",
    significance:
      "The festival celebrates two divine events: Meenakshi's coronation as Queen of Madurai (Meenakshi Pattabhishekam) and her wedding to Sundareswarar (Thirukalyanam). It is one of the longest continuously-celebrated festivals in India, with origins in the Pandyan era over a thousand years ago.",
    story:
      "King Malayadhwaja Pandya and his queen Kanchanamala were childless. Through penance and divine grace, a three-breasted girl was born to them — declared by the gods to be a divine incarnation. The king raised her as a warrior princess. She grew up to become Meenakshi (the fish-eyed one), Queen of Madurai. Her third breast was prophesied to disappear when she met the man she would marry. On her conquest of Mount Kailasa, she met Lord Shiva — and at that moment, her third breast vanished. The wedding was solemnised in Madurai, with Lord Vishnu (her brother Kallazhagar) arriving to give her away.",
    rituals: [
      "Day 1: Kodiyetram — the festival flag is hoisted on the Dwajasthambam (flag mast) in front of Sundareswarar's sanctum, formally inaugurating the 12-day temple festival.",
      "Days 2–7: Meenakshi Pattabhishekam — daily morning processions of the goddess in different alankarams (decorations) through the inner corridors.",
      "Day 8: Digvijayam — the symbolic conquest of the directions, recalling Meenakshi's pre-marriage digvijaya across the four quarters.",
      "Day 9: Thirukalyanam — the celestial wedding ceremony of Meenakshi and Sundareswarar. Tens of thousands gather inside the temple complex; the rituals are conducted with full Vedic ceremony from dawn.",
      "Day 10: Therottam (Car Festival) — the great wooden chariots of Meenakshi and Sundareswarar are pulled through the four Mada streets by tens of thousands of devotees. The largest gathering of the festival.",
      "Day 11: Pallakku Utsavam — the deities are taken in a silver palanquin procession through the inner corridors.",
      "Day 12: Kallazhagar's arrival — Lord Vishnu, as Kallazhagar from Alagar Kovil 20 km away, journeys to Madurai across the Vaigai riverbed for his sister's wedding. The river-crossing draws lakhs of spectators along the dry Vaigai bed.",
      "Days 13–18: Vaikasi Visakam observances and concluding rituals; Kallazhagar returns to Alagar Kovil.",
      "Devotees fast on Thirukalyanam day. The two deities are dressed in the traditional yellow wedding attire — Meenakshi in a green silk saree and Sundareswarar in a gold-embroidered veshti.",
    ],
    whenWhere: {
      duration: "18 days in Chithirai (April–May)",
      mainTemple: "Meenakshi Amman Temple, Madurai",
      otherLocations: ["Alagar Koil (Kallazhagar Temple)", "Vaigai riverbank"],
    },
    forDevotees:
      "Madurai gets extremely hot in April–May; carry water and wear cotton. The car festival is best viewed from the temple's outer Mada streets — arrive by dawn. Hotels book out a month ahead. The Thirukalyanam darshan is free but the queues are long.",
    relatedTempleSlugs: ["madurai-meenakshi"],
  },

  "aadi-perukku": {
    slug: "aadi-perukku",
    intro:
      "Aadi Perukku — also called Padinettam Perukku — is a Tamil monsoon festival celebrated on the 18th day of the Tamil month Aadi (mid-August). It honours the swelling River Kaveri at the peak of the south-west monsoon, whose floodwaters bring life to the rice-fields of the delta.",
    significance:
      "Water is sacred in Tamil culture — and the Kaveri is its mother-river. Aadi Perukku celebrates the river's bounty as the monsoon fills its course. The festival is observed primarily by women, who offer prayers, food, and floating lamps to the Kaveri for the prosperity of their families.",
    story:
      "Tamil tradition holds that Saint Agastya brought the Kaveri to South India from his kamandalam (water pot) at the request of Lord Vinayaka. The river is therefore considered an incarnation of the goddess Lopamudra, Agastya's wife. On Aadi Perukku, the Kaveri is at her fullest — and the gratitude of generations of farmers and women is offered back to her on this day.",
    rituals: [
      "Women bathe in the Kaveri or other rivers at dawn.",
      "Sweet rice (sakkarai pongal), curd rice, lemon rice, and tamarind rice are prepared and offered to the river.",
      "Floating lamps (deepams) are released onto the river at dusk.",
      "Coconuts, flowers, and turmeric are offered.",
      "Newly-wed couples often visit family on this day, exchanging gifts as a symbol of fertility and abundance.",
    ],
    whenWhere: {
      duration: "1 day (18th of Aadi — typically August 2nd or 3rd)",
      mainTemple: "Temples along the Kaveri river",
      otherLocations: ["Srirangam", "Thanjavur", "Kumbakonam", "Trichy", "Karur"],
    },
    forDevotees:
      "If you live near the Kaveri or any major river, visit the riverbank at dawn or dusk. Prepare a small offering of cooked rice or sweets. The festival can be observed at home by placing water-filled brass pots near the puja shelf and lighting lamps.",
    relatedTempleSlugs: ["ranganathaswamy-srirangam", "sarangapani-kumbakonam"],
  },

  "pongala-attukal": {
    slug: "pongala-attukal",
    intro:
      "Attukal Pongala is the largest religious gathering of women in the world — recognised by the Guinness World Records when 3.5 million women cooked offerings on a single day in 2009. Held annually at the Attukal Bhagavathy Temple in Thiruvananthapuram, Kerala, women line miles of streets with earthen pots to cook sweet rice offerings for the goddess.",
    significance:
      "The festival is tied to the legend of Kannagi — the heroine of the Tamil epic Silappathikaram. After avenging her husband's wrongful death, Kannagi is said to have arrived at Attukal, where she was received by a Brahmin family. The goddess herself is believed to be Kannagi in divine form. The Pongala offering recreates the cooking that the Brahmin household offered her.",
    story:
      "Legend tells that a young girl appeared at the home of the chief of the local clan, asking him to help her cross the Killiyar stream. He carried her across — and when he turned back, she had vanished, revealing herself in his dream as the goddess Attukal Bhagavathy, an incarnation of Kannagi. The goddess instructed him to build a shrine where his cane (varikol) struck the earth. The cane is preserved in the temple to this day. The Pongala is offered to her each year as a thanksgiving meal.",
    rituals: [
      "Women begin arriving at Thiruvananthapuram three days before the Pongala day.",
      "On the appointed day, each devotee sets up three bricks as a hearth (aduppu) along the street and cooks sweet pongala (rice, jaggery, coconut, and ghee) in an earthen pot.",
      "The cooking is lit ceremonially at 10:30 AM with fire brought from the temple sanctum (pandara aduppu).",
      "When the pongala boils over, it is considered a sign of the goddess's acceptance.",
      "The offering is then sanctified by temple priests who sprinkle holy water on each pot.",
      "Men do not participate in the cooking ritual but support logistically.",
    ],
    whenWhere: {
      duration: "10-day festival; Pongala day is the 9th day (February–March)",
      mainTemple: "Attukal Bhagavathy Temple, Thiruvananthapuram",
    },
    forDevotees:
      "Women arrive a day or two early to secure a spot. Carry the brick hearth, earthen pot, ingredients (rice, jaggery, coconut, ghee), and firewood. Wear traditional set-mundu or a cotton saree. The streets are blocked from dawn — public transport is suspended. The Trivandrum civic authorities provide free water and waste pickup along the streets.",
    relatedTempleSlugs: ["attukal-bhagavathy", "padmanabhaswamy-trivandrum"],
  },

  "sabarimala-season": {
    slug: "sabarimala-season",
    intro:
      "The Sabarimala season is the annual two-month pilgrimage to Lord Ayyappa's forest shrine atop the Sabari hills of Kerala. Over 50 million devotees undertake the pilgrimage each year — making it one of the largest annual pilgrimages on earth. Each pilgrim observes a 41-day vratham before climbing the 18 sacred Pathinettam Padi steps to the sanctum.",
    significance:
      "Sabarimala stands apart for its radical inclusivity — pilgrims of any caste, religion, or background are welcomed, all addressed as 'Swami'. The 41-day vratham is the most demanding fasting and discipline practice in the Hindu calendar. The climax of the season is Makaravilakku — the appearance of a sacred light (Makara Jyothi) on Makara Sankranti (14 January).",
    story:
      "Lord Ayyappa is the son of Hari (Vishnu, as Mohini) and Hara (Shiva) — born to slay the demon Mahishi. As a young prince of Pandalam, he saved the kingdom and his foster mother, then declared his intention to return to his celestial abode. He shot an arrow into the Sabari forest at the spot now marked by his shrine, blessing the mountain as the place where devotees who observed his vratham would find him each year between Mandalakalam and Makaravilakku.",
    rituals: [
      "Pilgrims observe a 41-day vratham (Mandala Pooja): celibacy, vegetarian diet, walking barefoot, abstaining from alcohol and tamasic foods.",
      "Pilgrims wear black or dark-blue mundus and a tulsi mala (rosary).",
      "Two coconuts (irumudi kettu) are carried on the head — one filled with ghee for the abhishekam, the other with provisions.",
      "Pilgrims trek through the forest from Pamba to Sabarimala, climbing the 18 sacred steps to the sanctum.",
      "The forty-first day darshan is the culmination of the vratham. On Makara Sankranti (14 January), Makaravilakku — a sacred light — is witnessed in the night sky over the hills.",
    ],
    whenWhere: {
      duration: "Mandalakalam (41 days, mid-November to late December) + Makaravilakku (14 January)",
      mainTemple: "Sabarimala Sree Dharma Sastha Temple, Pathanamthitta, Kerala",
    },
    forDevotees:
      "Begin the 41-day vratham at home, ideally with guidance from a Guru. The trek is physically demanding — train by walking 10 km daily for a month before the pilgrimage. Carry the irumudi kettu only after the ritual tying (kettu nira) at a designated temple. Women aged 10–50 are traditionally not permitted (a legal and cultural matter currently under debate). The forest can be cold at night — carry a warm shawl.",
    relatedTempleSlugs: ["sabarimala-ayyappa"],
  },

  "aavani-moolam": {
    slug: "aavani-moolam",
    intro:
      "Aavani Moolam is the 10-day Madurai festival that re-enacts the 64 Thiruvilayadal — the sacred sports of Lord Sundareswarar (Shiva) as ruler of Madurai. Held during the Tamil month of Aavani (August–September) on the asterism of Moolam, the festival is celebrated almost exclusively at the Meenakshi Amman Temple. Each evening across the ten days, a different leela is enacted in song, drama, and procession through the temple corridors.",
    significance:
      "Aavani Moolam commemorates a unique theological idea: that Shiva once descended into Madurai as its mortal king and queen, performing playful and sometimes mischievous deeds to test, instruct, and ultimately bless his devotees. These 64 stories — recorded in the 17th-century Tamil text Thiruvilayadal Puranam by Paranjothi Munivar — root Shaivite myth in the very streets of Madurai. The festival is the temple's celebration of its city's identity.",
    story:
      "The Thiruvilayadal Puranam tells of how Shiva, in his form as Sundareswarar, performed 64 leelas alongside Queen Meenakshi while ruling Madurai. He sold pearls and rubies to a poor pious woman; turned a fox into a horse to humble a proud trader; ate a stale meal from an old devotee to teach her son humility; taught Tamil grammar to the sage Agastya; and battled the Pandyan war-elephant Madhura Veeran. The 64 stories blend the mythic and the mundane — Shiva walks the streets of Madurai as both king and trickster, blessing the simple devotee while testing the proud.",
    rituals: [
      "Day 1: Kodiyetram — the festival flag is raised on the Dwajasthambam, formally opening the festival.",
      "Days 2–9: Each evening, one or more of the 64 Thiruvilayadal stories is enacted through a special procession of the deities in a different alankaram — accompanied by Tamil oratory and recital from the Thiruvilayadal Puranam.",
      "Day 6 (Moolam asterism): The main festival day. Lord Sundareswarar is taken in grand procession around the four Mada streets.",
      "Specific leelas are paired with specific processional vahanas (vehicles) — Hanuman vahanam, horse vahanam, swan vahanam, and others.",
      "Day 10: Theerthavari — the concluding bath of the festival images in the temple tank, marking the closure of the festival.",
    ],
    whenWhere: {
      duration: "10 days in Aavani (August–September), centred on the Moolam asterism",
      mainTemple: "Meenakshi Amman Temple, Madurai",
    },
    forDevotees:
      "Aavani Moolam is one of the lesser-known temple festivals — the crowds are smaller than Chithirai, making it a wonderful time to experience the temple's living storytelling tradition. Each evening's procession typically begins between 6 PM and 8 PM in the inner corridors. Reading even a brief summary of the Thiruvilayadal Puranam beforehand transforms the experience; English translations are available at the temple's bookstall near the East tower.",
    relatedTempleSlugs: ["madurai-meenakshi"],
  },

  "navaratri-golu": {
    slug: "navaratri-golu",
    intro:
      "Navaratri — the 'nine nights' of the Divine Mother — is among the most beloved festivals across South India. In Tamil Nadu, it is celebrated as Golu: an elaborate display of dolls arranged on tiered steps (kolu padi) in homes and temples, depicting deities, sages, royal court scenes, and tableaux from the Puranas. The first three nights honour Durga, the next three Lakshmi, and the final three Saraswati — culminating in Vijayadashami, the tenth day of victory.",
    significance:
      "Navaratri celebrates the Divine Feminine in her three principal aspects: Durga (the power that destroys evil), Lakshmi (the wealth that sustains life), and Saraswati (the knowledge that liberates). Vijayadashami, the tenth day, commemorates Durga's victory over the buffalo-demon Mahishasura — and is considered the most auspicious day of the year for beginning new ventures: starting school, learning music, beginning trade. At Meenakshi Amman Temple, the goddess is dressed in nine successively grander alankarams across the nine nights.",
    story:
      "The asuras Mahishasura and Sumbha-Nisumbha had performed great penance and obtained boons making them invincible to any male being. They terrorised the heavens. The devas, helpless, pooled their divine energies into a single radiant form — Devi Durga — who rode out on a lion and battled the demons for nine nights, finally slaying Mahishasura on the morning of the tenth day. The nine nights are remembered as Navaratri, the tenth as Vijayadashami — 'the day of victory'.",
    rituals: [
      "Households set up a Golu — an odd-numbered stepped display (3, 5, 7, 9 steps) of clay and wooden dolls depicting deities, sages, weddings, royal court scenes, and Puranic tableaux.",
      "A kalasham (decorated pot representing the goddess) is placed at the centre of the display and worshipped each evening.",
      "Women visit each other's homes to view their Golus; visitors are offered sundal (lentil snacks), tamboolam (betel leaf, areca nut, coconut, fruit), and a small return-gift.",
      "Saraswati Pooja on the ninth day: books, musical instruments, and tools of one's trade are placed before the goddess and worshipped — no work is done that day.",
      "Vijayadashami: the books are reopened with reverence (Vidyarambham) — a traditional day for beginning new learning. Children are inducted into formal study, sometimes by tracing their first letter in a tray of rice.",
      "At Meenakshi Amman Temple: special alankarams of the goddess in nine forms (Navadurga); a large temple-Golu is displayed in the corridors.",
    ],
    whenWhere: {
      duration: "10 days from the first day of Ashwina (September–October)",
      mainTemple: "Meenakshi Amman Temple, Madurai",
      otherLocations: ["Kapaleeswarar Temple Mylapore", "Mysore Palace", "Tamil and Karnataka homes"],
    },
    forDevotees:
      "Even if you can't visit a temple, set up a small Golu at home — even three steps with a few dolls and a kalasham is enough. Invite neighbours to view it and share sundal — the social warmth of Navaratri is as important as the worship. On Vijayadashami, place your books and tools before the goddess in the morning; pick them up only after a small puja. This is the most auspicious day of the year to begin learning music, language, or a new craft.",
    relatedTempleSlugs: ["madurai-meenakshi", "kapaleeswarar-mylapore"],
  },

  "float-festival-madurai": {
    slug: "float-festival-madurai",
    intro:
      "The Madurai Float Festival — Theppotsavam — is held annually on the full-moon day of the Tamil month of Thai (mid-January to mid-February). On this night, the processional images of Goddess Meenakshi and Lord Sundareswarar are taken from the temple to the Mariamman Teppakulam, a vast sacred tank 5 km east of the temple. They are placed on an elaborately illuminated wooden float (theppam) garlanded with thousands of flowers and lit lamps, which is rowed slowly around the central pavilion of the tank — a luminous, slow-moving spectacle drawing several hundred thousand spectators to the tank's banks.",
    significance:
      "The Mariamman Teppakulam was excavated in 1645 by Thirumalai Nayak, the great Madurai king, to mark his birthday. It measures roughly 1,000 ft × 950 ft — one of the largest temple tanks in India — and was originally fed by the Vaigai river through underground channels. The central pavilion (Maiyam Mandapam) houses a small shrine to Lord Vinayaka. The Float Festival commemorates the king's birthday and the divine playfulness of Meenakshi-Sundareswarar, who 'take a holiday' from the inner sanctums to enjoy the cool waters of the tank.",
    story:
      "Thirumalai Nayak (r. 1623–59) was the most ambitious of the Madurai Nayak kings — patron of art, architecture, and the great Thirumalai Nayakkar Mahal palace. On his birthday, he is said to have requested a permanent gift to his city: a vast tank where the deities of his beloved Meenakshi temple could be brought out once a year, freed from the dim sanctum to bask under the full moon. He had his masons excavate clay for the Madurai brickworks, and the great tank was the resulting pit — formalised with steps, ringed by a parapet, and consecrated with the central Vinayaka pavilion.",
    rituals: [
      "On the morning of Thai Poosam full moon: festival images of Meenakshi and Sundareswarar are decorated and taken in procession from the Meenakshi temple to the Mariamman Teppakulam (5 km).",
      "The deities are placed on a large wooden float (theppam) decorated with hundreds of garlands, paddy stalks, plantain trunks, and several thousand oil lamps.",
      "At nightfall the float is launched into the tank and rowed slowly around the central Maiyam Mandapam — typically three or five circumambulations.",
      "Devotees gather around the tank's stepped banks; the reflection of the illuminated float in the water is the festival's defining sight.",
      "Music from the nadaswaram and tavil accompanies the procession.",
      "The deities are returned to the Meenakshi temple by dawn the following day.",
    ],
    whenWhere: {
      duration: "1 night (Thai Poosam full moon, January–February)",
      mainTemple: "Mariamman Teppakulam, Madurai (5 km east of Meenakshi Amman Temple)",
      otherLocations: ["Meenakshi Amman Temple (procession start and end)"],
    },
    forDevotees:
      "Arrive at the Teppakulam by 5 PM to claim a good spot on the stepped banks — the float is launched around 7–8 PM and circles for 2–3 hours. The east and south banks are the most popular; the north bank is usually less crowded. Carry a shawl: January nights in Madurai are cooler than expected. Auto-rickshaws from the Meenakshi temple to the Teppakulam are easy but charge a festival premium — agree on fare beforehand. Photography is freely permitted from the banks (no flash, please).",
    relatedTempleSlugs: ["madurai-meenakshi"],
  },
};

export function getFestivalDetail(slug: string): FestivalDetail | undefined {
  return festivalDetails[slug];
}
