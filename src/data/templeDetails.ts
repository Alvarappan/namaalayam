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
