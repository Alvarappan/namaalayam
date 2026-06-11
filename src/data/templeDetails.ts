export interface Mythology {
  legend?: string;
  tirukalyanam?: string;
  additionalStories?: { title: string; content: string }[];
}

export interface ArchitectureFeature {
  name: string;
  nameTa?: string;
  type: "gopuram" | "mandapam" | "tank" | "vimana" | "sanctum" | "other";
  description: string;
  detail?: string;
}

export interface SubShrine {
  name: string;
  deity: string;
  description: string;
}

export interface Gate {
  name: string;
  direction: "East" | "West" | "North" | "South";
  notes?: string;
}

export interface VisitorLogistics {
  gates?: Gate[];
  cloakRoom?: string;
  mobilePolicy?: string;
  cameraPolicy?: string;
  wheelchairAccess?: string;
  seniorCitizenDarshan?: string;
  parking?: string;
  restrooms?: string;
  drinkingWater?: string;
}

export interface Seva {
  name: string;
  description?: string;
  time: string;
  fee: string;
  type?: "daily" | "weekly" | "monthly" | "special";
  bookingUrl?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TempleDetail {
  slug: string;
  timings: {
    morning: string;
    evening: string;
    note?: string;
  };
  entryFee: string;
  dressCode: string;
  bestTime: string;
  travelInfo: {
    byAir: string;
    byTrain: string;
    byRoad: string;
  };
  highlights: string[];
  history: string;
  architecture: string;
  festivals: { name: string; month: string; description: string; slug?: string }[];
  poojas: { name: string; time: string; fee: string }[];
  nearbyTemples: string[];
  // Optional rich content (preferred when present)
  mythology?: Mythology;
  architectureFeatures?: ArchitectureFeature[];
  subShrines?: SubShrine[];
  visitorLogistics?: VisitorLogistics;
  sevas?: Seva[];
  faqs?: FAQ[];
}

export const templeDetails: Record<string, TempleDetail> = {
  "tirupati-venkateswara": {
    slug: "tirupati-venkateswara",
    timings: { morning: "2:30 AM – 1:30 PM", evening: "3:00 PM – 11:30 PM", note: "Suprabhatha Seva starts at 2:30 AM. Timings vary on festival days." },
    entryFee: "Free darshan (Special Entry: ₹300). Various sevas available.",
    dressCode: "Dhoti/Panche for men. Saree/Salwar for women. Western wear not permitted.",
    bestTime: "September – February (avoid peak festival weeks)",
    travelInfo: {
      byAir: "Tirupati Airport (15 km) with flights from Chennai, Hyderabad, Bangalore. Renigunta Airport is the main airhead.",
      byTrain: "Tirupati Railway Station (3 km from town). Direct trains from Chennai, Hyderabad, Mumbai, Bangalore.",
      byRoad: "Well-connected by road. Buses from Chennai (140 km), Bangalore (260 km), Hyderabad (570 km). TTD operates buses from Tirupati to Tirumala hill.",
    },
    highlights: [
      "World's most visited religious site with 50,000–100,000 pilgrims daily",
      "Sri Venkateswara's idol adorned with diamond crown and gold jewellery",
      "Tirumala hills (Seshachalam range) at 853 meters elevation",
      "Annual hair offering (Vastralankara) — over 15 tons of hair donated daily",
      "TTD runs free annadanam for all pilgrims — one of the world's largest free kitchens",
    ],
    history: "The Tirupati Venkateswara Temple, also known as the Tirumala Temple, is a Vaishnavite temple dedicated to Lord Venkateswara (a form of Vishnu). The temple is believed to have been visited by Ramanuja, the 12th-century philosopher who is said to have performed the Anointment of Lord Venkateswara. References to this temple appear in early Tamil literature, including the Divya Prabandha by the Alvars. The Tirumala Tirupati Devasthanams (TTD) trust, established in 1933, now administers the temple and manages the world's largest religious endowment.",
    architecture: "The temple is built in Dravidian architecture style with a distinctive golden Vimana (tower). The Ananda Nilayam (sanctum) is covered in gold plates. The Bangaru Vakili (golden door) leads to the main sanctum. The temple complex includes Hundi (donation box), Ranganayakula Mandapam, and the sacred Pushkarini tank.",
    festivals: [
      { name: "Brahmotsavam", month: "September–October", description: "Nine-day annual festival drawing millions of pilgrims. The deity is taken out in a grand procession on 9 different vahanas (vehicles).", slug: "brahmotsavam-tirupati" },
      { name: "Vaikunta Ekadasi", month: "December–January", description: "The most sacred day when the Vaikunta Dwaram (Heaven's Gate) is opened. Darshan is given through this special door.", slug: "vaikunta-ekadasi-tirupati" },
      { name: "Rathasapthami", month: "February", description: "Celebrates the birthday of the Sun God. The deity is placed on a chariot and taken in a procession through the four streets of Tirumala from 4 AM to midnight on seven different vahanas.", slug: "rathasapthami-tirupati" },
      { name: "Pushpa Yagam", month: "May", description: "Annual flower festival. The temple and processional deities are decorated with tonnes of flowers; a six-hour pushpa abhishekam is performed in the Tirumamani Mandapam.", slug: "pushpa-yagam-tirupati" },
    ],
    poojas: [
      { name: "Suprabhatha Seva", time: "2:30 AM", fee: "₹120 (Arjita)" },
      { name: "Thomala Seva", time: "3:00 AM", fee: "₹220" },
      { name: "Archana", time: "All day", fee: "₹220" },
      { name: "Kalyanotsavam", time: "11:00 AM onwards", fee: "₹1,000" },
    ],
    nearbyTemples: ["govindarajaswamy-tirupati", "srikalahasti-temple"],
    mythology: {
      legend:
        "Once, sage Bhrigu was sent by a council of rishis to determine the supreme among the Trimurti. Finding Vishnu reclining on Adi Shesha in Vaikuntha, apparently asleep and inattentive, the enraged Bhrigu kicked him in the chest. Vishnu calmly took the sage's foot and gently massaged it — but Goddess Lakshmi, who resides on Vishnu's chest, was deeply insulted by both the kick and the fact that Vishnu had pardoned the offence. She left Vaikuntha for Earth in search of a quieter dwelling, settling at Kolhapur as Mahalakshmi. Vishnu, separated from her, descended to the Venkata hills as Srinivasa — 'the abode of Sri' — to find her.",
      tirukalyanam:
        "On Earth, Srinivasa lived a life of austerity at Tirumala until he encountered the beautiful Princess Padmavathi, daughter of King Akasa Raja, at Narayanavanam. She was an incarnation of Lakshmi herself, born of a lotus from the earth. Srinivasa won her in marriage — but the wedding required vast wealth he did not possess. He borrowed an enormous sum from Kubera, the god of wealth, agreeing to repay only the interest until the end of Kali Yuga; the principal is to be repaid at the dawn of the next yuga. This is why devotees still pour their wealth — money, gold, hair, jewellery — into the temple Hundi: each donation is a token contribution toward Lord Venkateswara's debt to Kubera.",
      additionalStories: [
        {
          title: "Why Devotees Offer Their Hair",
          content:
            "An old legend traces the hair-offering custom to a kind cowherd boy whose ox was struck by a stone meant to chase it away. The stone hit Lord Venkateswara on the head, dislodging a patch of his hair. A passing princess, Neeladevi, saw the bleeding scalp and cut off her own beautiful tresses to cover the wound. Touched by her sacrifice, the Lord declared that henceforth he would receive the hair of every devotee who offered it at his temple, and that Neeladevi would receive the blessings on his behalf. The tonsuring of one's head at Tirumala is therefore both an act of surrendering one's pride (the hair as a symbol of vanity) and a settlement of one's share of the debt to Kubera.",
        },
        {
          title: "The Seven Sacred Hills (Sapta Giri)",
          content:
            "Tirumala stands on seven sacred hills, collectively the Seshachalam range — the seven hoods of Adi Shesha, the cosmic serpent on whom Vishnu reclines. Their names are: Seshadri, Neeladri, Garudadri, Anjanadri, Vrishabhadri, Narayanadri and Venkatadri. The Lord's name 'Venkateswara' means the destroyer (eswara) of sins (venkata, from 'vem' = sins and 'kata' = destroyer). The path of Alipiri Mettu, with its 3,550 stone steps, threads through these hills and is the ancient pilgrim route to the temple.",
        },
      ],
    },
    architectureFeatures: [
      {
        name: "Ananda Nilayam Vimana",
        nameTa: "ఆనంద నిలయం",
        type: "vimana",
        description: "The three-tiered gilded tower directly above the sanctum, the most sacred element of the temple. The name means 'Abode of Bliss'. Its ~32 m gold-plated surface dominates the Tirumala skyline; the topmost finial holds the famous Vimana Venkateswara — a smaller replica image believed to bestow the same darshan benefit when viewed from outside.",
        detail: "Three tiers · ~32 m gold-plated",
      },
      {
        name: "Garbhagriha (Sanctum)",
        type: "sanctum",
        description: "The inner sanctum housing the ~8-foot tall self-manifest (svayambhu) murti of Lord Venkateswara, standing on a Padmapeetham. The deity holds the Shankha and Chakra in his upper hands; his lower hands rest in Varada and Hasta mudras. The image is famously said to maintain a body-warm temperature even in the cold sanctum.",
      },
      {
        name: "Bangaru Vakili (Golden Door)",
        type: "other",
        description: "The 'Golden Doorway' that separates the Antarala mandapam from the Garbhagriha. Its silver-and-gold-plated doors are carved with the ten avatars of Vishnu. The threshold is so revered that pilgrims touch it with their foreheads as they pass through to the sanctum.",
      },
      {
        name: "Mahadwaram (Main Entrance)",
        type: "gopuram",
        description: "The principal entrance gopuram on the east, also called the Padikavali. Built in the Chola–Vijayanagara style with five tiers and topped by a single kalasham. Pilgrims pass beneath it to enter the temple complex from the Mada streets.",
      },
      {
        name: "Tirumamani Mandapam",
        type: "mandapam",
        description: "The 'Hall of the Sacred Bell', between the Mahadwaram and the inner enclosure. Daily Sahasranama Archana, Sahasra Deepalankarana and many of the major Arjita sevas are performed here. Its bells ring at every transition of the daily ritual cycle.",
      },
      {
        name: "Vimana Pradakshinam",
        type: "other",
        description: "The innermost circumambulatory path around the Ananda Nilayam Vimana. Walking three times around the Vimana is considered equivalent to viewing the deity itself — particularly meaningful on busy darshan days when sanctum-time is brief.",
      },
      {
        name: "Sampangi Pradakshinam",
        type: "other",
        description: "The outer circumambulatory corridor, lined with smaller shrines, mandapams, and the Tirumamani Mandapam. It is the path most pilgrims take on their way to the inner enclosure.",
      },
      {
        name: "Snapana Mandapam",
        type: "mandapam",
        description: "The 'anointing hall' where the daily Snapana Tirumanjanam (abhishekam to the processional Bhoga Srinivasa) is conducted every Friday — the only weekly abhishekam to a form of the main deity that pilgrims may witness.",
      },
      {
        name: "Kalyana Mandapam",
        type: "mandapam",
        description: "The wedding hall where the daily Kalyanotsavam (symbolic re-enactment of Srinivasa's wedding to Padmavathi) is performed. Sponsors of the seva sit in the mandapam during the ritual and receive a special wedding cloth.",
      },
      {
        name: "Swami Pushkarini",
        nameTa: "స్వామి పుష్కరిణి",
        type: "tank",
        description: "The sacred lake immediately to the north of the temple. Bathing in it before darshan is part of the prescribed pilgrim ritual. The Garuda Stambham and the small Sri Varahaswamy shrine on its western bank mark the spot where pilgrims are expected to seek Varaha's permission before approaching Venkateswara.",
      },
      {
        name: "Sapta Giri (Seven Sacred Hills)",
        type: "other",
        description: "The temple sits atop the seventh of seven sacred hills — Venkatadri — collectively forming the Seshachalam range, said to be the hoods of Adi Shesha himself. The hills are: Seshadri, Neeladri, Garudadri, Anjanadri, Vrishabhadri, Narayanadri, Venkatadri.",
        detail: "853 m elevation · ~22 km from Tirupati town",
      },
    ],
    subShrines: [
      {
        name: "Sri Varahaswamy",
        deity: "Lord Vishnu as Varaha (Boar Incarnation)",
        description: "On the bank of the Swami Pushkarini, this is the first shrine every pilgrim must visit — Varaha was the original lord of the Venkata hills and is said to have granted the land to Venkateswara on the condition that he be worshipped first. Skipping this darshan is believed to render the Venkateswara visit incomplete.",
      },
      {
        name: "Sri Yoga Narasimhaswamy",
        deity: "Lord Vishnu as Narasimha in Yogic Posture",
        description: "A peaceful seated form of Narasimha (rather than the more common fierce posture) housed in a sub-shrine within the main complex. Devotees worship here for protection from fear and for inner stability.",
      },
      {
        name: "Sri Andal (Goda Devi)",
        deity: "The Alvar Saint",
        description: "The 9th-century Tamil poetess-saint, considered an incarnation of Bhumi Devi and the only female among the 12 Alvars. Her Tiruppavai hymns are recited daily in the Tirumamani Mandapam during the month of Margazhi.",
      },
      {
        name: "Sri Ramanujacharya",
        deity: "The Vaishnava Acharya",
        description: "The 11th-12th century philosopher who codified Vishishtadvaita Vedanta and visited Tirumala seven times. His sub-shrine commemorates his role in establishing the temple's Vaishnavite practices and identifying Venkateswara conclusively as Vishnu.",
      },
      {
        name: "Sri Vishvaksena",
        deity: "Commander of Vishnu's Army",
        description: "Equivalent to Ganesha in Vaishnava tradition — the remover of obstacles and the leader of Vishnu's celestial army. His shrine is invoked at the start of every major temple ritual.",
      },
      {
        name: "Sri Garuda",
        deity: "Divine Mount of Vishnu",
        description: "Housed in the Garuda Mandapam directly facing the Bangaru Vakili, where Garuda gazes eternally at his lord. Pilgrims briefly halt here before approaching the sanctum.",
      },
      {
        name: "Hundi",
        deity: "Sacred Donation Vessel",
        description: "Not a deity but central to the temple's ritual life: the great hundi (donation receptacle) in front of the Bangaru Vakili is where pilgrims offer money, gold, and jewellery — each gift considered a contribution toward Lord Venkateswara's eternal debt to Kubera.",
      },
    ],
    visitorLogistics: {
      gates: [
        { name: "Mahadwaram (Main Entrance)", direction: "East", notes: "The principal entrance for all darshan queues. Opens onto the inner enclosure via the Sampangi Pradakshinam." },
        { name: "Vaikuntham Queue Complex (Q-I, Q-II, Q-III)", direction: "North", notes: "The three-building complex that channels all darshan queues — Sarva Darshan (free), Special Darshan (₹300), and Divya Darshan (for trek pilgrims). Air-conditioned, has resting areas and free meals." },
        { name: "Sudarshan Token Counters", direction: "North", notes: "Free time-stamped tokens issued from counters at Vishnu Nivasam, Srinivasam, and the bus stand. The token assigns a darshan slot; report at the assigned time to skip the unstamped queue." },
        { name: "Alipiri / Srivari Mettu Trek Entrance", direction: "South", notes: "Trek pilgrims arriving via the Alipiri Mettu (3,550 steps, ~9 km) or Srivari Mettu (2,388 steps, ~2.5 km) enter via a dedicated Divya Darshan queue at the top — often faster than the Sarva Darshan queue." },
      ],
      cloakRoom: "Free cloak rooms (luggage and footwear) are available at the Vaikuntham complex, near the Mahadwaram, and at the foot of both trek routes. Tokens are issued — keep them safe. Mobile phones and cameras are deposited separately at the entrance of the queue complex.",
      mobilePolicy: "Mobile phones, smart-watches, cameras, and Bluetooth devices are strictly prohibited inside the temple complex. Free deposit lockers are available at the entrance of the Vaikuntham queue complex and at the cloak rooms near the Mahadwaram. Violations result in immediate confiscation.",
      cameraPolicy: "Photography is completely prohibited inside the temple, the queue complex, and even in the corridors leading to the sanctum. Cameras must be deposited at the cloak room. Photography of the outer gopurams and the Tirumala township is permitted.",
      wheelchairAccess: "Wheelchairs are available on request at the Vaikuntham complex (refundable deposit). A dedicated wheelchair queue offers near-direct sanctum access for pilgrims with mobility needs, senior citizens above 65, and pregnant women — bring photo ID for age proof.",
      seniorCitizenDarshan: "Senior citizens (65+), physically challenged persons, and pregnant women may use the Special Privileged Darshan entrance (twice daily — morning and afternoon slots). Photo ID is mandatory. The queue is significantly shorter than the regular Sarva Darshan.",
      parking: "TTD operates large free parking lots at Tirumala for pilgrim vehicles. Private vehicles can drive up via the Tirumala Ghat Road; many pilgrims prefer to take TTD's free shuttle buses from the Alipiri toll gate to avoid the climb. Two-wheelers are not permitted on the Ghat Road.",
      restrooms: "Public restrooms and bathing facilities are available at the Vaikuntham complex, at all TTD cottages, at the Alipiri footstep entrance, and at multiple stations along the trek route. Free hot water for bathing is available at the Pushpa Mandapam.",
      drinkingWater: "Free filtered drinking water (Pulipathi) is available throughout the queue complex, along the trek routes, and at all major mandapams. TTD also distributes free buttermilk and snacks during peak hours.",
    },
    sevas: [
      {
        name: "Suprabhata Seva",
        description: "The first ritual of the day — the deity is gently awakened with the recitation of the Sri Venkateswara Suprabhatam by Ramanuja's disciple Prativadi Bhayankaram Annan. The most sought-after Arjita seva at Tirumala; bookings open 90 days in advance via the TTD online portal.",
        time: "Daily, 2:30 – 3:00 AM",
        fee: "₹120 (Arjita)",
        type: "daily",
      },
      {
        name: "Thomala Seva",
        description: "Adornment of the deity with fresh tulsi garlands and silken vastrams (clothes) after Suprabhatam. Pilgrims observe the alankaram from the Sampangi Pradakshinam.",
        time: "Daily, 3:00 – 3:30 AM",
        fee: "₹220",
        type: "daily",
      },
      {
        name: "Archana / Visesha Pooja",
        description: "Recitation of the 108 sacred names of Lord Venkateswara (Ashtottara) and the 1,008 names (Sahasranama), each with offering of flowers, in the Tirumamani Mandapam. Sponsors receive sankalpam in their name.",
        time: "Daily, 4:30 AM",
        fee: "₹220",
        type: "daily",
      },
      {
        name: "Kalyanotsavam",
        description: "The symbolic re-enactment of the wedding of Srinivasa, Padmavathi and Bhu Devi. Performed daily in the Kalyana Mandapam — sponsors witness the full Vedic ceremony and receive a special wedding cloth, laddus, and a framed photograph of the deities.",
        time: "Daily, 11:00 AM and 2:00 PM",
        fee: "₹1,000 (sponsors a pair)",
        type: "daily",
      },
      {
        name: "Sahasra Kalashabhishekam",
        description: "Anointing of the Snapana Beram with water from 1,008 sacred kalashams. Among the most spiritually charged of the Arjita sevas. Booking essential.",
        time: "Wednesdays, ~6:30 AM",
        fee: "₹1,700",
        type: "weekly",
      },
      {
        name: "Astadalapadapadmaradhana",
        description: "Eight-petalled lotus archana to the deity's feet with 108 golden lotus petals. A Monday-only seva first introduced in 1989.",
        time: "Mondays, ~6:30 AM",
        fee: "₹1,250",
        type: "weekly",
      },
      {
        name: "Tiruppavada Seva",
        description: "Mountain of cooked rice (~6 quintals) is offered to Lord Venkateswara as naivedyam, then distributed as prasadam. A Thursday tradition.",
        time: "Thursdays, ~6:00 AM",
        fee: "₹500",
        type: "weekly",
      },
      {
        name: "Vasantotsavam",
        description: "'Spring festival' performed in the Vasantha Mandapam for the processional deities — Sri Devi, Bhu Devi and Malayappa Swami. Conducted twice weekly.",
        time: "Tuesdays & Saturdays, ~10:30 AM",
        fee: "₹400",
        type: "weekly",
      },
      {
        name: "Sahasra Deepalankarana Seva",
        description: "'A thousand lamps illumination' of the processional Malayappa Swami in the Unjala Mandapam each evening. A serene, lamp-lit darshan.",
        time: "Daily, 6:30 PM",
        fee: "₹500",
        type: "daily",
      },
      {
        name: "Ekantha Seva",
        description: "The final seva of the day — the deity is put to bed (palli kondu) in the inner sanctum with a recitation of the Tarigonda Vengamamba's lullabies. The temple closes after this for the night.",
        time: "Daily, ~1:30 AM (next morning)",
        fee: "₹120",
        type: "daily",
      },
    ],
    faqs: [
      {
        question: "Do I have to shave my head (mundana) at Tirumala?",
        answer:
          "No — tonsuring is voluntary, not compulsory. Many devotees offer their hair as fulfilment of a personal vow (mokku) or as a symbolic settlement of their share of Lord Venkateswara's debt to Kubera. TTD operates free tonsure halls (Kalyana Katta) at Tirumala that can accommodate over 600 barbers simultaneously, with separate enclosures for men, women, and children. The shaved hair is donated to TTD, processed, and auctioned globally — a major source of temple revenue.",
      },
      {
        question: "What is the difference between Sarva Darshan, Special Darshan, and VIP Darshan?",
        answer:
          "Sarva Darshan is the free general darshan with the longest queue (often 6–18 hours during peak season). The free Sudarshan token system assigns a time slot — get a token from Vishnu Nivasam, Srinivasam, or the bus stand to skip the unstamped wait. Special Darshan (Seeghra Darshan, ₹300) provides a faster, ticketed entry — usually 1–3 hour wait. VIP Break Darshan is offered to recommended visitors (MPs, MLAs, religious heads); not bookable by the public. Senior citizens (65+) and physically challenged persons have a separate priority queue.",
      },
      {
        question: "How far in advance should I book sevas like Suprabhata, Kalyanotsavam, or Brahmotsavam?",
        answer:
          "TTD opens the Arjita Seva quota 90 days in advance through its official online portal (tirumala.org). Popular sevas like Suprabhata Seva and Kalyanotsavam are typically booked out within minutes. Brahmotsavam-related seva tickets open even earlier and require a separate lottery for many slots. A few same-day current-booking tickets are released at the TTD counters — but availability is uncertain.",
      },
      {
        question: "Should I take the trek (Alipiri or Srivari Mettu) or the bus?",
        answer:
          "Trek pilgrims receive a dedicated Divya Darshan queue at the top — often much faster than the regular Sarva Darshan, even after the climb. Alipiri Mettu has 3,550 steps (~9 km, 4–6 hours) and is the traditional pilgrim route; Srivari Mettu is shorter at 2,388 steps (~2.5 km, 2–3 hours) and steeper. Both routes are roofed and lit, with free TTD canteens and medical aid along the way. If you have time and reasonable fitness, the trek is highly recommended — both for the spiritual experience and the faster darshan.",
      },
      {
        question: "What's the famous Tirupati laddu? How many can I get?",
        answer:
          "The Tirupati Laddu is the temple's signature prasadam — a sweet made of besan, ghee, sugar, cardamom, cashew, and edible camphor, prepared in the Potu kitchen using a closely-guarded recipe. It holds a Geographical Indication (GI) tag (2009), legally restricting its name to the TTD-prepared variant. Every paid darshan ticket includes two free small laddus. Additional Big Laddus (~700g) can be purchased at the Laddu counter for ₹50 each, with a limit of 2 per person per visit. During Brahmotsavam and special occasions, gifting laddus to thousands is a common practice.",
      },
      {
        question: "Can foreigners and non-Hindus visit the temple?",
        answer:
          "Foreigners are welcome to the Tirumala township and its outer corridors. However, entry into the main temple sanctum requires devotees to sign a declaration affirming their faith in Lord Venkateswara, which is presented at the entrance for foreigners and non-Hindu Indians. The declaration is a brief written form — no proof is required. Many foreign devotees do darshan annually with this provision.",
      },
      {
        question: "What is the dress code at Tirumala?",
        answer:
          "Traditional Indian attire is strictly enforced for the sanctum darshan: dhoti (or panche) with upper cloth for men; saree, half-saree, or salwar kameez (with dupatta) for women. Western dress — jeans, shorts, sleeveless tops, short skirts, ripped clothing — is not permitted beyond the outer corridors. Several cloth-rental counters near the queue complex provide traditional wear; you may also bring your own. Black is traditionally avoided by some devotees, though not strictly prohibited.",
      },
      {
        question: "Where do I stay at Tirumala?",
        answer:
          "TTD operates extensive pilgrim accommodation at Tirumala (free dormitories and paid cottages at PAC-I, PAC-II, PAC-III, Vishnu Nivasam, Srinivasam, Madhavam) with rates from ₹50 to ₹3,000 per night. Booking via tirumala.org opens 60 days in advance; current-booking counters at Tirumala handle walk-ins subject to availability. Private hotels at Tirumala are limited (TTD has historically restricted commercial development). Many pilgrims stay at private hotels in Tirupati town (22 km below) and travel up by TTD shuttle bus — this is often easier for non-Telugu-speaking visitors.",
      },
      {
        question: "When are the busiest days I should try to avoid?",
        answer:
          "Avoid weekends, public holidays, school vacations (April–June), Vaikunta Ekadasi (Dec–Jan, queues can exceed 24 hours), the nine days of Brahmotsavam (Sep–Oct), and the days around Rathasapthami (Feb). Tuesday, Wednesday, and Thursday in the off-season (Aug, Oct–Nov, Jan–Mar excluding festival weeks) are typically the calmest. Even on those days, expect a minimum 2–4 hour queue for Sarva Darshan.",
      },
      {
        question: "What about the Annaprasadam — the free meals?",
        answer:
          "TTD's Nitya Annadanam Trust runs one of the world's largest free meal services — over 100,000 pilgrims served daily at the Matrusri Tarigonda Vengamamba Annaprasadam Complex (and ~5x that during festivals). Hot, simple South Indian vegetarian meals (rice, sambar, rasam, curd, pickle, sweet) are served continuously through the day. No coupons or charge — just walk in. The complex is a 5-minute walk from the Vaikuntham queue exit. Donations toward the trust (any amount) can be made at any TTD counter and are tax-exempt.",
      },
    ],
  },
  "madurai-meenakshi": {
    slug: "madurai-meenakshi",
    timings: { morning: "5:00 AM – 12:30 PM", evening: "4:00 PM – 10:00 PM", note: "The temple closes for 3 hours in the afternoon. Arrive early to avoid long queues." },
    entryFee: "Free. Camera fee: ₹50. Tower entry: ₹5.",
    dressCode: "Traditional Indian attire preferred. Saree for women, dhoti for men. No shorts/sleeveless.",
    bestTime: "October – March. Avoid April–May (extreme heat and Chithirai festival rush).",
    travelInfo: {
      byAir: "Madurai Airport (12 km) with direct flights from Chennai, Bangalore, Mumbai, Delhi.",
      byTrain: "Madurai Junction is a major railway hub with trains from all major cities.",
      byRoad: "National Highway 38 passes through Madurai. Buses from Chennai (460 km), Coimbatore (214 km), Trichy (135 km).",
    },
    highlights: [
      "14 gateway towers (gopurams) rising up to 52 meters, covered in colorful stucco figures",
      "Over 33,000 sculptures adorning the temple complex",
      "The sacred Porthamarai Kulam (Golden Lotus Tank) inside the complex",
      "The Meenakshi Nayakar Mandapam with 985 pillars",
      "The unique fish-eye (meena-akshi) form of Goddess Parvati",
    ],
    history: "The Meenakshi Amman Temple is one of the oldest and most significant temples in India, with origins dating back over 2,000 years. The current structure was built mainly during the Nayak period (1559–1736 CE). The temple is dedicated to Goddess Meenakshi (a form of Parvati) and her consort Sundareswarar (Shiva). The Chithirai festival celebrates their celestial wedding and is one of the largest temple festivals in South India.",
    architecture: "A supreme example of Dravidian architecture. The 14 gopurams are the most distinctive feature, with the tallest being the southern tower at 52 meters. Each gopuram is covered in thousands of painted plaster figurines depicting deities, animals, and mythological scenes. The inner sanctums of both Meenakshi and Sundareswarar are separate but connected by corridors.",
    festivals: [
      { name: "Chithirai Festival", month: "April–May", description: "18-day festival celebrating the divine wedding of Meenakshi and Sundareswarar. Draws over a million devotees.", slug: "chithirai-festival" },
      { name: "Aavani Moolam", month: "August–September", description: "10-day festival re-enacting the 64 sacred sports (Thiruvilayadal) of Lord Sundareswarar. Each evening features a different leela.", slug: "aavani-moolam" },
      { name: "Navaratri Golu", month: "September–October", description: "Nine nights of the Goddess. The temple displays an elaborate golu (doll arrangement) and special alankarams of Meenakshi as the nine forms of Devi.", slug: "navaratri-golu" },
      { name: "Float Festival (Theppam)", month: "January–February", description: "On Thai Poosam full moon, the deities are taken on an illuminated float across the Mariamman Teppakulam tank — a 1 km tank 5 km from the temple.", slug: "float-festival-madurai" },
      { name: "Karthigai Deepam", month: "November–December", description: "The temple is lit with thousands of clay lamps; special abhishekam to Sundareswarar at dusk.", slug: "karthigai-deepam" },
    ],
    poojas: [
      { name: "Kalasandhi Puja", time: "5:30 AM", fee: "₹100" },
      { name: "Uchikala Puja", time: "12:00 PM", fee: "₹100" },
      { name: "Sayaratchai Puja", time: "6:00 PM", fee: "₹100" },
      { name: "Ardhajama Puja", time: "9:00 PM", fee: "₹150" },
    ],
    nearbyTemples: ["nataraja-chidambaram", "ramanathaswamy-rameswaram"],
    mythology: {
      legend:
        "King Malayadhwaja Pandyan and Queen Kanchanamala of Madurai were childless despite years of yagnas and prayers. From the sacred fire of a putrakameshti yagna, a three-year-old girl emerged — with three breasts. A divine voice told the worried king to raise her as his own and as a warrior princess: her third breast would disappear the moment she met the man she was destined to marry. The princess was named Thadathagai. She mastered the 64 arts and shastras, succeeded her father as ruler of Madurai, and embarked on a digvijaya (conquest of the directions). On the slopes of Mount Kailasa she met Lord Shiva — and at that very moment, her third breast vanished. She had met her destined husband. Shiva instructed her to return to Madurai, where he would follow as her groom. There she became Meenakshi — 'she of fish-shaped eyes' — and reigned as Queen of Madurai before her divine wedding.",
      tirukalyanam:
        "Shiva arrived in Madurai as Sundareswarar — 'the beautiful lord' — for the wedding. Lord Vishnu, Meenakshi's brother (worshipped at nearby Alagar Kovil as Kallazhagar), travelled from his hill shrine to give the bride away. Brahma performed the ceremony. The wedding was witnessed by all the gods and devas, who assembled in Madurai for the occasion — making Madurai the divine wedding city of Tamil tradition. This Thirukalyanam is re-enacted every year on the ninth day of the Chithirai festival; the chariot procession the following day is one of the largest in South India.",
      additionalStories: [
        {
          title: "The 64 Thiruvilayadal (Sacred Sports)",
          content:
            "Sundareswarar is believed to have performed 64 sacred sports (leelas) in Madurai during his time as king alongside Meenakshi — from selling pearls and gemstones to a poor woman, to teaching Tamil grammar to the sage Agastya, to fighting the Pandyan elephant Madhura Veeran. These 64 leelas are recorded in the Tamil text Thiruvilayadal Puranam by Paranjothi Munivar (17th century) and are re-enacted across 10 evenings during the Aavani Moolam festival.",
        },
        {
          title: "The Origin of the Name Madurai",
          content:
            "When Shiva, pleased with King Kulashekara Pandyan's devotion, shook drops of nectar (madhu) from his matted hair onto the city below, it became known as Madhurai — 'the city of nectar'. Over centuries the name became Madurai. The temple complex sits at the centre of Madurai's concentric old-city street plan — the Adi, Chithirai, Avani Moola and Masi streets — laid out as a lotus around the goddess.",
        },
      ],
    },
    architectureFeatures: [
      {
        name: "South Tower (Rajagopuram)",
        nameTa: "தென் கோபுரம்",
        type: "gopuram",
        description: "The tallest and most iconic gopuram. Built in the late 16th century by Sevvanthimurthi Chetti.",
        detail: "Height ~52 m · 9 tiers · ~1,500 stucco figures",
      },
      {
        name: "East Tower",
        nameTa: "கிழக்கு கோபுரம்",
        type: "gopuram",
        description: "The original gateway to the Sundareswarar shrine — the main entry for most pilgrims.",
        detail: "Height ~45 m · built c. 1216 CE by Maravarman Sundara Pandyan",
      },
      {
        name: "West Tower",
        nameTa: "மேற்கு கோபுரம்",
        type: "gopuram",
        description: "Faces the Pottramarai Kulam side; one of the four directional gateways.",
        detail: "Height ~50 m",
      },
      {
        name: "North Tower",
        nameTa: "வடக்கு கோபுரம்",
        type: "gopuram",
        description: "The shortest of the four cardinal gopurams.",
        detail: "Height ~46 m · later additions and restorations through the 18th century",
      },
      {
        name: "Ashta Shakti Mandapam",
        nameTa: "அஷ்ட சக்தி மண்டபம்",
        type: "mandapam",
        description: "The entrance hall just inside the East Tower. Its pillars feature exquisite sculptures of the eight Shaktis (forms of the divine feminine) — Brahmi, Vaishnavi, Maheshwari, Indrani, Kaumari, Varahi, Chamundi and Mahalakshmi.",
      },
      {
        name: "Meenakshi Nayakkar Mandapam",
        nameTa: "மீனாட்சி நாயக்கர் மண்டபம்",
        type: "mandapam",
        description: "A 16th-century hall named after Visvanatha Nayaka. Famed for its 985 elaborately-sculpted pillars — each a single granite monolith — depicting yalis, deities, and royal patrons.",
        detail: "985 pillars · Nayak period (1559–1736)",
      },
      {
        name: "Hall of 1000 Pillars (Ayiram Kaal Mandapam)",
        nameTa: "ஆயிரம் கால் மண்டபம்",
        type: "mandapam",
        description: "Located in the north-east corner of the complex, this 16th-century hall is now the Temple Art Museum. The pillars are arranged so that whichever way you look, they appear in a straight line. Sculptures include Rati on a parrot, the goddess Meenakshi herself, and royal portraits.",
        detail: "Actually 985 pillars · built 1569 CE by Ariyanatha Mudaliar",
      },
      {
        name: "Musical Pillars",
        nameTa: "சங்கீத கம்பங்கள்",
        type: "other",
        description: "A cluster of monolithic granite pillars near the entrance to the Hall of 1000 Pillars. When struck gently, each pillar produces a different musical note — the seven swaras of Carnatic music. A surviving testament to Nayak-era acoustic engineering.",
      },
      {
        name: "Pottramarai Kulam (Golden Lotus Tank)",
        nameTa: "பொற்றாமரை குளம்",
        type: "tank",
        description: "The sacred tank inside the complex, ringed by a colonnade. Believed to be where Indra bathed a golden lotus before worshipping the original Sundareswarar lingam. Tamil literary tradition holds that a Sangam of Tamil poets used to convene on its banks — the manuscripts of accepted compositions floated, while the rejected ones sank.",
        detail: "~50 m × 36 m",
      },
      {
        name: "Killi (Kilikoondu) Mandapam",
        nameTa: "கிளிக்கூண்டு மண்டபம்",
        type: "mandapam",
        description: "The 'Parrot Cage' hall, between the second corridor and the goddess's sanctum. Until the late 20th century, hundreds of trained green parrots were kept here — taught to say 'Meenakshi'. The practice was discontinued for the birds' welfare; the cages still stand as a heritage feature.",
      },
      {
        name: "Sundareswarar Vimana",
        nameTa: "சுந்தரேஸ்வரர் விமானம்",
        type: "vimana",
        description: "The gold-plated tower (vimana) directly above the Shiva sanctum. Gilded again during the most recent Kumbabhishekam (consecration) in 2009.",
      },
      {
        name: "Meenakshi Vimana",
        nameTa: "மீனாட்சி விமானம்",
        type: "vimana",
        description: "The gold-plated vimana over the Meenakshi sanctum, where the goddess stands in the green emerald form holding a parrot.",
      },
    ],
    subShrines: [
      {
        name: "Mukkuruni Vinayakar",
        deity: "Lord Ganesha",
        description: "A massive Ganesha murti carved from a single granite monolith, discovered during the excavation of the Mariamman Teppakulam tank. 'Mukkuruni' refers to the three-kuruni (~12 litre) measure of rice needed for his daily abhishekam.",
      },
      {
        name: "Subrahmanya Shrine",
        deity: "Lord Murugan",
        description: "Shrine to Murugan with his consorts Valli and Devasena. Special significance during the Tamil month of Panguni (March–April) and on Krittika nakshatram days.",
      },
      {
        name: "Navagraha Shrine",
        deity: "The Nine Planetary Deities",
        description: "Arranged in the traditional grid with Surya at the centre. Devotees circumambulate the nine planets to seek relief from astrological doshas.",
      },
      {
        name: "63 Nayanmars",
        deity: "Tamil Shaivite Saints",
        description: "Life-size bronze statues of the 63 Nayanmars line the corridor leading to the Sundareswarar sanctum. They are taken in procession during the Arubathumoovar festival, mirroring the famous Mylapore celebration.",
      },
      {
        name: "Durga Shrine",
        deity: "Goddess Durga (as Mahishasuramardini)",
        description: "Located in the corridor around the Meenakshi shrine. Worshipped particularly during Navaratri.",
      },
      {
        name: "Lakshmi & Saraswati Shrines",
        deity: "The Goddesses of Wealth and Wisdom",
        description: "Sub-shrines flanking the path between the two main sanctums, completing the Tridevi worship within the complex.",
      },
      {
        name: "Natarajar Sabha",
        deity: "Shiva as Cosmic Dancer",
        description: "A special sabha (dance hall) housing a bronze Nataraja. Unusually, here the dancing pose is reversed — Nataraja's right leg is raised instead of the left — said to be at the request of a Pandyan king who wished to see the cosmic dance from the other side.",
      },
    ],
    visitorLogistics: {
      gates: [
        { name: "East Tower (Main entry)", direction: "East", notes: "Primary entrance for darshan. Opens onto Sundareswarar shrine corridor." },
        { name: "South Tower (Rajagopuram)", direction: "South", notes: "The tallest tower; opens onto South Avani Moola Street. Has the largest queue area." },
        { name: "West Tower", direction: "West", notes: "Closer to the Meenakshi shrine. Convenient for the Pottramarai Kulam." },
        { name: "North Tower", direction: "North", notes: "Less crowded; opens onto North Avani Moola Street." },
      ],
      cloakRoom: "Free shoe-and-bag cloak rooms are located just outside each of the four main gates. Mobile phones must also be deposited (see policy below). Keep your tag safe — replacements are charged.",
      mobilePolicy: "Mobile phones, smart-watches and Bluetooth devices are not permitted inside the temple. Deposit them at the cloak room at any of the four gates before entering. The policy is strictly enforced.",
      cameraPolicy: "Photography is prohibited inside the temple complex. Cameras may be left at the cloak room. Photography of the gopurams from outside the temple is freely permitted.",
      wheelchairAccess: "Wheelchairs are available on request at the South and East gates (refundable deposit). Ramp access is provided at the main corridors; the inner sanctum steps are narrow but assistance is offered by temple staff.",
      seniorCitizenDarshan: "Senior citizens (60+), pregnant women, and persons with disabilities can use the priority darshan queue — enter via the South Tower and request the special queue from the on-duty staff.",
      parking: "Paid parking is available on East Avani Moola Street and North Chithirai Street (approx ₹30 for two-wheelers, ₹100 for cars). Two-wheeler parking fills up early on weekends; arrive before 8 AM.",
      restrooms: "Public restrooms are available outside the East and West towers. Inside the complex, facilities are limited.",
      drinkingWater: "Drinking water taps are available near the Pottramarai Kulam and at the corridors leading to each sanctum. Carry your own bottle if visiting in summer.",
    },
    sevas: [
      {
        name: "Kalasandhi Pooja",
        description: "First major pooja of the morning — abhishekam to both Meenakshi and Sundareswarar with milk, curd, honey, sandal, and panchamrutham.",
        time: "Daily, 6:30 AM",
        fee: "₹100",
        type: "daily",
      },
      {
        name: "Uchikala Pooja",
        description: "Midday pooja followed by Maha Naivedyam (food offering) to the deities.",
        time: "Daily, 12:00 PM",
        fee: "₹100",
        type: "daily",
      },
      {
        name: "Sayaratchai Pooja",
        description: "Evening pooja with full alankaram (decoration) of the goddess.",
        time: "Daily, 6:00 PM",
        fee: "₹100",
        type: "daily",
      },
      {
        name: "Ardhajama Pooja (Palliyarai Seva)",
        description: "The night pooja — the deities are taken in procession to the Palliyarai (bedchamber) on a silver palanquin. One of the most cherished darshans for devotees.",
        time: "Daily, 9:30 PM",
        fee: "₹150",
        type: "daily",
      },
      {
        name: "Friday Special Pooja",
        description: "Meenakshi is given a grand abhishekam and dressed in a special saree. Fridays draw the largest weekday crowd.",
        time: "Every Friday, 9:00 AM onwards",
        fee: "₹250 (sponsorship)",
        type: "weekly",
      },
      {
        name: "Pradosha Abhishekam",
        description: "Performed twice each month on Pradosham days (Trayodashi tithi). Special abhishekam to Sundareswarar between sunset and nightfall.",
        time: "Pradosham evenings, ~5:30 PM",
        fee: "₹350",
        type: "monthly",
      },
      {
        name: "Pournami Abhishekam",
        description: "Full-moon-day abhishekam to Meenakshi with 108 conches of holy water. Booking essential.",
        time: "Full moon day, 7:00 AM",
        fee: "₹500",
        type: "monthly",
      },
      {
        name: "Sahasranama Archana",
        description: "Recitation of the 1,000 names of Meenakshi with archana — performed at the goddess shrine.",
        time: "All day on request",
        fee: "₹250",
        type: "special",
      },
      {
        name: "Thirukalyanam (Wedding Seva)",
        description: "Sponsorship of the symbolic celestial wedding of Meenakshi and Sundareswarar. Sponsors receive prasadam and a wedding cloth (madisar).",
        time: "By appointment",
        fee: "₹5,000 onwards",
        type: "special",
      },
      {
        name: "Annadanam Sponsorship",
        description: "Sponsor a day of free meals for pilgrims. The temple trust serves anna danam at the dining hall near the East gate.",
        time: "Sponsor any date",
        fee: "₹15,000 per day (approximate)",
        type: "special",
      },
    ],
    faqs: [
      {
        question: "Can foreigners visit Meenakshi Amman Temple?",
        answer:
          "Yes — foreign visitors of all nationalities are welcome at the temple, free of charge. There is no separate entry for foreigners. The only restriction (which also applies to Hindus from other denominations) is that the innermost sanctums of Meenakshi and Sundareswarar are reserved for Hindu devotees. The corridors, mandapams, gopurams, and the Pottramarai Kulam are open to everyone. Modest dress and basic temple etiquette (no shoes, no leather, no loud conversation) are expected.",
      },
      {
        question: "How much time should I allocate for my visit?",
        answer:
          "A quick darshan can be done in about 1.5 hours if queues are short. To take in the architecture properly — the four gopurams, the Ashta Shakti Mandapam, the Hall of 1000 Pillars (now a museum), the Musical Pillars, and the Pottramarai Kulam — plan for 3–4 hours. A leisurely first visit including both sanctums, the museum, and a snack break easily fills a half-day. On Fridays, festival days, and during the closure window (12:30–4:00 PM), allow extra time for queues.",
      },
      {
        question: "What is the dress code?",
        answer:
          "Traditional Indian attire is preferred — saree, half-saree, or salwar kameez for women; dhoti or veshti with shirt for men. Western clothing is permitted as long as it is modest: shoulders and knees should be covered. Shorts, short skirts, sleeveless tops, ripped jeans, and revealing clothing are not allowed. Leather items (belts, wallets, handbags) are also discouraged inside the inner corridors.",
      },
      {
        question: "Are mobile phones, cameras, and bags allowed inside?",
        answer:
          "Mobile phones, smart-watches, Bluetooth devices, and cameras are not permitted inside the temple complex. Free cloak rooms are located outside each of the four main gates (East, West, North, South) where you must deposit them before entering. Photography of the gopurams from outside the temple is freely permitted. Large bags should also be left at the cloak room — security may not allow them through.",
      },
      {
        question: "Is there wheelchair access?",
        answer:
          "Partially. Wheelchairs are available on a refundable deposit at the South and East gates. The main corridors are wheelchair-accessible. However, the steps leading into the inner sanctums of Meenakshi and Sundareswarar are narrow and not wheelchair-friendly — temple staff will assist visitors with mobility needs. The Hall of 1000 Pillars museum has step access only. Senior citizens, pregnant women, and persons with disabilities can request the priority darshan queue at the South Tower.",
      },
      {
        question: "When is the best time of day to visit?",
        answer:
          "The early-morning window between 5:30 AM and 7:30 AM is the quietest and the most spiritually charged — the Kalasandhi pooja takes place around 6:30 AM. Mid-morning (8–11 AM) is also good but busier. The temple closes 12:30–4:00 PM for the afternoon break, so plan your visit either side of that window. Friday is the busiest day of the week (Meenakshi's special day); Tuesday and Wednesday tend to be quieter. Weekends and public holidays draw very long queues.",
      },
      {
        question: "Are there food options inside the temple?",
        answer:
          "Inside the complex, only blessed prasadam is offered — typically curd-rice, tamarind-rice, and sweet pongal at specific times. No commercial food stalls operate within the complex. Just outside the four gates, however, you will find Madurai's famous street-food scene: Murugan Idli, Konar Kadai biryani, Amma Mess kari-dosa, and the iconic jigarthanda (a chilled almond-milk drink with ice cream and china grass) at Famous Jigarthanda on East Masi Street. The temple Annadanam (free meal service) is available to all pilgrims at the East-gate dining hall, typically between 11:30 AM and 1:00 PM.",
      },
      {
        question: "Is there a special quick-darshan ticket?",
        answer:
          "Yes — the temple offers a paid quick-darshan ticket (around ₹100–₹250 depending on day and time) that allows entry via a shorter queue, especially during peak hours. Tickets are sold at the counters near the South and East gates. On major festival days, quick-darshan may be suspended or extended; the temple administration's announcements at the gates are authoritative.",
      },
      {
        question: "Where can I stay nearby?",
        answer:
          "Madurai has accommodation across all budgets within walking distance of the temple. Budget options like Hotel Royal Court, Hotel Sangam Surya, and TamilNadu's HRCE-affiliated guesthouses are within 1 km. Mid-range hotels (Hotel Supreme, Hotel Park Plaza, GRT Regency) are 1–2 km away. The Heritage Madurai and the Gateway Hotel Pasumalai are the premium options. During Chithirai (April–May) and Aavani Moolam (Aug–Sep), book at least a month in advance.",
      },
      {
        question: "What other places should I see in Madurai?",
        answer:
          "Within Madurai city: the Thirumalai Nayakkar Palace (a 17th-century Indo-Saracenic palace, 1.5 km from the temple), the Mariamman Teppakulam (the 1 km festival tank, 5 km east), the Gandhi Memorial Museum, and the Pudhu Mandapam (the 16th-century pillared market hall built by Thirumalai Nayak directly opposite the East Tower). Day trips from Madurai include Alagar Kovil (20 km north — the brother-deity Vishnu temple), Thirupparankundram (8 km south — one of the six abodes of Murugan), and Kodaikanal (120 km — hill station).",
      },
    ],
  },
  "brihadeeswara-thanjavur": {
    slug: "brihadeeswara-thanjavur",
    timings: { morning: "6:00 AM – 12:30 PM", evening: "4:00 PM – 8:30 PM" },
    entryFee: "Free for Indian citizens. ₹250 for foreign nationals.",
    dressCode: "Modest clothing required.",
    bestTime: "October – March",
    travelInfo: {
      byAir: "Trichy Airport (60 km) is the nearest. Madurai Airport (160 km).",
      byTrain: "Thanjavur Railway Station (2 km) has trains from Chennai, Trichy, Madurai.",
      byRoad: "Thanjavur is 310 km from Chennai. Regular buses from Trichy (56 km), Kumbakonam (36 km).",
    },
    highlights: [
      "UNESCO World Heritage Site — one of the 'Great Living Chola Temples'",
      "The 66-meter vimana (tower) is the tallest temple tower of its era (built 1010 CE)",
      "The shadow of the vimana never falls on the ground — a remarkable architectural feat",
      "The massive Nandi (bull) monolith — one of the largest in India at 6 meters",
      "Exceptional Chola-era frescoes, bronzes, and inscriptions inside",
    ],
    history: "Built by the great Chola Emperor Raja Raja I between 1003–1010 CE, the Brihadeeswara Temple (also called Peruvudaiyar Kovil) is a testament to the zenith of Chola art and architecture. The temple was built to celebrate military victories and royal power. The inscriptions on the walls — over 400 of them — provide detailed records of the Chola empire's administration, donations, and religious practices.",
    architecture: "Built entirely of granite, the Brihadeeswara is the world's first complete granite temple. The 66-meter vimana consists of 13 tapered tiers. The massive Shivalingam in the sanctum (8.7 meters tall) is the second largest in India. The outer wall is decorated with sculptures of Shiva in various forms (108 Bharata Natyam poses are depicted).",
    festivals: [
      { name: "Maha Shivaratri", month: "February–March", description: "All-night vigil with four prahara abhishekams to the great lingam. Brihadeeswara's vast prakaram is illuminated with thousands of lamps; one of the largest Shivaratri gatherings in Tamil Nadu.", slug: "maha-shivaratri" },
      { name: "Karthigai Deepam", month: "November–December", description: "The temple is lit with thousands of clay deepams; a great beacon is lit atop the vimana at dusk, visible across the old city.", slug: "karthigai-deepam" },
      { name: "Sadayam Vizha (Raja Raja Chola Birthday)", month: "October–November", description: "Commemorates the birthday of Raja Raja Chola I (Sadayam nakshatra in the Tamil month of Aippasi). Revived in 2003 by the Tamil Nadu government as a state-level cultural festival.", slug: "sadayam-vizha-thanjavur" },
      { name: "Aippasi Brahmotsavam", month: "October–November", description: "10-day annual Brahmotsavam with daily processions of the deity on different vahanas through the inner prakaram." },
    ],
    poojas: [
      { name: "Thiruvanandal (Morning Puja)", time: "6:00 AM", fee: "Free" },
      { name: "Uchikala Puja", time: "12:00 PM", fee: "Free" },
      { name: "Evening Puja", time: "6:00 PM", fee: "Free" },
    ],
    nearbyTemples: ["sarangapani-kumbakonam", "nataraja-chidambaram"],
    mythology: {
      legend:
        "Raja Raja Chola I (Arulmozhivarman) had a vision during a military campaign in Sri Lanka — Lord Shiva appeared and instructed him to build a temple worthy of his cosmic stature. Returning to his capital Thanjavur at the height of his empire (he had conquered Kerala, the Pandyan kingdom, parts of Karnataka and northern Sri Lanka), the king resolved to construct a Dakshina Meru — a southern Mount Meru — that would surpass every temple ever built. Construction began in 1003 CE and was completed in 1010 CE: just seven years for a monument of granite weighing over 130,000 tonnes. The temple was consecrated with its main deity named Rajarajeswaram-Udaiyar after the king himself; over the centuries it came to be known by the more universal name Brihadeeswara, 'the Great Lord'.",
      additionalStories: [
        {
          title: "The Consecration of the Great Lingam",
          content:
            "Raja Raja's choice of the saint Karuvur Devar to perform the consecration is itself the temple's defining legend. When the king brought the great Shivalingam to the sanctum and tried to install it, every method failed — the lingam would not rise. Devars assembled in despair. Karuvur Devar, then a wandering Shaiva saint, was summoned. He sang the Tiruvisaippa — a hymn in praise of Brihadeeswara, composed on the spot — and the lingam rose effortlessly into place. Raja Raja built a small shrine for Karuvurar inside the southern prakaram, where the saint remains in worship to this day.",
        },
        {
          title: "The Mystery of the Shadow",
          content:
            "A popular belief holds that the shadow of the temple's 66-metre vimana never falls on the ground — that it 'disappears' at noon. Modern survey work has shown this is partially true and partially mythologised: at midday, the vimana's shadow falls onto its own base rather than extending beyond the temple compound. This is the result of a remarkable architectural calculation by the Chola sthapatis (architects), who designed the tapering pyramid so its centre of mass and shadow geometry align with the base. Whether intentional or accidental, the effect contributes to the structure's mystique — and may have been a deliberate symbolic statement that the king's temple, like the king himself, cast no overshadowing presence on his subjects.",
        },
        {
          title: "The 80-Tonne Cap Stone",
          content:
            "At the top of the vimana sits a single 25-tonne (some accounts say 80-tonne) octagonal cap stone (the sikhara), capped with a kalasham. Local tradition holds that the Chola engineers raised this stone using a six-kilometre-long inclined earthen ramp from the village of Sarapallam ('scaffold-pit village') near modern Thanjavur. Elephants and labourers slowly hauled the stone up the ramp on log rollers. After installation, the entire ramp was dismantled. The feat is among the marvels of ancient engineering — the cap stone was raised to 60 metres without modern machinery, only animal power, ropes, and one of history's great experiments in friction physics.",
        },
        {
          title: "The Living Bronzes",
          content:
            "Raja Raja commissioned dozens of bronze processional images for the temple, cast in the cire perdue (lost-wax) method that Chola sthapatis had perfected. The most exquisite is the Rajaraja-Sundara-Choleswara — a Shiva-Parvati pair where Parvati is said to be modelled on the king's queen, Lokamadevi. These bronzes are still in active worship today — taken in procession on festival days, anointed daily, dressed in fresh silks. They are considered among the finest surviving Chola bronzes in the world.",
        },
      ],
    },
    architectureFeatures: [
      {
        name: "Brihad-Vimana (Sri Vimana)",
        nameTa: "ஸ்ரீ விமானம்",
        type: "vimana",
        description: "The temple's defining feature — a 13-tier granite pyramid rising 66 metres (216 ft) over the sanctum. The tallest temple tower of its era and one of the tallest in India. Each tier diminishes geometrically; the cap stone (sikhara) is a single octagonal granite monolith weighing approximately 25 tonnes.",
        detail: "66 m · 13 tiers · 25-tonne cap stone",
      },
      {
        name: "Garbhagriha & Mahalingam",
        type: "sanctum",
        description: "The square sanctum (~14 m on each side) is two storeys tall internally, housing one of India's largest Shivalingams — an 8.7 m (29 ft) tall granite lingam on a square avudaiyar pedestal. The lingam is so large that priests use specially-built scaffolds to perform abhishekam. The sanctum is unusually deep, allowing devotees to circumambulate the lingam within.",
        detail: "Lingam 8.7 m · sanctum two storeys tall",
      },
      {
        name: "Nandi Mandapam",
        type: "mandapam",
        description: "Houses the colossal monolithic Nandi (sacred bull) facing the sanctum — 6 m long × 2.6 m wide × 3.7 m tall, carved from a single block of granite weighing approximately 25 tonnes. It is the second-largest Nandi in India (after Lepakshi). The mandapam itself was added in the 16th century by the Nayaks.",
        detail: "Nandi: 6 × 2.6 × 3.7 m · ~25 tonnes",
      },
      {
        name: "Keralantakan Tiruvasal",
        type: "gopuram",
        description: "The outer eastern gateway — named after Raja Raja's conquest of Kerala (his title was Keralantaka, 'destroyer of the Cheras'). Built in the Chola period, the gateway has a single tier with the original Chola sculptures still intact.",
      },
      {
        name: "Rajarajan Tiruvasal",
        type: "gopuram",
        description: "The inner gateway, named after the founder himself. A three-tiered gopuram of remarkable proportional balance — its sculptures depict dvarapalakas (gate-guardians), Bhairava forms, and scenes from the Periya Puranam. Unusually for South India, the inner gopuram is taller than the outer.",
      },
      {
        name: "Maha Mandapam & Ardha Mandapam",
        type: "mandapam",
        description: "The two pillared halls between the gateway and the sanctum, used for daily rituals and for displays of the festival bronzes. The pillars carry Chola inscriptions recording donations of land, gold and slaves by the king, his queens, and the merchant guilds. Many of the bronzes housed here are 11th-century originals.",
      },
      {
        name: "Karandai Inscriptions",
        type: "other",
        description: "Over 400 stone inscriptions cover the temple's base mouldings (adhishthana) — the most extensive surviving administrative record from the Chola period. They record gifts of villages, sums of gold, quantities of paddy, lists of dancers, musicians, accountants, watchmen, and ritual specialists endowed by Raja Raja and his nobles. The inscriptions are written in early Tamil with Grantha letters for Sanskrit names.",
        detail: "400+ inscriptions · early Tamil + Grantha",
      },
      {
        name: "Chola Frescoes",
        type: "other",
        description: "Inside the lower corridor of the vimana, the original 11th-century Chola murals were rediscovered in 1930 — preserved under a later Nayak-era overpainting. Both layers are now visible: the deep Chola reds and ochres depict scenes from the life of Sundarar and Nataraja; the Nayak overlay shows lighter palette portraits of saints and donors. The space is dimly-lit; ASI permits only authorised photographers.",
      },
      {
        name: "81 Karana Sculptures",
        type: "other",
        description: "Carved on the niches of the vimana's first storey: 81 of the 108 Bharatanatyam karanas (movement units) described in the Natyashastra. The figures — about 1 m tall, in granite — show the dancer in dynamic mid-pose, accompanied by drummers and singers. They are the earliest complete sculptural catalogue of the karanas anywhere in India.",
        detail: "81 of 108 Natyashastra karanas",
      },
      {
        name: "Brihannayaki Amman Shrine",
        nameTa: "பெரிய நாயகி அம்மன்",
        type: "other",
        description: "The consort goddess Brihannayaki ('Great Mother') in her own shrine within the northern prakaram. Added by the Pandyas in the 13th century after Chola decline. Her annual Aadi Pooram festival is a major draw.",
      },
      {
        name: "Subrahmanya Shrine",
        type: "other",
        description: "A 17th-century Nayak-era addition in the north-western corner of the prakaram. Despite being centuries younger than the main temple, it is considered one of the finest examples of late Nayak granite sculpture — its pillared mandapam is rated by art historians as a miniature masterpiece.",
      },
      {
        name: "Karuvurar Shrine",
        type: "other",
        description: "A small shrine in the southern prakaram dedicated to Karuvur Devar — the wandering Shaiva saint whose Tiruvisaippa hymn enabled the consecration of the main lingam. His installation here, alongside the great deity, is a rare honour granted by Raja Raja himself.",
      },
    ],
    subShrines: [
      {
        name: "Brihannayaki Amman",
        deity: "Goddess Parvati as 'The Great Mother'",
        description: "The consort goddess in her own shrine on the northern prakaram, added by the Pandyas in the 13th century. Friday is her special day; the annual Aadi Pooram (July–August) draws thousands of women devotees.",
      },
      {
        name: "Subrahmanya Swamy",
        deity: "Lord Murugan",
        description: "A late-Nayak (17th c.) shrine in the north-western corner. The pillared mandapam — with finely detailed yali and Bhairava sculptures — is widely regarded as the artistic high point of late Tamil temple architecture.",
      },
      {
        name: "Chandikeshwara",
        deity: "The Custodian of Shiva Temples",
        description: "An original Chola-period shrine on the northern wall of the sanctum. Devotees customarily snap their fingers when passing — a gesture to wake Chandikeshwara (who is said to be eternally meditating) and to attest to the truth of the prayers just offered to Shiva.",
      },
      {
        name: "Ganapathy",
        deity: "Lord Ganesha",
        description: "An original Chola shrine immediately to the south of the main entrance, where every devotee first offers prayers before approaching the great lingam.",
      },
      {
        name: "Dakshinamurthy",
        deity: "Shiva as the Cosmic Teacher",
        description: "Carved into the southern niche of the vimana — a 1.5 m granite sculpture of Shiva as the silent teacher seated under the banyan tree, surrounded by four sages. One of the finest Dakshinamurthy depictions of the Chola period.",
      },
      {
        name: "Lingodbhavar",
        deity: "Shiva as the Infinite Pillar",
        description: "On the rear (western) niche of the vimana — Shiva emerging from a column of fire whose ends Brahma and Vishnu cannot find, despite their searches as a hamsa and varaha respectively. The scene is rendered with rare iconographic completeness.",
      },
      {
        name: "Karuvur Devar Shrine",
        deity: "The Saint Karuvur Devar",
        description: "The 11th-century Shaiva poet-saint whose Tiruvisaippa enabled the original consecration of the temple lingam. His enshrinement alongside the main deity is a unique honour in Chola temple tradition.",
      },
    ],
    visitorLogistics: {
      gates: [
        { name: "Keralantakan Tiruvasal (Outer Gateway)", direction: "East", notes: "The main outer entrance through which all visitors enter. Open from sunrise; security checks at this gate." },
        { name: "Rajarajan Tiruvasal (Inner Gateway)", direction: "East", notes: "The inner three-tiered gopuram leading into the temple's main courtyard. This is where you first see the great vimana." },
      ],
      cloakRoom: "A small cloak room operates just inside the Keralantakan Tiruvasal for shoes and bags. Mobile phones and cameras are permitted inside the complex (see camera policy). A ₹10 token is sometimes charged.",
      mobilePolicy: "Mobile phones are permitted inside the complex — but switch to silent mode and avoid taking calls within the sanctum area. The temple is an active place of worship; loud conversation is frowned upon.",
      cameraPolicy: "Photography is freely permitted inside the temple complex — this is one of the few major South Indian temples that does not restrict cameras. Flash and tripods are prohibited inside the inner sanctum and inside the frescoes corridor (to protect the 11th-century pigments). The ASI sometimes posts additional restrictions on weekends and festival days.",
      wheelchairAccess: "Wheelchairs are not provided by the temple, but the inner prakaram is wheelchair-friendly — the courtyard is mostly level granite paving. The Nandi Mandapam, Brihannayaki shrine, and Subrahmanya shrine are accessible. The inner sanctum has steps and is not wheelchair-accessible; staff may assist devotees with mobility needs.",
      seniorCitizenDarshan: "There is no formal priority queue, but the temple is rarely crowded enough to require one. On Mondays, Shivaratri, Karthigai Deepam, and Sadayam day, however, queues do build up — senior citizens may request priority entry from on-duty staff at the inner gateway.",
      parking: "Free public parking is available outside the fort wall on West Main Road and Indra Gandhi Road, about 200–300 m from the outer gateway. Two-wheelers can park closer; no vehicle parking is permitted within the fort.",
      restrooms: "Public restrooms are located near the outer parking area and at the eastern corner of the inner prakaram. Facilities are basic — bring tissues and hand sanitiser.",
      drinkingWater: "Drinking water taps are available near the Nandi Mandapam and at the eastern entrance to the prakaram. The temple is in a hot, dry zone — carry your own bottle if visiting in summer (April–June).",
    },
    sevas: [
      {
        name: "Thiruvanandal Pooja",
        description: "The morning waking ritual — abhishekam to the great lingam with milk, panchamrutham, vibhuti and sandal. Performed by climbing the wooden scaffold to reach the lingam's height. Pilgrims watch from the sanctum entrance.",
        time: "Daily, 6:00 – 6:45 AM",
        fee: "Free",
        type: "daily",
      },
      {
        name: "Kalasandhi Pooja",
        description: "Mid-morning archana with Bilva (bel) leaves and recitation of the Sri Rudram.",
        time: "Daily, 8:30 AM",
        fee: "Free",
        type: "daily",
      },
      {
        name: "Uchikala Pooja",
        description: "Noon pooja with Maha Naivedyam (food offering). The sanctum is closed shortly after for the afternoon break.",
        time: "Daily, 12:00 PM",
        fee: "Free",
        type: "daily",
      },
      {
        name: "Sayaratchai Pooja",
        description: "Evening pooja with deepa aradhana and Carnatic vocal recital.",
        time: "Daily, 6:00 PM",
        fee: "Free",
        type: "daily",
      },
      {
        name: "Maha Abhishekam (Sponsored)",
        description: "Special sponsored abhishekam to the great lingam with full panchamrutham, navadhanyam, and vibhuti. Sponsors receive prasadam, a framed photograph, and the day's recitation.",
        time: "Booking required, ~7:00 AM",
        fee: "₹500",
        type: "special",
      },
      {
        name: "Rudra Abhishekam",
        description: "Eleven-fold recitation of the Sri Rudram with continuous abhishekam — a powerful ritual recommended for relief from doshas and for fulfilment of major vows.",
        time: "Booking required, ~6:00 AM",
        fee: "₹1,100",
        type: "special",
      },
      {
        name: "Pradosha Pooja",
        description: "Performed on Pradosham days (Trayodashi tithi, twice each month). Abhishekam to Shiva between sunset and the first watch of the night — one of the most charged of Shaivite rituals.",
        time: "Pradosham evenings, ~5:30 PM",
        fee: "Free",
        type: "monthly",
      },
      {
        name: "Bilva Archana",
        description: "Offering of 108 bel leaves with the chanting of Shiva's 108 names. Especially powerful on Mondays and during Karthigai.",
        time: "All day on request",
        fee: "₹150",
        type: "special",
      },
      {
        name: "Annadanam Sponsorship",
        description: "Sponsor a day of free meals for pilgrims at the temple's annadana hall (north of the prakaram). Conducted simply but warmly.",
        time: "Sponsor any date",
        fee: "₹5,000 per day (approximate)",
        type: "special",
      },
      {
        name: "Brihannayaki Special Archana",
        description: "Friday-only sankalpa archana to the consort goddess Brihannayaki in her northern prakaram shrine.",
        time: "Fridays, 9:00 AM onwards",
        fee: "₹200",
        type: "weekly",
      },
    ],
    faqs: [
      {
        question: "Is entry to Brihadeeswara free?",
        answer:
          "Yes — entry is completely free for Indian citizens. Foreign nationals are charged ₹250 for entry to the inner prakaram (the Archaeological Survey of India fee for World Heritage Sites). Pooja-related fees are separate and entirely voluntary. The temple is administered jointly by the ASI (for the monument) and the HR&CE department (for the active worship).",
      },
      {
        question: "How long should I plan for a visit?",
        answer:
          "A brisk darshan can be done in about 1 hour, but the temple rewards a longer visit. To appreciate the architecture — the great vimana from multiple angles, the Nandi monolith, the Chola frescoes (in the dimly-lit corridor), the inscriptions, the Subrahmanya shrine, and the Brihannayaki shrine — plan 2.5 to 3 hours. Photographers and architecture enthusiasts often spend half a day. Plan around the temple's 12:30–4:00 PM closure for the afternoon break.",
      },
      {
        question: "Is the legend about the shadow really true?",
        answer:
          "Partially. The popular belief — that the vimana's shadow never falls on the ground — is more poetic than literal. Modern surveys show that the shadow does fall during most of the day; what is true is that at noon, the shadow folds onto the vimana's own base rather than extending out into the courtyard. The Chola sthapatis appear to have designed the geometry so the structure does not visually 'overshadow' its surroundings at midday. Whether this was intentional or a happy by-product of perfect proportions remains debated among historians.",
      },
      {
        question: "How did the Cholas raise the 25-tonne cap stone to the top of the vimana?",
        answer:
          "Local tradition and recent archaeological survey both point to a long, gently-sloped inclined earthen ramp — approximately six kilometres long, beginning near the village of Sarapallam (literally 'scaffold-pit village'). The stone was hauled up by elephants and labourers on greased log rollers, then the entire ramp was dismantled after installation. The feat used no machinery beyond ropes, animal power, and friction — but it required precise mathematical calculation and immense organisational effort. Similar techniques were used to raise the great monoliths at Mahabalipuram and Karnataka temples.",
      },
      {
        question: "Can I take photographs inside the temple?",
        answer:
          "Yes — Brihadeeswara is one of the few major active South Indian temples that freely permits photography in the courtyards, of the vimana, the Nandi, and most sculptures. Flash and tripods are prohibited inside the inner sanctum (where you should not photograph the lingam) and inside the frescoes corridor (to protect the 11th-century pigments). Drone photography requires prior ASI permission. The temple is exceptionally photogenic at sunrise and sunset.",
      },
      {
        question: "What is the dress code?",
        answer:
          "Modest traditional clothing is preferred but not strictly enforced. Saree, salwar, churidar, or skirt below the knee for women; dhoti or pant-shirt for men. Sleeveless tops, shorts, and very short skirts are discouraged. Unlike Tirupati, there is no strict dress-code check — but you may be politely asked to cover up before entering the inner sanctum.",
      },
      {
        question: "When is the best time of day to visit?",
        answer:
          "Sunrise (around 6:00–7:30 AM) is the most magical — the granite glows golden, the morning Thiruvanandal pooja is in progress, and crowds are minimal. Avoid mid-day (the granite courtyard becomes very hot, especially March–June). Sunset (around 5:30–6:30 PM) is similarly beautiful and cooler. The temple is closed 12:30–4:00 PM. Mondays and festival days draw the largest crowds.",
      },
      {
        question: "What's the connection to UNESCO World Heritage?",
        answer:
          "Brihadeeswara was inscribed as a UNESCO World Heritage Site in 1987 (originally as 'Brihadisvara Temple, Thanjavur'). In 2004, the inscription was extended and renamed 'Great Living Chola Temples' to include two sister temples: the Brihadeeswara at Gangaikonda Cholapuram (built by Raja Raja's son Rajendra I) and the Airavateswara Temple at Darasuram (built by Rajaraja II). All three are within 100 km of each other and can be visited as a single circuit.",
      },
      {
        question: "What's special about the Nandi here?",
        answer:
          "The Nandi at Brihadeeswara is a single monolith — 6 m long, 2.6 m wide, 3.7 m tall, weighing approximately 25 tonnes. It is the second-largest monolithic Nandi in India (after Lepakshi in Andhra). Unusually, it was added in the 16th century by the Nayaks — five centuries after the main temple — yet harmonises perfectly with the original Chola scale. The mandapam housing it dates from the same period. Devotees touch its feet and whisper their prayers into its ear, in the belief that Nandi conveys them directly to Shiva.",
      },
      {
        question: "What other temples should I see while in Thanjavur?",
        answer:
          "Three sites form the 'Great Living Chola Temples' circuit: Brihadeeswara Thanjavur, Brihadeeswara at Gangaikonda Cholapuram (75 km), and Airavateswara at Darasuram (35 km). Within Thanjavur, also visit the Tanjore Maratha Palace (the Sangeetha Mahal, the Royal Museum), the Saraswathi Mahal Library (one of the oldest continuously-used libraries in Asia), and the Sarangapani temple at Kumbakonam (40 km). Eating: try the authentic Thanjavur-style sambar at Sri Krishna Bhavan, and the famous filter coffee.",
      },
    ],
  },
  "ramanathaswamy-rameswaram": {
    slug: "ramanathaswamy-rameswaram",
    timings: { morning: "5:00 AM – 1:00 PM", evening: "3:00 PM – 9:00 PM", note: "Spatika (crystal) Lingam darshan is at ~5:00 AM (separate ticket). The 22 theertham baths are done in the morning — start early, ideally before 7:00 AM." },
    entryFee: "Free darshan. Sparisa (touch) darshan and Spatika Lingam darshan are ticketed (₹50–100). Theertham bath: ₹25 ticket for all 22 wells.",
    dressCode: "Dhoti mandatory for men inside the sanctum (no shirt during abhishekam darshan). Saree/salwar for women. Carry a change of clothes for the theertham bath.",
    bestTime: "October – April (avoid the May–June heat and the October–December monsoon spells)",
    travelInfo: {
      byAir: "Madurai Airport (170 km) is the nearest. Tuticorin Airport (~140 km) is an alternative; both have connections to Chennai and Bengaluru.",
      byTrain: "Rameswaram Railway Station (1.5 km from the temple) sits on Pamban Island. Direct trains from Chennai, Madurai, Coimbatore, Tirupati and Kanyakumari. The line crosses the historic Pamban rail bridge.",
      byRoad: "Reached via the Pamban road bridge over the Palk Strait — the first sea bridge in India. Buses from Madurai (170 km, ~4 hrs), Chennai (570 km), Tiruchendur and Kanyakumari. The new Pamban vertical-lift sea bridge now runs alongside the old one.",
    },
    highlights: [
      "One of the 12 sacred Jyotirlingas and one of the four Char Dham — the southern dham of India",
      "The longest temple corridor in India — the third prakaram runs ~1,220 metres with over 1,200 ornately carved pillars",
      "22 sacred theerthams (holy wells) inside the temple — bathing in all 22 is the heart of the Rameswaram pilgrimage",
      "Two lingams in one sanctum — the Ramalingam moulded by Sita and the Vishwalingam brought by Hanuman from Kailash",
      "The climax of the Kashi–Rameswaram Sethu Yatra — pilgrims bring Ganga water here and carry Rameswaram sand back to the Ganges",
      "Set on Pamban Island, with Dhanushkodi and the legendary Ram Setu (Adam's Bridge) at its southern tip",
    ],
    history: "Rameswaram is among the holiest sites in Hinduism — sacred to both Shaivites and Vaishnavites, which is rare. According to the Ramayana, Lord Rama worshipped Shiva here to absolve the sin of Brahmahatya (the killing of Ravana, a learned Brahmin) on his return from Lanka. The temple is one of the 275 Paadal Petra Sthalams glorified in the Tevaram hymns of the Nayanmar saints. While the site's sanctity is ancient, the present stone temple was built and expanded over four centuries (12th–17th c.) chiefly by the Setupati kings of Ramanathapuram, with major additions by the Pandyas, the Jaffna kings of Sri Lanka, and later mercantile patrons. The towering east Rajagopuram was completed only in the 20th century.",
    architecture: "Ramanathaswamy is the supreme example of Dravidian corridor architecture. Its three concentric prakarams (corridors) culminate in the third — the longest temple corridor in India, around 1,220 metres in total, lined with more than 1,200 granite pillars about 9 metres tall, each carved with bracket figures and rearing yalis. The pillars create a famous receding optical perspective. The temple has a 53-metre east Rajagopuram and a lower western gopuram. Within lie the twin sanctums of Ramanathaswamy (the Ramalingam) and the Vishwalingam, the Parvathavardhini Amman shrine, the Sethu Madhava (Vishnu) shrine, and the 22 theertham wells distributed across the prakarams.",
    festivals: [
      { name: "Maha Shivaratri", month: "February–March", description: "The grandest festival — a 10-day celebration with four-prahara night-long abhishekams to the Jyotirlinga, processions of the utsava deities, and thousands taking the Agni Theertham sea bath at dawn.", slug: "maha-shivaratri" },
      { name: "Thirukalyanam (Vasanthotsavam)", month: "May–June", description: "The celestial wedding of Ramanathaswamy and Parvathavardhini, celebrated over ten days with the deities in splendid procession through the long corridors." },
      { name: "Ramalinga Pratishtai", month: "May–June (Vaikasi)", description: "Commemorates the original installation of the Ramalingam by Lord Rama — special abhishekam and recitation of the Ramayana." },
      { name: "Aadi Amavasai & Thai Amavasai", month: "July–Aug / Jan–Feb", description: "New-moon days for ancestor worship (tarpanam) when thousands bathe at Agni Theertham and perform rites for departed forebears." },
      { name: "Aarudhra Darshan (Thiruvadhirai)", month: "December–January", description: "Sacred to Shiva as Nataraja — special abhishekam and the procession of the Nataraja bronze." },
    ],
    poojas: [
      { name: "Spatika Lingam Darshan", time: "~5:00 AM", fee: "₹100 (ticketed)" },
      { name: "22 Theertham Snanam", time: "Morning (5:00–10:00 AM)", fee: "₹25 (single ticket, all wells)" },
      { name: "Sparisa (Touch) Darshan", time: "5:00 AM / 5:00 PM", fee: "₹50" },
      { name: "Palliarai (Night Pooja)", time: "8:30 PM", fee: "Free" },
    ],
    nearbyTemples: ["madurai-meenakshi", "tiruchendur-murugan"],
    mythology: {
      legend:
        "After slaying Ravana and rescuing Sita, Lord Rama stood burdened by Brahmahatya dosha — the gravest of sins, for Ravana was a Brahmin and a great devotee of Shiva. On the advice of the sages, Rama resolved to worship Shiva on the shore where his army had crossed to Lanka. He sent Hanuman to Mount Kailash to fetch a lingam, but the auspicious muhurta for installation drew near and Hanuman had not returned. So Sita moulded a lingam from the beach sand with her own hands, and Rama consecrated it — this is the Ramalingam, the principal deity Ramanathaswamy ('the Lord whose master is Rama'). When Hanuman arrived with the lingam from Kailash (the Vishwalingam) and was grieved to find another already installed, Rama consoled him by decreeing that the Vishwalingam — also called Kasilingam — would always be worshipped first, before the Ramalingam. That order of worship is honoured in the temple to this very day.",
      tirukalyanam:
        "The celestial marriage of Lord Ramanathaswamy and Goddess Parvathavardhini is re-enacted each year at Vasanthotsavam (May–June). The processional bronzes of the divine couple are borne in splendour through the temple's vast corridors, recalling the eternal union of Shiva and Shakti that the lingam at Rameswaram embodies.",
      additionalStories: [
        {
          title: "Hanuman, the Well of Atonement, and the Order of Worship",
          content:
            "Hanuman's lingam from Kailash could not be moved once Sita's sand lingam was installed — by one account he tried to uproot the Ramalingam with his tail and failed, the mark of his tail still shown on it. Rama's decree that the Vishwalingam be worshipped first turned a moment of disappointment into an everlasting honour for Hanuman. Both lingams stand together in the sanctum, and the temple is thus sacred to the bhakti of the greatest devotee as much as to the penance of the avatar himself.",
        },
        {
          title: "The Sethu — the Bridge of Floating Stones",
          content:
            "From the southern tip of the island at Dhanushkodi, Rama's vanara army built the Sethu (Ram Setu / Adam's Bridge) of floating stones to cross to Lanka, the stones bearing Rama's name. Bathing at the Sethu and at Dhanushkodi — where the Bay of Bengal meets the Indian Ocean — is part of the Rameswaram pilgrimage. It is said that on his return Rama broke the bridge with the end of his bow (dhanush-kodi, 'the bow's end') so it could never again be crossed.",
        },
        {
          title: "Kashi and Rameswaram — the Two Poles of Pilgrimage",
          content:
            "A pilgrimage to Kashi (Varanasi) is held to be incomplete without Rameswaram, and vice-versa. The classic Sethu Yatra binds them: the pilgrim carries Ganga water from Kashi to bathe the Ramalingam at Rameswaram, and carries sand from Rameswaram to immerse in the Ganga. The two shrines — the northern and the southern — are seen as the spiritual poles of the subcontinent, linking the Himalayan Ganga to the southern sea.",
        },
        {
          title: "The Twenty-Two Theerthams",
          content:
            "The Skanda Purana and local tradition hold that Rama created the sacred wells by shooting arrows into the earth to draw out the waters of the holy rivers, so his pilgrims would not have to travel to each one. Each of the 22 theerthams is identified with a sacred water or virtue — among them Mahalakshmi, Savitri, Gayatri, Saraswathi, Surya, Chandra, Ganga, Yamuna and the Brahmahatya Vimochana ('release from the sin of Brahmahatya') theertham. Bathing in all 22, well by well, washes away accumulated sins and is the ritual core of the Rameswaram pilgrimage.",
        },
      ],
    },
    architectureFeatures: [
      {
        name: "Third Prakaram (The Great Corridor)",
        nameTa: "மூன்றாம் பிரகாரம்",
        type: "mandapam",
        description: "The temple's crowning glory and the longest corridor in any Hindu temple — roughly 1,220 metres in total length around the complex, lined with over 1,200 granite pillars rising about 9 metres. The pillars stand on raised platforms with elaborate bracket figures and rearing yalis; the long colonnade produces a celebrated receding optical perspective. Built largely under the Setupati kings in the 17th–18th centuries.",
        detail: "~1,220 m · 1,200+ pillars · ~9 m high",
      },
      {
        name: "Garbhagriha — Ramalingam & Vishwalingam",
        type: "sanctum",
        description: "The inner sanctum houses two lingams: the Ramalingam (Ramanathaswamy), moulded from sand by Sita and the principal deity; and the Vishwalingam (Kasilingam) brought by Hanuman from Kailash, which by Rama's own decree is worshipped first. Abhishekam is performed with Ganga water brought by pilgrims, and the Sparisa darshan allows devotees to touch the lingam at appointed hours.",
        detail: "Twin lingams · Vishwalingam worshipped first",
      },
      {
        name: "East Rajagopuram",
        type: "gopuram",
        description: "The towering eastern gateway rises about 53 metres (126 ft) in nine tiers, the tallest of the temple's towers. Though the temple is centuries old, this great gopuram was completed only in the 20th century, its stucco figures vividly painted. It is the first sight of the temple for pilgrims arriving from the railway station and the sea.",
        detail: "~53 m · 9 tiers",
      },
      {
        name: "West Gopuram",
        type: "gopuram",
        description: "The western gateway, lower than the east tower, opens toward the Setu Madhava shrine side of the complex. Together the two main gopurams and the inner gopurams frame the long axis along which the corridors run.",
      },
      {
        name: "Nandi Mandapam",
        type: "mandapam",
        description: "A large monolithic Nandi about 5.5 metres long and 3.6 metres tall faces the sanctum from the eastern approach, set in its own pillared hall. As at every Shiva temple, devotees offer prayers to Nandi before approaching the lingam.",
        detail: "Nandi ~5.5 m long",
      },
      {
        name: "The 22 Theertham Wells",
        type: "tank",
        description: "Distributed across the prakarams are 22 sacred wells (theerthams), each named for a holy water or virtue. Temple attendants draw water in buckets and pour it over pilgrims well by well; by tradition the bath begins at Agni Theertham — the sea itself, a short walk to the east — and proceeds through all 22 within the temple. The waters taste noticeably different from well to well despite their proximity.",
        detail: "22 wells + Agni Theertham (the sea)",
      },
      {
        name: "Sethu Madhava (Sweta Madhava) Shrine",
        type: "other",
        description: "A shrine to Vishnu within the Shaivite complex — a reminder that Rameswaram is sacred to both great traditions. Its presence reflects the temple's unique standing as a meeting point of Shaiva and Vaishnava devotion and of the Char Dham circuit that Adi Shankara is traditionally said to have established.",
      },
      {
        name: "Sayanagriha & Painted Ceilings",
        type: "other",
        description: "The corridors and mandapams retain stretches of colourful painted ceilings and stucco depicting episodes from the Ramayana and the temple's own legends. The Setupati patrons are commemorated in sculpture along the corridors, including statues of the kings and their consorts who funded the great prakaram.",
      },
    ],
    subShrines: [
      {
        name: "Parvathavardhini Amman",
        deity: "Goddess Parvati, consort of Ramanathaswamy",
        description: "The principal goddess of the temple, in her own shrine within the complex. She is the divine mother to whom devotees pray after darshan of the lingam; her annual Thirukalyanam with Ramanathaswamy is among the great festivals here.",
      },
      {
        name: "Vishwalingam (Kasilingam)",
        deity: "Shiva as the lingam from Kailash",
        description: "The lingam Hanuman brought from Mount Kailash, installed beside the Ramalingam. By Lord Rama's own decree it receives worship before the main deity — a standing honour to Hanuman's devotion.",
      },
      {
        name: "Vishalakshi & Sethu Madhava",
        deity: "Goddess Vishalakshi and Lord Vishnu",
        description: "Shrines that mark Rameswaram's dual Shaiva–Vaishnava sanctity. Sethu Madhava (a form of Vishnu) is venerated alongside the Shiva lingam, and Vishalakshi recalls the Kashi connection, where Vishalakshi is the presiding goddess.",
      },
      {
        name: "Hanuman (Anjaneya)",
        deity: "Lord Hanuman",
        description: "Hanuman is specially honoured at Rameswaram for fetching the Vishwalingam from Kailash. His shrine draws devotees who revere him as the supreme servant of Rama and Shiva alike.",
      },
      {
        name: "Mahaganapathy",
        deity: "Lord Ganesha",
        description: "The remover of obstacles, worshipped first by pilgrims before they begin the theertham bath and the long corridor circumambulation.",
      },
      {
        name: "Subramanya & Nataraja",
        deity: "Lord Murugan and Shiva as the Cosmic Dancer",
        description: "Subordinate shrines along the prakarams. The Nataraja bronze is taken in procession during Aarudhra Darshan, when Shiva's cosmic dance is specially celebrated.",
      },
    ],
    visitorLogistics: {
      gates: [
        { name: "East Rajagopuram (Main Entrance)", direction: "East", notes: "The principal entrance under the 53 m tower, facing the sea and the railway station side. Security and footwear deposit here; this is where most pilgrims begin." },
        { name: "West Gopuram", direction: "West", notes: "The secondary entrance toward the Setu Madhava side of the complex." },
      ],
      cloakRoom: "Footwear must be left outside — stalls and a temple deposit counter operate near the east gopuram for a small fee. Carry a dry change of clothes and a small towel for after the theertham bath; many lodges near the temple let pilgrims change and store bags.",
      mobilePolicy: "Mobile phones and cameras are NOT permitted inside the temple — this is strictly enforced, unlike at some other temples. Deposit them at the lockers/stalls outside the gopuram before entering. Keep your theertham and darshan tickets handy.",
      cameraPolicy: "Photography is prohibited inside the temple complex, including the corridors and sanctums. Cameras must be left at the deposit counters outside. You may photograph the gopurams and the temple exterior, and Agni Theertham (the sea-shore) freely.",
      wheelchairAccess: "The long corridors are largely level stone and broadly navigable, but the theertham bath involves wet, slippery floors and steps at the wells, which are difficult for wheelchair users. Assistance is informal — ask temple staff or hire a local helper. Senior and differently-abled pilgrims often do a shortened darshan without all 22 baths.",
      seniorCitizenDarshan: "No formal priority queue on ordinary days, when crowds are manageable. During Maha Shivaratri, Aadi/Thai Amavasai and the Tamil festival season the queues for Sparisa darshan and the theertham bath are long — arrive before 6:00 AM. Sparisa (touch) and Spatika Lingam darshan are ticketed and have their own shorter queues.",
      parking: "Vehicle parking is available near the temple and along the approach roads; the temple is about 1.5 km from Rameswaram railway station and walkable. Autos and cycle-rickshaws ply between the station, lodges and the temple gopuram.",
      restrooms: "Basic public restrooms and changing facilities are available near the temple and at the lodges around it. Many pilgrims use their hotel to change after the theertham bath. Carry your own tissue and sanitiser.",
      drinkingWater: "Drinking water is available within the complex and from stalls outside, but Rameswaram is hot and humid — carry your own bottle, especially if doing the full 22-theertham bath and the long corridor walk. Note: the local groundwater is brackish; buy sealed water for drinking.",
    },
    sevas: [
      {
        name: "Spatika Lingam Darshan",
        description: "Darshan of the sacred crystal (spatika) lingam in the early morning before the main poojas — considered especially auspicious. Separate ticket; very limited time window.",
        time: "Daily, ~5:00 AM",
        fee: "₹100",
        type: "daily",
      },
      {
        name: "22 Theertham Snanam",
        description: "The signature Rameswaram ritual — a guided bath at all 22 sacred wells within the temple, water poured over you well by well by the temple attendants, beginning at Agni Theertham (the sea). The ritual core of the pilgrimage; allow 1–1.5 hours.",
        time: "Morning, 5:00–10:00 AM",
        fee: "₹25 (single ticket, all 22 wells)",
        type: "daily",
      },
      {
        name: "Sparisa (Touch) Darshan",
        description: "A ticketed darshan that permits devotees to approach and touch the lingam during the abhishekam window — a rare privilege at a Jyotirlinga.",
        time: "Twice daily, ~5:00 AM and ~5:00 PM",
        fee: "₹50",
        type: "daily",
      },
      {
        name: "Ganga Jala Abhishekam",
        description: "Abhishekam of the Ramalingam with Ganga water that pilgrims carry from Kashi (Varanasi) — the culminating act of the Sethu Yatra. Sangam/temple priests assist; book at the temple office.",
        time: "Booking required (morning abhishekam)",
        fee: "Sankalpa fee varies",
        type: "special",
      },
      {
        name: "Sahasranama Archana",
        description: "Recitation of the 1,000 names of Shiva (Shiva Sahasranama) in the devotee's name and star, with offering of bilva leaves.",
        time: "All day on request",
        fee: "₹250",
        type: "special",
      },
      {
        name: "Pradosha Abhishekam",
        description: "Abhishekam performed on Pradosham evenings (Trayodashi tithi, twice a month) between sunset and dusk — one of the most auspicious of Shaivite observances.",
        time: "Pradosham evenings, ~5:30 PM",
        fee: "Free / sponsored",
        type: "monthly",
      },
      {
        name: "Tarpanam / Pitru Karya at Agni Theertham",
        description: "Ancestral rites (tarpanam, shraddha) performed on the Agni Theertham shore, especially on Amavasai days — Rameswaram is among the foremost places for rites for departed forebears. Arranged through the shore priests.",
        time: "Mornings, especially Amavasai",
        fee: "Priest dakshina varies",
        type: "special",
      },
      {
        name: "Palliarai Pooja",
        description: "The night 'bed-chamber' pooja, the final ritual of the day, when the utsava deities are ceremonially put to rest. Devotees may attend the evening service.",
        time: "Daily, ~8:30 PM",
        fee: "Free",
        type: "daily",
      },
    ],
    faqs: [
      {
        question: "What is the right order — sea bath, theerthams, then darshan?",
        answer:
          "The traditional sequence is: first bathe in the sea at Agni Theertham (the Bay of Bengal, a short walk east of the east gopuram), then enter the temple and take the 22 theertham bath well by well (a single ₹25 ticket covers all of them, and attendants pour the water over you), and only then proceed for darshan of the Ramalingam — ideally for Sparisa (touch) darshan or after the morning abhishekam. Spatika Lingam darshan, if you want it, is earliest at around 5:00 AM. Carry a dry change of clothes.",
      },
      {
        question: "What are the 22 theerthams and is bathing in all of them necessary?",
        answer:
          "The 22 theerthams are sacred wells inside the temple, each named for a holy river or virtue (Mahalakshmi, Savitri, Gayatri, Saraswathi, Surya, Chandra, Ganga, Yamuna, the Brahmahatya Vimochana theertham, and others). Tradition holds that Rama drew these waters with his arrows so pilgrims need not travel to each holy river. Bathing in all 22, in sequence, is the ritual heart of the Rameswaram pilgrimage and is believed to wash away accumulated sins. It is not compulsory, but most pilgrims do the full round; it takes about an hour to ninety minutes.",
      },
      {
        question: "Why are there two lingams, and which is worshipped first?",
        answer:
          "The principal lingam, the Ramalingam, was moulded from beach sand by Sita so Rama could complete his worship at the auspicious hour. The second, the Vishwalingam (or Kasilingam), was brought by Hanuman from Mount Kailash. When Hanuman arrived to find the sand lingam already installed, Rama consoled him by decreeing that the Vishwalingam would always be worshipped before the Ramalingam — and that order is followed to this day.",
      },
      {
        question: "Can I take my phone or camera inside?",
        answer:
          "No. Unlike some temples, Ramanathaswamy strictly prohibits mobile phones and cameras inside the complex, including the corridors and sanctums. Deposit them at the lockers and stalls outside the east gopuram before entering. You can freely photograph the gopurams, the temple exterior and the Agni Theertham seashore.",
      },
      {
        question: "What is the dress code?",
        answer:
          "Men must wear a dhoti (veshti) inside the sanctum and are bare-chested during the abhishekam/Sparisa darshan, as at most traditional Shiva temples; women wear saree or salwar. Since you will be doing the theertham bath, wear or carry clothes you do not mind getting soaked, plus a dry change for afterwards. Wet, slippery floors mean it is best to go barefoot carefully.",
      },
      {
        question: "What is the Char Dham / Sethu Yatra significance of Rameswaram?",
        answer:
          "Rameswaram is the southern dham of the Char Dham (Badrinath in the north, Dwarka in the west, Puri in the east, Rameswaram in the south), traditionally associated with Adi Shankara's establishment of the four cardinal pilgrimage seats. In the classic Sethu Yatra, pilgrims carry Ganga water from Kashi to bathe the Ramalingam here, and carry Rameswaram sand back to immerse in the Ganga — binding India's northern and southern poles of pilgrimage into one journey.",
      },
      {
        question: "Should I also visit Dhanushkodi and Gandhamadhana Parvatham?",
        answer:
          "Yes — they complete the Rameswaram pilgrimage. Dhanushkodi, at the island's southern tip (~18 km away), is where the Ram Setu bridge to Lanka began and where the Bay of Bengal meets the Indian Ocean; the ghost town and the new viewpoint road are worth the trip. Gandhamadhana Parvatham (~3 km), the highest point on the island, has a shrine enshrining Rama's footprint (Ramar Padam) and gives a panoramic view of the temple and the sea. Many pilgrims also visit the Five-faced Hanuman temple and the floating-stone relic nearby.",
      },
      {
        question: "How long should I plan for, and when is the best time to visit?",
        answer:
          "Allow at least half a day for the temple alone — the 22-theertham bath plus darshan and a walk through the great corridors takes 3–4 hours, longer on festival days. A full Rameswaram trip including Dhanushkodi, Gandhamadhana and the Pamban bridge is best done over two days. The best season is October to April; avoid the fierce heat of May–June and watch for the northeast monsoon spells (Oct–Dec). Early morning (before 7:00 AM) is the calmest and coolest time for the theertham bath.",
      },
    ],
  },
  "kapaleeswarar-mylapore": {
    slug: "kapaleeswarar-mylapore",
    timings: { morning: "5:00 AM – 12:00 PM", evening: "4:00 PM – 9:30 PM" },
    entryFee: "Free",
    dressCode: "Traditional attire preferred. No shorts.",
    bestTime: "Year-round. March–April for Arubathumoovar festival.",
    travelInfo: {
      byAir: "Chennai International Airport (15 km).",
      byTrain: "Mylapore is well connected by Chennai MRTS (Light Rail) — Mylapore station. Also accessible by Chennai Metro.",
      byRoad: "Located in the heart of Mylapore, Chennai. Auto-rickshaws and buses readily available.",
    },
    highlights: [
      "The anchor temple of Mylapore — Chennai's cultural and spiritual heart",
      "The magnificent 37-meter rajagopuram completed in 1906",
      "The 63 Nayanmars (Tamil Shaivite saints) are depicted in life-size bronze statues",
      "The sacred tank (Kapali Theertham) within the complex",
      "Rich Carnatic music and Bharatanatyam heritage associated with this temple",
    ],
    history: "The original Kapaleeswarar Temple is said to have been located on the seashore but was destroyed by Portuguese colonists in the 16th century. The current temple was built around 1652 CE in the present Mylapore location. It is dedicated to Lord Kapaleeswarar (Shiva) and Goddess Karpagambal (Parvati). The temple is administered by the Hindu Religious and Charitable Endowments (HR&CE) Department of Tamil Nadu.",
    architecture: "The temple follows the Dravidian style with a colorful 37-meter gopuram as its most striking feature. The gopuram is covered in intricate plaster sculptures depicting various deities and scenes from mythology. The temple complex includes the main sanctum, Karpagambal shrine, the sacred tank, and corridors lined with stone pillars.",
    festivals: [
      { name: "Arubathumoovar Festival", month: "March–April", description: "63 Nayanmars (bronze statues) are taken in a grand procession around the Mylapore streets. Attended by hundreds of thousands." },
      { name: "Panguni Uthiram", month: "March–April", description: "Celestial wedding of Shiva and Parvati celebrated with great pomp." },
      { name: "Karthigai Deepam", month: "November–December", description: "Festival of lights celebrated with lamps and special puja." },
    ],
    poojas: [
      { name: "Thiruvanandal", time: "5:30 AM", fee: "Free" },
      { name: "Abhishekam", time: "6:00 AM", fee: "₹250" },
      { name: "Ardhajama Puja", time: "9:00 PM", fee: "Free" },
    ],
    nearbyTemples: ["arunachaleswarar-thiruvannamalai", "ekambareswarar-kanchipuram"],
  },
  "arunachaleswarar-thiruvannamalai": {
    slug: "arunachaleswarar-thiruvannamalai",
    timings: { morning: "5:30 AM – 12:30 PM", evening: "3:30 PM – 10:00 PM", note: "Girivalam (circumambulation of Arunachala hill, 14 km) is done on full moon nights." },
    entryFee: "Free",
    dressCode: "Traditional attire. No shorts or sleeveless.",
    bestTime: "November–December for Karthigai Deepam. Full moon for Girivalam.",
    travelInfo: {
      byAir: "Chennai Airport (200 km) or Bangalore Airport (200 km).",
      byTrain: "Tiruvannamalai Railway Station (2 km). Trains from Chennai (3 hrs), Villupuram (40 km).",
      byRoad: "200 km from Chennai. Buses from Chennai, Villupuram, Vellore, Bangalore. Well-connected by NH 79.",
    },
    highlights: [
      "One of the Pancha Bhuta Stalas — represents the Fire (Agni) element",
      "The sacred Arunachala hill itself is considered a manifestation of Lord Shiva",
      "Karthigai Deepam — a massive beacon lit atop the hill visible for 30 km around",
      "Girivalam (pradakshina) — 14 km circumambulation of the Arunachala hill on full moon days",
      "Sri Ramana Maharshi's ashram is located at the foot of Arunachala",
    ],
    history: "The Arunachaleswarar Temple is one of the largest temple complexes in India, spread over 25 acres. The Arunachala hill (also called Annamalai) is believed to be a manifestation of Shiva as a column of fire. The temple's history spans over 2,000 years with references in ancient Tamil Sangam literature. Significant construction was done during the Vijayanagara and Hoysala periods.",
    architecture: "The temple has four magnificent gopurams facing each cardinal direction, with the eastern tower (Raja Gopuram) being one of the tallest in Tamil Nadu at 66 meters. The complex contains multiple mandapams and shrines. The innermost sanctum houses the Agni Lingam (fire lingam).",
    festivals: [
      { name: "Karthigai Deepam", month: "November–December", description: "A massive beacon (deepam) is lit atop the Arunachala hill — visible for miles. Millions of devotees gather." },
      { name: "Girivalam", month: "Every full moon", description: "Devotees circumambulate the 14 km path around the Arunachala hill barefoot, especially on full moon days." },
      { name: "Brahmotsavam", month: "December–January", description: "10-day festival with chariot procession and special rituals." },
    ],
    poojas: [
      { name: "Thiruvanandal", time: "5:30 AM", fee: "Free" },
      { name: "Agni Abhishekam", time: "6:00 AM / 6:00 PM", fee: "₹500" },
      { name: "Pradosham Puja", time: "Bi-monthly (Trayodasi)", fee: "Free" },
    ],
    nearbyTemples: ["vaitheeswaran-kovil", "nataraja-chidambaram"],
  },
  "sabarimala-ayyappa": {
    slug: "sabarimala-ayyappa",
    timings: { morning: "Season only: ~4:00 AM Nirmalya Darshanam", evening: "Closes ~11:00 PM after Harivarasanam", note: "Sabarimala is NOT open year-round. It opens only during the Mandala–Makaravilakku season (mid-Nov to mid-Jan), for Vishu (April), and on the first five days of each Malayalam month. Confirm the exact days and book the virtual queue before travelling." },
    entryFee: "Free darshan. Virtual-queue (spot) booking via the Travancore Devaswom Board is required during season. Only pilgrims carrying the irumudi kettu may climb the 18 holy steps to the sanctum.",
    dressCode: "Black, blue or saffron dhoti; no stitched or luxury clothing; barefoot throughout. Pilgrims wear the tulsi/rudraksha mala for the 41-day vratham and are addressed only as 'Swami' or 'Ayyappan'.",
    bestTime: "Mandala–Makaravilakku season (mid-November to mid-January). Makaravilakku (14 January) is the spiritual climax but by far the most crowded; early Mandala days (late Nov) are calmer.",
    travelInfo: {
      byAir: "Cochin (Kochi) International Airport (~150 km) and Trivandrum International Airport (~120 km) are the nearest. Madurai is an alternative for pilgrims from Tamil Nadu.",
      byTrain: "Chengannur (~90 km) is the nearest major railhead; Kottayam and Tiruvalla are also used. From the station take a bus/taxi to the base camps at Nilackal and Pamba.",
      byRoad: "During season, private vehicles park at the Nilackal base camp; KSRTC shuttle buses ferry pilgrims the last ~20 km to Pamba. From Pamba it is a ~5 km uphill forest trek to the Sannidhanam. The traditional penance route is a 40+ km forest trek from Erumeli via Azhutha, Karimala and Peruvazhi.",
    },
    highlights: [
      "Shrine of Lord Ayyappa (Dharma Sastha) — Hariharaputra, born of Shiva and Vishnu (as Mohini)",
      "Among the largest annual pilgrimages on earth — over 50 million devotees in the two-month season",
      "The 41-day vratham — the most demanding fast-and-discipline observance in the Hindu calendar; all pilgrims are equal and called 'Swami'",
      "Pathinettam Padi — 18 gold-plated holy steps, climbable only while carrying the irumudi kettu",
      "Makaravilakku & Makara Jyothi (14 January) — the sacred light at Ponnambalamedu and the Thiruvabharanam procession from Pandalam",
      "A forest hilltop shrine inside the Periyar Tiger Reserve — reachable only on foot",
      "'Tatvamasi' ('That Thou Art') — the Upanishadic Mahavakya inscribed at the shrine; radical inclusivity across caste and religion",
    ],
    history: "Sabarimala is the forest shrine of Lord Ayyappa, also called Dharma Sastha — a deity venerated as Hariharaputra, the son of Hari (Vishnu in his Mohini form) and Hara (Shiva). The hill is named for Sabari, the elderly devotee of the Ramayana who awaited Rama in these forests. The shrine's roots are ancient, woven through the history of the Pandalam royal family, who by tradition raised Ayyappa as the prince Manikandan and to whom the Thiruvabharanam (sacred ornaments) still belong. After a fire in 1950 the sanctum was rebuilt and the panchaloha idol reconsecrated. The temple is administered by the Travancore Devaswom Board. What distinguishes Sabarimala above all is its ethos: pilgrims of every caste, class and religion observe the same vratham, wear the same austere black, and are addressed alike as 'Swami' — a living embodiment of the Mahavakya 'Tatvamasi'.",
    architecture: "Unlike the grand Dravidian temples, Sabarimala is a deliberately austere forest shrine. Its heart is the Sreekovil (sanctum) atop the Pathinettam Padi — the eighteen sacred, now gold-plated, steps. Within the copper-roofed sanctum the idol of Ayyappa is seated in a yogic posture, the right hand in chin-mudra, a band (yogapatta) around the drawn-up knee. The Sannidhanam plateau around the sanctum holds the flagstaff (kodimaram), the Malikappuram shrine of the goddess, and shrines to Ayyappa's companions Kaduthaswami and Vavar. The true 'architecture' of Sabarimala, devotees say, is the pilgrimage itself — the river bath at Pamba, the climb up Neelimala, and the ascent of the eighteen steps.",
    festivals: [
      { name: "Mandala Pooja", month: "November–December", description: "Concludes the 41-day Mandala season (which opens on the first of Vrischikam, ~17 Nov). The deity is adorned and a grand deeparadhana performed; the vast majority of pilgrims time their trek to this period.", slug: "sabarimala-season" },
      { name: "Makaravilakku", month: "14 January (Makara Sankranti)", description: "The spiritual climax — the Makara Jyothi star is sighted and the sacred Makaravilakku light appears thrice at Ponnambalamedu, while the Thiruvabharanam ornaments arrive in procession from Pandalam to adorn the idol.", slug: "sabarimala-season" },
      { name: "Petta Thullal (Erumeli)", month: "During season", description: "An ecstatic ritual dance performed by pilgrims at Erumeli — re-enacting the warriors' hunt for the demoness Mahishi. Pilgrims smear themselves with colour and dance to 'Swamiye Saranam Ayyappa' before continuing the trek." },
      { name: "Vishu", month: "April", description: "The Malayalam New Year, one of the few occasions outside the main season when the temple opens, with the Vishukkani arrangement before the deity." },
    ],
    poojas: [
      { name: "Neyyabhishekam", time: "Early morning (season)", fee: "Ghee from the pilgrim's own irumudi coconut" },
      { name: "Udayasthamana Pooja", time: "Dawn to dusk", fee: "Sponsored (book via TDB)" },
      { name: "Padi Pooja (worship of the 18 steps)", time: "Night, on select days", fee: "Sponsored (long waiting list)" },
      { name: "Harivarasanam", time: "~11:00 PM (closing)", fee: "Free — the lullaby sung as the sanctum doors close" },
    ],
    nearbyTemples: ["padmanabhaswamy-trivandrum", "attukal-bhagavathy"],
    mythology: {
      legend:
        "When the demoness Mahishi — sister of the slain Mahishasura — won a boon that she could be killed only by a child born of both Shiva and Vishnu, the devas turned to the two great gods. Vishnu took the enchanting female form of Mohini, and from his union with Shiva was born a radiant boy bearing a golden bell (mani) around his neck. The infant was left on the banks of the river Pampa, where the childless King Rajasekara of Pandalam found and adopted him, naming him Manikandan. The prince grew into a being of miraculous power and wisdom. When a court intrigue sent him into the forest to fetch tigress's milk for the queen, he returned riding a tigress, and his divinity could no longer be hidden. Manikandan asked the king to build a temple where his arrow fell — at Sabarimala — then shot his arrow, ascended the hill, and merged into the idol of Dharma Sastha, seated forever in yogic stillness facing the eighteen steps.",
      tirukalyanam:
        "Ayyappa is a Naishtika Brahmachari — an eternal celibate ascetic — so Sabarimala has no celestial-wedding festival. Instead the lore tells of Malikappurathamma, the goddess in the adjacent shrine, who longs to marry Ayyappa. He promised he would wed her only in the year no Kanni-Swami (a first-time pilgrim) comes to him. Since first-timers arrive every single year, the marriage is forever deferred — and her unfulfilled waiting is honoured in her own sannidhi beside his.",
      additionalStories: [
        {
          title: "The 41-Day Vratham and the Irumudi",
          content:
            "A pilgrim becomes an Ayyappan by taking the mala — a string of tulsi or rudraksha beads — and observing 41 days of vratham: celibacy, vegetarian or sattvic food, no alcohol, sleeping on the floor, walking barefoot, controlling anger and speech, and treating every other pilgrim as Ayyappa himself. The penance dissolves rank and ego; a labourer and a millionaire walk identically clad in black. At its end the pilgrim packs the irumudi kettu — a two-pouch cloth bundle carried on the head. The front holds offerings, above all the mudra-coconut filled with ghee for the Neyyabhishekam; the rear holds personal provisions for the trek. No one may climb the eighteen steps without an irumudi on the head.",
        },
        {
          title: "Vavar — the Companion of Ayyappa",
          content:
            "Among Ayyappa's closest companions in the war against Mahishi's forces was Vavar, by tradition a Muslim warrior and saint. At Erumeli, where the trek traditionally begins, pilgrims worship at both the Vavar mosque and the Sastha temple before setting out, and a shrine to Vavar (Vavaru Swami) stands beside Ayyappa's own at the Sannidhanam. This shared veneration makes Sabarimala one of India's most powerful living symbols of Hindu–Muslim harmony.",
        },
        {
          title: "The Eighteen Steps (Pathinettam Padi)",
          content:
            "The eighteen gold-clad steps are themselves divine and are worshipped. The most common interpretation reads them as the obstacles the soul must transcend: the first five as the five senses (indriyas), the next eight as the eight ragas or passions (kama, krodha, lobha, moha, mada, matsarya, asuya, dambha), the next three as the three gunas (sattva, rajas, tamas), and the final two as vidya and avidya — knowledge and ignorance. Having shed all eighteen, the pilgrim stands before the deity as pure consciousness, realising 'Tatvamasi' — That Thou Art.",
        },
        {
          title: "Makara Jyothi and the Light at Ponnambalamedu",
          content:
            "On Makara Sankranti (14 January), as dusk falls, devotees at the Sannidhanam turn toward the distant hill of Ponnambalamedu to behold the Makaravilakku — a sacred light that appears three times — while overhead the Makara Jyothi star rises. The moment coincides with the adorning of the idol in the Thiruvabharanam, the golden ornaments carried on foot in procession from the Pandalam palace. For the assembled millions chanting 'Swamiye Saranam Ayyappa', it is the supreme darshan of the season.",
        },
      ],
    },
    architectureFeatures: [
      {
        name: "Pathinettam Padi (The 18 Holy Steps)",
        nameTa: "பதினெட்டாம் படி",
        type: "other",
        description: "The eighteen sacred steps leading to the Sreekovil — now clad in gold (panchaloha) and themselves objects of worship. Only a pilgrim carrying the irumudi kettu on the head may ascend them; each step is venerated as a stage in shedding the senses, passions, gunas, and finally knowledge and ignorance, until the soul realises 'Tatvamasi'.",
        detail: "18 gold-plated steps · irumudi required to climb",
      },
      {
        name: "Sreekovil (Sanctum)",
        type: "sanctum",
        description: "The copper-roofed inner sanctum atop the eighteen steps, housing the panchaloha idol of Ayyappa as Dharma Sastha. The deity is seated in a yogic posture — the right hand in chin-mudra, a yogapatta band around the drawn-up knee — gazing eternally down the eighteen steps. The present idol was consecrated after the 1950 fire.",
        detail: "Ayyappa in yogic posture · reconsecrated 1950",
      },
      {
        name: "Sannidhanam Plateau",
        type: "other",
        description: "The temple plateau around the sanctum at roughly 1,260 m, holding the flagstaff (kodimaram), the offering platforms, the shrines of the goddess and Ayyappa's companions, and the spaces where lakhs of pilgrims gather, especially for Makaravilakku. Everything here is reached only on foot.",
      },
      {
        name: "Malikappuram Shrine",
        type: "other",
        description: "The shrine of the goddess Malikappurathamma, a short distance from the main sanctum, with its own ritual life — including the nightly procession and the lore of her eternal wait to wed the celibate Ayyappa. A major focus of devotion in its own right.",
      },
      {
        name: "Pamba & Neelimala Ascent",
        type: "other",
        description: "Pamba, on the holy river of the same name, is the principal base camp where pilgrims bathe before the climb. From here the path rises steeply up Neelimala and through forest to the Sannidhanam — about 5 km, the final and most demanding stretch of the journey.",
        detail: "~5 km forest trek from Pamba",
      },
      {
        name: "Ponnambalamedu",
        type: "other",
        description: "The distant forested hill, visible from the Sannidhanam, where the sacred Makaravilakku light appears on the evening of 14 January. Access is restricted; for pilgrims it is a point of darshan across the valley rather than a place to visit.",
      },
    ],
    subShrines: [
      {
        name: "Malikappurathamma",
        deity: "The Goddess of Sabarimala",
        description: "The presiding goddess whose shrine stands near the main sanctum. By legend she waits to marry Ayyappa in the year no first-time pilgrim (Kanni-Swami) arrives — a wait renewed every season. Her nightly rituals and procession are central to the Sabarimala experience.",
      },
      {
        name: "Vavaru Swami (Vavar)",
        deity: "Ayyappa's Muslim companion-saint",
        description: "A shrine to Vavar, the warrior-saint who fought alongside Ayyappa. Worshipped by all pilgrims — together with the Vavar mosque at Erumeli — as an enduring symbol of inter-faith harmony.",
      },
      {
        name: "Kaduthaswami",
        deity: "Guardian companion of Ayyappa",
        description: "A guardian deity and companion of Ayyappa, with a shrine at the Sannidhanam where pilgrims pay respects on arrival.",
      },
      {
        name: "Ganapathi",
        deity: "Lord Ganesha",
        description: "The remover of obstacles, worshipped at the outset so the arduous trek and darshan proceed without hindrance.",
      },
      {
        name: "Nagaraja",
        deity: "The Serpent God",
        description: "A serpent shrine within the complex, reflecting the forest sanctity of the hill and the older nature-worship strata that underlie the Sastha tradition.",
      },
    ],
    visitorLogistics: {
      gates: [
        { name: "Pathinettam Padi (Main Ascent)", direction: "North", notes: "The eighteen holy steps — the only route to the sanctum for irumudi-bearing pilgrims. Non-irumudi visitors use the separate side approach and cannot climb the steps." },
      ],
      cloakRoom: "Pilgrims travel light by design. Footwear is left at Pamba or the foot of the climb; lockers and deposit counters operate at Pamba and the Sannidhanam for valuables. The irumudi is never set down carelessly — it is the pilgrim's sanctified burden until the Neyyabhishekam.",
      mobilePolicy: "Phones are best left at Pamba lockers or kept switched off. There is limited and unreliable mobile coverage on the hill, and the sanctum area is meant for chanting and darshan, not calls.",
      cameraPolicy: "Photography is prohibited at and around the sanctum and the eighteen steps. Treat the Sannidhanam as a place of penance, not sightseeing; follow the directions of the police and Devaswom staff, who manage immense crowds.",
      wheelchairAccess: "The terrain is a steep forest hill reached only on foot, so it is inherently difficult for those with limited mobility. A 'doli' (palanquin carried by porters) service and tractor/ambulance facilities operate between Pamba and the Sannidhanam for the elderly and infirm, for a fee.",
      seniorCitizenDarshan: "There is no shortcut to the climb, but doli (palanquin) bearers can carry elderly or unwell pilgrims up from Pamba. Medical camps with oxygen and emergency care are stationed along the route and at the Sannidhanam during season — the altitude and exertion cause real strain, so the unwell should consult a doctor before undertaking the trek.",
      parking: "During season private vehicles are stopped at the Nilackal base camp (~20 km below Pamba); from there KSRTC chain-service buses shuttle pilgrims to Pamba. Plan for long waits at peak times.",
      restrooms: "Toilets, bathing ghats and changing facilities are provided at Pamba and at intervals on the route and at the Sannidhanam. Facilities are heavily used during season; carry your own essentials.",
      drinkingWater: "Drinking-water points and Annadanam (free meals) are available at Pamba and the Sannidhanam. Carry water for the climb itself; the trek is strenuous and, despite the altitude, can be hot by midday.",
    },
    sevas: [
      {
        name: "Neyyabhishekam",
        description: "The defining ritual of the pilgrimage — the idol is anointed with the ghee carried in the pilgrim's own mudra-coconut from the irumudi. The emptied coconut shells are then offered into the sacred fire. Performed in the early morning during season.",
        time: "Early morning (season)",
        fee: "From the pilgrim's irumudi (no separate fee)",
        type: "daily",
      },
      {
        name: "Udayasthamana Pooja",
        description: "A full day of poojas sponsored from sunrise to sunset in the devotee's name — among the most sought-after sevas, with a long advance waiting list.",
        time: "Dawn to dusk",
        fee: "Sponsored (book via TDB)",
        type: "special",
      },
      {
        name: "Padi Pooja",
        description: "Worship of the eighteen holy steps themselves, performed on select nights when the steps are closed to climbers and ritually adorned. Booked years in advance.",
        time: "Night, select days",
        fee: "Sponsored (long waiting list)",
        type: "special",
      },
      {
        name: "Kalabhabhishekam",
        description: "Anointing of the idol with sandalwood paste (kalabham) — cooling and fragrant, offered on special days.",
        time: "Special days (season)",
        fee: "Sponsored",
        type: "special",
      },
      {
        name: "Pushpabhishekam",
        description: "The idol is covered entirely in flowers — a spectacular darshan offered on select occasions during the season.",
        time: "Select days (season)",
        fee: "Sponsored",
        type: "special",
      },
      {
        name: "Aravana & Appam Prasadam",
        description: "The famous prasadams of Sabarimala — Aravana (a sweet rice-jaggery payasam) and Appam — prepared at the temple in vast quantities and carried home by pilgrims. Sold in sealed tins at the Sannidhanam.",
        time: "All day (season)",
        fee: "Fixed price per tin",
        type: "daily",
      },
      {
        name: "Harivarasanam",
        description: "Not a paid seva but the day's tender close — the Harivarasanam lullaby is sung as the lamps are dimmed and the sanctum doors shut for the night, putting Ayyappa to sleep.",
        time: "~11:00 PM (closing)",
        fee: "Free",
        type: "daily",
      },
    ],
    faqs: [
      {
        question: "Who can undertake the Sabarimala pilgrimage?",
        answer:
          "Sabarimala is famously open to pilgrims of every caste, class and religion, all observing the same vratham and addressed alike as 'Swami'. By long-standing temple tradition, women in the menstruating age group (about 10–50 years) have not undertaken the pilgrimage, owing to the deity's celibate (Naishtika Brahmachari) character. This custom became the subject of a 2018 Supreme Court verdict and subsequent review, and the legal and social position has remained contested. Pilgrims should check the current official guidance from the Travancore Devaswom Board before planning a trip.",
      },
      {
        question: "What is the 41-day vratham?",
        answer:
          "It is the penance that turns a person into an 'Ayyappan'. For 41 days before the trek the pilgrim wears the tulsi or rudraksha mala, dresses in black/blue/saffron, walks barefoot, eats sattvic vegetarian food, abstains from alcohol and sensual indulgence, sleeps simply, controls anger and speech, and serves and respects every other pilgrim as Ayyappa. The discipline is meant to dissolve ego and worldly distinction so that all who climb the hill are equal.",
      },
      {
        question: "What is the irumudi kettu and why does it matter?",
        answer:
          "The irumudi is a two-compartment cloth bundle carried on the head. The front pouch holds the offerings — above all the mudra-coconut filled with ghee for the Neyyabhishekam; the rear holds the pilgrim's own provisions for the journey. It is filled in a solemn ceremony at the end of the vratham. Crucially, only a pilgrim bearing the irumudi on the head is permitted to climb the eighteen holy steps to the sanctum.",
      },
      {
        question: "How do I actually reach the temple?",
        answer:
          "Sabarimala can be reached only on foot. The nearest railhead is Chengannur (~90 km) and the nearest airports are Kochi and Trivandrum. During season private vehicles stop at the Nilackal base camp, from where KSRTC shuttle buses run to Pamba. From Pamba it is a roughly 5 km uphill forest trek to the Sannidhanam. The traditional penance route is a far longer 40+ km forest trek beginning at Erumeli.",
      },
      {
        question: "When is the temple open?",
        answer:
          "Sabarimala is not open year-round. It opens for the Mandala–Makaravilakku season (from the first of Vrischikam, ~17 November, to Makaravilakku on 14 January and a few days after), for Vishu in April, and for the first five days of each Malayalam month. Always confirm the exact opening days and book the virtual queue before you travel.",
      },
      {
        question: "What is Makara Jyothi / Makaravilakku?",
        answer:
          "On Makara Sankranti (14 January) at dusk, pilgrims at the Sannidhanam witness the Makaravilakku — a sacred light that appears three times on the distant hill of Ponnambalamedu — while the Makara Jyothi star rises overhead. The moment coincides with the adorning of the idol in the Thiruvabharanam ornaments brought in procession from Pandalam. It is the spiritual climax of the season and draws the largest crowds; plan well ahead if you intend to be there.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "Yes — during season the Travancore Devaswom Board operates a virtual-queue (spot booking) system to manage the enormous crowds, and a daily cap on pilgrim numbers. Book your darshan date online before travelling, and allow generous time, as queues, the Nilackal–Pamba shuttle, and the climb itself can each take hours at peak periods.",
      },
      {
        question: "What prasadam should I bring home?",
        answer:
          "The two famous prasadams are Aravana (a rich sweet payasam of rice and jaggery) and Appam, both prepared at the temple and sold in sealed tins at the Sannidhanam. The emptied ghee from your Neyyabhishekam coconut is also taken home as sacred prasadam. Buy only from the official Devaswom counters.",
      },
    ],
  },
};

// For temples without explicit detail entries, generate a sensible default
export function getTempleDetail(slug: string): TempleDetail {
  return (
    templeDetails[slug] ?? {
      slug,
      timings: { morning: "6:00 AM – 12:00 PM", evening: "4:00 PM – 8:00 PM", note: "Please verify timings with the temple before visiting." },
      entryFee: "Free (seva charges may apply)",
      dressCode: "Traditional Indian attire. No shorts or sleeveless tops.",
      bestTime: "October – March",
      travelInfo: {
        byAir: "Refer to nearest city airport.",
        byTrain: "Nearest railway station. Check Indian Railways for trains.",
        byRoad: "State-run buses available from major cities.",
      },
      highlights: ["Sacred Hindu temple", "Rich history and architecture", "Important pilgrimage destination"],
      history: "This is a historically significant South Indian temple with deep roots in local culture and devotion.",
      architecture: "Built in the traditional Dravidian architectural style with ornate carvings and gopurams.",
      festivals: [{ name: "Annual Brahmotsavam", month: "Varies", description: "Main annual festival with processions and special rituals." }],
      poojas: [
        { name: "Morning Puja", time: "6:00 AM", fee: "Free" },
        { name: "Evening Puja", time: "6:00 PM", fee: "Free" },
      ],
      nearbyTemples: [],
    }
  );
}
