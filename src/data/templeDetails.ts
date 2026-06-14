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
      "Annual hair offering (Vastralankara), over 15 tons of hair donated daily",
      "TTD runs free annadanam for all pilgrims, one of the world's largest free kitchens",
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
        "Once, sage Bhrigu was sent by a council of rishis to determine the supreme among the Trimurti. Finding Vishnu reclining on Adi Shesha in Vaikuntha, apparently asleep and inattentive, the enraged Bhrigu kicked him in the chest. Vishnu calmly took the sage's foot and gently massaged it, but Goddess Lakshmi, who resides on Vishnu's chest, was deeply insulted by both the kick and the fact that Vishnu had pardoned the offence. She left Vaikuntha for Earth in search of a quieter dwelling, settling at Kolhapur as Mahalakshmi. Vishnu, separated from her, descended to the Venkata hills as Srinivasa, 'the abode of Sri', to find her.",
      tirukalyanam:
        "On Earth, Srinivasa lived a life of austerity at Tirumala until he encountered the beautiful Princess Padmavathi, daughter of King Akasa Raja, at Narayanavanam. She was an incarnation of Lakshmi herself, born of a lotus from the earth. Srinivasa won her in marriage, but the wedding required vast wealth he did not possess. He borrowed an enormous sum from Kubera, the god of wealth, agreeing to repay only the interest until the end of Kali Yuga; the principal is to be repaid at the dawn of the next yuga. This is why devotees still pour their wealth (money, gold, hair and jewellery) into the temple Hundi: each donation is a token contribution toward Lord Venkateswara's debt to Kubera.",
      additionalStories: [
        {
          title: "Why Devotees Offer Their Hair",
          content:
            "An old legend traces the hair-offering custom to a kind cowherd boy whose ox was struck by a stone meant to chase it away. The stone hit Lord Venkateswara on the head, dislodging a patch of his hair. A passing princess, Neeladevi, saw the bleeding scalp and cut off her own beautiful tresses to cover the wound. Touched by her sacrifice, the Lord declared that henceforth he would receive the hair of every devotee who offered it at his temple, and that Neeladevi would receive the blessings on his behalf. The tonsuring of one's head at Tirumala is therefore both an act of surrendering one's pride (the hair as a symbol of vanity) and a settlement of one's share of the debt to Kubera.",
        },
        {
          title: "The Seven Sacred Hills (Sapta Giri)",
          content:
            "Tirumala stands on seven sacred hills, collectively the Seshachalam range, the seven hoods of Adi Shesha, the cosmic serpent on whom Vishnu reclines. Their names are: Seshadri, Neeladri, Garudadri, Anjanadri, Vrishabhadri, Narayanadri and Venkatadri. The Lord's name 'Venkateswara' means the destroyer (eswara) of sins (venkata, from 'vem' = sins and 'kata' = destroyer). The path of Alipiri Mettu, with its 3,550 stone steps, threads through these hills and is the ancient pilgrim route to the temple.",
        },
      ],
    },
    architectureFeatures: [
      {
        name: "Ananda Nilayam Vimana",
        nameTa: "ఆనంద నిలయం",
        type: "vimana",
        description: "The three-tiered gilded tower directly above the sanctum, the most sacred element of the temple. The name means 'Abode of Bliss'. Its ~32 m gold-plated surface dominates the Tirumala skyline; the topmost finial holds the famous Vimana Venkateswara, a smaller replica image believed to bestow the same darshan benefit when viewed from outside.",
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
        description: "The innermost circumambulatory path around the Ananda Nilayam Vimana. Walking three times around the Vimana is considered equivalent to viewing the deity itself, particularly meaningful on busy darshan days when sanctum-time is brief.",
      },
      {
        name: "Sampangi Pradakshinam",
        type: "other",
        description: "The outer circumambulatory corridor, lined with smaller shrines, mandapams, and the Tirumamani Mandapam. It is the path most pilgrims take on their way to the inner enclosure.",
      },
      {
        name: "Snapana Mandapam",
        type: "mandapam",
        description: "The 'anointing hall' where the daily Snapana Tirumanjanam (abhishekam to the processional Bhoga Srinivasa) is conducted every Friday, the only weekly abhishekam to a form of the main deity that pilgrims may witness.",
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
        description: "The temple sits atop the seventh of seven sacred hills, Venkatadri, collectively forming the Seshachalam range, said to be the hoods of Adi Shesha himself. The hills are: Seshadri, Neeladri, Garudadri, Anjanadri, Vrishabhadri, Narayanadri, Venkatadri.",
        detail: "853 m elevation · ~22 km from Tirupati town",
      },
    ],
    subShrines: [
      {
        name: "Sri Varahaswamy",
        deity: "Lord Vishnu as Varaha (Boar Incarnation)",
        description: "On the bank of the Swami Pushkarini, this is the first shrine every pilgrim must visit. Varaha was the original lord of the Venkata hills and is said to have granted the land to Venkateswara on the condition that he be worshipped first. Skipping this darshan is believed to render the Venkateswara visit incomplete.",
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
        description: "Equivalent to Ganesha in Vaishnava tradition, the remover of obstacles and the leader of Vishnu's celestial army. His shrine is invoked at the start of every major temple ritual.",
      },
      {
        name: "Sri Garuda",
        deity: "Divine Mount of Vishnu",
        description: "Housed in the Garuda Mandapam directly facing the Bangaru Vakili, where Garuda gazes eternally at his lord. Pilgrims briefly halt here before approaching the sanctum.",
      },
      {
        name: "Hundi",
        deity: "Sacred Donation Vessel",
        description: "Not a deity but central to the temple's ritual life: the great hundi (donation receptacle) in front of the Bangaru Vakili is where pilgrims offer money, gold, and jewellery, each gift considered a contribution toward Lord Venkateswara's eternal debt to Kubera.",
      },
    ],
    visitorLogistics: {
      gates: [
        { name: "Mahadwaram (Main Entrance)", direction: "East", notes: "The principal entrance for all darshan queues. Opens onto the inner enclosure via the Sampangi Pradakshinam." },
        { name: "Vaikuntham Queue Complex (Q-I, Q-II, Q-III)", direction: "North", notes: "The three-building complex that channels all darshan queues: Sarva Darshan (free), Special Darshan (₹300), and Divya Darshan (for trek pilgrims). Air-conditioned, has resting areas and free meals." },
        { name: "Sudarshan Token Counters", direction: "North", notes: "Free time-stamped tokens issued from counters at Vishnu Nivasam, Srinivasam, and the bus stand. The token assigns a darshan slot; report at the assigned time to skip the unstamped queue." },
        { name: "Alipiri / Srivari Mettu Trek Entrance", direction: "South", notes: "Trek pilgrims arriving via the Alipiri Mettu (3,550 steps, ~9 km) or Srivari Mettu (2,388 steps, ~2.5 km) enter via a dedicated Divya Darshan queue at the top, often faster than the Sarva Darshan queue." },
      ],
      cloakRoom: "Free cloak rooms (luggage and footwear) are available at the Vaikuntham complex, near the Mahadwaram, and at the foot of both trek routes. Tokens are issued. Keep them safe. Mobile phones and cameras are deposited separately at the entrance of the queue complex.",
      mobilePolicy: "Mobile phones, smart-watches, cameras, and Bluetooth devices are strictly prohibited inside the temple complex. Free deposit lockers are available at the entrance of the Vaikuntham queue complex and at the cloak rooms near the Mahadwaram. Violations result in immediate confiscation.",
      cameraPolicy: "Photography is completely prohibited inside the temple, the queue complex, and even in the corridors leading to the sanctum. Cameras must be deposited at the cloak room. Photography of the outer gopurams and the Tirumala township is permitted.",
      wheelchairAccess: "Wheelchairs are available on request at the Vaikuntham complex (refundable deposit). A dedicated wheelchair queue offers near-direct sanctum access for pilgrims with mobility needs, senior citizens above 65, and pregnant women. Bring photo ID for age proof.",
      seniorCitizenDarshan: "Senior citizens (65+), physically challenged persons, and pregnant women may use the Special Privileged Darshan entrance (twice daily, morning and afternoon slots). Photo ID is mandatory. The queue is significantly shorter than the regular Sarva Darshan.",
      parking: "TTD operates large free parking lots at Tirumala for pilgrim vehicles. Private vehicles can drive up via the Tirumala Ghat Road; many pilgrims prefer to take TTD's free shuttle buses from the Alipiri toll gate to avoid the climb. Two-wheelers are not permitted on the Ghat Road.",
      restrooms: "Public restrooms and bathing facilities are available at the Vaikuntham complex, at all TTD cottages, at the Alipiri footstep entrance, and at multiple stations along the trek route. Free hot water for bathing is available at the Pushpa Mandapam.",
      drinkingWater: "Free filtered drinking water (Pulipathi) is available throughout the queue complex, along the trek routes, and at all major mandapams. TTD also distributes free buttermilk and snacks during peak hours.",
    },
    sevas: [
      {
        name: "Suprabhata Seva",
        description: "The first ritual of the day: the deity is gently awakened with the recitation of the Sri Venkateswara Suprabhatam by Ramanuja's disciple Prativadi Bhayankaram Annan. The most sought-after Arjita seva at Tirumala; bookings open 90 days in advance via the TTD online portal.",
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
        description: "The symbolic re-enactment of the wedding of Srinivasa, Padmavathi and Bhu Devi. Performed daily in the Kalyana Mandapam. Sponsors witness the full Vedic ceremony and receive a special wedding cloth, laddus, and a framed photograph of the deities.",
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
        description: "'Spring festival' performed in the Vasantha Mandapam for the processional deities, Sri Devi, Bhu Devi and Malayappa Swami. Conducted twice weekly.",
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
        description: "The final seva of the day: the deity is put to bed (palli kondu) in the inner sanctum with a recitation of the Tarigonda Vengamamba's lullabies. The temple closes after this for the night.",
        time: "Daily, ~1:30 AM (next morning)",
        fee: "₹120",
        type: "daily",
      },
    ],
    faqs: [
      {
        question: "Do I have to shave my head (mundana) at Tirumala?",
        answer:
          "No, tonsuring is voluntary, not compulsory. Many devotees offer their hair as fulfilment of a personal vow (mokku) or as a symbolic settlement of their share of Lord Venkateswara's debt to Kubera. TTD operates free tonsure halls (Kalyana Katta) at Tirumala that can accommodate over 600 barbers simultaneously, with separate enclosures for men, women, and children. The shaved hair is donated to TTD, processed, and auctioned globally, a major source of temple revenue.",
      },
      {
        question: "What is the difference between Sarva Darshan, Special Darshan, and VIP Darshan?",
        answer:
          "Sarva Darshan is the free general darshan with the longest queue (often 6–18 hours during peak season). The free Sudarshan token system assigns a time slot. Get a token from Vishnu Nivasam, Srinivasam, or the bus stand to skip the unstamped wait. Special Darshan (Seeghra Darshan, ₹300) provides a faster, ticketed entry, usually 1–3 hour wait. VIP Break Darshan is offered to recommended visitors (MPs, MLAs, religious heads); not bookable by the public. Senior citizens (65+) and physically challenged persons have a separate priority queue.",
      },
      {
        question: "How far in advance should I book sevas like Suprabhata, Kalyanotsavam, or Brahmotsavam?",
        answer:
          "TTD opens the Arjita Seva quota 90 days in advance through its official online portal (tirumala.org). Popular sevas like Suprabhata Seva and Kalyanotsavam are typically booked out within minutes. Brahmotsavam-related seva tickets open even earlier and require a separate lottery for many slots. A few same-day current-booking tickets are released at the TTD counters, but availability is uncertain.",
      },
      {
        question: "Should I take the trek (Alipiri or Srivari Mettu) or the bus?",
        answer:
          "Trek pilgrims receive a dedicated Divya Darshan queue at the top, often much faster than the regular Sarva Darshan, even after the climb. Alipiri Mettu has 3,550 steps (~9 km, 4–6 hours) and is the traditional pilgrim route; Srivari Mettu is shorter at 2,388 steps (~2.5 km, 2–3 hours) and steeper. Both routes are roofed and lit, with free TTD canteens and medical aid along the way. If you have time and reasonable fitness, the trek is highly recommended, both for the spiritual experience and the faster darshan.",
      },
      {
        question: "What's the famous Tirupati laddu? How many can I get?",
        answer:
          "The Tirupati Laddu is the temple's signature prasadam, a sweet made of besan, ghee, sugar, cardamom, cashew, and edible camphor, prepared in the Potu kitchen using a closely-guarded recipe. It holds a Geographical Indication (GI) tag (2009), legally restricting its name to the TTD-prepared variant. Every paid darshan ticket includes two free small laddus. Additional Big Laddus (~700g) can be purchased at the Laddu counter for ₹50 each, with a limit of 2 per person per visit. During Brahmotsavam and special occasions, gifting laddus to thousands is a common practice.",
      },
      {
        question: "Can foreigners and non-Hindus visit the temple?",
        answer:
          "Foreigners are welcome to the Tirumala township and its outer corridors. However, entry into the main temple sanctum requires devotees to sign a declaration affirming their faith in Lord Venkateswara, which is presented at the entrance for foreigners and non-Hindu Indians. The declaration is a brief written form. No proof is required. Many foreign devotees do darshan annually with this provision.",
      },
      {
        question: "What is the dress code at Tirumala?",
        answer:
          "Traditional Indian attire is strictly enforced for the sanctum darshan: dhoti (or panche) with upper cloth for men; saree, half-saree, or salwar kameez (with dupatta) for women. Western dress (jeans, shorts, sleeveless tops, short skirts, ripped clothing) is not permitted beyond the outer corridors. Several cloth-rental counters near the queue complex provide traditional wear; you may also bring your own. Black is traditionally avoided by some devotees, though not strictly prohibited.",
      },
      {
        question: "Where do I stay at Tirumala?",
        answer:
          "TTD operates extensive pilgrim accommodation at Tirumala (free dormitories and paid cottages at PAC-I, PAC-II, PAC-III, Vishnu Nivasam, Srinivasam, Madhavam) with rates from ₹50 to ₹3,000 per night. Booking via tirumala.org opens 60 days in advance; current-booking counters at Tirumala handle walk-ins subject to availability. Private hotels at Tirumala are limited (TTD has historically restricted commercial development). Many pilgrims stay at private hotels in Tirupati town (22 km below) and travel up by TTD shuttle bus. This is often easier for non-Telugu-speaking visitors.",
      },
      {
        question: "When are the busiest days I should try to avoid?",
        answer:
          "Avoid weekends, public holidays, school vacations (April–June), Vaikunta Ekadasi (Dec–Jan, queues can exceed 24 hours), the nine days of Brahmotsavam (Sep–Oct), and the days around Rathasapthami (Feb). Tuesday, Wednesday, and Thursday in the off-season (Aug, Oct–Nov, Jan–Mar excluding festival weeks) are typically the calmest. Even on those days, expect a minimum 2–4 hour queue for Sarva Darshan.",
      },
      {
        question: "What about the Annaprasadam, the free meals?",
        answer:
          "TTD's Nitya Annadanam Trust runs one of the world's largest free meal services, over 100,000 pilgrims served daily at the Matrusri Tarigonda Vengamamba Annaprasadam Complex (and ~5x that during festivals). Hot, simple South Indian vegetarian meals (rice, sambar, rasam, curd, pickle, sweet) are served continuously through the day. No coupons or charge. Just walk in. The complex is a 5-minute walk from the Vaikuntham queue exit. Donations toward the trust (any amount) can be made at any TTD counter and are tax-exempt.",
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
      { name: "Float Festival (Theppam)", month: "January–February", description: "On Thai Poosam full moon, the deities are taken on an illuminated float across the Mariamman Teppakulam tank, a 1 km tank 5 km from the temple.", slug: "float-festival-madurai" },
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
        "King Malayadhwaja Pandyan and Queen Kanchanamala of Madurai were childless despite years of yagnas and prayers. From the sacred fire of a putrakameshti yagna, a three-year-old girl emerged, with three breasts. A divine voice told the worried king to raise her as his own and as a warrior princess: her third breast would disappear the moment she met the man she was destined to marry. The princess was named Thadathagai. She mastered the 64 arts and shastras, succeeded her father as ruler of Madurai, and embarked on a digvijaya (conquest of the directions). On the slopes of Mount Kailasa she met Lord Shiva, and at that very moment, her third breast vanished. She had met her destined husband. Shiva instructed her to return to Madurai, where he would follow as her groom. There she became Meenakshi, 'she of fish-shaped eyes', and reigned as Queen of Madurai before her divine wedding.",
      tirukalyanam:
        "Shiva arrived in Madurai as Sundareswarar, 'the beautiful lord', for the wedding. Lord Vishnu, Meenakshi's brother (worshipped at nearby Alagar Kovil as Kallazhagar), travelled from his hill shrine to give the bride away. Brahma performed the ceremony. The wedding was witnessed by all the gods and devas, who assembled in Madurai for the occasion, making Madurai the divine wedding city of Tamil tradition. This Thirukalyanam is re-enacted every year on the ninth day of the Chithirai festival; the chariot procession the following day is one of the largest in South India.",
      additionalStories: [
        {
          title: "The 64 Thiruvilayadal (Sacred Sports)",
          content:
            "Sundareswarar is believed to have performed 64 sacred sports (leelas) in Madurai during his time as king alongside Meenakshi, from selling pearls and gemstones to a poor woman, to teaching Tamil grammar to the sage Agastya, to fighting the Pandyan elephant Madhura Veeran. These 64 leelas are recorded in the Tamil text Thiruvilayadal Puranam by Paranjothi Munivar (17th century) and are re-enacted across 10 evenings during the Aavani Moolam festival.",
        },
        {
          title: "The Origin of the Name Madurai",
          content:
            "When Shiva, pleased with King Kulashekara Pandyan's devotion, shook drops of nectar (madhu) from his matted hair onto the city below, it became known as Madhurai, 'the city of nectar'. Over centuries the name became Madurai. The temple complex sits at the centre of Madurai's concentric old-city street plan, the Adi, Chithirai, Avani Moola and Masi streets, laid out as a lotus around the goddess.",
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
        description: "The original gateway to the Sundareswarar shrine, the main entry for most pilgrims.",
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
        description: "The entrance hall just inside the East Tower. Its pillars feature exquisite sculptures of the eight Shaktis (forms of the divine feminine), Brahmi, Vaishnavi, Maheshwari, Indrani, Kaumari, Varahi, Chamundi and Mahalakshmi.",
      },
      {
        name: "Meenakshi Nayakkar Mandapam",
        nameTa: "மீனாட்சி நாயக்கர் மண்டபம்",
        type: "mandapam",
        description: "A 16th-century hall named after Visvanatha Nayaka. Famed for its 985 elaborately-sculpted pillars, each a single granite monolith, depicting yalis, deities, and royal patrons.",
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
        description: "A cluster of monolithic granite pillars near the entrance to the Hall of 1000 Pillars. When struck gently, each pillar produces a different musical note, the seven swaras of Carnatic music. A surviving testament to Nayak-era acoustic engineering.",
      },
      {
        name: "Pottramarai Kulam (Golden Lotus Tank)",
        nameTa: "பொற்றாமரை குளம்",
        type: "tank",
        description: "The sacred tank inside the complex, ringed by a colonnade. Believed to be where Indra bathed a golden lotus before worshipping the original Sundareswarar lingam. Tamil literary tradition holds that a Sangam of Tamil poets used to convene on its banks: the manuscripts of accepted compositions floated, while the rejected ones sank.",
        detail: "~50 m × 36 m",
      },
      {
        name: "Killi (Kilikoondu) Mandapam",
        nameTa: "கிளிக்கூண்டு மண்டபம்",
        type: "mandapam",
        description: "The 'Parrot Cage' hall, between the second corridor and the goddess's sanctum. Until the late 20th century, hundreds of trained green parrots were kept here, taught to say 'Meenakshi'. The practice was discontinued for the birds' welfare; the cages still stand as a heritage feature.",
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
        description: "A special sabha (dance hall) housing a bronze Nataraja. Unusually, here the dancing pose is reversed: Nataraja's right leg is raised instead of the left, said to be at the request of a Pandyan king who wished to see the cosmic dance from the other side.",
      },
    ],
    visitorLogistics: {
      gates: [
        { name: "East Tower (Main entry)", direction: "East", notes: "Primary entrance for darshan. Opens onto Sundareswarar shrine corridor." },
        { name: "South Tower (Rajagopuram)", direction: "South", notes: "The tallest tower; opens onto South Avani Moola Street. Has the largest queue area." },
        { name: "West Tower", direction: "West", notes: "Closer to the Meenakshi shrine. Convenient for the Pottramarai Kulam." },
        { name: "North Tower", direction: "North", notes: "Less crowded; opens onto North Avani Moola Street." },
      ],
      cloakRoom: "Free shoe-and-bag cloak rooms are located just outside each of the four main gates. Mobile phones must also be deposited (see policy below). Keep your tag safe; replacements are charged.",
      mobilePolicy: "Mobile phones, smart-watches and Bluetooth devices are not permitted inside the temple. Deposit them at the cloak room at any of the four gates before entering. The policy is strictly enforced.",
      cameraPolicy: "Photography is prohibited inside the temple complex. Cameras may be left at the cloak room. Photography of the gopurams from outside the temple is freely permitted.",
      wheelchairAccess: "Wheelchairs are available on request at the South and East gates (refundable deposit). Ramp access is provided at the main corridors; the inner sanctum steps are narrow but assistance is offered by temple staff.",
      seniorCitizenDarshan: "Senior citizens (60+), pregnant women, and persons with disabilities can use the priority darshan queue. Enter via the South Tower and request the special queue from the on-duty staff.",
      parking: "Paid parking is available on East Avani Moola Street and North Chithirai Street (approx ₹30 for two-wheelers, ₹100 for cars). Two-wheeler parking fills up early on weekends; arrive before 8 AM.",
      restrooms: "Public restrooms are available outside the East and West towers. Inside the complex, facilities are limited.",
      drinkingWater: "Drinking water taps are available near the Pottramarai Kulam and at the corridors leading to each sanctum. Carry your own bottle if visiting in summer.",
    },
    sevas: [
      {
        name: "Kalasandhi Pooja",
        description: "First major pooja of the morning, abhishekam to both Meenakshi and Sundareswarar with milk, curd, honey, sandal, and panchamrutham.",
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
        description: "The night pooja: the deities are taken in procession to the Palliyarai (bedchamber) on a silver palanquin. One of the most cherished darshans for devotees.",
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
        description: "Recitation of the 1,000 names of Meenakshi with archana, performed at the goddess shrine.",
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
          "Yes, foreign visitors of all nationalities are welcome at the temple, free of charge. There is no separate entry for foreigners. The only restriction (which also applies to Hindus from other denominations) is that the innermost sanctums of Meenakshi and Sundareswarar are reserved for Hindu devotees. The corridors, mandapams, gopurams, and the Pottramarai Kulam are open to everyone. Modest dress and basic temple etiquette (no shoes, no leather, no loud conversation) are expected.",
      },
      {
        question: "How much time should I allocate for my visit?",
        answer:
          "A quick darshan can be done in about 1.5 hours if queues are short. To take in the architecture properly, plan for 3–4 hours, enough to see the four gopurams, the Ashta Shakti Mandapam, the Hall of 1000 Pillars (now a museum), the Musical Pillars, and the Pottramarai Kulam. A leisurely first visit including both sanctums, the museum, and a snack break easily fills a half-day. On Fridays, festival days, and during the closure window (12:30–4:00 PM), allow extra time for queues.",
      },
      {
        question: "What is the dress code?",
        answer:
          "Traditional Indian attire is preferred: saree, half-saree, or salwar kameez for women; dhoti or veshti with shirt for men. Western clothing is permitted as long as it is modest: shoulders and knees should be covered. Shorts, short skirts, sleeveless tops, ripped jeans, and revealing clothing are not allowed. Leather items (belts, wallets, handbags) are also discouraged inside the inner corridors.",
      },
      {
        question: "Are mobile phones, cameras, and bags allowed inside?",
        answer:
          "Mobile phones, smart-watches, Bluetooth devices, and cameras are not permitted inside the temple complex. Free cloak rooms are located outside each of the four main gates (East, West, North, South) where you must deposit them before entering. Photography of the gopurams from outside the temple is freely permitted. Large bags should also be left at the cloak room, security may not allow them through.",
      },
      {
        question: "Is there wheelchair access?",
        answer:
          "Partially. Wheelchairs are available on a refundable deposit at the South and East gates. The main corridors are wheelchair-accessible. However, the steps leading into the inner sanctums of Meenakshi and Sundareswarar are narrow and not wheelchair-friendly; temple staff will assist visitors with mobility needs. The Hall of 1000 Pillars museum has step access only. Senior citizens, pregnant women, and persons with disabilities can request the priority darshan queue at the South Tower.",
      },
      {
        question: "When is the best time of day to visit?",
        answer:
          "The early-morning window between 5:30 AM and 7:30 AM is the quietest and the most spiritually charged; the Kalasandhi pooja takes place around 6:30 AM. Mid-morning (8–11 AM) is also good but busier. The temple closes 12:30–4:00 PM for the afternoon break, so plan your visit either side of that window. Friday is the busiest day of the week (Meenakshi's special day); Tuesday and Wednesday tend to be quieter. Weekends and public holidays draw very long queues.",
      },
      {
        question: "Are there food options inside the temple?",
        answer:
          "Inside the complex, only blessed prasadam is offered, typically curd-rice, tamarind-rice, and sweet pongal at specific times. No commercial food stalls operate within the complex. Just outside the four gates, however, you will find Madurai's famous street-food scene: Murugan Idli, Konar Kadai biryani, Amma Mess kari-dosa, and the iconic jigarthanda (a chilled almond-milk drink with ice cream and china grass) at Famous Jigarthanda on East Masi Street. The temple Annadanam (free meal service) is available to all pilgrims at the East-gate dining hall, typically between 11:30 AM and 1:00 PM.",
      },
      {
        question: "Is there a special quick-darshan ticket?",
        answer:
          "Yes, the temple offers a paid quick-darshan ticket (around ₹100–₹250 depending on day and time) that allows entry via a shorter queue, especially during peak hours. Tickets are sold at the counters near the South and East gates. On major festival days, quick-darshan may be suspended or extended; the temple administration's announcements at the gates are authoritative.",
      },
      {
        question: "Where can I stay nearby?",
        answer:
          "Madurai has accommodation across all budgets within walking distance of the temple. Budget options like Hotel Royal Court, Hotel Sangam Surya, and TamilNadu's HRCE-affiliated guesthouses are within 1 km. Mid-range hotels (Hotel Supreme, Hotel Park Plaza, GRT Regency) are 1–2 km away. The Heritage Madurai and the Gateway Hotel Pasumalai are the premium options. During Chithirai (April–May) and Aavani Moolam (Aug–Sep), book at least a month in advance.",
      },
      {
        question: "What other places should I see in Madurai?",
        answer:
          "Within Madurai city: the Thirumalai Nayakkar Palace (a 17th-century Indo-Saracenic palace, 1.5 km from the temple), the Mariamman Teppakulam (the 1 km festival tank, 5 km east), the Gandhi Memorial Museum, and the Pudhu Mandapam (the 16th-century pillared market hall built by Thirumalai Nayak directly opposite the East Tower). Day trips from Madurai include Alagar Kovil (20 km north, the brother-deity Vishnu temple), Thirupparankundram (8 km south, one of the six abodes of Murugan), and Kodaikanal (120 km, hill station).",
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
      "UNESCO World Heritage Site, one of the 'Great Living Chola Temples'",
      "The 66-meter vimana (tower) is the tallest temple tower of its era (built 1010 CE)",
      "The shadow of the vimana never falls on the ground, a remarkable architectural feat",
      "The massive Nandi (bull) monolith, one of the largest in India at 6 meters",
      "Exceptional Chola-era frescoes, bronzes, and inscriptions inside",
    ],
    history: "Built by the great Chola Emperor Raja Raja I between 1003–1010 CE, the Brihadeeswara Temple (also called Peruvudaiyar Kovil) is a testament to the zenith of Chola art and architecture. The temple was built to celebrate military victories and royal power. The inscriptions on the walls, over 400 of them, provide detailed records of the Chola empire's administration, donations, and religious practices.",
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
        "Raja Raja Chola I (Arulmozhivarman) had a vision during a military campaign in Sri Lanka: Lord Shiva appeared and instructed him to build a temple worthy of his cosmic stature. Returning to his capital Thanjavur at the height of his empire (he had conquered Kerala, the Pandyan kingdom, parts of Karnataka and northern Sri Lanka), the king resolved to construct a Dakshina Meru, a southern Mount Meru, that would surpass every temple ever built. Construction began in 1003 CE and was completed in 1010 CE: just seven years for a monument of granite weighing over 130,000 tonnes. The temple was consecrated with its main deity named Rajarajeswaram-Udaiyar after the king himself; over the centuries it came to be known by the more universal name Brihadeeswara, 'the Great Lord'.",
      additionalStories: [
        {
          title: "The Consecration of the Great Lingam",
          content:
            "Raja Raja's choice of the saint Karuvur Devar to perform the consecration is itself the temple's defining legend. When the king brought the great Shivalingam to the sanctum and tried to install it, every method failed: the lingam would not rise. Devars assembled in despair. Karuvur Devar, then a wandering Shaiva saint, was summoned. He sang the Tiruvisaippa, a hymn in praise of Brihadeeswara, composed on the spot, and the lingam rose effortlessly into place. Raja Raja built a small shrine for Karuvurar inside the southern prakaram, where the saint remains in worship to this day.",
        },
        {
          title: "The Mystery of the Shadow",
          content:
            "A popular belief holds that the shadow of the temple's 66-metre vimana never falls on the ground, that it 'disappears' at noon. Modern survey work has shown this is partially true and partially mythologised: at midday, the vimana's shadow falls onto its own base rather than extending beyond the temple compound. This is the result of a remarkable architectural calculation by the Chola sthapatis (architects), who designed the tapering pyramid so its centre of mass and shadow geometry align with the base. Whether intentional or accidental, the effect contributes to the structure's mystique, and may have been a deliberate symbolic statement that the king's temple, like the king himself, cast no overshadowing presence on his subjects.",
        },
        {
          title: "The 80-Tonne Cap Stone",
          content:
            "At the top of the vimana sits a single 25-tonne (some accounts say 80-tonne) octagonal cap stone (the sikhara), capped with a kalasham. Local tradition holds that the Chola engineers raised this stone using a six-kilometre-long inclined earthen ramp from the village of Sarapallam ('scaffold-pit village') near modern Thanjavur. Elephants and labourers slowly hauled the stone up the ramp on log rollers. After installation, the entire ramp was dismantled. The feat is among the marvels of ancient engineering: the cap stone was raised to 60 metres without modern machinery, only animal power, ropes, and one of history's great experiments in friction physics.",
        },
        {
          title: "The Living Bronzes",
          content:
            "Raja Raja commissioned dozens of bronze processional images for the temple, cast in the cire perdue (lost-wax) method that Chola sthapatis had perfected. The most exquisite is the Rajaraja-Sundara-Choleswara, a Shiva-Parvati pair where Parvati is said to be modelled on the king's queen, Lokamadevi. These bronzes are still in active worship today, taken in procession on festival days, anointed daily, dressed in fresh silks. They are considered among the finest surviving Chola bronzes in the world.",
        },
      ],
    },
    architectureFeatures: [
      {
        name: "Brihad-Vimana (Sri Vimana)",
        nameTa: "ஸ்ரீ விமானம்",
        type: "vimana",
        description: "The temple's defining feature, a 13-tier granite pyramid rising 66 metres (216 ft) over the sanctum. The tallest temple tower of its era and one of the tallest in India. Each tier diminishes geometrically; the cap stone (sikhara) is a single octagonal granite monolith weighing approximately 25 tonnes.",
        detail: "66 m · 13 tiers · 25-tonne cap stone",
      },
      {
        name: "Garbhagriha & Mahalingam",
        type: "sanctum",
        description: "The square sanctum (~14 m on each side) is two storeys tall internally, housing one of India's largest Shivalingams, an 8.7 m (29 ft) tall granite lingam on a square avudaiyar pedestal. The lingam is so large that priests use specially-built scaffolds to perform abhishekam. The sanctum is unusually deep, allowing devotees to circumambulate the lingam within.",
        detail: "Lingam 8.7 m · sanctum two storeys tall",
      },
      {
        name: "Nandi Mandapam",
        type: "mandapam",
        description: "Houses the colossal monolithic Nandi (sacred bull) facing the sanctum, 6 m long × 2.6 m wide × 3.7 m tall, carved from a single block of granite weighing approximately 25 tonnes. It is the second-largest Nandi in India (after Lepakshi). The mandapam itself was added in the 16th century by the Nayaks.",
        detail: "Nandi: 6 × 2.6 × 3.7 m · ~25 tonnes",
      },
      {
        name: "Keralantakan Tiruvasal",
        type: "gopuram",
        description: "The outer eastern gateway, named after Raja Raja's conquest of Kerala (his title was Keralantaka, 'destroyer of the Cheras'). Built in the Chola period, the gateway has a single tier with the original Chola sculptures still intact.",
      },
      {
        name: "Rajarajan Tiruvasal",
        type: "gopuram",
        description: "The inner gateway, named after the founder himself. A three-tiered gopuram of remarkable proportional balance. Its sculptures depict dvarapalakas (gate-guardians), Bhairava forms, and scenes from the Periya Puranam. Unusually for South India, the inner gopuram is taller than the outer.",
      },
      {
        name: "Maha Mandapam & Ardha Mandapam",
        type: "mandapam",
        description: "The two pillared halls between the gateway and the sanctum, used for daily rituals and for displays of the festival bronzes. The pillars carry Chola inscriptions recording donations of land, gold and slaves by the king, his queens, and the merchant guilds. Many of the bronzes housed here are 11th-century originals.",
      },
      {
        name: "Karandai Inscriptions",
        type: "other",
        description: "Over 400 stone inscriptions cover the temple's base mouldings (adhishthana), the most extensive surviving administrative record from the Chola period. They record gifts of villages, sums of gold, quantities of paddy, lists of dancers, musicians, accountants, watchmen, and ritual specialists endowed by Raja Raja and his nobles. The inscriptions are written in early Tamil with Grantha letters for Sanskrit names.",
        detail: "400+ inscriptions · early Tamil + Grantha",
      },
      {
        name: "Chola Frescoes",
        type: "other",
        description: "Inside the lower corridor of the vimana, the original 11th-century Chola murals were rediscovered in 1930, preserved under a later Nayak-era overpainting. Both layers are now visible: the deep Chola reds and ochres depict scenes from the life of Sundarar and Nataraja; the Nayak overlay shows lighter palette portraits of saints and donors. The space is dimly-lit; ASI permits only authorised photographers.",
      },
      {
        name: "81 Karana Sculptures",
        type: "other",
        description: "Carved on the niches of the vimana's first storey: 81 of the 108 Bharatanatyam karanas (movement units) described in the Natyashastra. The figures, about 1 m tall, in granite, show the dancer in dynamic mid-pose, accompanied by drummers and singers. They are the earliest complete sculptural catalogue of the karanas anywhere in India.",
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
        description: "A 17th-century Nayak-era addition in the north-western corner of the prakaram. Despite being centuries younger than the main temple, it is considered one of the finest examples of late Nayak granite sculpture. Its pillared mandapam is rated by art historians as a miniature masterpiece.",
      },
      {
        name: "Karuvurar Shrine",
        type: "other",
        description: "A small shrine in the southern prakaram dedicated to Karuvur Devar, the wandering Shaiva saint whose Tiruvisaippa hymn enabled the consecration of the main lingam. His installation here, alongside the great deity, is a rare honour granted by Raja Raja himself.",
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
        description: "A late-Nayak (17th c.) shrine in the north-western corner. The pillared mandapam, with finely detailed yali and Bhairava sculptures, is widely regarded as the artistic high point of late Tamil temple architecture.",
      },
      {
        name: "Chandikeshwara",
        deity: "The Custodian of Shiva Temples",
        description: "An original Chola-period shrine on the northern wall of the sanctum. Devotees customarily snap their fingers when passing, a gesture to wake Chandikeshwara (who is said to be eternally meditating) and to attest to the truth of the prayers just offered to Shiva.",
      },
      {
        name: "Ganapathy",
        deity: "Lord Ganesha",
        description: "An original Chola shrine immediately to the south of the main entrance, where every devotee first offers prayers before approaching the great lingam.",
      },
      {
        name: "Dakshinamurthy",
        deity: "Shiva as the Cosmic Teacher",
        description: "Carved into the southern niche of the vimana, a 1.5 m granite sculpture of Shiva as the silent teacher seated under the banyan tree, surrounded by four sages. One of the finest Dakshinamurthy depictions of the Chola period.",
      },
      {
        name: "Lingodbhavar",
        deity: "Shiva as the Infinite Pillar",
        description: "On the rear (western) niche of the vimana, Shiva emerging from a column of fire whose ends Brahma and Vishnu cannot find, despite their searches as a hamsa and varaha respectively. The scene is rendered with rare iconographic completeness.",
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
      mobilePolicy: "Mobile phones are permitted inside the complex, but switch to silent mode and avoid taking calls within the sanctum area. The temple is an active place of worship; loud conversation is frowned upon.",
      cameraPolicy: "Photography is freely permitted inside the temple complex. This is one of the few major South Indian temples that does not restrict cameras. Flash and tripods are prohibited inside the inner sanctum and inside the frescoes corridor (to protect the 11th-century pigments). The ASI sometimes posts additional restrictions on weekends and festival days.",
      wheelchairAccess: "Wheelchairs are not provided by the temple, but the inner prakaram is wheelchair-friendly: the courtyard is mostly level granite paving. The Nandi Mandapam, Brihannayaki shrine, and Subrahmanya shrine are accessible. The inner sanctum has steps and is not wheelchair-accessible; staff may assist devotees with mobility needs.",
      seniorCitizenDarshan: "There is no formal priority queue, but the temple is rarely crowded enough to require one. On Mondays, Shivaratri, Karthigai Deepam, and Sadayam day, however, queues do build up; senior citizens may request priority entry from on-duty staff at the inner gateway.",
      parking: "Free public parking is available outside the fort wall on West Main Road and Indra Gandhi Road, about 200–300 m from the outer gateway. Two-wheelers can park closer; no vehicle parking is permitted within the fort.",
      restrooms: "Public restrooms are located near the outer parking area and at the eastern corner of the inner prakaram. Facilities are basic. Bring tissues and hand sanitiser.",
      drinkingWater: "Drinking water taps are available near the Nandi Mandapam and at the eastern entrance to the prakaram. The temple is in a hot, dry zone. Carry your own bottle if visiting in summer (April–June).",
    },
    sevas: [
      {
        name: "Thiruvanandal Pooja",
        description: "The morning waking ritual, abhishekam to the great lingam with milk, panchamrutham, vibhuti and sandal. Performed by climbing the wooden scaffold to reach the lingam's height. Pilgrims watch from the sanctum entrance.",
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
        description: "Eleven-fold recitation of the Sri Rudram with continuous abhishekam, a powerful ritual recommended for relief from doshas and for fulfilment of major vows.",
        time: "Booking required, ~6:00 AM",
        fee: "₹1,100",
        type: "special",
      },
      {
        name: "Pradosha Pooja",
        description: "Performed on Pradosham days (Trayodashi tithi, twice each month). Abhishekam to Shiva between sunset and the first watch of the night, one of the most charged of Shaivite rituals.",
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
          "Yes, entry is completely free for Indian citizens. Foreign nationals are charged ₹250 for entry to the inner prakaram (the Archaeological Survey of India fee for World Heritage Sites). Pooja-related fees are separate and entirely voluntary. The temple is administered jointly by the ASI (for the monument) and the HR&CE department (for the active worship).",
      },
      {
        question: "How long should I plan for a visit?",
        answer:
          "A brisk darshan can be done in about 1 hour, but the temple rewards a longer visit. To appreciate the architecture, plan 2.5 to 3 hours, enough to take in the great vimana from multiple angles, the Nandi monolith, the Chola frescoes (in the dimly-lit corridor), the inscriptions, the Subrahmanya shrine, and the Brihannayaki shrine. Photographers and architecture enthusiasts often spend half a day. Plan around the temple's 12:30–4:00 PM closure for the afternoon break.",
      },
      {
        question: "Is the legend about the shadow really true?",
        answer:
          "Partially. The popular belief, that the vimana's shadow never falls on the ground, is more poetic than literal. Modern surveys show that the shadow does fall during most of the day; what is true is that at noon, the shadow folds onto the vimana's own base rather than extending out into the courtyard. The Chola sthapatis appear to have designed the geometry so the structure does not visually 'overshadow' its surroundings at midday. Whether this was intentional or a happy by-product of perfect proportions remains debated among historians.",
      },
      {
        question: "How did the Cholas raise the 25-tonne cap stone to the top of the vimana?",
        answer:
          "Local tradition and recent archaeological survey both point to a long, gently-sloped inclined earthen ramp, approximately six kilometres long, beginning near the village of Sarapallam (literally 'scaffold-pit village'). The stone was hauled up by elephants and labourers on greased log rollers, then the entire ramp was dismantled after installation. The feat used no machinery beyond ropes, animal power, and friction, but it required precise mathematical calculation and immense organisational effort. Similar techniques were used to raise the great monoliths at Mahabalipuram and Karnataka temples.",
      },
      {
        question: "Can I take photographs inside the temple?",
        answer:
          "Yes, Brihadeeswara is one of the few major active South Indian temples that freely permits photography in the courtyards, of the vimana, the Nandi, and most sculptures. Flash and tripods are prohibited inside the inner sanctum (where you should not photograph the lingam) and inside the frescoes corridor (to protect the 11th-century pigments). Drone photography requires prior ASI permission. The temple is exceptionally photogenic at sunrise and sunset.",
      },
      {
        question: "What is the dress code?",
        answer:
          "Modest traditional clothing is preferred but not strictly enforced. Saree, salwar, churidar, or skirt below the knee for women; dhoti or pant-shirt for men. Sleeveless tops, shorts, and very short skirts are discouraged. Unlike Tirupati, there is no strict dress-code check, but you may be politely asked to cover up before entering the inner sanctum.",
      },
      {
        question: "When is the best time of day to visit?",
        answer:
          "Sunrise (around 6:00–7:30 AM) is the most magical: the granite glows golden, the morning Thiruvanandal pooja is in progress, and crowds are minimal. Avoid mid-day (the granite courtyard becomes very hot, especially March–June). Sunset (around 5:30–6:30 PM) is similarly beautiful and cooler. The temple is closed 12:30–4:00 PM. Mondays and festival days draw the largest crowds.",
      },
      {
        question: "What's the connection to UNESCO World Heritage?",
        answer:
          "Brihadeeswara was inscribed as a UNESCO World Heritage Site in 1987 (originally as 'Brihadisvara Temple, Thanjavur'). In 2004, the inscription was extended and renamed 'Great Living Chola Temples' to include two sister temples: the Brihadeeswara at Gangaikonda Cholapuram (built by Raja Raja's son Rajendra I) and the Airavateswara Temple at Darasuram (built by Rajaraja II). All three are within 100 km of each other and can be visited as a single circuit.",
      },
      {
        question: "What's special about the Nandi here?",
        answer:
          "The Nandi at Brihadeeswara is a single monolith, 6 m long, 2.6 m wide, 3.7 m tall, weighing approximately 25 tonnes. It is the second-largest monolithic Nandi in India (after Lepakshi in Andhra). Unusually, it was added in the 16th century by the Nayaks, five centuries after the main temple, yet harmonises perfectly with the original Chola scale. The mandapam housing it dates from the same period. Devotees touch its feet and whisper their prayers into its ear, in the belief that Nandi conveys them directly to Shiva.",
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
    timings: { morning: "5:00 AM – 1:00 PM", evening: "3:00 PM – 9:00 PM", note: "Spatika (crystal) Lingam darshan is at ~5:00 AM (separate ticket). The 22 theertham baths are done in the morning. Start early, ideally before 7:00 AM." },
    entryFee: "Free darshan. Sparisa (touch) darshan and Spatika Lingam darshan are ticketed (₹50–100). Theertham bath: ₹25 ticket for all 22 wells.",
    dressCode: "Dhoti mandatory for men inside the sanctum (no shirt during abhishekam darshan). Saree/salwar for women. Carry a change of clothes for the theertham bath.",
    bestTime: "October – April (avoid the May–June heat and the October–December monsoon spells)",
    travelInfo: {
      byAir: "Madurai Airport (170 km) is the nearest. Tuticorin Airport (~140 km) is an alternative; both have connections to Chennai and Bengaluru.",
      byTrain: "Rameswaram Railway Station (1.5 km from the temple) sits on Pamban Island. Direct trains from Chennai, Madurai, Coimbatore, Tirupati and Kanyakumari. The line crosses the historic Pamban rail bridge.",
      byRoad: "Reached via the Pamban road bridge over the Palk Strait, the first sea bridge in India. Buses from Madurai (170 km, ~4 hrs), Chennai (570 km), Tiruchendur and Kanyakumari. The new Pamban vertical-lift sea bridge now runs alongside the old one.",
    },
    highlights: [
      "One of the 12 sacred Jyotirlingas and one of the four Char Dham, the southern dham of India",
      "The longest temple corridor in India: the third prakaram runs ~1,220 metres with over 1,200 ornately carved pillars",
      "22 sacred theerthams (holy wells) inside the temple: bathing in all 22 is the heart of the Rameswaram pilgrimage",
      "Two lingams in one sanctum, the Ramalingam moulded by Sita and the Vishwalingam brought by Hanuman from Kailash",
      "The climax of the Kashi–Rameswaram Sethu Yatra: pilgrims bring Ganga water here and carry Rameswaram sand back to the Ganges",
      "Set on Pamban Island, with Dhanushkodi and the legendary Ram Setu (Adam's Bridge) at its southern tip",
    ],
    history: "Rameswaram is among the holiest sites in Hinduism, sacred to both Shaivites and Vaishnavites, which is rare. According to the Ramayana, Lord Rama worshipped Shiva here to absolve the sin of Brahmahatya (the killing of Ravana, a learned Brahmin) on his return from Lanka. The temple is one of the 275 Paadal Petra Sthalams glorified in the Tevaram hymns of the Nayanmar saints. While the site's sanctity is ancient, the present stone temple was built and expanded over four centuries (12th–17th c.) chiefly by the Setupati kings of Ramanathapuram, with major additions by the Pandyas, the Jaffna kings of Sri Lanka, and later mercantile patrons. The towering east Rajagopuram was completed only in the 20th century.",
    architecture: "Ramanathaswamy is the supreme example of Dravidian corridor architecture. Its three concentric prakarams (corridors) culminate in the third, the longest temple corridor in India, around 1,220 metres in total, lined with more than 1,200 granite pillars about 9 metres tall, each carved with bracket figures and rearing yalis. The pillars create a famous receding optical perspective. The temple has a 53-metre east Rajagopuram and a lower western gopuram. Within lie the twin sanctums of Ramanathaswamy (the Ramalingam) and the Vishwalingam, the Parvathavardhini Amman shrine, the Sethu Madhava (Vishnu) shrine, and the 22 theertham wells distributed across the prakarams.",
    festivals: [
      { name: "Maha Shivaratri", month: "February–March", description: "The grandest festival, a 10-day celebration with four-prahara night-long abhishekams to the Jyotirlinga, processions of the utsava deities, and thousands taking the Agni Theertham sea bath at dawn.", slug: "maha-shivaratri" },
      { name: "Thirukalyanam (Vasanthotsavam)", month: "May–June", description: "The celestial wedding of Ramanathaswamy and Parvathavardhini, celebrated over ten days with the deities in splendid procession through the long corridors." },
      { name: "Ramalinga Pratishtai", month: "May–June (Vaikasi)", description: "Commemorates the original installation of the Ramalingam by Lord Rama, special abhishekam and recitation of the Ramayana." },
      { name: "Aadi Amavasai & Thai Amavasai", month: "July–Aug / Jan–Feb", description: "New-moon days for ancestor worship (tarpanam) when thousands bathe at Agni Theertham and perform rites for departed forebears." },
      { name: "Aarudhra Darshan (Thiruvadhirai)", month: "December–January", description: "Sacred to Shiva as Nataraja, special abhishekam and the procession of the Nataraja bronze." },
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
        "After slaying Ravana and rescuing Sita, Lord Rama stood burdened by Brahmahatya dosha, the gravest of sins, for Ravana was a Brahmin and a great devotee of Shiva. On the advice of the sages, Rama resolved to worship Shiva on the shore where his army had crossed to Lanka. He sent Hanuman to Mount Kailash to fetch a lingam, but the auspicious muhurta for installation drew near and Hanuman had not returned. So Sita moulded a lingam from the beach sand with her own hands, and Rama consecrated it. This is the Ramalingam, the principal deity Ramanathaswamy ('the Lord whose master is Rama'). When Hanuman arrived with the lingam from Kailash (the Vishwalingam) and was grieved to find another already installed, Rama consoled him by decreeing that the Vishwalingam, also called Kasilingam, would always be worshipped first, before the Ramalingam. That order of worship is honoured in the temple to this very day.",
      tirukalyanam:
        "The celestial marriage of Lord Ramanathaswamy and Goddess Parvathavardhini is re-enacted each year at Vasanthotsavam (May–June). The processional bronzes of the divine couple are borne in splendour through the temple's vast corridors, recalling the eternal union of Shiva and Shakti that the lingam at Rameswaram embodies.",
      additionalStories: [
        {
          title: "Hanuman, the Well of Atonement, and the Order of Worship",
          content:
            "Hanuman's lingam from Kailash could not be moved once Sita's sand lingam was installed; by one account he tried to uproot the Ramalingam with his tail and failed, the mark of his tail still shown on it. Rama's decree that the Vishwalingam be worshipped first turned a moment of disappointment into an everlasting honour for Hanuman. Both lingams stand together in the sanctum, and the temple is thus sacred to the bhakti of the greatest devotee as much as to the penance of the avatar himself.",
        },
        {
          title: "The Sethu, the Bridge of Floating Stones",
          content:
            "From the southern tip of the island at Dhanushkodi, Rama's vanara army built the Sethu (Ram Setu / Adam's Bridge) of floating stones to cross to Lanka, the stones bearing Rama's name. Bathing at the Sethu and at Dhanushkodi, where the Bay of Bengal meets the Indian Ocean, is part of the Rameswaram pilgrimage. It is said that on his return Rama broke the bridge with the end of his bow (dhanush-kodi, 'the bow's end') so it could never again be crossed.",
        },
        {
          title: "Kashi and Rameswaram, the Two Poles of Pilgrimage",
          content:
            "A pilgrimage to Kashi (Varanasi) is held to be incomplete without Rameswaram, and vice-versa. The classic Sethu Yatra binds them: the pilgrim carries Ganga water from Kashi to bathe the Ramalingam at Rameswaram, and carries sand from Rameswaram to immerse in the Ganga. The two shrines, the northern and the southern, are seen as the spiritual poles of the subcontinent, linking the Himalayan Ganga to the southern sea.",
        },
        {
          title: "The Twenty-Two Theerthams",
          content:
            "The Skanda Purana and local tradition hold that Rama created the sacred wells by shooting arrows into the earth to draw out the waters of the holy rivers, so his pilgrims would not have to travel to each one. Each of the 22 theerthams is identified with a sacred water or virtue, among them Mahalakshmi, Savitri, Gayatri, Saraswathi, Surya, Chandra, Ganga, Yamuna and the Brahmahatya Vimochana ('release from the sin of Brahmahatya') theertham. Bathing in all 22, well by well, washes away accumulated sins and is the ritual core of the Rameswaram pilgrimage.",
        },
      ],
    },
    architectureFeatures: [
      {
        name: "Third Prakaram (The Great Corridor)",
        nameTa: "மூன்றாம் பிரகாரம்",
        type: "mandapam",
        description: "The temple's crowning glory and the longest corridor in any Hindu temple, roughly 1,220 metres in total length around the complex, lined with over 1,200 granite pillars rising about 9 metres. The pillars stand on raised platforms with elaborate bracket figures and rearing yalis; the long colonnade produces a celebrated receding optical perspective. Built largely under the Setupati kings in the 17th–18th centuries.",
        detail: "~1,220 m · 1,200+ pillars · ~9 m high",
      },
      {
        name: "Garbhagriha, Ramalingam & Vishwalingam",
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
        description: "Distributed across the prakarams are 22 sacred wells (theerthams), each named for a holy water or virtue. Temple attendants draw water in buckets and pour it over pilgrims well by well; by tradition the bath begins at Agni Theertham, the sea itself, a short walk to the east, and proceeds through all 22 within the temple. The waters taste noticeably different from well to well despite their proximity.",
        detail: "22 wells + Agni Theertham (the sea)",
      },
      {
        name: "Sethu Madhava (Sweta Madhava) Shrine",
        type: "other",
        description: "A shrine to Vishnu within the Shaivite complex, a reminder that Rameswaram is sacred to both great traditions. Its presence reflects the temple's unique standing as a meeting point of Shaiva and Vaishnava devotion and of the Char Dham circuit that Adi Shankara is traditionally said to have established.",
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
        description: "The lingam Hanuman brought from Mount Kailash, installed beside the Ramalingam. By Lord Rama's own decree it receives worship before the main deity, a standing honour to Hanuman's devotion.",
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
      cloakRoom: "Footwear must be left outside; stalls and a temple deposit counter operate near the east gopuram for a small fee. Carry a dry change of clothes and a small towel for after the theertham bath; many lodges near the temple let pilgrims change and store bags.",
      mobilePolicy: "Mobile phones and cameras are NOT permitted inside the temple. This is strictly enforced, unlike at some other temples. Deposit them at the lockers/stalls outside the gopuram before entering. Keep your theertham and darshan tickets handy.",
      cameraPolicy: "Photography is prohibited inside the temple complex, including the corridors and sanctums. Cameras must be left at the deposit counters outside. You may photograph the gopurams and the temple exterior, and Agni Theertham (the sea-shore) freely.",
      wheelchairAccess: "The long corridors are largely level stone and broadly navigable, but the theertham bath involves wet, slippery floors and steps at the wells, which are difficult for wheelchair users. Assistance is informal. Ask temple staff or hire a local helper. Senior and differently-abled pilgrims often do a shortened darshan without all 22 baths.",
      seniorCitizenDarshan: "No formal priority queue on ordinary days, when crowds are manageable. During Maha Shivaratri, Aadi/Thai Amavasai and the Tamil festival season the queues for Sparisa darshan and the theertham bath are long. Arrive before 6:00 AM. Sparisa (touch) and Spatika Lingam darshan are ticketed and have their own shorter queues.",
      parking: "Vehicle parking is available near the temple and along the approach roads; the temple is about 1.5 km from Rameswaram railway station and walkable. Autos and cycle-rickshaws ply between the station, lodges and the temple gopuram.",
      restrooms: "Basic public restrooms and changing facilities are available near the temple and at the lodges around it. Many pilgrims use their hotel to change after the theertham bath. Carry your own tissue and sanitiser.",
      drinkingWater: "Drinking water is available within the complex and from stalls outside, but Rameswaram is hot and humid. Carry your own bottle, especially if doing the full 22-theertham bath and the long corridor walk. Note: the local groundwater is brackish; buy sealed water for drinking.",
    },
    sevas: [
      {
        name: "Spatika Lingam Darshan",
        description: "Darshan of the sacred crystal (spatika) lingam in the early morning before the main poojas, considered especially auspicious. Separate ticket; very limited time window.",
        time: "Daily, ~5:00 AM",
        fee: "₹100",
        type: "daily",
      },
      {
        name: "22 Theertham Snanam",
        description: "The signature Rameswaram ritual, a guided bath at all 22 sacred wells within the temple, water poured over you well by well by the temple attendants, beginning at Agni Theertham (the sea). The ritual core of the pilgrimage; allow 1–1.5 hours.",
        time: "Morning, 5:00–10:00 AM",
        fee: "₹25 (single ticket, all 22 wells)",
        type: "daily",
      },
      {
        name: "Sparisa (Touch) Darshan",
        description: "A ticketed darshan that permits devotees to approach and touch the lingam during the abhishekam window, a rare privilege at a Jyotirlinga.",
        time: "Twice daily, ~5:00 AM and ~5:00 PM",
        fee: "₹50",
        type: "daily",
      },
      {
        name: "Ganga Jala Abhishekam",
        description: "Abhishekam of the Ramalingam with Ganga water that pilgrims carry from Kashi (Varanasi), the culminating act of the Sethu Yatra. Sangam/temple priests assist; book at the temple office.",
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
        description: "Abhishekam performed on Pradosham evenings (Trayodashi tithi, twice a month) between sunset and dusk, one of the most auspicious of Shaivite observances.",
        time: "Pradosham evenings, ~5:30 PM",
        fee: "Free / sponsored",
        type: "monthly",
      },
      {
        name: "Tarpanam / Pitru Karya at Agni Theertham",
        description: "Ancestral rites (tarpanam, shraddha) performed on the Agni Theertham shore, especially on Amavasai days. Rameswaram is among the foremost places for rites for departed forebears. Arranged through the shore priests.",
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
        question: "What is the right order, sea bath, theerthams, then darshan?",
        answer:
          "The traditional sequence is: first bathe in the sea at Agni Theertham (the Bay of Bengal, a short walk east of the east gopuram), then enter the temple and take the 22 theertham bath well by well (a single ₹25 ticket covers all of them, and attendants pour the water over you), and only then proceed for darshan of the Ramalingam, ideally for Sparisa (touch) darshan or after the morning abhishekam. Spatika Lingam darshan, if you want it, is earliest at around 5:00 AM. Carry a dry change of clothes.",
      },
      {
        question: "What are the 22 theerthams and is bathing in all of them necessary?",
        answer:
          "The 22 theerthams are sacred wells inside the temple, each named for a holy river or virtue (Mahalakshmi, Savitri, Gayatri, Saraswathi, Surya, Chandra, Ganga, Yamuna, the Brahmahatya Vimochana theertham, and others). Tradition holds that Rama drew these waters with his arrows so pilgrims need not travel to each holy river. Bathing in all 22, in sequence, is the ritual heart of the Rameswaram pilgrimage and is believed to wash away accumulated sins. It is not compulsory, but most pilgrims do the full round; it takes about an hour to ninety minutes.",
      },
      {
        question: "Why are there two lingams, and which is worshipped first?",
        answer:
          "The principal lingam, the Ramalingam, was moulded from beach sand by Sita so Rama could complete his worship at the auspicious hour. The second, the Vishwalingam (or Kasilingam), was brought by Hanuman from Mount Kailash. When Hanuman arrived to find the sand lingam already installed, Rama consoled him by decreeing that the Vishwalingam would always be worshipped before the Ramalingam, and that order is followed to this day.",
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
          "Rameswaram is the southern dham of the Char Dham (Badrinath in the north, Dwarka in the west, Puri in the east, Rameswaram in the south), traditionally associated with Adi Shankara's establishment of the four cardinal pilgrimage seats. In the classic Sethu Yatra, pilgrims carry Ganga water from Kashi to bathe the Ramalingam here, and carry Rameswaram sand back to immerse in the Ganga, binding India's northern and southern poles of pilgrimage into one journey.",
      },
      {
        question: "Should I also visit Dhanushkodi and Gandhamadhana Parvatham?",
        answer:
          "Yes. They complete the Rameswaram pilgrimage. Dhanushkodi, at the island's southern tip (~18 km away), is where the Ram Setu bridge to Lanka began and where the Bay of Bengal meets the Indian Ocean; the ghost town and the new viewpoint road are worth the trip. Gandhamadhana Parvatham (~3 km), the highest point on the island, has a shrine enshrining Rama's footprint (Ramar Padam) and gives a panoramic view of the temple and the sea. Many pilgrims also visit the Five-faced Hanuman temple and the floating-stone relic nearby.",
      },
      {
        question: "How long should I plan for, and when is the best time to visit?",
        answer:
          "Allow at least half a day for the temple alone: the 22-theertham bath plus darshan and a walk through the great corridors takes 3–4 hours, longer on festival days. A full Rameswaram trip including Dhanushkodi, Gandhamadhana and the Pamban bridge is best done over two days. The best season is October to April; avoid the fierce heat of May–June and watch for the northeast monsoon spells (Oct–Dec). Early morning (before 7:00 AM) is the calmest and coolest time for the theertham bath.",
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
      byTrain: "Mylapore is well connected by Chennai MRTS (Light Rail) at the Mylapore station. Also accessible by Chennai Metro.",
      byRoad: "Located in the heart of Mylapore, Chennai. Auto-rickshaws and buses readily available.",
    },
    highlights: [
      "The anchor temple of Mylapore, Chennai's cultural and spiritual heart",
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
      "One of the Pancha Bhuta Stalas, representing the Fire (Agni) element",
      "The sacred Arunachala hill itself is considered a manifestation of Lord Shiva",
      "Karthigai Deepam, a massive beacon lit atop the hill visible for 30 km around",
      "Girivalam (pradakshina), a 14 km circumambulation of the Arunachala hill on full moon days",
      "Sri Ramana Maharshi's ashram is located at the foot of Arunachala",
    ],
    history: "The Arunachaleswarar Temple is one of the largest temple complexes in India, spread over 25 acres. The Arunachala hill (also called Annamalai) is believed to be a manifestation of Shiva as a column of fire. The temple's history spans over 2,000 years with references in ancient Tamil Sangam literature. Significant construction was done during the Vijayanagara and Hoysala periods.",
    architecture: "The temple has four magnificent gopurams facing each cardinal direction, with the eastern tower (Raja Gopuram) being one of the tallest in Tamil Nadu at 66 meters. The complex contains multiple mandapams and shrines. The innermost sanctum houses the Agni Lingam (fire lingam).",
    festivals: [
      { name: "Karthigai Deepam", month: "November–December", description: "A massive beacon (deepam) is lit atop the Arunachala hill, visible for miles. Millions of devotees gather." },
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
      "Shrine of Lord Ayyappa (Dharma Sastha), Hariharaputra, born of Shiva and Vishnu (as Mohini)",
      "Among the largest annual pilgrimages on earth, over 50 million devotees in the two-month season",
      "The 41-day vratham, the most demanding fast-and-discipline observance in the Hindu calendar; all pilgrims are equal and called 'Swami'",
      "Pathinettam Padi: 18 gold-plated holy steps, climbable only while carrying the irumudi kettu",
      "Makaravilakku & Makara Jyothi (14 January), the sacred light at Ponnambalamedu and the Thiruvabharanam procession from Pandalam",
      "A forest hilltop shrine inside the Periyar Tiger Reserve, reachable only on foot",
      "'Tatvamasi' ('That Thou Art'), the Upanishadic Mahavakya inscribed at the shrine; radical inclusivity across caste and religion",
    ],
    history: "Sabarimala is the forest shrine of Lord Ayyappa, also called Dharma Sastha, a deity venerated as Hariharaputra, the son of Hari (Vishnu in his Mohini form) and Hara (Shiva). The hill is named for Sabari, the elderly devotee of the Ramayana who awaited Rama in these forests. The shrine's roots are ancient, woven through the history of the Pandalam royal family, who by tradition raised Ayyappa as the prince Manikandan and to whom the Thiruvabharanam (sacred ornaments) still belong. After a fire in 1950 the sanctum was rebuilt and the panchaloha idol reconsecrated. The temple is administered by the Travancore Devaswom Board. What distinguishes Sabarimala above all is its ethos: pilgrims of every caste, class and religion observe the same vratham, wear the same austere black, and are addressed alike as 'Swami', a living embodiment of the Mahavakya 'Tatvamasi'.",
    architecture: "Unlike the grand Dravidian temples, Sabarimala is a deliberately austere forest shrine. Its heart is the Sreekovil (sanctum) atop the Pathinettam Padi, the eighteen sacred, now gold-plated, steps. Within the copper-roofed sanctum the idol of Ayyappa is seated in a yogic posture, the right hand in chin-mudra, a band (yogapatta) around the drawn-up knee. The Sannidhanam plateau around the sanctum holds the flagstaff (kodimaram), the Malikappuram shrine of the goddess, and shrines to Ayyappa's companions Kaduthaswami and Vavar. The true 'architecture' of Sabarimala, devotees say, is the pilgrimage itself, the river bath at Pamba, the climb up Neelimala, and the ascent of the eighteen steps.",
    festivals: [
      { name: "Mandala Pooja", month: "November–December", description: "Concludes the 41-day Mandala season (which opens on the first of Vrischikam, ~17 Nov). The deity is adorned and a grand deeparadhana performed; the vast majority of pilgrims time their trek to this period.", slug: "sabarimala-season" },
      { name: "Makaravilakku", month: "14 January (Makara Sankranti)", description: "The spiritual climax: the Makara Jyothi star is sighted and the sacred Makaravilakku light appears thrice at Ponnambalamedu, while the Thiruvabharanam ornaments arrive in procession from Pandalam to adorn the idol.", slug: "sabarimala-season" },
      { name: "Petta Thullal (Erumeli)", month: "During season", description: "An ecstatic ritual dance performed by pilgrims at Erumeli, re-enacting the warriors' hunt for the demoness Mahishi. Pilgrims smear themselves with colour and dance to 'Swamiye Saranam Ayyappa' before continuing the trek." },
      { name: "Vishu", month: "April", description: "The Malayalam New Year, one of the few occasions outside the main season when the temple opens, with the Vishukkani arrangement before the deity." },
    ],
    poojas: [
      { name: "Neyyabhishekam", time: "Early morning (season)", fee: "Ghee from the pilgrim's own irumudi coconut" },
      { name: "Udayasthamana Pooja", time: "Dawn to dusk", fee: "Sponsored (book via TDB)" },
      { name: "Padi Pooja (worship of the 18 steps)", time: "Night, on select days", fee: "Sponsored (long waiting list)" },
      { name: "Harivarasanam", time: "~11:00 PM (closing)", fee: "Free, the lullaby sung as the sanctum doors close" },
    ],
    nearbyTemples: ["padmanabhaswamy-trivandrum", "attukal-bhagavathy"],
    mythology: {
      legend:
        "When the demoness Mahishi, sister of the slain Mahishasura, won a boon that she could be killed only by a child born of both Shiva and Vishnu, the devas turned to the two great gods. Vishnu took the enchanting female form of Mohini, and from his union with Shiva was born a radiant boy bearing a golden bell (mani) around his neck. The infant was left on the banks of the river Pampa, where the childless King Rajasekara of Pandalam found and adopted him, naming him Manikandan. The prince grew into a being of miraculous power and wisdom. When a court intrigue sent him into the forest to fetch tigress's milk for the queen, he returned riding a tigress, and his divinity could no longer be hidden. Manikandan asked the king to build a temple where his arrow fell, at Sabarimala, then shot his arrow, ascended the hill, and merged into the idol of Dharma Sastha, seated forever in yogic stillness facing the eighteen steps.",
      tirukalyanam:
        "Ayyappa is a Naishtika Brahmachari, an eternal celibate ascetic, so Sabarimala has no celestial-wedding festival. Instead the lore tells of Malikappurathamma, the goddess in the adjacent shrine, who longs to marry Ayyappa. He promised he would wed her only in the year no Kanni-Swami (a first-time pilgrim) comes to him. Since first-timers arrive every single year, the marriage is forever deferred, and her unfulfilled waiting is honoured in her own sannidhi beside his.",
      additionalStories: [
        {
          title: "The 41-Day Vratham and the Irumudi",
          content:
            "A pilgrim becomes an Ayyappan by taking the mala, a string of tulsi or rudraksha beads, and observing 41 days of vratham: celibacy, vegetarian or sattvic food, no alcohol, sleeping on the floor, walking barefoot, controlling anger and speech, and treating every other pilgrim as Ayyappa himself. The penance dissolves rank and ego; a labourer and a millionaire walk identically clad in black. At its end the pilgrim packs the irumudi kettu, a two-pouch cloth bundle carried on the head. The front holds offerings, above all the mudra-coconut filled with ghee for the Neyyabhishekam; the rear holds personal provisions for the trek. No one may climb the eighteen steps without an irumudi on the head.",
        },
        {
          title: "Vavar, the Companion of Ayyappa",
          content:
            "Among Ayyappa's closest companions in the war against Mahishi's forces was Vavar, by tradition a Muslim warrior and saint. At Erumeli, where the trek traditionally begins, pilgrims worship at both the Vavar mosque and the Sastha temple before setting out, and a shrine to Vavar (Vavaru Swami) stands beside Ayyappa's own at the Sannidhanam. This shared veneration makes Sabarimala one of India's most powerful living symbols of Hindu–Muslim harmony.",
        },
        {
          title: "The Eighteen Steps (Pathinettam Padi)",
          content:
            "The eighteen gold-clad steps are themselves divine and are worshipped. The most common interpretation reads them as the obstacles the soul must transcend: the first five as the five senses (indriyas), the next eight as the eight ragas or passions (kama, krodha, lobha, moha, mada, matsarya, asuya, dambha), the next three as the three gunas (sattva, rajas, tamas), and the final two as vidya and avidya, knowledge and ignorance. Having shed all eighteen, the pilgrim stands before the deity as pure consciousness, realising 'Tatvamasi', That Thou Art.",
        },
        {
          title: "Makara Jyothi and the Light at Ponnambalamedu",
          content:
            "On Makara Sankranti (14 January), as dusk falls, devotees at the Sannidhanam turn toward the distant hill of Ponnambalamedu to behold the Makaravilakku, a sacred light that appears three times, while overhead the Makara Jyothi star rises. The moment coincides with the adorning of the idol in the Thiruvabharanam, the golden ornaments carried on foot in procession from the Pandalam palace. For the assembled millions chanting 'Swamiye Saranam Ayyappa', it is the supreme darshan of the season.",
        },
      ],
    },
    architectureFeatures: [
      {
        name: "Pathinettam Padi (The 18 Holy Steps)",
        nameTa: "பதினெட்டாம் படி",
        type: "other",
        description: "The eighteen sacred steps leading to the Sreekovil, now clad in gold (panchaloha) and themselves objects of worship. Only a pilgrim carrying the irumudi kettu on the head may ascend them; each step is venerated as a stage in shedding the senses, passions, gunas, and finally knowledge and ignorance, until the soul realises 'Tatvamasi'.",
        detail: "18 gold-plated steps · irumudi required to climb",
      },
      {
        name: "Sreekovil (Sanctum)",
        type: "sanctum",
        description: "The copper-roofed inner sanctum atop the eighteen steps, housing the panchaloha idol of Ayyappa as Dharma Sastha. The deity is seated in a yogic posture, the right hand in chin-mudra, a yogapatta band around the drawn-up knee, gazing eternally down the eighteen steps. The present idol was consecrated after the 1950 fire.",
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
        description: "The shrine of the goddess Malikappurathamma, a short distance from the main sanctum, with its own ritual life, including the nightly procession and the lore of her eternal wait to wed the celibate Ayyappa. A major focus of devotion in its own right.",
      },
      {
        name: "Pamba & Neelimala Ascent",
        type: "other",
        description: "Pamba, on the holy river of the same name, is the principal base camp where pilgrims bathe before the climb. From here the path rises steeply up Neelimala and through forest to the Sannidhanam, about 5 km, the final and most demanding stretch of the journey.",
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
        description: "The presiding goddess whose shrine stands near the main sanctum. By legend she waits to marry Ayyappa in the year no first-time pilgrim (Kanni-Swami) arrives, a wait renewed every season. Her nightly rituals and procession are central to the Sabarimala experience.",
      },
      {
        name: "Vavaru Swami (Vavar)",
        deity: "Ayyappa's Muslim companion-saint",
        description: "A shrine to Vavar, the warrior-saint who fought alongside Ayyappa. Worshipped by all pilgrims, together with the Vavar mosque at Erumeli, as an enduring symbol of inter-faith harmony.",
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
        { name: "Pathinettam Padi (Main Ascent)", direction: "North", notes: "The eighteen holy steps, the only route to the sanctum for irumudi-bearing pilgrims. Non-irumudi visitors use the separate side approach and cannot climb the steps." },
      ],
      cloakRoom: "Pilgrims travel light by design. Footwear is left at Pamba or the foot of the climb; lockers and deposit counters operate at Pamba and the Sannidhanam for valuables. The irumudi is never set down carelessly. It is the pilgrim's sanctified burden until the Neyyabhishekam.",
      mobilePolicy: "Phones are best left at Pamba lockers or kept switched off. There is limited and unreliable mobile coverage on the hill, and the sanctum area is meant for chanting and darshan, not calls.",
      cameraPolicy: "Photography is prohibited at and around the sanctum and the eighteen steps. Treat the Sannidhanam as a place of penance, not sightseeing; follow the directions of the police and Devaswom staff, who manage immense crowds.",
      wheelchairAccess: "The terrain is a steep forest hill reached only on foot, so it is inherently difficult for those with limited mobility. A 'doli' (palanquin carried by porters) service and tractor/ambulance facilities operate between Pamba and the Sannidhanam for the elderly and infirm, for a fee.",
      seniorCitizenDarshan: "There is no shortcut to the climb, but doli (palanquin) bearers can carry elderly or unwell pilgrims up from Pamba. Medical camps with oxygen and emergency care are stationed along the route and at the Sannidhanam during season; the altitude and exertion cause real strain, so the unwell should consult a doctor before undertaking the trek.",
      parking: "During season private vehicles are stopped at the Nilackal base camp (~20 km below Pamba); from there KSRTC chain-service buses shuttle pilgrims to Pamba. Plan for long waits at peak times.",
      restrooms: "Toilets, bathing ghats and changing facilities are provided at Pamba and at intervals on the route and at the Sannidhanam. Facilities are heavily used during season; carry your own essentials.",
      drinkingWater: "Drinking-water points and Annadanam (free meals) are available at Pamba and the Sannidhanam. Carry water for the climb itself; the trek is strenuous and, despite the altitude, can be hot by midday.",
    },
    sevas: [
      {
        name: "Neyyabhishekam",
        description: "The defining ritual of the pilgrimage: the idol is anointed with the ghee carried in the pilgrim's own mudra-coconut from the irumudi. The emptied coconut shells are then offered into the sacred fire. Performed in the early morning during season.",
        time: "Early morning (season)",
        fee: "From the pilgrim's irumudi (no separate fee)",
        type: "daily",
      },
      {
        name: "Udayasthamana Pooja",
        description: "A full day of poojas sponsored from sunrise to sunset in the devotee's name, among the most sought-after sevas, with a long advance waiting list.",
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
        description: "Anointing of the idol with sandalwood paste (kalabham), cooling and fragrant, offered on special days.",
        time: "Special days (season)",
        fee: "Sponsored",
        type: "special",
      },
      {
        name: "Pushpabhishekam",
        description: "The idol is covered entirely in flowers, a spectacular darshan offered on select occasions during the season.",
        time: "Select days (season)",
        fee: "Sponsored",
        type: "special",
      },
      {
        name: "Aravana & Appam Prasadam",
        description: "The famous prasadams of Sabarimala, Aravana (a sweet rice-jaggery payasam) and Appam, prepared at the temple in vast quantities and carried home by pilgrims. Sold in sealed tins at the Sannidhanam.",
        time: "All day (season)",
        fee: "Fixed price per tin",
        type: "daily",
      },
      {
        name: "Harivarasanam",
        description: "Not a paid seva but the day's tender close: the Harivarasanam lullaby is sung as the lamps are dimmed and the sanctum doors shut for the night, putting Ayyappa to sleep.",
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
          "The irumudi is a two-compartment cloth bundle carried on the head. The front pouch holds the offerings, above all the mudra-coconut filled with ghee for the Neyyabhishekam; the rear holds the pilgrim's own provisions for the journey. It is filled in a solemn ceremony at the end of the vratham. Crucially, only a pilgrim bearing the irumudi on the head is permitted to climb the eighteen holy steps to the sanctum.",
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
          "On Makara Sankranti (14 January) at dusk, pilgrims at the Sannidhanam witness the Makaravilakku, a sacred light that appears three times on the distant hill of Ponnambalamedu, while the Makara Jyothi star rises overhead. The moment coincides with the adorning of the idol in the Thiruvabharanam ornaments brought in procession from Pandalam. It is the spiritual climax of the season and draws the largest crowds; plan well ahead if you intend to be there.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "Yes, during season the Travancore Devaswom Board operates a virtual-queue (spot booking) system to manage the enormous crowds, and a daily cap on pilgrim numbers. Book your darshan date online before travelling, and allow generous time, as queues, the Nilackal–Pamba shuttle, and the climb itself can each take hours at peak periods.",
      },
      {
        question: "What prasadam should I bring home?",
        answer:
          "The two famous prasadams are Aravana (a rich sweet payasam of rice and jaggery) and Appam, both prepared at the temple and sold in sealed tins at the Sannidhanam. The emptied ghee from your Neyyabhishekam coconut is also taken home as sacred prasadam. Buy only from the official Devaswom counters.",
      },
    ],
  },
  "ranganathaswamy-srirangam": {
    slug: "ranganathaswamy-srirangam",
    timings: { morning: "6:00 AM – 1:00 PM", evening: "3:15 PM – 9:00 PM", note: "Viswaroopa Darshan (the first darshan of the reclining Lord) is around 6:45 AM and is especially auspicious. The sanctum closes for short intervals between poojas." },
    entryFee: "Free darshan. Quick/special darshan ticket ~₹250. Separate tickets for the Viswaroopa darshan, the Aayiram Kaal (1000-pillar) hall, and the temple museum.",
    dressCode: "Traditional attire: dhoti/veshti or pyjama-kurta for men, saree/salwar for women. No shorts, sleeveless tops, or Bermudas inside.",
    bestTime: "October – March. Vaikunta Ekadasi (December–January) is the spiritual peak but the most crowded.",
    travelInfo: {
      byAir: "Tiruchirapalli (Trichy) International Airport (~13 km) is the nearest, with domestic flights and Gulf/Southeast-Asia connections.",
      byTrain: "Srirangam Railway Station (~2 km) is on the Trichy line; Tiruchirapalli Junction (~9 km) is a major hub with trains from Chennai, Madurai, Bengaluru and beyond.",
      byRoad: "Srirangam is an island town just north of Trichy, between the Cauvery and Kollidam rivers. City buses and autos run constantly from Trichy (~10 km). Chennai is ~330 km, Madurai ~140 km, Thanjavur ~55 km.",
    },
    highlights: [
      "The largest functioning Hindu temple complex in the world: 156 acres, seven concentric prakarams, 21 gopurams",
      "The Rajagopuram is the tallest temple tower in Asia at ~73 m (236 ft), 13 tiers, completed in 1987",
      "The foremost of the 108 Divya Desams, 'Bhoolokha Vaikuntham', heaven on earth; the only Divya Desam praised by all 12 Alvars",
      "Lord Ranganatha reclines on the serpent Adisesha, facing south toward Lanka to bless Vibhishana",
      "The gold-plated Sri Ranga Vimana over the sanctum is shaped like the sacred 'Om' (Pranavakara)",
      "The spiritual home of Sri Ramanuja, whose preserved body (Thirumeni) is enshrined here",
      "UNESCO Asia-Pacific Award of Merit (2017) for heritage conservation",
    ],
    history: "Sri Ranganathaswamy is the greatest of the Vaishnava temples and the largest functioning temple complex on earth, spread across 156 acres on an island in the Cauvery near Tiruchirapalli. Its sanctity is recorded in the Sangam-era Tamil classic Silappathikaram and glorified by all twelve Alvar poet-saints (7th–9th centuries). Successive dynasties (Cholas, Pandyas, Hoysalas, the Vijayanagara emperors, the Nayaks of Madurai and the Marathas) each added prakarams, gopurams and mandapams over a thousand years, producing the vast concentric town-temple seen today. The 11th–12th century philosopher Sri Ramanuja made Srirangam the headquarters of Sri Vaishnavism and reorganised its worship; his enshrined body remains a focus of pilgrimage. The temple endured the trauma of the 1311 CE invasion by Malik Kafur, when the festival deity was carried into hiding for some sixty years and thousands of devotees died defending the shrine. The towering Rajagopuram, begun in the Vijayanagara era and left unfinished for centuries, was finally completed only in 1987.",
    architecture: "Srirangam is built as seven rectangular concentric enclosures (prakarams) around the sanctum, the outermost forming a living temple-town of streets, homes and shops, the inner four reserved for worship. Twenty-one gopurams punctuate the walls, crowned by the 73-metre Rajagopuram on the south, the tallest temple tower in Asia. Over the sanctum rises the gold-plated Sri Ranga Vimana, uniquely shaped like the Pranava ('Om'), sheltering the reclining Ranganatha on Adisesha. The complex is a museum of South Indian sculpture across dynasties: the Sesharaya Mandapam with its rearing-horse (yali) war-horse pillars, the Garuda Mandapam, the Venugopala shrine's exquisite maidens, and the 'Aayiram Kaal' thousand-pillared hall (actually 953 granite pillars). The temple's conservation won a UNESCO award in 2017.",
    festivals: [
      { name: "Vaikunta Ekadasi & Adhyayana Utsavam", month: "December–January (Margazhi)", description: "The grandest festival, a 21-day Pagal Pathu and Ra Pathu celebration centred on the opening of the Paramapada Vasal ('Gateway to Heaven'). The deity is brought to the thousand-pillared hall and the entire Nalayira Divya Prabandham is recited, including the unique Araiyar Sevai. Lakhs pass through the Heaven's Gate.", slug: "vaikunta-ekadasi-tirupati" },
      { name: "Chithirai Brahmotsavam", month: "April–May", description: "The annual ten-day Brahmotsavam with the Lord processed daily on different vahanas through the prakarams, culminating in the grand car (ther) festival." },
      { name: "Panguni Uttiram (Serthi Utsavam)", month: "March–April", description: "The one day of the year Ranganatha and Sri Ranganayaki Thayar give joint darshan (Serthi) on the same dais, a rare and deeply cherished sight, as Thayar otherwise stays in her own shrine." },
      { name: "Jyeshtabhishekam", month: "June–July (Aani)", description: "A three-day summer ritual in which the deity's golden armour and ornaments are removed and a grand abhishekam performed to cool and cleanse the Lord." },
      { name: "Andal Thirukalyanam", month: "July–August (Aadi Pooram)", description: "The celestial wedding of Andal, the Alvar-saint who longed only for Ranganatha, celebrated with great devotion." },
    ],
    poojas: [
      { name: "Viswaroopa Darshan", time: "~6:45 AM", fee: "Ticketed" },
      { name: "Sahasranama / Thirumanjanam (Abhishekam)", time: "Morning", fee: "Sponsored" },
      { name: "Special (Quick) Darshan", time: "Through the day", fee: "₹250" },
      { name: "Aravanai / Ekantha Seva (Night)", time: "~8:45 PM", fee: "Free" },
    ],
    nearbyTemples: ["brihadeeswara-thanjavur", "sarangapani-kumbakonam"],
    mythology: {
      legend:
        "The Sri Ranga Vimana, the shrine of the reclining Vishnu, is said to be self-manifest, first worshipped by Brahma himself, who passed it to the Sun dynasty (Ikshvaku) of Ayodhya. There it was venerated by generations of kings, including Lord Rama. After Rama's coronation, in gratitude for his devotion, he gifted the vimana and its deity to Vibhishana, the righteous brother of Ravana, to carry home and worship in Lanka. As Vibhishana journeyed south he rested on the island of Srirangam in the Cauvery and set the vimana down on the riverbank. When he tried to lift it again, it would not move: the Lord had chosen this island, between the two arms of the sacred river, as his eternal resting place. Ranganatha consented to remain at Srirangam but, to honour Vibhishana's devotion, turned to recline facing south, toward Lanka, so that he might bless his devotee forever. To this day the Lord lies gazing south, and Vibhishana is believed to come each night to worship.",
      tirukalyanam:
        "Sri Ranganatha's consort is Sri Ranganayaki, called Thayar ('Divine Mother'). Uniquely, the two share a joint darshan (Serthi) only once a year, at Panguni Uttiram, for Thayar, as the supreme mediatrix between the soul and the Lord, keeps to her own shrine the rest of the year. The temple also celebrates the Thirukalyanam of Andal, the girl-saint of Srivilliputhur who vowed to marry none but Ranganatha and, by tradition, merged into him at Srirangam itself.",
      additionalStories: [
        {
          title: "Thiruppaan Alvar and the Lord's Command",
          content:
            "Thiruppaan Alvar, a saint of humble birth, would stand on the far bank of the Cauvery singing to Ranganatha, never daring to enter the temple. One morning the temple priest Lokasaranga Muni, going to fetch water, ordered the saint out of the path and, when he did not stir from his trance, struck him with a stone. That night the Lord appeared to the priest in a dream and commanded him to carry Thiruppaan Alvar into the sanctum on his own shoulders. Borne to the very sanctum, the saint poured out the ten verses of the Amalanadipiran in praise of the Lord from foot to crown, and, completing them, merged into the deity before the eyes of all. The episode gave the saint his name 'Munivahana' (carried on the sage's shoulders) and remains the temple's parable of devotion above birth.",
        },
        {
          title: "Sri Ramanuja, the Master of Srirangam",
          content:
            "The 11th–12th century acharya Sri Ramanuja (traditionally 1017–1137) made Srirangam the world centre of Sri Vaishnavism and of his Vishishtadvaita philosophy. He systematised the temple's daily worship, its festival calendar and its administration, dividing duties among the temple servitors in arrangements still partly followed. By tradition his body was preserved after death and enshrined within the temple, seated as in life; the Ramanuja sannidhi, with its 'Thaan Ana Thirumeni' ('the body that is himself'), is venerated by every pilgrim. His Sri Bhashya commentary, taught here, shaped the devotional theology of South India.",
        },
        {
          title: "Thulukka Nachiyar and the Lord's Journey to Delhi",
          content:
            "When Malik Kafur's army sacked Srirangam in 1311, the festival deity Azhagiya Manavalan was spirited away and, by one account, ended up in the Delhi Sultanate's court, where the Sultan's daughter grew devoted to the beautiful image and kept it with her. Srivaishnava devotees journeyed north to recover it; the princess, by the legend, followed the Lord south and, unable to be parted, attained him at Srirangam. She is enshrined as Thulukka Nachiyar (Bibi Nachiyar), and to this day the Lord is offered chapati and butter and is dressed in a manner honouring her, a striking testament to the temple's memory of that turbulent age.",
        },
        {
          title: "The Defence of the Lord and the Hidden Sanctum",
          content:
            "During the invasions, the Srivaishnava acharyas walled up the inner sanctum to conceal the immovable Moolavar (root deity) and led the festival deity to safety across the Deccan, even to Tirupati. Tradition holds that thousands of devotees laid down their lives defending the shrine, and that the deity was away for some sixty years before being ceremonially restored. The episode is remembered each year, and the temple's later fortifications and the long-unfinished Rajagopuram are read by devotees as scars and renewals of that history.",
        },
      ],
    },
    architectureFeatures: [
      {
        name: "Rajagopuram",
        nameTa: "ராஜகோபுரம்",
        type: "gopuram",
        description: "The southern gateway tower, at about 73 metres (236 ft) and 13 tiers, the tallest temple gopuram in Asia. Its base was laid in the Vijayanagara period but the tower stood as an unfinished stump for over four centuries; it was completed in white-and-gold stucco only in 1987 under the 44th Jeeyar of the Ahobila Mutt. It is visible for miles across the Cauvery plain.",
        detail: "~73 m · 13 tiers · completed 1987",
      },
      {
        name: "Sri Ranga Vimana (Pranavakara Vimana)",
        nameTa: "ஸ்ரீ ரங்க விமானம்",
        type: "vimana",
        description: "The gold-plated tower directly over the sanctum, shaped like the sacred syllable 'Om' (Pranava), hence Pranavakara Vimana. Considered self-manifest and beyond ordinary construction, it shelters the reclining Ranganatha and is the holiest point of the entire complex.",
        detail: "Gold-plated · shaped like 'Om'",
      },
      {
        name: "Garbhagriha, Ranganatha on Adisesha",
        type: "sanctum",
        description: "The inner sanctum houses the colossal reclining form of Lord Ranganatha stretched upon the coils of the serpent Adisesha, his head to the west and feet to the east, face turned south toward Lanka. The Moolavar (immovable deity) here is the heart of the temple; the festival image, Azhagiya Manavalan, processes outside on his behalf.",
        detail: "Reclining Vishnu, facing south",
      },
      {
        name: "Seven Prakarams",
        type: "other",
        description: "Seven concentric rectangular enclosures wrap the sanctum, named (from outermost inward) Chitra, Thiruvikrama, Akalanka, Alinadan, Kulasekaran, Rajamahendran and Dharmavarman. The outer enclosures form a populated temple-town of streets and houses; only past the fourth wall does worship space begin. The total outer perimeter runs about 4 km.",
        detail: "7 enclosures · ~4 km outer perimeter",
      },
      {
        name: "Sesharaya Mandapam",
        type: "mandapam",
        description: "A Vijayanagara-era hall on the fourth prakaram famous for its monolithic war-horse pillars, rearing yalis and cavalrymen carved leaping from single granite blocks, among the masterpieces of 16th-century Nayaka sculpture.",
      },
      {
        name: "Aayiram Kaal Mandapam (Thousand-Pillar Hall)",
        nameTa: "ஆயிரம் கால் மண்டபம்",
        type: "mandapam",
        description: "The great hall of (nominally) a thousand pillars, in fact 953 granite columns arranged in ordered rows, built in the Chola–Vijayanagara periods. It is the setting for the climactic rituals of the Adhyayana Utsavam during Vaikunta Ekadasi.",
        detail: "953 pillars",
      },
      {
        name: "Venugopala Shrine",
        type: "other",
        description: "A shrine in the south-western part of the complex celebrated for the sensuous perfection of its carvings, gopis and dancers around Krishna playing the flute, rated among the finest figural sculpture in any Tamil temple.",
      },
      {
        name: "Paramapada Vasal (Gateway to Heaven)",
        type: "other",
        description: "The 'Sorga Vasal', a normally-sealed doorway opened only for the ten days around Vaikunta Ekadasi, through which devotees pass behind the festival deity in the belief that it grants liberation (moksha). The single most sought-after passage in the Srivaishnava year.",
      },
    ],
    subShrines: [
      {
        name: "Sri Ranganayaki Thayar",
        deity: "Goddess Lakshmi, consort of Ranganatha",
        description: "The Divine Mother in her own large shrine within the complex, so central that the temple is as much hers as the Lord's. She gives joint darshan with Ranganatha only on Panguni Uttiram; the rest of the year devotees approach her separately as the compassionate mediatrix who carries the soul's plea to the Lord.",
      },
      {
        name: "Udayavar (Sri Ramanuja)",
        deity: "The Acharya Sri Ramanuja",
        description: "The shrine enshrining the preserved body of Sri Ramanuja, seated as in life. Revered as 'Thaan Ana Thirumeni', the form that is the master himself, and venerated by every pilgrim as the founder of the temple's living tradition.",
      },
      {
        name: "Chakkarathazhwar (Sudarshana)",
        deity: "The Discus of Vishnu",
        description: "The fierce form of the Lord's Sudarshana chakra, worshipped on the reverse face with Narasimha. A powerful shrine sought for protection and the removal of evil.",
      },
      {
        name: "Thiruppaan Alvar & the Alvars",
        deity: "The twelve Alvar poet-saints",
        description: "Srirangam, praised by all twelve Alvars, honours them with shrines, most movingly Thiruppaan Alvar, the humble singer who merged into the deity. Their Nalayira Divya Prabandham is recited here daily.",
      },
      {
        name: "Thulukka Nachiyar (Bibi Nachiyar)",
        deity: "The Sultan's daughter devoted to the Lord",
        description: "The shrine remembering the princess who loved the festival deity during its sojourn in the north. The Lord is offered chapati and butter in her honour, a unique custom born of the temple's medieval history.",
      },
      {
        name: "Dhanvantari",
        deity: "The Divine Physician",
        description: "A rare shrine to Dhanvantari, the physician of the gods; the theertham (sacred water) given here is taken by devotees as medicine for health and healing.",
      },
      {
        name: "Andal & Garuda",
        deity: "Andal and the eagle-mount of Vishnu",
        description: "Andal, the girl-saint who wished only for Ranganatha, and Garuda, the Lord's vahana before whom devotees first offer prayers, both with shrines along the prakarams.",
      },
    ],
    visitorLogistics: {
      gates: [
        { name: "Rajagopuram (South Main Entrance)", direction: "South", notes: "The principal entrance beneath Asia's tallest gopuram, opening onto the long axis of streets leading inward through successive gateways to the sanctum." },
        { name: "Vellai Gopuram approach", direction: "North", notes: "The northern gateways connect toward the Cauvery; pilgrims combining a river bath often enter from this side." },
      ],
      cloakRoom: "Footwear must be removed before the inner prakarams; stalls and a deposit counter operate near the main gates. The outer prakarams are public streets where footwear is allowed, so note where the sacred boundary begins.",
      mobilePolicy: "Mobile phones are generally allowed in the outer prakarams but should be silenced; switch them off near the sanctum. Follow staff instructions, especially during the heavy Vaikunta Ekadasi crowds.",
      cameraPolicy: "Photography is prohibited inside the inner prakarams and the sanctum. The gopurams, the outer streets and the mandapams are often photographable; the temple museum and the thousand-pillar hall may have separate camera rules and tickets.",
      wheelchairAccess: "The vast complex involves long walks across several enclosures, but the ground is largely flat and broad. Wheelchairs can manage most outer and middle prakarams; the inner sanctum approach has steps and tighter spaces. Assistance is informal. Ask temple staff.",
      seniorCitizenDarshan: "A special/quick darshan ticket (~₹250) considerably shortens the wait and is well worth it for seniors, especially given the distances involved. During Vaikunta Ekadasi the queues for the Paramapada Vasal are immense. Plan for several hours and arrive very early.",
      parking: "Parking is available near the main gopuram and around the temple town; autos and city buses run frequently from Trichy and Srirangam station. The inner streets are best covered on foot.",
      restrooms: "Public restrooms and drinking-water points are available near the main entrances and within the outer prakarams. Facilities are stretched on festival days; carry your own essentials.",
      drinkingWater: "Drinking water and Annadanam (free prasadam meals on many days) are available within the complex. The Cauvery-island climate is hot for much of the year. Carry water, particularly April–June.",
    },
    sevas: [
      {
        name: "Viswaroopa Seva",
        description: "The first darshan of the day, when the sanctum opens to reveal the reclining Lord in his full 'cosmic' form (Viswaroopam) before the day's adornment, considered an especially blessed sight.",
        time: "Daily, ~6:45 AM",
        fee: "Ticketed",
        type: "daily",
      },
      {
        name: "Thirumanjanam (Abhishekam)",
        description: "The sacred bathing of the deity with milk, curds, honey, sandal and holy water amid Vedic and Prabandham recitation. Sponsored on chosen days.",
        time: "Morning (select days)",
        fee: "Sponsored",
        type: "special",
      },
      {
        name: "Sahasranama Archana",
        description: "Recitation of the Vishnu Sahasranama (the 1,000 names) in the devotee's name and star, with offering of tulsi.",
        time: "Daily on request",
        fee: "Modest archana fee",
        type: "daily",
      },
      {
        name: "Unjal (Swing) Seva",
        description: "The festival deities are seated on a decorated swing and gently rocked to the singing of Prabandham hymns, performed on Fridays and festival occasions.",
        time: "Fridays / festivals",
        fee: "Sponsored",
        type: "weekly",
      },
      {
        name: "Araiyar Sevai",
        description: "A rare hereditary art surviving chiefly at Srirangam: the Araiyars sing and enact the Nalayira Divya Prabandham with hand-gestures and cymbals before the deity, above all during the Adhyayana Utsavam of Margazhi.",
        time: "Adhyayana Utsavam (Dec–Jan)",
        fee: "Free to witness",
        type: "special",
      },
      {
        name: "Ekantha Seva (Night Rest)",
        description: "The final ritual of the day, when the Lord is put to rest with lullabies; devotees may witness the close of the temple's daily cycle.",
        time: "Daily, ~8:45 PM",
        fee: "Free",
        type: "daily",
      },
    ],
    faqs: [
      {
        question: "Why does Lord Ranganatha face south?",
        answer:
          "By the temple's central legend, Vibhishana, Ravana's righteous brother, was carrying the self-manifest Sri Ranga Vimana, gifted by Lord Rama, home to Lanka. He rested it on the Cauvery island at Srirangam and found he could not lift it again, for the Lord had chosen the spot as his eternal home. To honour Vibhishana's devotion, Ranganatha agreed to stay but turned to recline facing south, toward Lanka, so he could bless his devotee forever. The Lord lies gazing south to this day.",
      },
      {
        question: "Is Srirangam really the largest temple in the world?",
        answer:
          "It is the largest functioning Hindu temple complex in the world, about 156 acres, enclosed by seven concentric prakarams with 21 gopurams and an outer perimeter of roughly 4 km. Angkor Wat in Cambodia covers more ground but is no longer an active temple, so Srirangam holds the distinction among living temples.",
      },
      {
        question: "What is the significance of Vaikunta Ekadasi here?",
        answer:
          "Vaikunta Ekadasi (Margazhi, Dec–Jan) is Srirangam's greatest festival, the climax of the 21-day Adhyayana Utsavam (Pagal Pathu and Ra Pathu). Its heart is the opening of the Paramapada Vasal, the 'Gateway to Heaven', normally sealed all year. Devotees who pass through behind the festival deity during its ten open days believe they receive a vision of liberation. The entire Nalayira Divya Prabandham is recited and the unique Araiyar Sevai is performed. Expect enormous crowds. Arrive very early.",
      },
      {
        question: "Who was Sri Ramanuja and why is he enshrined here?",
        answer:
          "Sri Ramanuja (traditionally 1017–1137) was the great acharya of Vishishtadvaita philosophy and the organiser of Sri Vaishnavism, who made Srirangam his headquarters. He reformed the temple's worship and administration and taught his Sri Bhashya here. By tradition his body was preserved after death and is enshrined, seated as in life, in the Ramanuja sannidhi, venerated as 'the form that is the master himself' and a required stop for every pilgrim.",
      },
      {
        question: "Can I see the Goddess and the Lord together?",
        answer:
          "Only once a year. Sri Ranganayaki Thayar keeps to her own shrine throughout the year as the soul's mediatrix; she and Ranganatha give joint darshan (Serthi) together only on Panguni Uttiram (March–April). The rest of the year you have darshan of each separately, and Thayar's shrine is itself one of the most beloved in the complex.",
      },
      {
        question: "Why is the Lord offered chapati and butter?",
        answer:
          "This honours Thulukka Nachiyar (Bibi Nachiyar), the Delhi Sultan's daughter who, by legend, became devoted to the festival deity during its sojourn in the north after the 1311 invasion and followed it back to Srirangam. Her shrine is within the temple, and the Lord is offered north-Indian chapati and butter and dressed in her memory, a moving record of the temple's medieval history and a rare instance of such inclusive custom.",
      },
      {
        question: "How much time should I plan, and is special darshan worth it?",
        answer:
          "Given the sheer scale (seven prakarams, the Thayar shrine, the Ramanuja sannidhi, the thousand-pillar hall and the sculpture mandapams), allow at least 2–3 hours, more if you want to appreciate the art. The quick/special darshan ticket (~₹250) meaningfully shortens the queue and is worth it, especially on weekends and festival days. Take the Viswaroopa darshan in the early morning if you can.",
      },
      {
        question: "What's the dress code?",
        answer:
          "Traditional attire is expected in the inner prakarams: dhoti/veshti or pyjama-kurta for men, saree or salwar for women. Shorts, Bermudas, and sleeveless tops are not permitted inside. As at most Vaishnava temples, you'll go barefoot beyond the sacred boundary, so be prepared for hot stone in summer.",
      },
    ],
  },
  "padmanabhaswamy-trivandrum": {
    slug: "padmanabhaswamy-trivandrum",
    timings: { morning: "3:30 AM – 12:00 PM", evening: "5:00 PM – 7:20 PM", note: "Darshan runs in fixed slots: roughly 3:30–4:45 AM, 6:30–7:00 AM, 8:30–10:00 AM, 10:30–11:10 AM, 11:45 AM–12:00 PM, then 5:00–6:15 PM and 6:45–7:20 PM. Slots shift on festival days; confirm before visiting." },
    entryFee: "Free darshan. A 'Sheeghra Darshanam' quick ticket (~₹100–₹250) shortens the queue. Strict dress code enforced; only Hindus are permitted inside.",
    dressCode: "Men must remove the shirt/vest and wear a mundu (dhoti); a towel/angavastram over the torso is allowed. Women wear saree, set-mundu, or half-saree; salwar-kameez is generally allowed but skirts/trousers are not. Dhotis can be rented/bought at the entrance.",
    bestTime: "September – February (pleasant weather). Painkuni (March–April) and Alpasi (October–November) festivals are the spiritual peaks; the once-in-six-years Laksha Deepam is the rarest spectacle.",
    travelInfo: {
      byAir: "Thiruvananthapuram International Airport (~6 km) with domestic flights and Gulf/Southeast-Asia connections; among the closest airports to any major temple in India.",
      byTrain: "Thiruvananthapuram Central Railway Station (~1 km) is a major terminus with trains from Chennai, Bengaluru, Mumbai, Delhi and across Kerala.",
      byRoad: "The temple sits in the East Fort (Kizhakke Kotta) area in the heart of the capital. KSRTC buses, city buses, autos and taxis run constantly. Kanyakumari is ~90 km, Kollam ~70 km, Kochi ~200 km.",
    },
    highlights: [
      "Widely regarded as the wealthiest place of worship in the world, after the 2011 inventory of its underground vaults revealed treasures valued in the tens of billions of dollars",
      "Lord Padmanabha reclines on the great serpent Anantha in the Anantha-Shayanam pose, viewable only through three separate doors",
      "The principal idol is fashioned from 12,008 saligrama stones brought from the Gandaki river in Nepal, bound with the herbal 'katu-sarkara-yogam' plaster",
      "One of the 108 Divya Desams ('Thiru-Anantha-Puram'); the city itself is named after the deity",
      "The Travancore royal family rules as 'Sree Padmanabha Dasa' (servant of Padmanabha) since Marthanda Varma dedicated the kingdom to the Lord in 1750",
      "A unique fusion of Kerala and Dravidian architecture, crowned by a 100-ft, seven-tier eastern gopuram (1566)",
      "The Ottakkal Mandapam, carved from a single massive granite slab, fronts the sanctum",
    ],
    history: "Sree Padmanabhaswamy Temple is among the oldest and most venerated Vishnu shrines in India, its sanctity sung by the Alvar saints Nammalvar and Kulasekara Alvar (8th–9th centuries), which makes it one of the 108 Divya Desams. The reclining deity gives the Kerala capital its name: Thiru-Anantha-Puram, 'the sacred city of Ananta'. While legends place its origins in deep antiquity, the temple acquired its present grandeur under the kings of Travancore. In 1750 CE, Anizham Thirunal Marthanda Varma performed the 'Thrippadi-danam', formally surrendering his entire kingdom to Lord Padmanabha and thereafter ruling, with all his successors, merely as the Lord's regent or 'Sree Padmanabha Dasa'. The royal family rebuilt and expanded the temple, commissioned the great gopuram and the long corridors, and entrenched a tradition of royal service that survives to this day. The temple returned to world attention in 2011, when, following litigation, the Supreme Court of India ordered an inventory of its sealed underground vaults (Kallaras), uncovering an astonishing hoard of gold, jewels, idols and ancient coins and confirming its reputation as the richest temple on earth.",
    architecture: "The temple is a striking synthesis of the indigenous Kerala style and the Tamil Dravidian tradition. Its most visible landmark is the 100-foot, seven-storeyed eastern Rajagopuram, raised in 1566, fronted by a temple tank (Padma Theertham, the 'lotus spring'). Beyond it stretch the Sheevelippura corridors lined with hundreds of carved granite pillars and a flagstaff (Dwajasthambham) plated in gold. Before the sanctum lies the Ottakkal Mandapam, a ceremonial hall hewn from a single immense slab of granite. Within the garbhagriha reclines the colossal Padmanabha on Anantha; because of his great length the deity is revealed through three doorways, the first showing the face and chest with Brahma rising on a lotus from the navel, the second the central body, and the third the feet. The underground Kallaras (treasure vaults), lettered A through F (with later additions), lie beneath the temple and store the accumulated offerings of centuries; the sealed Vault B remains famously unopened.",
    festivals: [
      { name: "Painkuni Utsavam", month: "March–April (Meenam)", description: "A grand ten-day spring festival ending in the Aarattu (sacred immersion) procession, when the deities are carried to the Shankhumukham beach for a ritual sea-bath, escorted on foot by the Travancore Maharaja bearing a sword." },
      { name: "Alpasi Utsavam", month: "October–November (Thulam)", description: "The autumn counterpart of Painkuni, another ten-day festival likewise concluding with the Aarattu procession to the sea at Shankhumukham." },
      { name: "Laksha Deepam", month: "Once every six years (Jan)", description: "The temple's rarest and most dazzling event: the lighting of one lakh (100,000) oil lamps across the complex, held after 56 days of continuous Vedic recitation known as the Murajapam. The next occurrences fall in this six-year cycle." },
      { name: "Navaratri", month: "September–October", description: "The nine-night festival of the Goddess, during which the Saraswati idol and the deities of the Navaratri Mandapam are worshipped, accompanied by the celebrated Swathi Sangeetholsavam classical music festival." },
    ],
    poojas: [
      { name: "Usha Pooja", time: "Early morning", fee: "Sponsored" },
      { name: "Pantheeradi Pooja", time: "Mid-morning", fee: "Sponsored" },
      { name: "Ucha Pooja (Noon)", time: "~11:30 AM", fee: "Sponsored" },
      { name: "Deeparadhana", time: "Evening (~6:45 PM)", fee: "Free to witness" },
    ],
    nearbyTemples: ["attukal-bhagavathy", "guruvayur-krishna"],
    mythology: {
      legend:
        "The temple's origin legend centres on the sage Divakara Muni Vilvamangalam, a devotee of Vishnu. The Lord, wishing to test and reward him, appeared as a mischievous little boy who played about the sage's hermitage and disturbed his worship. One day the boy defiled the saligrama the sage was venerating, and the angry Vilvamangalam pushed him away. The child vanished, declaring that if the sage wished to see him again he must seek him in 'Ananthankadu', the forest of Ananta. Stricken with remorse, the sage wandered until, at Ananthankadu, he saw the boy merge into an enormous illupa (Indian butter) tree, which crashed down and took the form of Vishnu reclining on the serpent Anantha, stretching for miles. The sage begged the vast form to condense to a size he could worship; the Lord shrank to roughly eighteen feet, still so long that he must be seen through three doors. The spot became the sanctum, and the city around it took the deity's name.",
      additionalStories: [
        {
          title: "The Three Doors and Anantha-Shayanam",
          content:
            "Lord Padmanabha ('the lotus-naveled one') reclines in the Yoga-nidra posture on the thousand-hooded serpent Anantha (Adi Sesha), his right hand resting over a Shiva-linga, signalling the unity of Vishnu and Shiva. From his navel rises a lotus bearing four-faced Brahma, the creator. Because the image is so long, no single doorway can take it in; the devotee receives darshan through three separate doors, beholding in turn the face and chest, the navel with Brahma, and the sacred feet. The arrangement is itself a teaching: the worshipper must move and bow to see the whole, never grasping the infinite Lord in a single glance.",
        },
        {
          title: "The Kingdom Given to God: Thrippadi-danam",
          content:
            "In 1750, King Anizham Thirunal Marthanda Varma, founder of modern Travancore, performed the Thrippadi-danam, laying his sword and his entire conquered kingdom at the feet of Lord Padmanabha and declaring himself and all future kings to be merely 'Sree Padmanabha Dasa', the servant of Padmanabha. Thereafter the rulers governed not as sovereigns in their own right but as stewards acting in the Lord's name, depositing the realm's wealth as offerings to the deity. This vow explains both the immense treasures gathered in the temple vaults and the royal family's enduring, intimate role in its rituals.",
        },
        {
          title: "The Saligrama Idol and Katu-Sarkara-Yogam",
          content:
            "Unlike most temple idols of stone or metal, Padmanabha's image is built from 12,008 saligramas, the naturally fossil-marked sacred stones gathered from the bed of the Gandaki river in Nepal and, by tradition, carried south on elephant-back. These are bound and shaped with 'katu-sarkara-yogam', a hardened ayurvedic plaster of herbs, jaggery and other ingredients, over which the form is finished. Because of this fragile composition, no oil or water abhishekam is poured directly on the moolavar; worship is offered with special care, and the idol is periodically renewed by experts in the ancient technique.",
        },
      ],
    },
    architectureFeatures: [
      {
        name: "Eastern Rajagopuram",
        type: "gopuram",
        description: "The temple's defining silhouette: a seven-tiered eastern gateway tower rising about 100 feet, built in 1566 in the Pandya–Dravidian manner and ornamented with stucco figures from the Puranas. It overlooks the Padma Theertham tank and is among the most photographed landmarks of Thiruvananthapuram.",
        detail: "~100 ft · 7 tiers · built 1566",
      },
      {
        name: "Garbhagriha (Anantha-Shayanam)",
        type: "sanctum",
        description: "The inner sanctum holding the great reclining form of Padmanabha on the serpent Anantha, fashioned from 12,008 saligramas. Owing to its length the deity is revealed through three doors. The right hand rests above a Shiva-linga and Brahma rises on a lotus from the navel, uniting the Trimurti in one image.",
        detail: "Reclining Vishnu · seen through 3 doors",
      },
      {
        name: "Ottakkal Mandapam",
        type: "mandapam",
        description: "A ceremonial pavilion in front of the sanctum carved from a single colossal slab of granite (its name means 'single-stone hall'). It is here that the king and chief devotees perform key rituals; entry onto it is restricted.",
        detail: "Hewn from one granite slab",
      },
      {
        name: "Sheeveli Corridors & Gold Flagstaff",
        type: "other",
        description: "Long pillared corridors (the Sheevelippura) wrap the sanctum, lined with hundreds of intricately carved granite columns. The Dwajasthambham (flagstaff) before the sanctum is plated in gold, raised on a base of granite.",
        detail: "Gold-plated Dwajasthambham",
      },
      {
        name: "Kallaras (Underground Vaults)",
        type: "other",
        description: "A series of sealed subterranean chambers, lettered A to F (with later-designated G–J), holding the offerings of centuries: gold ornaments, gem-set idols, ceremonial vessels, and antique coins. Vaults opened under court order in 2011 confirmed the temple as the richest on earth. Vault B remains unopened.",
        detail: "Vaults A–F · Vault B sealed",
      },
      {
        name: "Padma Theertham",
        type: "tank",
        description: "The 'lotus spring', the temple's sacred tank lying just outside the eastern gopuram, where devotees traditionally bathe before darshan. Its still water mirrors the great tower.",
      },
      {
        name: "Navaratri Mandapam",
        type: "mandapam",
        description: "A finely sculpted hall used during the Navaratri festival, associated with the Travancore composer-king Swathi Thirunal and the annual Swathi Sangeetholsavam, a festival of Carnatic music held in the deity's presence.",
      },
    ],
    subShrines: [
      {
        name: "Thekkedom (Narasimha)",
        deity: "Lord Narasimha (man-lion avatar of Vishnu)",
        description: "The fierce Narasimha shrine to the south of the main sanctum, one of the temple's principal sub-deities, sought by devotees for protection and the destruction of evil.",
      },
      {
        name: "Ugra Narasimha & Krishna Swamy",
        deity: "Vishnu in his Narasimha and Krishna forms",
        description: "Additional shrines within the complex venerating the Lord's avatars, with Krishna Swamy worshipped in his own sannidhi alongside the reclining Padmanabha.",
      },
      {
        name: "Sastha (Ayyappa)",
        deity: "Lord Ayyappa / Dharma Sastha",
        description: "A shrine to Sastha within the temple, linking Padmanabhaswamy to the wider Kerala devotional landscape of which Sabarimala is the heart.",
      },
      {
        name: "Ganapathy & Garuda",
        deity: "Lord Ganesha and the eagle-mount of Vishnu",
        description: "Ganapathy, invoked first to remove obstacles, and Garuda, the vahana of Vishnu, both honoured along the temple's prakaram for the devotee's preliminary prayers.",
      },
    ],
    visitorLogistics: {
      gates: [
        { name: "Eastern Gopuram (Main Entrance)", direction: "East", notes: "The principal entrance beneath the great seven-tier tower, facing the Padma Theertham tank. Most pilgrims enter here." },
        { name: "Western / Northern entrances", direction: "West", notes: "Secondary gateways used for specific queues and during heavy festival crowds; follow the posted directions and staff guidance." },
      ],
      cloakRoom: "Footwear, bags and prohibited items must be deposited at counters near the entrance before you go barefoot beyond the sacred boundary. Dhotis (mundu) for the dress code are sold and rented near the gate.",
      mobilePolicy: "Mobile phones, cameras and electronic devices are not permitted inside and must be left at the deposit counter. Security is strict; do not attempt to carry them in.",
      cameraPolicy: "Photography is strictly prohibited inside the temple. Cameras and phones are surrendered at the cloak counter. You may photograph the gopuram and tank from outside.",
      wheelchairAccess: "The temple has steps and traditional level changes, and the dress code requires the mundu, so assistance may be needed. Wheelchairs can be arranged informally; ask temple staff and plan for help on the inner approach.",
      seniorCitizenDarshan: "A Sheeghra (quick) darshan ticket considerably shortens the wait and is advisable for seniors. Darshan runs only in fixed time-slots, so arrive aligned to a slot rather than between them, and allow for queue time on festival days.",
      parking: "Parking is limited in the busy East Fort area; use the public lots nearby or arrive by auto/taxi. The temple is central and walkable from Thiruvananthapuram Central station and the city bus stands.",
      restrooms: "Basic restrooms and drinking-water points are available near the temple and around the East Fort precinct. Facilities are stretched during festivals; carry essentials.",
      drinkingWater: "Drinking water is available near the entrance and tank. Kerala's coastal climate is warm and humid year-round; carry water, especially in the March–May summer.",
    },
    sevas: [
      {
        name: "Sheeghra Darshanam",
        description: "The quick-darshan privilege that lets the devotee bypass the general queue for a faster view of the Lord through the three doors, valuable on festival days and weekends.",
        time: "During darshan slots",
        fee: "~₹100–₹250",
        type: "daily",
      },
      {
        name: "Archana (Pushpanjali)",
        description: "Offering of flowers and recitation of the deity's names in the devotee's name and birth-star, performed by the temple priests.",
        time: "Daily on request",
        fee: "Modest archana fee",
        type: "daily",
      },
      {
        name: "Bhagavati Seva / Pushpanjali",
        description: "Special floral and lamp worship sponsored by devotees for family welfare, prosperity and the removal of difficulties.",
        time: "Select days",
        fee: "Sponsored",
        type: "special",
      },
      {
        name: "Niramala & Deeparadhana",
        description: "The evening lamp ceremony (Deeparadhana) when the deity is worshipped amid rows of oil lamps, a serene daily highlight open to all worshippers.",
        time: "Evening (~6:45 PM)",
        fee: "Free to witness",
        type: "daily",
      },
      {
        name: "Murajapam & Laksha Deepam",
        description: "The great six-yearly cycle of 56 days of continuous Vedic chanting (Murajapam) culminating in the lighting of one lakh lamps (Laksha Deepam) across the temple, the rarest seva-spectacle of the year.",
        time: "Once every six years",
        fee: "Free to witness",
        type: "special",
      },
    ],
    faqs: [
      {
        question: "Why is Padmanabhaswamy called the richest temple in the world?",
        answer:
          "Beneath the temple lie sealed vaults (Kallaras) holding the accumulated offerings of centuries, vastly enlarged after the Travancore kings dedicated their kingdom and its wealth to the deity in 1750. When the Supreme Court of India ordered an inventory in 2011, the opened vaults (A and C–F) revealed gold ornaments, gem-encrusted idols, ceremonial vessels and antique coins valued in the tens of billions of dollars, confirming it as the wealthiest place of worship on earth. Vault B remains unopened.",
      },
      {
        question: "What is the mystery of Vault B (Bharatakkon Kallara)?",
        answer:
          "Vault B is the one chamber that was not opened during the 2011 inventory. Its outer door bears carved images of serpents (nagas), and temple tradition holds that it is sealed by a sacred 'Naga Bandham' and should not be disturbed, with warnings of calamity if forced. The matter became part of the Supreme Court proceedings, and the court has so far deferred opening it. Whether it holds further treasure, ritual objects, or is largely symbolic remains, officially, unknown, which is exactly why it captures the public imagination.",
      },
      {
        question: "Why is the deity seen through three separate doors?",
        answer:
          "Lord Padmanabha reclines in the Anantha-Shayanam pose on the serpent Anantha, and the idol is so long (about eighteen feet) that no single doorway can frame it. Devotees take darshan through three doors in sequence: the first reveals the face and chest with Brahma seated on a lotus rising from the navel, the second the central body, and the third the sacred feet. By tradition the Lord shrank to this size at the request of the sage Vilvamangalam, who could not worship his original, miles-long form.",
      },
      {
        question: "Can non-Hindus enter the temple?",
        answer:
          "No. Like several traditional Kerala temples, Sree Padmanabhaswamy admits only Hindus. The rule is enforced at the entrance. Visitors of all faiths may, however, view and photograph the great eastern gopuram and the Padma Theertham tank from outside the temple.",
      },
      {
        question: "What is the dress code?",
        answer:
          "It is strict and traditional. Men must remove the shirt and upper garment and wear a mundu (dhoti) wrapped around the waist; an angavastram over the shoulders is permitted. Women wear a saree, set-mundu or half-saree; salwar-kameez is generally allowed, but trousers, skirts, shorts and similar western wear are not. Mundus can be bought or rented at the entrance. Everyone goes barefoot inside.",
      },
      {
        question: "What are the temple's main festivals?",
        answer:
          "Two grand ten-day festivals dominate the calendar, Painkuni (March–April) and Alpasi (October–November), each ending with the spectacular Aarattu procession in which the deities are carried to the sea at Shankhumukham beach for a holy bath, escorted on foot by the Travancore Maharaja with a drawn sword. Rarest of all is the Laksha Deepam, held once every six years, when one lakh oil lamps are lit after 56 days of Vedic chanting. Navaratri brings the famed Swathi Sangeetholsavam music festival.",
      },
      {
        question: "How is the Travancore royal family connected to the temple?",
        answer:
          "In 1750, King Marthanda Varma performed the Thrippadi-danam, surrendering his entire kingdom to Lord Padmanabha and ruling thereafter only as 'Sree Padmanabha Dasa', the Lord's servant. Every Travancore ruler since has held the same title, and the family continues to play a central role in the temple's administration and rituals to this day, a role affirmed by the Supreme Court in its 2020 judgment on the temple's management.",
      },
      {
        question: "How much time should I plan, and when is darshan available?",
        answer:
          "Darshan is offered in fixed slots through the morning (roughly 3:30 AM to noon) and evening (about 5:00 to 7:20 PM), not continuously, so time your arrival to a slot. Allow 1–2 hours including the queue, security, changing into the mundu and depositing phones; longer on festival days. A Sheeghra (quick) darshan ticket meaningfully reduces the wait.",
      },
    ],
  },
  "guruvayur-krishna": {
    slug: "guruvayur-krishna",
    timings: { morning: "3:00 AM – 1:15 PM", evening: "4:30 PM – 9:15 PM", note: "The day opens with the Nirmalya Darshanam around 3:00 AM (the Lord seen in the previous night's flowers) and closes after the Thripuka and Olavayana around 9:15 PM. Slots and timings shift on festival days and during the Ekadasi season." },
    entryFee: "Free darshan. A 'Sheeghra Darshanam' quick ticket shortens the queue. Strict dress code enforced; only Hindus are permitted inside.",
    dressCode: "Men and boys must be bare-chested, wearing only a mundu (dhoti); shirts and vests are not allowed inside. Women wear saree, set-mundu or half-saree; salwar-kameez (churidar) is permitted but trousers, skirts and shorts are not. Mundus can be bought or rented near the temple.",
    bestTime: "September – February (pleasant weather). Guruvayur Ekadasi (November–December) and the ten-day Utsavam (February–March) are the spiritual peaks; both bring grand elephant processions.",
    travelInfo: {
      byAir: "Cochin International Airport, Nedumbassery (~80 km) is the nearest; Calicut (Kozhikode) International Airport is ~100 km. Both have wide domestic and Gulf connections.",
      byTrain: "Guruvayur Railway Station (~600 m) is a terminus with trains to Thrissur, Chennai and beyond. Thrissur Junction (~30 km) is the major hub on the main line.",
      byRoad: "Guruvayur is in Thrissur district. KSRTC and private buses run constantly from Thrissur (~30 km), Kochi/Ernakulam (~90 km), Kozhikode (~100 km) and Palakkad. Autos and taxis serve the temple town.",
    },
    highlights: [
      "Kerala's most important Krishna pilgrimage, revered as 'Bhuloka Vaikunta' (Vishnu's earthly abode) and the 'Dwarka of the South'",
      "The four-armed deity Guruvayurappan holds the conch, discus, mace and lotus, the very form of Mahavishnu that Krishna revealed to his parents at birth",
      "The idol is carved from the rare and sacred 'Patala-anjanam', a black stone considered far more than ordinary stone",
      "Installed, by legend, by Guru (Brihaspati, preceptor of the gods) and Vayu (the wind god), whose names give the town its name",
      "Birthplace of the Narayaneeyam, the 1,034-verse devotional masterpiece composed here by Melpathur Narayana Bhattathiri in 1586",
      "Home to a long tradition of temple elephants, housed at the Punnathur Kotta sanctuary nearby, the legendary Guruvayur Keshavan among them",
      "A 33.5-metre gold-plated flagstaff (Dwajasthambham) and a seven-tiered pillar of lamps (Deepasthambham) frame the sanctum",
    ],
    history: "Sree Krishna Temple at Guruvayur is the foremost Krishna shrine of Kerala and one of the most visited temples in South India. Tradition holds the deity to be extraordinarily ancient, first worshipped by Vishnu himself and passed down through Brahma, the sages, and Krishna's parents, before Krishna installed it in his city of Dwarka. When Dwarka was destined to be swallowed by the sea at the close of the Dwapara Yuga, Krishna (through his devotee Uddhava) entrusted the idol's rescue to Guru, the preceptor of the gods, and Vayu, the wind god, who bore it south and, guided by Lord Shiva, enshrined it at a lotus-filled tank where Shiva and Parvati were themselves worshipping. The place took the name of its divine founders: Guru-Vayu-ur. The temple's recorded history runs deep through the medieval period; it suffered raids and a major fire in 1970 but was rebuilt, and it flourished under the patronage of the Zamorins of Calicut and generations of devotees. It is woven into Kerala's cultural memory through the poet-saints Melpathur and Poonthanam and the temple dance-drama Krishnanattam.",
    architecture: "Guruvayur is built in the classic Kerala temple style: a square, gold-roofed sanctum (sreekovil) set within two concentric prakaram enclosures, with the principal entrances to the east and west. The east-facing sreekovil houses the standing four-armed Mahavishnu. Before it rise two of the temple's signal landmarks: the Dwajasthambham, a flagstaff about 33.5 metres tall sheathed in gold, and the Deepasthambham, a seven-storeyed pillar carrying thirteen circular tiers of oil lamps that blaze on festival nights. The temple tank, Rudratheertham, lies to the north and is the setting for the festival Aarattu. The inner walls and the Vilakkumadam (the surrounding frame of lamps) are illuminated to spectacular effect during the chuttuvilakku. Across from Guruvayur stands the Mammiyur Mahadeva temple, where, by legend, Shiva moved to make room for Krishna, and a Guruvayur pilgrimage is traditionally completed with a visit there.",
    festivals: [
      { name: "Guruvayur Ekadasi", month: "November–December (Vrishchikam)", description: "The temple's holiest day, commemorating Krishna's delivery of the Bhagavad Gita. The night blazes with the chuttuvilakku illumination and an Udayasthamana pooja; the preceding day features the famous Aanayottam (elephant race), and the Ekadasi Vilakku procession is a vast draw." },
      { name: "Utsavam", month: "February–March (Kumbham)", description: "The grand ten-day annual festival, opening with the Aanayottam elephant race and the Kodiyettam (flag hoisting) and closing with the Aarattu, when the deity is taken in procession to the Rudratheertham tank for a ceremonial bath." },
      { name: "Ashtami Rohini (Krishna Janmashtami)", month: "August–September", description: "The birthday of Lord Krishna, celebrated with great devotion, special abhishekams, the Uriyadi (pot-breaking) and offerings, marking the advent of the Lord whose form the deity embodies." },
      { name: "Kuchela Dinam", month: "December–January (Dhanu)", description: "Commemorates the poor devotee Kuchela (Sudama), Krishna's childhood friend, who offered a humble handful of beaten rice (aval) and was blessed with abundance, a celebration of devotion above wealth. Aval is offered at the temple." },
    ],
    poojas: [
      { name: "Nirmalya Darshanam", time: "~3:00 AM", fee: "Free to witness" },
      { name: "Usha Pooja", time: "Early morning", fee: "Sponsored" },
      { name: "Ucha Pooja (Noon)", time: "~12:30 PM", fee: "Sponsored" },
      { name: "Athazha Pooja & Deeparadhana", time: "Evening / night", fee: "Free to witness" },
    ],
    nearbyTemples: ["padmanabhaswamy-trivandrum", "attukal-bhagavathy"],
    mythology: {
      legend:
        "The idol of Guruvayurappan is said to be among the most ancient of all, fashioned of the rare Patala-anjanam stone and worshipped first by Mahavishnu in Vaikuntha. It passed to Brahma, then through the sages Sutapas and the divine couple who would be reborn as Krishna's parents, and finally to Vasudeva and Devaki, in whose home Krishna was born. Krishna himself worshipped this very image in Dwarka. As his earthly mission ended and the sea prepared to claim Dwarka, Krishna told his devotee Uddhava that the idol must be saved and a new home found for it. Guru, the guru of the gods (Brihaspati), and Vayu, the wind god, recovered the image from the waters and carried it across the land seeking the right spot. Guided by Lord Shiva, they came to a beautiful lotus tank in Kerala where Shiva and Parvati were at worship. Shiva declared the place supremely holy and graciously shifted to the opposite bank so that Krishna might be installed there. The shrine was named Guru-Vayu-ur for the two who established it, and Shiva's new abode became the Mammiyur temple.",
      additionalStories: [
        {
          title: "Melpathur, Poonthanam, and the Narayaneeyam",
          content:
            "Two devotee-poets define Guruvayur's spiritual fame. Melpathur Narayana Bhattathiri, a great Sanskrit scholar, is said to have taken upon himself the paralysis of his ailing guru and, crippled, came to Guruvayur. There, on the advice of the saint-poet Thunchaththu Ezhuthachan to 'begin with the fish' (the Matsya avatar), he composed the Narayaneeyam (1,034 verses condensing the entire Bhagavata Purana), completing one canto a day for a hundred days. On the final day in 1586 the Lord granted him a vision and cured him. The other was Poonthanam Nambudiri, an unlettered but supremely devoted poet who wrote the Malayalam Jnanappana ('Song of Wisdom'). When the learned Melpathur once slighted Poonthanam's simple verses, the Lord himself is said to have rebuked him, declaring that Poonthanam's pure devotion (bhakti) was dearer to him than Melpathur's scholarship (vibhakti), a parable still cherished across Kerala.",
        },
        {
          title: "Krishnanattam, the Lord's Own Dance-Drama",
          content:
            "In the 17th century Manaveda, the Zamorin of Calicut and a great Krishna devotee, composed the Krishnagiti and created Krishnanattam, a cycle of eight dance-dramas depicting Krishna's life from birth to ascension. By legend Manaveda was granted a vision of the child Krishna under the elanji tree at Guruvayur. Krishnanattam is performed at the temple as a votive offering: devotees sponsor specific plays for specific blessings (the 'Swargarohanam' on the marriage of a daughter, and so on). It is regarded as a forerunner of Kerala's celebrated Kathakali.",
        },
        {
          title: "The Elephants of Guruvayur and Keshavan",
          content:
            "Devotees have for centuries offered elephants to the Lord, and Guruvayur maintains a large herd housed a few kilometres away at the Punnathur Kotta (Anakkotta), a former palace grounds turned elephant sanctuary. The most beloved was Guruvayur Keshavan (1904–1976), an elephant of legendary devotion and dignity who, it is said, would bow before the deity and who died on Guruvayur Ekadasi day facing the temple. His statue stands before the eastern entrance, and the herd remains central to the temple's grand festival processions and the Aanayottam races.",
        },
      ],
    },
    architectureFeatures: [
      {
        name: "Sreekovil (Sanctum)",
        type: "sanctum",
        description: "The square, copper-and-gold roofed inner sanctum housing the standing four-armed Mahavishnu carved of Patala-anjanam, holding the conch (Panchajanya), discus (Sudarshana), mace (Kaumodaki) and lotus. East-facing, it is the heart of the temple; the deity is adorned freshly each session, from the bare Nirmalya darshan at dawn to full ornament through the day.",
        detail: "Gold-roofed · east-facing · Mahavishnu",
      },
      {
        name: "Dwajasthambham (Gold Flagstaff)",
        type: "other",
        description: "The towering flagstaff before the sanctum, about 33.5 metres tall and sheathed in gold, one of the tallest temple flagstaffs in the region. The festival flag (kodi) is hoisted on it to inaugurate the annual Utsavam.",
        detail: "~33.5 m · gold-plated",
      },
      {
        name: "Deepasthambham (Pillar of Lamps)",
        type: "other",
        description: "A seven-storeyed lamp-pillar carrying thirteen circular tiers of oil lamps. When lit during festivals and special offerings, it becomes a blazing column of fire, among the temple's most striking sights.",
        detail: "7 tiers · 13 lamp-rings",
      },
      {
        name: "Vilakkumadam & Chuttuvilakku",
        type: "other",
        description: "The frame of lamps mounted along the inner prakaram walls. On Ekadasi and festival nights every wick is lit (the chuttuvilakku), ringing the sanctum in a continuous line of flame, the temple's signature illumination.",
      },
      {
        name: "Rudratheertham",
        type: "tank",
        description: "The temple's sacred tank to the north, named for Shiva (Rudra), who by legend worshipped here before yielding the site to Krishna. It is the destination of the festival Aarattu, the ceremonial bath of the deity that closes the Utsavam.",
      },
      {
        name: "Koothambalam & East/West Gopurams",
        type: "mandapam",
        description: "The temple's performance hall (Koothambalam) and its eastern and western gateway towers. The Koothambalam and the area before the eastern gopuram host the daily Krishnanattam and other votive arts.",
      },
    ],
    subShrines: [
      {
        name: "Ganapathy",
        deity: "Lord Ganesha",
        description: "The obstacle-remover, worshipped first by devotees as they enter, with his shrine within the temple precinct.",
      },
      {
        name: "Sastha (Ayyappa)",
        deity: "Lord Ayyappa / Dharma Sastha",
        description: "A shrine to Sastha within the complex, connecting Guruvayur to the broader Kerala devotional fabric centred on Sabarimala.",
      },
      {
        name: "Bhagavathy / Edathedathu Kavil",
        deity: "The Goddess",
        description: "The Devi shrine associated with the temple, worshipped by devotees for protection and family welfare alongside the principal deity.",
      },
      {
        name: "Mammiyur Mahadeva (across the road)",
        deity: "Lord Shiva",
        description: "Though a separate temple opposite Guruvayur, Mammiyur is bound to it by legend, the abode to which Shiva moved to give Krishna the holy site. A Guruvayur pilgrimage is traditionally held incomplete without darshan here.",
      },
    ],
    visitorLogistics: {
      gates: [
        { name: "Eastern Gopuram (Main Entrance)", direction: "East", notes: "The principal entrance facing the Dwajasthambham and the statue of Guruvayur Keshavan; most pilgrims enter here for darshan." },
        { name: "Western Gopuram", direction: "West", notes: "The western gateway, used for specific queues and exits and during heavy festival crowds." },
      ],
      cloakRoom: "Footwear, bags and electronics must be deposited at the counters before you go barefoot beyond the sacred boundary. Mundus for the dress code are sold and rented near the temple gates.",
      mobilePolicy: "Mobile phones and electronic devices are not permitted inside and must be left at the deposit counter. Security is strict, especially during festivals.",
      cameraPolicy: "Photography is prohibited inside the temple; cameras and phones are surrendered at the cloak counter. The exterior, gopurams and Keshavan statue may be photographed from outside.",
      wheelchairAccess: "The temple involves steps and traditional level changes and the bare-chest mundu dress code, so assistance may be needed on the inner approach. Wheelchairs can be arranged informally; ask temple staff and plan ahead, particularly on festival days.",
      seniorCitizenDarshan: "A Sheeghra (quick) darshan ticket considerably shortens the wait and is advisable for seniors. Arrive early; queues are long on weekends, Ekadasi and during the Utsavam and Janmashtami.",
      parking: "Parking is available in lots around the temple town, which can fill quickly on festival days. Guruvayur is compact and the temple is a short walk from the railway station and bus stand.",
      restrooms: "Restrooms and drinking-water points are available near the temple and at the Devaswom guest houses and queue complexes. Facilities are stretched on festival days; carry essentials.",
      drinkingWater: "Drinking water is available near the entrances and queue areas; the Devaswom also runs Annadanam (free meals) on many days. Kerala's coastal climate is warm and humid; carry water in summer.",
    },
    sevas: [
      {
        name: "Nirmalya Darshanam",
        description: "The first and most coveted darshan of the day, when the sanctum opens to reveal the Lord still adorned with the previous night's flowers and sandal, before the day's fresh decoration, considered an especially blessed sight.",
        time: "Daily, ~3:00 AM",
        fee: "Free to witness",
        type: "daily",
      },
      {
        name: "Thulabharam",
        description: "The devotee is weighed on a great balance against an offering (bananas, sugar, jaggery, coconuts or even gold) equal to their own weight, the offering then given to the Lord. A classic Guruvayur vow for fulfilment of prayers.",
        time: "Daily on request",
        fee: "Cost of the offering",
        type: "special",
      },
      {
        name: "Udayasthamana Pooja",
        description: "A grand 'dawn-to-dusk' worship in which the full cycle of the day's poojas is sponsored by a single devotee or family, among the most elaborate and sought-after offerings, booked long in advance.",
        time: "Full day (booked ahead)",
        fee: "Sponsored (advance booking)",
        type: "special",
      },
      {
        name: "Choroonu (Annaprasanam)",
        description: "The first feeding of cooked rice to an infant, performed in the Lord's presence as an auspicious beginning to the child's life; Guruvayur is one of the most popular venues in Kerala for this rite.",
        time: "On booking",
        fee: "Prescribed fee",
        type: "special",
      },
      {
        name: "Krishnanattam Offering",
        description: "Sponsorship of a Krishnanattam play as a votive offering, each of the eight episodes traditionally sought for a particular blessing (e.g. Swayamvaram for marriage, Kaliyamardanam for relief from troubles).",
        time: "As scheduled",
        fee: "Sponsored",
        type: "special",
      },
      {
        name: "Tholappoli / Ezhuthiniruthu (Vidyarambham)",
        description: "Initiation of children into learning, traditionally performed at Guruvayur on Vijayadasami, when the child writes the first letters guided into the rice, a deeply popular start to formal education.",
        time: "Vijayadasami / on booking",
        fee: "Prescribed fee",
        type: "special",
      },
    ],
    faqs: [
      {
        question: "Who is Guruvayurappan, and how is the deity depicted?",
        answer:
          "Guruvayurappan is Lord Krishna worshipped in the full four-armed form of Mahavishnu, holding the conch (Panchajanya), discus (Sudarshana), mace (Kaumodaki) and lotus. This is the very cosmic form the newborn Krishna is said to have revealed to his parents Vasudeva and Devaki before appearing as an ordinary infant. So although the Lord here is loved as Krishna, the icon itself is Vishnu, carved from the rare black Patala-anjanam stone.",
      },
      {
        question: "How did Guruvayur get its name?",
        answer:
          "From the two who, by legend, founded it: Guru, the preceptor of the gods (Brihaspati), and Vayu, the wind god. When Dwarka was about to sink into the sea after Krishna's departure, these two recovered Krishna's worshipped idol and, guided by Lord Shiva, enshrined it at a lotus tank in Kerala. The place was named Guru-Vayu-ur, 'the town of Guru and Vayu'. Shiva moved to the opposite bank, now the Mammiyur temple.",
      },
      {
        question: "What is the Narayaneeyam and its connection to Guruvayur?",
        answer:
          "The Narayaneeyam is a 1,034-verse Sanskrit devotional poem condensing the Bhagavata Purana, composed at Guruvayur in 1586 by Melpathur Narayana Bhattathiri. Having taken on his guru's paralysis, Bhattathiri came to the Lord and composed one canto a day for a hundred days; on completion the Lord granted him a vision and cured him. Each canto ends with a prayer to Guruvayurappan, and the work is recited at the temple to this day, especially for health.",
      },
      {
        question: "Can non-Hindus enter the temple?",
        answer:
          "No. Like many traditional Kerala temples, Guruvayur admits only Hindus, and the rule is enforced at the entrance. Visitors of other faiths may view the temple exterior, the gold flagstaff and the statue of Guruvayur Keshavan from outside, and can visit the nearby Punnathur Kotta elephant sanctuary.",
      },
      {
        question: "What is the dress code?",
        answer:
          "It is strict and traditional. Men and boys must be bare-chested and wear a mundu (dhoti): shirts and vests are not allowed inside. Women wear a saree, set-mundu or half-saree; salwar-kameez (churidar) is permitted, but trousers, skirts and shorts are not. Mundus can be bought or rented near the temple, and everyone goes barefoot inside.",
      },
      {
        question: "What is the significance of Guruvayur Ekadasi?",
        answer:
          "Guruvayur Ekadasi (in the month of Vrishchikam, Nov–Dec) is the temple's most important day, commemorating Krishna's delivery of the Bhagavad Gita. Devotees fast and stay awake; the temple and its Vilakkumadam are lit in the dazzling chuttuvilakku, an Udayasthamana pooja is performed, and grand processions including the Ekadasi Vilakku and, the day before, the Aanayottam elephant race draw enormous crowds. It is regarded as a day on which any worship offered yields immense merit.",
      },
      {
        question: "Why are elephants so closely associated with Guruvayur?",
        answer:
          "Devotees have long offered elephants to Guruvayurappan, and the temple keeps a large herd at the Punnathur Kotta (Anakkotta) sanctuary a few kilometres away. Elephants lead the temple's festival processions and the famous Aanayottam races. The most revered was Guruvayur Keshavan (1904–1976), celebrated for his devotion and said to have died on Ekadasi day facing the temple; his statue stands at the eastern entrance.",
      },
      {
        question: "What are Thulabharam and the other popular offerings here?",
        answer:
          "Thulabharam, being weighed on a balance against an offering equal to one's body weight (bananas, sugar, jaggery, coconut or gold), is among Guruvayur's most popular vows. The temple is also one of Kerala's favourite venues for Choroonu (a baby's first rice-feeding), weddings, Vidyarambham (a child's initiation into learning on Vijayadasami), and the elaborate Udayasthamana (dawn-to-dusk) pooja, which is booked well in advance.",
      },
    ],
  },
  "nataraja-chidambaram": {
    slug: "nataraja-chidambaram",
    timings: { morning: "6:00 AM – 12:00 PM", evening: "5:00 PM – 10:00 PM", note: "The Dikshitar priests perform six poojas a day. The night Palliyarai (Ardha Jama) pooja, when the Lord is ceremonially put to rest, is a much-loved closing ritual around 9:00–10:00 PM." },
    entryFee: "Free darshan. Special abhishekam, archana and the climb to the Kanaka Sabha may carry a fee; men must be bare-chested to enter the inner golden halls.",
    dressCode: "Traditional attire. Men typically remove the shirt and wear a dhoti/veshti to approach the inner sanctum and the Kanaka Sabha; women wear saree or salwar. Avoid shorts and sleeveless tops.",
    bestTime: "October – March. The two grand abhishekam festivals, Margazhi Thiruvadirai/Arudra Darshanam (December–January) and Aani Thirumanjanam (June–July), and the Natyanjali dance festival at Maha Shivaratri are the high points.",
    travelInfo: {
      byAir: "Puducherry Airport (~70 km) is closest for limited flights; Tiruchirapalli International Airport (~165 km) and Chennai (~235 km) are the main airheads.",
      byTrain: "Chidambaram Railway Station (~1 km) lies on the Chennai–Tiruchirapalli/Thanjavur line, with frequent trains and a short walk or auto ride to the temple.",
      byRoad: "Chidambaram is in Cuddalore district on the East Coast corridor. Buses run from Chennai (~235 km), Puducherry (~70 km), Kumbakonam (~70 km) and Thanjavur (~100 km).",
    },
    highlights: [
      "The only temple where Shiva is enshrined and worshipped as Nataraja, the cosmic dancer, in the Ananda Tandava pose codified here",
      "The Akasha (Sky/Space) sthalam among the Pancha Bhoota Sthalams: Shiva worshipped as formless ether",
      "Home of the Chidambara Rahasyam: behind a curtain in the Chit Sabha lies empty space, the formless (Nirguna) divine, the temple's 'secret'",
      "A rare temple sacred to both Shaivites and Vaishnavites: it enshrines Govindaraja Perumal (reclining Vishnu), making it one of the 108 Divya Desams as well",
      "The golden Chit Sabha roof is laid with 21,600 gold tiles fixed by 72,000 gold nails, symbolising the breaths and nadis of the human body",
      "The East Gopuram's inner walls carve all 108 karanas, the fundamental units of classical Bharatanatyam from the Natya Shastra",
      "Administered for centuries by the hereditary Dikshitar priests (the 'Thillai Moovayiravar', the 3,000), independent of state control",
    ],
    history: "The Thillai Nataraja Temple at Chidambaram is one of the most sacred and architecturally significant of all Shiva temples, the very place where Shiva's identity as Nataraja, lord of the cosmic dance, was crystallised. Its ancient name, Thillai, comes from the mangrove forest (Thillai Vanam) that once surrounded it; 'Chidambaram' derives from 'Chit-Ambaram', the 'atmosphere (sky) of consciousness'. Glorified in the Tamil Shaiva canon (by the Nayanmars Appar, Sambandar, Sundarar and by Manikkavasagar, who composed the Tiruvasagam here) and developed across the Pallava, Chola, Pandya and Vijayanagara eras, it became the spiritual heart of Tamil Shaivism. The imperial Cholas treated Nataraja as their tutelary deity and lavished gold on the Chit Sabha. Uniquely, the temple has been administered through its entire history by the Dikshitars, a hereditary community of priest-trustees who trace themselves to 3,000 sages said to have come from Kailash; their independence from government control was reaffirmed by the Supreme Court of India in 2014.",
    architecture: "Chidambaram is laid out as a vast walled complex of about 40 acres entered through four towering gopurams facing the cardinal directions, each rising roughly 45 metres in nine tiers. The eastern and western gopurams are celebrated for sculpting the complete set of 108 karanas, the postural 'building blocks' of classical dance described in Bharata's Natya Shastra. At the heart of the temple stand its five sabhas (halls): the Chit Sabha (Ponnambalam), the innermost gold-roofed sanctum where Nataraja dances beside Sivakami, with the Chidambara Rahasyam to its side; the adjoining Kanaka Sabha; the chariot-shaped Nritta Sabha (Natya Sabha) of 56 pillars, scene of the Shiva–Kali dance contest; the Deva Sabha; and the great Raja Sabha or thousand-pillared hall. The Chit Sabha's roof of gold tiles, nine kalasams, the Sivaganga tank, and the separate shrine of Govindaraja Perumal (reclining Vishnu) complete a complex that is at once a Shaiva supreme shrine and a Vaishnava Divya Desam.",
    festivals: [
      { name: "Margazhi Thiruvadirai (Arudra Darshanam)", month: "December–January (Margazhi)", description: "The greatest festival, celebrating the Ananda Tandava on the Arudra (Thiruvadirai) star. A grand abhishekam bathes the bronze Nataraja, the deities are drawn through the streets on the great temple car (ther), and lakhs of devotees gather for the dawn darshan of the dancing Lord." },
      { name: "Aani Thirumanjanam", month: "June–July (Aani)", description: "The second of the temple's two grandest abhishekam festivals, on the Uttiram star of Aani, with a ceremonial car festival and the sacred bathing of Nataraja in the Raja Sabha, equal in importance to Arudra Darshanam." },
      { name: "Natyanjali Dance Festival", month: "February–March (Maha Shivaratri)", description: "A five-day festival in which Bharatanatyam and other classical dancers from across India perform before Nataraja as a devotional offering, 'anjali' (homage) through 'natya' (dance), in the temple of the cosmic dancer himself." },
      { name: "Maha Shivaratri", month: "February–March (Masi)", description: "The Great Night of Shiva, observed with one of the temple's six annual abhishekams and night-long worship of the Lord of the Dance.", slug: "maha-shivaratri" },
    ],
    poojas: [
      { name: "Kalasanthi Pooja", time: "Morning", fee: "Free to witness" },
      { name: "Uchikalam Pooja (Noon)", time: "~12:00 PM", fee: "Free to witness" },
      { name: "Sayaratchai / Deeparadhana", time: "Evening", fee: "Free to witness" },
      { name: "Ardha Jama (Palliyarai) Pooja", time: "~9:00–10:00 PM", fee: "Free to witness" },
    ],
    nearbyTemples: ["vaitheeswaran-kovil", "sarangapani-kumbakonam"],
    mythology: {
      legend:
        "The temple's defining event is the Ananda Tandava, Shiva's 'dance of bliss', performed in the Thillai forest for two great sages. Patanjali (the sage of the Yoga Sutras, born in serpent form) and Vyaghrapada, the 'tiger-footed' sage who had been granted tiger's claws and eyes so he could climb the Thillai trees before dawn and gather flowers untouched by bees or men, both longed to behold Shiva's cosmic dance. Pleased by their austerity, Shiva appeared with Sivakami (Parvati) and danced the Ananda Tandava in the golden hall, the very dance now fixed in the bronze Nataraja. In that posture every cosmic function is held in a single form: the drum (damaru) in the upper right hand sounds creation; the fire (agni) in the upper left is dissolution; the lower right hand in abhaya gives protection; the lower left points to the raised foot, the refuge of grace; and beneath the planted foot is crushed Apasmara (Muyalagan), the dwarf of ignorance. Behind it all, the Chidambara Rahasyam (empty space) reveals the formless absolute.",
      additionalStories: [
        {
          title: "The Dance Contest with Kali (Urdhva Tandava)",
          content:
            "The fierce goddess Kali ruled the Thillai forest and would not yield it. To win the ground for his dance, Shiva challenged her to a contest of dance, step for step, in the Nritta Sabha. The two matched each other through every movement until Shiva performed the Urdhva Tandava, lifting one leg straight up toward the sky (in one telling, to retrieve a fallen earring with his toe). Out of modesty Kali, as a woman, would not raise her leg in the same way, and so conceded. Pacified, she took her place at the edge of the town as Thillai Kali, where her own temple stands, while Nataraja's blissful dance reigns at the centre. The chariot-shaped Nritta Sabha marks the spot of the contest.",
        },
        {
          title: "The Chidambara Rahasyam, the Secret of Space",
          content:
            "Beside the Nataraja idol in the Chit Sabha hangs a curtain; when it is drawn for the devout, there is, by design, nothing behind it but empty space, hung with a garland of golden bilva leaves. This is the Chidambara Rahasyam, the 'secret of Chidambaram'. It teaches that the divine is not only the form one can see but the formless, all-pervading consciousness (Akasha) that fills even emptiness. As the Sky element among the Pancha Bhoota Sthalams, Chidambaram worships Shiva as space itself, the lesson that God is everywhere, including where the eye sees nothing.",
        },
        {
          title: "Shiva and Vishnu Under One Roof",
          content:
            "Unusually, Chidambaram is holy to both great streams of Hindu devotion. Within the same complex, the shrine of Govindaraja Perumal enshrines Vishnu reclining on Adisesha, making Chidambaram (as 'Thillai Chithrakoodam') one of the 108 Divya Desams sung by the Vaishnava Alvars, even as Nataraja reigns as the supreme Shaiva deity. Tradition holds that Vishnu witnessed the cosmic dance reclining here. The coexistence has its own storied history, and today devotees of both traditions worship side by side in one of the rare temples sacred to Shaivites and Vaishnavites alike.",
        },
      ],
    },
    architectureFeatures: [
      {
        name: "Chit Sabha (Ponnambalam)",
        nameTa: "சிற்சபை / பொன்னம்பலம்",
        type: "sanctum",
        description: "The innermost, gold-roofed 'Hall of Consciousness' where Nataraja dances the Ananda Tandava beside Sivakami. Its roof of gold tiles is fixed by 72,000 gold nails over 21,600 tiles, symbolising the body's nadis and daily breaths. To the deity's side hangs the curtain of the Chidambara Rahasyam, concealing the sacred empty space.",
        detail: "Gold roof · 21,600 tiles · 72,000 nails",
      },
      {
        name: "Kanaka Sabha",
        type: "mandapam",
        description: "The golden hall immediately before the Chit Sabha, from which the priests perform the worship and abhishekam of Nataraja. Men remove their shirts to ascend the steps to these inner halls.",
      },
      {
        name: "Nritta Sabha (Natya Sabha)",
        nameTa: "நிருத்த சபை",
        type: "mandapam",
        description: "The 'Hall of Dance', carved in the form of a great chariot with wheels and horses, supported by 56 ornate pillars. It marks the site of the dance contest between Shiva and Kali and contains a sculpture of Shiva in the rare Urdhva Tandava pose.",
        detail: "Chariot-shaped · 56 pillars",
      },
      {
        name: "East Gopuram (108 Karanas)",
        nameTa: "கிழக்கு கோபுரம்",
        type: "gopuram",
        description: "One of four ~45 m, nine-tiered gateway towers. The passage walls of the eastern (and western) gopuram sculpt the full set of 108 karanas, the codified postures of Bharatanatyam from the Natya Shastra, a unique stone treatise on classical dance.",
        detail: "~45 m · 9 tiers · 108 karanas carved",
      },
      {
        name: "Raja Sabha (Thousand-Pillar Hall)",
        type: "mandapam",
        description: "The great Raja Sabha, the thousand-pillared hall where the deity is seated and bathed during the grand Arudra and Aani abhishekam festivals. A vast Chola-era ceremonial space.",
        detail: "1,000-pillar hall",
      },
      {
        name: "Sivaganga Tank",
        type: "tank",
        description: "The temple's sacred tank within the complex, beside the shrine of Sivakami Amman, where devotees bathe and from which water is drawn for rituals.",
      },
      {
        name: "Govindaraja Perumal Shrine",
        type: "other",
        description: "The shrine of reclining Vishnu (Govindaraja) within the complex, a full Divya Desam in its own right, sung by the Alvars, the reason Chidambaram is sacred to Vaishnavites as well as Shaivites.",
      },
    ],
    subShrines: [
      {
        name: "Sivakami Amman",
        deity: "Goddess Parvati, consort of Nataraja",
        description: "The presiding Goddess, who witnesses the Ananda Tandava beside the Lord in the Chit Sabha and has her own large shrine beside the Sivaganga tank, worshipped as the divine mother of the temple.",
      },
      {
        name: "Govindaraja Perumal",
        deity: "Lord Vishnu, reclining on Adisesha",
        description: "The Vishnu shrine that makes Chidambaram a Divya Desam (Thillai Chithrakoodam). Govindaraja reclines near the Nataraja sanctum, worshipped by Vaishnavites in the same complex as the Shaiva Lord of the Dance.",
      },
      {
        name: "Thillai Kali",
        deity: "Goddess Kali",
        description: "Enshrined at the northern edge of the town after conceding the dance contest to Shiva, Thillai Kaliamman is closely bound to the temple's central legend and visited as part of a full Chidambaram pilgrimage.",
      },
      {
        name: "Mukkuruni Vinayagar & Murugan",
        deity: "Lord Ganesha and Lord Murugan",
        description: "The large Mukkuruni Vinayagar (Ganesha) and the shrine of Murugan (Pandya Nayakam) within the complex, worshipped by devotees on the way to the inner halls.",
      },
      {
        name: "Ratnasabhapathi & Crystal Lingam",
        deity: "Nataraja in ruby; Chandramouleeswarar",
        description: "A small ruby (Ratnasabhapathi) Nataraja and a crystal (spatika) lingam, Chandramouleeswarar, are brought out for special abhishekams, exquisite forms of the Lord reserved for particular rituals.",
      },
    ],
    visitorLogistics: {
      gates: [
        { name: "East Gopuram", direction: "East", notes: "The main approach, famed for the 108 karana carvings in its passage; most pilgrims enter here toward the Chit Sabha." },
        { name: "West Gopuram", direction: "West", notes: "Also carved with the 108 karanas; a common entry from the town side." },
        { name: "South & North Gopurams", direction: "South", notes: "The southern and northern gateways complete the four cardinal towers; used for processions and additional access." },
      ],
      cloakRoom: "Footwear must be left at stalls outside the gopurams before entering barefoot. Men should be prepared to remove their shirt to approach the Kanaka Sabha and Chit Sabha, as the Dikshitars require it in the inner golden halls.",
      mobilePolicy: "Mobile phones should be silenced; follow the Dikshitars' and staff's instructions near the sanctum, especially during the crowded abhishekam festivals.",
      cameraPolicy: "Photography is not permitted in the inner sanctum and golden halls. The gopurams, mandapams and outer courtyards are generally photographable; check posted rules.",
      wheelchairAccess: "The complex is large and largely flat across the outer courtyards, but the inner halls (Kanaka Sabha, Chit Sabha) are reached by steps, making the final approach difficult for wheelchairs. Assistance is informal; ask the temple staff.",
      seniorCitizenDarshan: "On normal days darshan is manageable, but the Arudra and Aani abhishekams and Natyanjali draw immense crowds; seniors should arrive very early and allow extra time. The steps to the inner halls are the main physical challenge.",
      parking: "Parking is available around the temple and the town; Chidambaram is compact and the temple is a short ride from the railway station and bus stand. Autos are plentiful.",
      restrooms: "Basic restrooms and drinking-water points are available near the temple and in the town. Facilities are stretched on festival days; carry your own essentials.",
      drinkingWater: "Drinking water is available near the entrances and tank. The coastal Tamil Nadu climate is hot for much of the year; carry water, especially March–July.",
    },
    sevas: [
      {
        name: "Nataraja Abhishekam",
        description: "The sacred bathing of the bronze Nataraja, performed only six times a year (chiefly at Margazhi Thiruvadirai and Aani Thirumanjanam) because the processional bronze cannot be bathed daily, making each abhishekam a rare and thronged spectacle in the Raja Sabha.",
        time: "Six festival days a year",
        fee: "Free to witness",
        type: "special",
      },
      {
        name: "Archana at the Chit Sabha",
        description: "Offering of the devotee's name and birth-star with flowers and the recitation of the Lord's names, performed by the Dikshitar priests at the golden hall.",
        time: "Daily on request",
        fee: "Modest archana fee",
        type: "daily",
      },
      {
        name: "Chidambara Rahasyam Darshan",
        description: "The drawing of the curtain beside Nataraja to reveal the sacred empty space, the formless divine, at the priests' discretion, especially during the deeparadhana, the most contemplative moment of a Chidambaram visit.",
        time: "During poojas",
        fee: "Free to witness",
        type: "daily",
      },
      {
        name: "Deeparadhana (Lamp Worship)",
        description: "The waving of camphor and lamps before Nataraja and the Rahasyam, when the gold hall glows and the assembled devotees behold the dancing Lord amid fire and bells.",
        time: "Daily (morning, noon, evening, night poojas)",
        fee: "Free to witness",
        type: "daily",
      },
      {
        name: "Ardha Jama (Palliyarai) Pooja",
        description: "The final worship of the day, when the Lord is ceremonially escorted to rest with lullabies, a gentle, intimate close to the temple's daily cycle.",
        time: "Daily, ~9:00–10:00 PM",
        fee: "Free to witness",
        type: "daily",
      },
    ],
    faqs: [
      {
        question: "What is the Chidambara Rahasyam (the 'secret of Chidambaram')?",
        answer:
          "It is the temple's central mystery: beside the Nataraja idol in the Chit Sabha hangs a curtain, and when it is drawn there is deliberately nothing behind it but empty space, marked only by a garland of golden bilva leaves. This 'space' is the formless, all-pervading divine, Akasha, the Sky element. Chidambaram is the Sky (Akasha) sthalam of the Pancha Bhoota Sthalams, teaching that God is not only the form we can see but the infinite consciousness that fills even emptiness. That is the secret: the divine is everywhere, even where the eye sees nothing.",
      },
      {
        question: "Why is Shiva worshipped as Nataraja here, and what does the dance mean?",
        answer:
          "Chidambaram is the place where Shiva performed the Ananda Tandava, the cosmic 'dance of bliss', for the sages Patanjali and Vyaghrapada, and it is the only temple where he is enshrined and primarily worshipped in this dancing form. Every element of the Nataraja icon is meaningful: the drum sounds creation, the fire is dissolution, the abhaya hand grants protection, the raised foot offers refuge and liberation, and the dwarf Apasmara crushed underfoot is ignorance. The dance is the rhythm of the entire cosmos (creation, preservation, destruction, concealment and grace) held in a single still bronze.",
      },
      {
        question: "Why is Chidambaram one of the Pancha Bhoota Sthalams?",
        answer:
          "The five Pancha Bhoota Sthalams are Shiva temples each representing one of the five great elements. Chidambaram represents Akasha (Sky/Space/Ether), expressed through the formless empty space of the Chidambara Rahasyam, rather than a physical lingam. The others are Ekambareswarar at Kanchipuram (Earth), Jambukeswarar at Thiruvanaikaval (Water), Arunachaleswarar at Thiruvannamalai (Fire), and Srikalahasti (Air/Wind).",
      },
      {
        question: "Is Chidambaram a Shiva temple or a Vishnu temple?",
        answer:
          "Both, which is rare. Nataraja, the dancing Shiva, is the supreme deity of the temple, making it one of the holiest Shaiva shrines. But the same complex enshrines Govindaraja Perumal, Vishnu reclining on Adisesha, which makes Chidambaram (as Thillai Chithrakoodam) one of the 108 Divya Desams sung by the Vaishnava Alvars. Devotees of both Shiva and Vishnu worship in the one complex.",
      },
      {
        question: "Who are the Dikshitars who run the temple?",
        answer:
          "The Dikshitars (the 'Thillai Moovayiravar', or 'three thousand') are the hereditary community of Brahmin priest-trustees who have performed the worship and administered Chidambaram throughout its history, by tradition descended from 3,000 sages who came with Shiva from Kailash. They are recognisable by the tuft of hair worn at the front of the head. Their right to administer the temple independently, without state (HR&CE) control, was upheld by the Supreme Court of India in 2014.",
      },
      {
        question: "What is the dress code, and do men need to remove their shirts?",
        answer:
          "Traditional attire is expected. To approach the inner golden halls (the Kanaka Sabha and Chit Sabha) men are required to remove the shirt and upper cloth and wear a dhoti/veshti, as the Dikshitars insist on a bare chest in the sanctum; women wear a saree or salwar. Shorts and sleeveless tops are best avoided. You will go barefoot inside the complex.",
      },
      {
        question: "When are the best festivals to witness the Nataraja abhishekam?",
        answer:
          "The bronze Nataraja is bathed only six times a year, so an abhishekam is a special sight. The two grandest are Margazhi Thiruvadirai / Arudra Darshanam (Dec–Jan), celebrating the cosmic dance on the Arudra star with the great temple-car procession, and Aani Thirumanjanam (June–July). For lovers of classical art, the Natyanjali festival at Maha Shivaratri (Feb–March) brings dancers from across India to perform before the Lord of the Dance.",
      },
    ],
  },
  "tiruchendur-murugan": {
    slug: "tiruchendur-murugan",
    timings: { morning: "5:00 AM – 1:00 PM", evening: "4:00 PM – 9:00 PM", note: "The day opens with the Viswaroopa/Ushakkala darshan around 5:00 AM and closes after the night pooja around 9:00 PM. Timings extend greatly during the Skanda Sashti festival, when the temple stays open through the night." },
    entryFee: "Free darshan. A quick-darshan (Sheeghra) ticket is available to shorten the queue; separate tickets for special abhishekams and archana.",
    dressCode: "Traditional attire. Men typically wear a dhoti/veshti (often bare-chested in the sanctum); women wear saree or salwar. Avoid shorts and sleeveless tops. Many pilgrims first take a holy sea-bath in the Bay of Bengal before darshan.",
    bestTime: "October – March. Skanda Sashti (October–November) with the Soorasamharam is the spiritual peak; Vaikasi Visakam (May–June), Murugan's birth-star festival, and the Masi car festival are also grand.",
    travelInfo: {
      byAir: "Tuticorin (Thoothukudi) Airport (~40 km) is nearest; Madurai International Airport (~150 km) and Thiruvananthapuram (~140 km) offer wider connections.",
      byTrain: "Tiruchendur Railway Station (~1–2 km) is a terminus connected via Tirunelveli (~40 km), itself a major junction with trains from Chennai, Madurai and beyond.",
      byRoad: "Tiruchendur is in Thoothukudi district on the Bay of Bengal coast. Buses run from Tirunelveli (~40 km), Thoothukudi (~40 km), Madurai (~150 km) and Kanyakumari (~90 km).",
    },
    highlights: [
      "The only one of the six Arupadai Veedu (sacred abodes of Murugan) situated on the seashore; all the others stand on hills",
      "The site where Lord Murugan worshipped Shiva and then slew the demon Soorapadman on the sixth day of Skanda Sashti (the Soorasamharam)",
      "The moolavar Senthil Andavar stands as a youthful Murugan in the rare posture of a devotee worshipping Shiva, the warrior-god as worshipper",
      "Set on a rocky promontory with the waves of the Bay of Bengal breaking at the temple's feet",
      "The Nazhi Kinaru: a well of sweet drinking water sunk into the seashore sand, yielding fresh water beside the salt sea",
      "A towering nine-tiered western Rajagopuram (~157 ft / 47 m) visible far across the flat coast",
      "Famous for the 17th-century recovery of its bronze festival idols from the sea after the Dutch (VOC) carried them off",
    ],
    history: "The Arulmigu Subramaniya Swamy Temple at Tiruchendur is among the most revered Murugan shrines in the Tamil world, the second of the six Arupadai Veedu ('six battle camps' / abodes) and the only one by the sea. Its sanctity is sung in the Tamil Sangam-age and bhakti traditions (by the Nayanmars and in Nakkeerar's Tirumurugatruppadai) and it is here, according to the Skanda Purana, that Murugan marshalled the divine army and destroyed the asura Soorapadman. Portions of the sanctum are cut into the living rock of the shore. The temple's most dramatic historical episode came around 1648–1653, when Dutch East India Company forces seized its bronze processional idols; tradition holds that, guided by a vision and a floating lime that marked the spot, the devotee-administrator Vadamalaiyappa Pillai recovered the images from the sea and restored them. Successive Pandya, Nayaka and later patrons expanded the great gopuram, mandapams and corridors that crown the rocky promontory today.",
    architecture: "Tiruchendur is built on a low rocky promontory facing the Bay of Bengal, an unusual seaside setting for a major Dravidian temple. Its dominant landmark is the nine-storeyed western Mela Gopuram, rising about 157 feet over the flat coastal plain. The temple faces east toward the sea, but the towering gateway stands on the landward (west) side. Beyond it stretch pillared corridors and the Shanmukha Vilasa Mandapam leading to the sanctum, parts of which are hewn from the shore rock. The garbhagriha enshrines Senthil Andavar (Subrahmanya) flanked by shrines to his consorts Valli and Deivanai and to the boy-form Shanmukha. Close to the sea lies the marvel of the Nazhi Kinaru, a sweet-water well in the salt sand, and the shore itself serves as the temple theertham, where pilgrims bathe in the Bay of Bengal before climbing to the Lord.",
    festivals: [
      { name: "Skanda Sashti (Soorasamharam)", month: "October–November (Aippasi)", description: "The temple's supreme festival: a six-day vratham re-enacting Murugan's war on Soorapadman, culminating on the sixth day in the spectacular Soorasamharam, the slaying of the demon, before lakhs of devotees on the shore, followed by the Thirukalyanam (the Lord's wedding to Devasena).", slug: "skanda-sashti" },
      { name: "Vaikasi Visakam", month: "May–June (Vaikasi)", description: "Celebrates Murugan's birth-star, Visakam, one of the holiest days for Murugan devotees, with grand abhishekams, processions and special worship of the six-faced Lord." },
      { name: "Masi Festival (Brahmotsavam)", month: "February–March (Masi)", description: "A grand annual festival with the deities processed on the great temple car (ther) and a float festival, drawing crowds from across the south." },
      { name: "Aavani Festival", month: "August–September (Aavani)", description: "Another major Brahmotsavam of processions and abhishekams, marking the temple's busy festival calendar through the Tamil year." },
    ],
    poojas: [
      { name: "Ushakkala Pooja", time: "Early morning (~5:00 AM)", fee: "Free to witness" },
      { name: "Kalasanthi Pooja", time: "Morning", fee: "Free to witness" },
      { name: "Uchikkala Pooja (Noon)", time: "~12:00 PM", fee: "Free to witness" },
      { name: "Sayaratchai & Ardhajama", time: "Evening / night", fee: "Free to witness" },
    ],
    nearbyTemples: ["madurai-meenakshi", "ramanathaswamy-rameswaram"],
    mythology: {
      legend:
        "When the asura Soorapadman, who had won great boons, tyrannised the devas and imprisoned them, the gods appealed to Shiva. From the spark of Shiva's third eye was born Murugan (Subrahmanya), the six-faced warrior-god, whom Shiva armed with the divine Vel (spear). Leading the celestial army southward, Murugan made his camp at Tiruchendur on the seashore. There, before joining battle, he first worshipped his father Shiva, installing and venerating a lingam, an act that makes Tiruchendur unique: the place where the warrior-god is himself the worshipper, and where he is enshrined in that devout, youthful form. Over six days the great battle raged, until on the sixth, Skanda Sashti, Murugan hurled the Vel and destroyed Soorapadman. In his final moment the repentant demon took the form of a tree that split in two; Murugan transformed the halves into his emblems: the peacock that became his mount (vahana) and the rooster that adorns his battle-flag.",
      additionalStories: [
        {
          title: "The Nazhi Kinaru, Sweet Water in the Salt Sand",
          content:
            "Among Tiruchendur's wonders is the Nazhi Kinaru, a small well sunk into the sandy shore only steps from the breaking waves of the Bay of Bengal. Though it lies amid salt sand by a salt sea, it yields sweet, drinkable water, a marvel attributed to the Lord's grace. By tradition the spot is linked to Murugan's army, which needed fresh water on the barren shore. Pilgrims draw and drink its water as theertham, and the well's persistence beside the sea is taken as a standing sign of the god's presence.",
        },
        {
          title: "The Dutch Theft and the Recovery from the Sea",
          content:
            "Around the mid-17th century, Dutch East India Company (VOC) forces operating on the Coromandel coast seized the temple's precious bronze processional idols, including the festival image of the Lord. Tradition recounts that the devotee and temple administrator Vadamalaiyappa Pillai was granted a vision revealing that the idols had been cast into or lost to the sea, and that a floating lime (or a hovering bird) would mark the exact spot. Following the sign, divers recovered the images from the waters and bore them back in triumph, and the festival worship was restored, an episode still recounted as proof of the Lord's refusal to abandon his shrine.",
        },
        {
          title: "Why the Sea, and the Holy Bath",
          content:
            "Alone among the six Arupadai Veedu, Tiruchendur sits at the ocean's edge rather than on a hill, and the Bay of Bengal itself serves as the temple's sacred theertham. Pilgrims traditionally bathe in the sea before ascending for darshan, washing away impurities in the very waters beside which Murugan won his victory. The sound of the surf against the rock beneath the sanctum is part of the temple's distinctive experience, binding the cosmic battle, the shore, and the act of worship into one.",
        },
      ],
    },
    architectureFeatures: [
      {
        name: "Mela Gopuram (West Tower)",
        nameTa: "மேல கோபுரம்",
        type: "gopuram",
        description: "The temple's commanding nine-tiered western gateway, rising about 157 feet over the flat coast and visible for miles. Though the temple faces east toward the sea, this great tower stands on the landward side and forms the principal entrance.",
        detail: "~157 ft · 9 tiers",
      },
      {
        name: "Garbhagriha (Senthil Andavar)",
        type: "sanctum",
        description: "The inner sanctum, partly cut into the shore rock, enshrining Senthil Andavar (Subrahmanya) as a youthful Murugan in the rare devotional posture of one worshipping Shiva. The holiest point of the temple.",
        detail: "Rock-cut · Murugan as worshipper",
      },
      {
        name: "Shanmukha Vilasa Mandapam",
        type: "mandapam",
        description: "A pillared hall on the approach to the sanctum, named for the six-faced (Shanmukha) form of the Lord, carved with figures from the Murugan legends and leading the devotee inward through the temple.",
      },
      {
        name: "Nazhi Kinaru (Sweet-Water Well)",
        nameTa: "நாழி கிணறு",
        type: "tank",
        description: "The famous well of sweet water sunk into the salt sand of the seashore, only steps from the waves. Its fresh water amid the salt sea is revered as a miracle and taken by pilgrims as theertham.",
        detail: "Fresh water beside the salt sea",
      },
      {
        name: "Bay of Bengal Theertham (Shore)",
        type: "tank",
        description: "The sea itself is the temple's sacred bathing place. Pilgrims take a holy dip in the Bay of Bengal at the foot of the promontory before climbing to the sanctum, a defining ritual of a Tiruchendur visit.",
      },
      {
        name: "Corridors & Shore Mandapams",
        type: "mandapam",
        description: "Long pillared corridors and mandapams crown the rocky promontory around the sanctum, several open toward the sea, giving the temple its unique character poised between rock and ocean.",
      },
    ],
    subShrines: [
      {
        name: "Valli & Deivanai (Devasena)",
        deity: "The two consorts of Murugan",
        description: "Valli, the hunter-chieftain's daughter who won the Lord by love, and Deivanai (Devasena), daughter of Indra wedded to him after the victory over Soorapadman, each honoured in their shrines beside the Lord.",
      },
      {
        name: "Shanmukha / Jayanthinathar (Festival Deity)",
        deity: "The six-faced processional Murugan",
        description: "The bronze utsava (processional) form of the Lord, among the idols famously recovered from the sea after the Dutch seizure, taken out on the temple car and through the streets during festivals.",
      },
      {
        name: "Shiva Lingam (worshipped by Murugan)",
        deity: "Lord Shiva",
        description: "The lingam linked to the legend of Murugan worshipping his father Shiva at Tiruchendur before the battle, the act that defines the temple's unique identity, where the warrior-god is also a devotee.",
      },
      {
        name: "Vinayaka & the Murugan Forms",
        deity: "Lord Ganesha and the forms of Murugan",
        description: "Vinayaka (Ganesha), invoked first to remove obstacles, alongside the various forms in which Murugan is venerated through the complex, as boy, warrior, and bridegroom.",
      },
    ],
    visitorLogistics: {
      gates: [
        { name: "Mela Gopuram (West Main Entrance)", direction: "West", notes: "The principal entrance beneath the great nine-tier tower on the landward side; most pilgrims enter here toward the sanctum." },
        { name: "Shore / Eastern approach", direction: "East", notes: "The seaward side, where pilgrims arrive from the beach after the holy dip in the Bay of Bengal." },
      ],
      cloakRoom: "Footwear and deposited items are handled at stalls near the entrance; you go barefoot beyond the boundary. Note that many pilgrims arrive wet from the sea bath, so the shore-side approach can be busy and slippery.",
      mobilePolicy: "Mobile phones should be silenced and are restricted near the sanctum; follow staff instructions, especially during the enormous Skanda Sashti crowds.",
      cameraPolicy: "Photography is not permitted inside the sanctum. The gopuram, corridors and the seashore are generally photographable; check posted rules.",
      wheelchairAccess: "The temple sits on a rocky rise with steps up from the shore, so the approach can be difficult for wheelchairs; assistance is informal. The sea-bath area is sandy and uneven. Ask temple staff for help.",
      seniorCitizenDarshan: "A quick-darshan ticket helps shorten the wait. During Skanda Sashti and Vaikasi Visakam the crowds are immense and the queues long; seniors should arrive very early and plan for the steps and the shore.",
      parking: "Parking is available in the town near the temple; Tiruchendur is small and the temple is a short walk or auto ride from the railway station and bus stand. Lots fill quickly on festival days.",
      restrooms: "Basic restrooms and changing facilities (for the sea bath) and drinking-water points are available near the temple and shore. Facilities are stretched on festival days; carry your own essentials.",
      drinkingWater: "Drinking water is available near the entrances and the Nazhi Kinaru. The coastal climate is hot and humid much of the year; carry water, especially in the March–June summer.",
    },
    sevas: [
      {
        name: "Sea Bath & Nazhi Kinaru Theertham",
        description: "The traditional preparatory ritual of bathing in the Bay of Bengal and drinking the sweet water of the Nazhi Kinaru before darshan, purification in the very waters beside Murugan's battlefield.",
        time: "Before darshan (daytime)",
        fee: "Free",
        type: "daily",
      },
      {
        name: "Abhishekam to Senthil Andavar",
        description: "The sacred bathing of the Lord with milk, sandal, panchamrita and holy water amid Vedic and Tamil hymn recitation, sponsored by devotees on chosen days.",
        time: "Morning (select days)",
        fee: "Sponsored",
        type: "special",
      },
      {
        name: "Archana (Kavacham)",
        description: "Offering of the devotee's name and birth-star with the recitation of the Lord's names; the Kanda Sashti Kavacham is especially favoured here, the great hymn of protection composed in Murugan's praise.",
        time: "Daily on request",
        fee: "Modest archana fee",
        type: "daily",
      },
      {
        name: "Kavadi Offering",
        description: "Devotees carry the kavadi (an arched, decorated burden borne on the shoulders, often fulfilling a vow) to the Lord, especially during Vaikasi Visakam and Skanda Sashti, a hallmark of Murugan worship.",
        time: "Festival days / on vow",
        fee: "Devotee's offering",
        type: "special",
      },
      {
        name: "Soorasamharam & Thirukalyanam (Skanda Sashti)",
        description: "Witnessing the climactic enactment of Murugan's victory over Soorapadman on the sixth day of Skanda Sashti, followed by the Lord's celestial wedding to Devasena, the most sought-after darshan of the year.",
        time: "Skanda Sashti (Oct–Nov)",
        fee: "Free to witness",
        type: "special",
      },
    ],
    faqs: [
      {
        question: "What makes Tiruchendur unique among the Arupadai Veedu?",
        answer:
          "Tiruchendur is the only one of Murugan's six sacred abodes (Arupadai Veedu) situated on the seashore; all the others (Palani, Swamimalai, Thiruparankundram, Pazhamudircholai and Thiruthani) stand on hills. It is the place where, by the Skanda Purana, Murugan worshipped Shiva and then destroyed the demon Soorapadman. The Bay of Bengal itself serves as the temple theertham, and the sanctum is partly cut into the shore rock.",
      },
      {
        question: "Why is Murugan shown worshipping Shiva here?",
        answer:
          "Before the great battle, Murugan is said to have established and venerated a Shiva lingam at Tiruchendur, worshipping his father for victory. The moolavar Senthil Andavar is therefore enshrined as a youthful Murugan in the posture of a devotee, a rare and beautiful idea, the warrior-god who is also the worshipper. It expresses the devotional heart of the temple: even the mightiest power bows in reverence.",
      },
      {
        question: "What is the Soorasamharam, and when can I see it?",
        answer:
          "The Soorasamharam is the dramatic ritual enactment of Murugan slaying the demon Soorapadman, staged on the sixth day of the Skanda Sashti festival (Aippasi, Oct–Nov) on the Tiruchendur shore before hundreds of thousands of devotees. In the demon's final moment he becomes the peacock (Murugan's mount) and the rooster (his flag emblem). The next day, the Thirukalyanam celebrates the Lord's wedding to Devasena. It is the single grandest event in the temple's calendar.",
      },
      {
        question: "What is the Nazhi Kinaru?",
        answer:
          "The Nazhi Kinaru is a small well sunk into the sandy seashore only steps from the waves, famous for yielding sweet, drinkable water despite lying amid salt sand beside the salt sea. Revered as a miracle of the Lord's grace and linked by legend to Murugan's army needing fresh water on the barren coast, its water is taken by pilgrims as sacred theertham.",
      },
      {
        question: "Should I take a sea bath before darshan?",
        answer:
          "Yes, it is the traditional practice. Because the Bay of Bengal is Tiruchendur's sacred theertham, pilgrims customarily bathe in the sea (and drink from the Nazhi Kinaru) to purify themselves before climbing to the sanctum. Changing facilities are available near the shore. Take care, as the beach can be crowded and slippery, especially on festival days.",
      },
      {
        question: "What is the story of the idols recovered from the sea?",
        answer:
          "Around the mid-17th century, Dutch (VOC) forces seized the temple's bronze festival idols. Tradition holds that the devotee-administrator Vadamalaiyappa Pillai was granted a vision that the images lay in the sea and that a floating lime would mark the spot; following the sign, divers recovered the idols from the waters and restored them to worship. The episode is cherished as proof that the Lord would not forsake his seaside shrine.",
      },
      {
        question: "What are the main timings and the best festivals to visit?",
        answer:
          "The temple is generally open from about 5:00 AM to 1:00 PM and 4:00 to 9:00 PM, with the day beginning at the early Ushakkala darshan; timings extend through the night during Skanda Sashti. The grandest festivals are Skanda Sashti (Oct–Nov), with the Soorasamharam, and Vaikasi Visakam (May–June), Murugan's birth-star; the Masi and Aavani Brahmotsavams bring the great car festivals.",
      },
    ],
  },
  "palani-murugan": {
    slug: "palani-murugan",
    timings: { morning: "5:30 AM – 1:00 PM", evening: "3:00 PM – 9:00 PM", note: "The day opens with the Viswaroopa darshan around 5:30–6:00 AM and closes after the night Rakkala pooja, when sandal paste is applied to the idol to be removed at dawn as medicinal prasadam. Timings extend greatly during Thaipusam and Panguni Uthiram." },
    entryFee: "Free darshan. A quick-darshan (Sheeghra) ticket shortens the queue. The hill is reached by steps (free), or by a paid winch (rope train) and rope car (cable car).",
    dressCode: "Traditional attire. Men typically wear a dhoti/veshti (often bare-chested in the sanctum); women wear saree or salwar. Avoid shorts and sleeveless tops. Many pilgrims climb the hill barefoot, often carrying kavadi.",
    bestTime: "October – March. Thaipusam (January–February) is the spiritual peak and the greatest kavadi pilgrimage; Panguni Uthiram (March–April) and Vaikasi Visakam (May–June) are also grand.",
    travelInfo: {
      byAir: "Coimbatore International Airport (~110 km) is nearest; Madurai (~120 km) and Tiruchirapalli (~150 km) offer wider connections.",
      byTrain: "Palani Railway Station (~3–4 km) connects to Dindigul, Coimbatore, Madurai and Tiruchirapalli, with onward buses and autos to the hill.",
      byRoad: "Palani is in Dindigul district on the Dindigul–Pollachi road at the foot of the Western Ghats. Buses run from Dindigul (~60 km), Coimbatore (~110 km), Madurai (~120 km) and the hill station Kodaikanal (~65 km).",
    },
    highlights: [
      "One of the six Arupadai Veedu (sacred abodes of Murugan), crowning the Sivagiri hill above the town of Palani",
      "Lord Dhandayuthapani is worshipped as a young renunciate, head shaven, clad only in a loincloth, holding a danda (staff), the god who renounced all after the contest for the fruit of wisdom",
      "The idol is made of Navapashanam, an amalgam of nine medicinal minerals fashioned by the Siddha sage Bhogar; uniquely, the abhishekam runoff becomes curative prasadam",
      "Home of the famous Palani Panchamirtham, a GI-tagged five-ingredient sweet prasadam",
      "The birthplace of the kavadi tradition, born of the legend of Idumban carrying the two hills",
      "Bhogar, one of the eighteen Siddhars, is enshrined here in jeeva samadhi, having created the idol and remained in yogic repose",
      "Reached up the hill by ancient stone steps, an electric winch (rope train), or a rope car (cable car)",
    ],
    history: "The Arulmigu Dhandayuthapani Swamy Temple at Palani is one of the most visited and beloved of all Murugan shrines, the third of the six Arupadai Veedu, set atop the Sivagiri hill in Dindigul district. Its sanctity is rooted in the Tamil bhakti tradition and the Skanda legends, and it is bound up with the Siddha lineage of Tamil Nadu through the sage Bhogar, who, by tradition, sculpted the deity from nine medicinal substances (Navapashanam) and remains in samadhi within the temple. The town's name itself is held to come from the Lord's story: 'Pazham nee' ('you are the fruit'), the words spoken to console the renunciate Murugan, softened over time into 'Palani'. Across the centuries Pandya, Chera and later rulers and the Siddha tradition shaped the hill shrine, the foot temple of Thiru Avinankudi, and the great steps and gateways that pilgrims climb today. Palani is administered by the Tamil Nadu HR&CE and draws millions, above all at Thaipusam.",
    architecture: "The temple crowns the Sivagiri hill, about 160 metres above the plain, reached by a long flight of stone steps (the Giri Veedhi) as well as a modern electric winch and a rope car. The hilltop sanctum enshrines Dhandayuthapani, Murugan as the staff-bearing ascetic, in the Navapashanam idol, facing east. Around it run the prakaram, mandapams and the golden-towered gateway, with the Bhogar Sannidhi (the Siddha's samadhi shrine) set within the complex and connected by tradition to an underground passage. Partway up the hill stands the shrine of Idumban, the guardian, and at the very foot of the hill lies the Thiru Avinankudi temple, where Murugan is worshipped with his consorts and peacock, together the 'Adivaram' (base) and hilltop shrines form the sacred whole of Palani. The two hills, Sivagiri and Sakthigiri, are themselves part of the legend of Idumban's burden.",
    festivals: [
      { name: "Thaipusam", month: "January–February (Thai)", description: "Palani's greatest festival and the largest kavadi pilgrimage in the Tamil world. Lakhs of devotees walk to the hill, many on foot from distant towns, bearing kavadis and milk-pots (paal kudam) as vows, recalling the gift of the Vel to Murugan. The hill and town overflow day and night." },
      { name: "Panguni Uthiram", month: "March–April (Panguni)", description: "A grand festival marked by the temple car (ther) procession and the celestial associations of Murugan, drawing vast crowds and kavadi-bearers up the hill." },
      { name: "Vaikasi Visakam", month: "May–June (Vaikasi)", description: "Celebrates Murugan's birth-star, Visakam, with special abhishekams and processions, among the holiest days for his devotees." },
      { name: "Skanda Sashti", month: "October–November (Aippasi)", description: "The six-day festival of Murugan's victory over Soorapadman, observed with fasting, processions and devotion at Palani as at the other Arupadai Veedu.", slug: "skanda-sashti" },
    ],
    poojas: [
      { name: "Viswaroopa Darshanam", time: "~5:30–6:00 AM", fee: "Free to witness" },
      { name: "Kala Santhi Pooja", time: "Morning", fee: "Free to witness" },
      { name: "Uchikkala Pooja (Noon)", time: "~12:00 PM", fee: "Free to witness" },
      { name: "Rakkala Pooja (Night Sandal)", time: "Night (~8:00 PM)", fee: "Free to witness" },
    ],
    nearbyTemples: ["madurai-meenakshi", "tiruchendur-murugan"],
    mythology: {
      legend:
        "The defining legend of Palani is the contest for the fruit of wisdom. The sage Narada brought to Kailash a single divine mango (the Gnana Pazham, the fruit of supreme knowledge) which could not be cut or shared. Shiva and Parvati resolved to give it to whichever of their two sons first circled the world. Murugan at once mounted his peacock and sped off around the earth. But Ganesha, wise and unhurried, simply walked around his parents, declaring that they were his whole world, and so won the fruit. Returning to find himself outwitted and the fruit already given, Murugan felt slighted; renouncing his ornaments and even his clothing, he left Kailash and withdrew to the hill at Palani as a solitary ascetic, clad in a loincloth and holding only a staff (danda). There Shiva and Parvati came to console him, and Parvati (or, by another telling, the poet-saint Avvaiyar) soothed him with the words 'Pazham nee' ('you yourself are the fruit', the very essence of wisdom), from which the hill takes its name, Palani. The Lord remains there as Dhandayuthapani, 'he who bears the staff as his weapon', the god of renunciation.",
      additionalStories: [
        {
          title: "Idumban and the Birth of the Kavadi",
          content:
            "Idumban was an asura who became a devotee of the sage Agastya. Agastya wished to take two hills, Sivagiri and Sakthigiri, to the south, and asked Idumban to carry them. Idumban slung the two hills on either end of a pole across his shoulders (the first kavadi) and bore them south. Reaching Palani, he set them down to rest. When he tried to lift them again, they would not move: a small boy stood upon one hill, claiming it as his own. The two fought, and Idumban was slain, but the boy was Murugan himself, and at the pleading of Idumban's wife (and of the devotees) the Lord restored him to life. The grateful Idumban was made guardian of the hill, his shrine standing partway up. From his act comes the kavadi: every devotee who carries the decorated, arched burden up to Palani re-enacts Idumban's offering, and it is said the Lord grants the wishes of those who bring kavadi with devotion.",
        },
        {
          title: "Bhogar and the Navapashanam Idol",
          content:
            "By tradition the Palani idol was not carved from ordinary stone or metal but compounded by the Siddha sage Bhogar (Bhoganathar), one of the eighteen Siddhars, from Navapashanam, nine 'poisons', a secret amalgam of medicinal and mineral substances combined into a single hardened image of immense potency. Because of this, the milk, sandal, panchamrita and other substances poured over the idol in abhishekam absorb its virtue and are revered as curative prasadam. The composition is held to be impossible to replicate and so sacred that no ordinary abhishekam liquid is wasted. Bhogar is believed to have attained jeeva samadhi within the temple and to abide there still in yogic stillness; his shrine is venerated alongside the Lord.",
        },
        {
          title: "The Panchamirtham of Palani",
          content:
            "Palani is famous for its Panchamirtham, a sweet, fragrant prasadam made of five chief ingredients: the small Virupatchi hill bananas of the region, jaggery, ghee, honey and cardamom, with dates and sugar candy, pounded into a rich paste. Distributed to pilgrims as the Lord's blessing, it is so distinctive to the temple and its hill-grown bananas that it has been awarded a Geographical Indication (GI) tag. For countless devotees, receiving Palani Panchamirtham is inseparable from the pilgrimage itself.",
        },
      ],
    },
    architectureFeatures: [
      {
        name: "Hilltop Sanctum (Dhandayuthapani)",
        type: "sanctum",
        description: "The east-facing inner sanctum atop the Sivagiri hill enshrining the Navapashanam idol of Murugan as Dhandayuthapani, the staff-bearing renunciate. The holiest point of the temple, where the medicinal abhishekam is performed.",
        detail: "Navapashanam idol · Murugan as ascetic",
      },
      {
        name: "Bhogar Sannidhi (Samadhi Shrine)",
        type: "other",
        description: "The shrine of the Siddha sage Bhogar, who by tradition created the idol and attained jeeva samadhi within the temple. Connected by legend to an underground passage, it is venerated by devotees as the abode of the living Siddha.",
      },
      {
        name: "Giri Veedhi Steps, Winch & Rope Car",
        type: "other",
        description: "The hill is ascended by an ancient flight of stone steps (the Giri Veedhi), by an electric winch (a rope train running up the slope), and by a rope car (cable car), the three ways pilgrims reach the summit, the steps climbed barefoot by the most devout.",
        detail: "Steps · winch · cable car",
      },
      {
        name: "Idumban Shrine",
        type: "other",
        description: "The shrine of Idumban, the asura-turned-devotee made guardian of the hill, set partway up the ascent. Kavadi-bearers pause to worship here, honouring the origin of the kavadi tradition.",
      },
      {
        name: "Thiru Avinankudi (Adivaram Temple)",
        type: "other",
        description: "The temple at the very foot of the hill, where Murugan is worshipped with his consorts Valli and Deivanai and his peacock. Together with the hilltop shrine it forms the complete sacred whole of Palani.",
      },
      {
        name: "Sivagiri & Sakthigiri Hills",
        type: "other",
        description: "The two hills of Palani, by legend the very hills Idumban carried on his kavadi. The Dhandayuthapani temple crowns Sivagiri; the paired hills are part of the landscape sanctity of the shrine.",
      },
    ],
    subShrines: [
      {
        name: "Bhogar (Siddhar)",
        deity: "The Siddha sage Bhoganathar",
        description: "One of the eighteen Siddhars, creator of the Navapashanam idol, enshrined in jeeva samadhi within the temple and worshipped as a living presence who still guards and blesses the shrine.",
      },
      {
        name: "Idumban",
        deity: "The asura-devotee, guardian of the hill",
        description: "Slain and restored by Murugan, made the hill's guardian; his shrine partway up the ascent is the spiritual root of the kavadi offering that defines Palani pilgrimage.",
      },
      {
        name: "Valli & Deivanai (at Thiru Avinankudi)",
        deity: "The two consorts of Murugan",
        description: "Because Dhandayuthapani on the hill is the solitary renunciate, the Lord is worshipped with his consorts Valli and Deivanai at the foot-of-hill temple of Thiru Avinankudi.",
      },
      {
        name: "Vinayaka",
        deity: "Lord Ganesha",
        description: "Murugan's brother and the very figure who won the fruit of wisdom in the central legend, worshipped first by devotees to remove obstacles before the climb and darshan.",
      },
    ],
    visitorLogistics: {
      gates: [
        { name: "Hill Entrance (Steps / Giri Veedhi)", direction: "South", notes: "The traditional ascent on foot up the stone steps; many devotees climb barefoot, often carrying kavadi." },
        { name: "Winch & Rope Car Stations", direction: "East", notes: "The electric winch (rope train) and the rope car (cable car) carry pilgrims who cannot climb; ticket counters are at the base." },
      ],
      cloakRoom: "Footwear and bags are deposited at the base or designated counters before the climb; you go barefoot beyond the boundary. Plan for the ascent before reaching the cloak points.",
      mobilePolicy: "Mobile phones should be silenced and are restricted near the sanctum; follow staff instructions, especially during the immense Thaipusam crowds.",
      cameraPolicy: "Photography is not permitted inside the sanctum. The hill, gopuram and views over the plain are generally photographable; check posted rules.",
      wheelchairAccess: "The hilltop is reached by steps, but the winch and rope car make the summit accessible to seniors and those unable to climb. The sanctum approach still has some steps; assistance is informal. Ask temple staff.",
      seniorCitizenDarshan: "Use the winch or rope car rather than the steps, and a quick-darshan ticket to shorten the queue. During Thaipusam and Panguni Uthiram the crowds are vast and waits long; arrive very early.",
      parking: "Parking is available at the foot of the hill near the winch and rope-car stations and in the town; lots fill quickly on festival days. The temple is a short ride from the railway station and bus stand.",
      restrooms: "Restrooms and drinking-water points are available at the base and on the hill. Facilities are heavily stretched during Thaipusam; carry your own essentials.",
      drinkingWater: "Drinking water is available at the base and summit. The plain is hot for much of the year and the climb is strenuous; carry water, especially March–June.",
    },
    sevas: [
      {
        name: "Abhishekam (Navapashanam)",
        description: "The sacred bathing of the Navapashanam idol with milk, panchamrita, sandal and holy water; because of the idol's medicinal composition the runoff is revered as curative prasadam, sought by devotees for healing.",
        time: "Morning (select days)",
        fee: "Sponsored",
        type: "special",
      },
      {
        name: "Panchamirtham Prasadam",
        description: "Receiving the temple's famous GI-tagged Panchamirtham (the sweet paste of hill bananas, jaggery, ghee, honey and cardamom) as the Lord's blessing, inseparable from a Palani pilgrimage.",
        time: "Daily",
        fee: "Offering / purchase",
        type: "daily",
      },
      {
        name: "Kavadi Offering",
        description: "Carrying the kavadi (the arched, decorated shoulder-burden) up the hill in fulfilment of a vow, re-enacting Idumban's offering. The defining act of devotion at Palani, at its height during Thaipusam.",
        time: "Festival days / on vow",
        fee: "Devotee's offering",
        type: "special",
      },
      {
        name: "Paal Kudam (Milk-Pot Offering)",
        description: "Bearing pots of milk up to the hilltop to be poured over the Lord in abhishekam, a popular and accessible vow carried by pilgrims of all ages, especially during Thaipusam.",
        time: "Festival days / on vow",
        fee: "Cost of the milk",
        type: "special",
      },
      {
        name: "Mottai (Tonsure / Hair Offering)",
        description: "The offering of one's hair by tonsuring the head as an act of surrender and the fulfilment of a vow. Palani is one of the major temples where devotees, including children, offer their hair.",
        time: "Daily on request",
        fee: "Prescribed fee",
        type: "special",
      },
      {
        name: "Rakkala Santhanam (Night Sandal)",
        description: "Sandal paste applied to the idol at the night Rakkala pooja and removed at dawn, by then imbued with the idol's medicinal virtue and distributed to devotees as a prized healing prasadam.",
        time: "Night to dawn",
        fee: "Free to receive",
        type: "daily",
      },
    ],
    faqs: [
      {
        question: "Why is Murugan worshipped as a renunciate (Dhandayuthapani) at Palani?",
        answer:
          "Because of the legend of the fruit of wisdom. When Shiva and Parvati offered a single divine mango to whichever son first circled the world, Murugan raced around the earth on his peacock while Ganesha simply circled his parents (calling them his world) and won the fruit. Feeling slighted, Murugan renounced his ornaments and clothing and withdrew to Palani hill as a solitary ascetic, holding only a staff (danda). He is enshrined there as Dhandayuthapani, 'he who bears the staff as his weapon', the god of detachment and renunciation. Parvati consoled him with 'Pazham nee' ('you are the fruit'), from which 'Palani' takes its name.",
      },
      {
        question: "What is the Navapashanam idol, and why is the abhishekam special?",
        answer:
          "The Palani idol is, by tradition, not carved of ordinary stone or metal but compounded by the Siddha sage Bhogar from Navapashanam, nine medicinal-mineral 'poisons' fused into a single image of great potency. Because of this composition, the milk, sandal, panchamrita and other substances poured over it in abhishekam absorb its curative virtue and are revered as healing prasadam (notably the Rakkala Santhanam, the night sandal removed at dawn). The idol is held to be impossible to replicate.",
      },
      {
        question: "Why do devotees carry kavadi to Palani?",
        answer:
          "The kavadi tradition was born here, from the legend of Idumban, an asura-turned-devotee who carried the two hills, Sivagiri and Sakthigiri, slung on a pole across his shoulders (the first kavadi). At Palani he set them down and could not lift them again; he fought the boy-Murugan, was slain, and was restored to life and made the hill's guardian. Ever since, devotees carry the decorated, arched kavadi up the hill in imitation of his offering, believing the Lord grants the wishes of those who bring it with devotion.",
      },
      {
        question: "What is Palani Panchamirtham?",
        answer:
          "It is the temple's famous prasadam: a sweet, fragrant paste of five chief ingredients: the small Virupatchi hill bananas of the Palani region, jaggery, ghee, honey and cardamom, with dates and sugar candy. So distinctive to the temple and its hill-grown bananas that it has received a Geographical Indication (GI) tag, it is distributed to pilgrims as the Lord's blessing and is, for many, inseparable from the pilgrimage.",
      },
      {
        question: "How do I get to the temple at the top of the hill?",
        answer:
          "The Dhandayuthapani temple crowns the Sivagiri hill (~160 m) and is reached three ways: by climbing the ancient stone steps (the Giri Veedhi), often done barefoot by the devout and by kavadi-bearers; by the electric winch (a rope train up the slope); or by the rope car (cable car). Seniors and those unable to climb usually take the winch or rope car. At the foot of the hill is the Thiru Avinankudi temple, also part of the pilgrimage.",
      },
      {
        question: "When is the best time to visit, and which festival is grandest?",
        answer:
          "October to March has the most pleasant weather. The grandest festival by far is Thaipusam (Thai, Jan–Feb), the largest kavadi pilgrimage in the Tamil world, when lakhs walk to Palani bearing kavadis and milk-pots. Panguni Uthiram (March–April) with the car festival and Vaikasi Visakam (May–June), Murugan's birth-star, are also major. Expect enormous crowds and long waits at these times.",
      },
      {
        question: "Who was Bhogar?",
        answer:
          "Bhogar (Bhoganathar) was one of the eighteen Siddhars of the Tamil spiritual tradition, a master of medicine, alchemy and yoga. He is credited with creating the Navapashanam idol of Palani and, by tradition, attained jeeva samadhi within the temple, where he is believed to remain in yogic stillness. His shrine (the Bhogar Sannidhi) is venerated alongside the Lord, and he is honoured as a living presence guarding the hill.",
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
