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
  festivals: { name: string; month: string; description: string }[];
  poojas: { name: string; time: string; fee: string }[];
  nearbyTemples: string[];
  coordinates: { lat: number; lng: number };
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
      { name: "Brahmotsavam", month: "September–October", description: "Nine-day annual festival drawing millions of pilgrims. The deity is taken out in a grand procession on 9 different vahanas (vehicles)." },
      { name: "Vaikunta Ekadasi", month: "December–January", description: "The most sacred day when the Vaikunta Dwaram (Heaven's Gate) is opened. Darshan is given through this special door." },
      { name: "Rathasapthami", month: "February", description: "Celebrates the birthday of the Sun God. The deity is placed on a chariot and taken in a procession." },
    ],
    poojas: [
      { name: "Suprabhatha Seva", time: "2:30 AM", fee: "₹5,000" },
      { name: "Thomala Seva", time: "3:00 AM", fee: "₹5,000" },
      { name: "Archana", time: "All day", fee: "₹120" },
      { name: "Kalyanam (Special Entry)", time: "7:30 AM onwards", fee: "₹300" },
    ],
    nearbyTemples: ["govindarajaswamy-tirupati", "srikalahasti-temple"],
    coordinates: { lat: 13.6834, lng: 79.3470 },
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
      { name: "Chithirai Festival", month: "April–May", description: "18-day festival celebrating the divine wedding of Meenakshi and Sundareswarar. Draws over a million devotees." },
      { name: "Navaratri", month: "October", description: "Nine nights of the Goddess celebrated with special decorations and rituals." },
      { name: "Teppam Festival", month: "January–February", description: "Float festival where the deities are taken on a float in the Mariamman Teppakulam tank." },
    ],
    poojas: [
      { name: "Kalasandhi Puja", time: "5:30 AM", fee: "₹100" },
      { name: "Uchikala Puja", time: "12:00 PM", fee: "₹100" },
      { name: "Sayaratchai Puja", time: "6:00 PM", fee: "₹100" },
      { name: "Ardhajama Puja", time: "9:00 PM", fee: "₹150" },
    ],
    nearbyTemples: ["nataraja-chidambaram", "ramanathaswamy-rameswaram"],
    coordinates: { lat: 9.9195, lng: 78.1193 },
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
      { name: "Shivaratri", month: "February–March", description: "Major celebration with all-night puja and special events." },
      { name: "Karthigai Deepam", month: "November–December", description: "Lighting of lamps around the temple." },
      { name: "Raja Raja Chola Birthday", month: "October", description: "Commemorates the birth of the temple's founder with special rituals." },
    ],
    poojas: [
      { name: "Thiruvanandal (Morning Puja)", time: "6:00 AM", fee: "Free" },
      { name: "Uchikala Puja", time: "12:00 PM", fee: "Free" },
      { name: "Evening Puja", time: "6:00 PM", fee: "Free" },
    ],
    nearbyTemples: ["sarangapani-kumbakonam", "nataraja-chidambaram"],
    coordinates: { lat: 10.7828, lng: 79.1318 },
  },
  "ramanathaswamy-rameswaram": {
    slug: "ramanathaswamy-rameswaram",
    timings: { morning: "5:00 AM – 1:00 PM", evening: "3:00 PM – 9:00 PM", note: "The 22 sacred theertham baths are done in the morning. Start early." },
    entryFee: "Free. Theertham bath fee: ₹5–15 per well.",
    dressCode: "Dhoti mandatory for men inside the temple.",
    bestTime: "October – April",
    travelInfo: {
      byAir: "Madurai Airport (170 km) is the nearest airport.",
      byTrain: "Rameswaram Railway Station is on Pamban Island. Express trains from Chennai, Madurai, Coimbatore.",
      byRoad: "Rameswaram is connected via the iconic Pamban Bridge — the first sea bridge in India. Buses from Madurai (170 km), Chennai (570 km).",
    },
    highlights: [
      "One of the 12 sacred Jyotirlingas and part of Char Dham pilgrimage",
      "The world's longest temple corridor at 1,220 meters with 1,212 pillars",
      "22 sacred theerthams (sacred wells) with healing powers — bathing in all 22 is mandatory",
      "Located on Pamban Island — separated from mainland by the Palk Strait",
      "Associated with the Ramayana — Lord Rama is said to have prayed here after defeating Ravana",
    ],
    history: "Rameswaram is one of the holiest pilgrimage sites in Hinduism, associated with both Shaivism and Vaishnavism. According to the Ramayana, Lord Rama installed the Shivalingam here to atone for the killing of Ravana (a Brahmin). The present temple was built largely during the 12th–17th centuries by various kings including the Setupatis of Ramanathapuram.",
    architecture: "The temple is renowned for its magnificent corridors — the longest in any Hindu temple at 1,220 meters. The corridors have a height of 9 meters and are supported by ornate pillars. The gateway towers (gopurams) on the east and west sides rise to 38 meters. The inner sanctum houses the main Shivalingam installed by Rama.",
    festivals: [
      { name: "Maha Shivaratri", month: "February–March", description: "The grandest festival with all-night celebrations and special abhishekams." },
      { name: "Brahmotsavam", month: "February–March", description: "10-day festival with processions, music, and cultural events." },
      { name: "Aadi Amavasai", month: "July–August", description: "Sacred ancestor worship day when thousands take dips in the sea." },
    ],
    poojas: [
      { name: "22 Theertham Snanam", time: "Morning (5–10 AM)", fee: "₹5 per theertham" },
      { name: "Abhishekam", time: "6:00 AM / 6:00 PM", fee: "₹500" },
      { name: "Sahasranama Archana", time: "All day", fee: "₹250" },
    ],
    nearbyTemples: ["madurai-meenakshi", "tiruchendur-murugan"],
    coordinates: { lat: 9.2885, lng: 79.3172 },
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
    coordinates: { lat: 13.0338, lng: 80.2690 },
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
    coordinates: { lat: 12.2297, lng: 79.0670 },
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
      coordinates: { lat: 11.0, lng: 78.0 },
    }
  );
}
