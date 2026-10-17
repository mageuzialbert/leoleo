export const whatsappNumber = "255652620724";
export const whatsappHref = `https://wa.me/${whatsappNumber}`;

// The starting year and community session are sourced from Leoleo's Instagram.
// The director biography and registrations were supplied in WhatsApp on 13 October 2026.
// Vision and mission remain authored brand copy; director statements below are supplied copy.
export const about = {
  story: [
    "Leoleo Modern Farm Limited was incorporated in 2024. Today, Leoleo brings together pig farming and Pili Pili in Bagamoyo, Coast Region, with Leoleo Meat Shop and Kwanza Coffee in Goba. Each project gives us a different way to connect our work with everyday life.",
    "Produce for the kitchen, meat for shared meals and coffee for a moment together. Alongside these projects, sharing agricultural knowledge gives our story a wider purpose. We want to grow through good work, learning and opportunities that people can build on.",
  ],
  vision: "To grow a trusted Tanzanian farm and food business that creates opportunity, shares knowledge and contributes to stronger communities.",
  mission: "To develop our farming, meat and coffee projects with care, share practical agricultural knowledge and encourage young people to explore agribusiness.",

} as const;

export const communityStory = {
  title: "Sharing knowledge with young farmers.",
  date: "8 February 2025",
  dateISO: "2025-02-08",
  paragraphs: [
    "Leoleo’s CEO delivered a presentation to Mboni Ya Vijana Group on sustainable farming, agribusiness opportunities and modern cultivation techniques.",
    "The session highlighted the group’s focus on equipping young farmers through education, technology and practical training, with the aim of strengthening communities, creating employment and supporting future food security.",
  ],
  sourceHref: "https://www.instagram.com/leoleo_modern_farms/reel/DFyz1ltIrwj/",
} as const;

export const teamStories = [
  {
    title: "At the farm",
    text: "The farm story is written through everyday attention: tending chili rows, caring for pigs and keeping the work moving. It is patient work, and every pair of hands matters.",
  },
  {
    title: "At the meat shop",
    text: "The shop is where the farm story meets the kitchen. A conversation about a meal, a question about a cut, a familiar face at the counter — these are the connections we aim to build.",
  },
  {
    title: "At Kwanza Coffee",
    text: "A cup of coffee can open a conversation or give someone a quiet moment in their day. Our coffee project carries that same spirit of care into Goba.",
  },
] as const;

export const contacts = [
  {
    name: "Leoleo Modern Farm",
    location: "Bagamoyo, Coast Region",
    phoneDisplay: "+255 652 620 724",
    phoneHref: "+255652620724",
    instagram: "leoleo_modern_farms",
    note: "Farm and Pili Pili enquiries",
  },
  {
    name: "Leoleo Meat Shop",
    location: "Goba, Makongo Road",
    phoneDisplay: "+255 656 242 875",
    phoneHref: "+255656242875",
    instagram: "leoleo_meat_shop",
    note: "Meat shop enquiries",
  },
  {
    name: "Kwanza Coffee",
    location: "Goba, Makongo Road, at Puma gas station",
    phoneDisplay: "+255 722 000 419",
    phoneHref: "+255722000419",
    instagram: null,
    note: "Coffee shop enquiries",
  },
] as const;

export const projects = [
  {
    slug: "pig-and-meat",
    navName: "Pig & Meat",
    name: "Pig farming & meat shop",
    shortName: "Pig & Meat",
    lead: "From our pig project in Bagamoyo to the Leoleo Meat Shop in Goba.",
    summary: "Meet the pig project at the farm and find the meat shop on Makongo Road in Goba.",
    storyTitle: "From the farm to the kitchen.",
    body: "The pig project begins in Bagamoyo, Coast Region, while Leoleo Meat Shop brings the story to Goba. Together, they connect the daily work of farming with one of life's familiar moments: preparing a meal to share. Contact the meat shop to ask about current cuts and availability before visiting.",
    image: "/images/piglets.jpg",
    imageAlt: "Sow resting with piglets at Leoleo Modern Farm",
    detailImage: "/images/meat-packages.png",
    detailAlt: "Packaged pork cuts for the Leoleo meat project",
    contactIndex: 1,
    theme: "meat",
  },
  {
    slug: "pili-pili",
    navName: "Pili Pili",
    name: "Pili Pili",
    shortName: "Pili Pili",
    lead: "Habanero chili growing in the fields of Bagamoyo, Coast Region.",
    summary: "See the fields, the plants and the harvest behind our habanero chili project.",
    storyTitle: "Small fruit, bold character.",
    body: "Our Pili Pili project grows habanero chili. Its story follows the crop from green rows in Bagamoyo, Coast Region to the colour of a harvest — small fruit with a bold place in the kitchen. Contact the farm to ask about current availability or discuss an enquiry.",
    image: "/images/chilies-cleaned.png",
    imageAlt: "Green and orange chilies gathered after harvest",
    detailImage: "/images/chili-plant.jpg",
    detailAlt: "Chili plant growing in the field in Bagamoyo, Coast Region",
    contactIndex: 0,
    theme: "chili",
  },
  {
    slug: "kwanza-coffee",
    navName: "Kwanza Coffee",
    name: "Kwanza Coffee",
    shortName: "Kwanza Coffee",
    lead: "A coffee stop on Makongo Road in Goba.",
    summary: "Visit Kwanza Coffee at the Puma gas station on Goba Makongo Road.",
    storyTitle: "Make time for a cup.",
    body: "Kwanza Coffee brings another side of the Leoleo story to Goba: a place to pause, share a conversation and enjoy a cup. A quick coffee or a moment with someone you know can become a small part of a good day. Find us on Makongo Road at the Puma gas station, and call the coffee team for current opening hours and menu details.",
    image: "/images/coffee-cup.jpg",
    imageAlt: "Cup of coffee served at Kwanza Coffee",
    detailImage: "/images/coffee-wall.jpg",
    detailAlt: "Kwanza Coffee wall sign inside the coffee shop",
    contactIndex: 2,
    theme: "coffee",
  },
] as const;

export type Project = (typeof projects)[number];

export const director = {
  name: "Dady Kayombo",
  fullName: "Dady Nicholaus Kayombo",
  role: "Founder & Managing Director",
  introduction: "Dady Kayombo is a Tanzanian entrepreneur and agribusiness professional, and the Founder and Managing Director of Leoleo.",
  biography: [
    "He holds a Bachelor of Business Administration in Health Management, bringing a foundation in business administration to his practical experience in agriculture and livestock production.",
    "His pig farming journey began in 2010. Through years of hands-on work, he has developed expertise in livestock management, commercial pig production and modern farming practices. He also brings more than a decade of experience in agricultural production across a range of farming projects.",
    "Dady founded the Dodoma Pig Farmers Association in 2020 and served as its chairman. His work with the association reflects a commitment to collaboration, knowledge sharing and the development of Tanzania’s pig farming industry.",
    "At Leoleo, he is committed to advancing modern agricultural practices, promoting sustainable farming and developing agribusiness opportunities in Tanzania. His vision is to build a progressive agricultural enterprise recognised for innovation, quality, sustainability and excellence.",
  ],
  vision: "To transform traditional farming into modern, sustainable, and profitable agribusiness through innovation, knowledge, and dedication.",
  fellowDirector: "Faith Nicholaus Kayombo",
} as const;

export const certifications = [
  {
    slug: "company-incorporation",
    title: "Company incorporation",
    issuer: "BRELA",
    description: "Registered as Leoleo Modern Farm Limited.",
    registrationNumber: "177652334",
    date: "3 September 2024",
    dateISO: "2024-09-03",
  },
  {
    slug: "livestock-producer",
    title: "Livestock producer",
    issuer: "Tanzania Meat Board",
    description: "Registration as a small-scale livestock producer in Bagamoyo, Pwani.",
    registrationNumber: "TMB.REG.LP 0005/01/2026",
    date: "23 January 2026",
    dateISO: "2026-01-23",
  },
  {
    slug: "standard-butchery",
    title: "Standard butchery",
    issuer: "Tanzania Meat Board",
    description: "Registration for the butchery in Goba, Ubungo, Dar es Salaam.",
    registrationNumber: "TMB.REG.BU 0103/01/2026",
    date: "23 January 2026",
    dateISO: "2026-01-23",
  },
  {
    slug: "slaughter-slab",
    title: "Slaughter slab",
    issuer: "Tanzania Meat Board",
    description: "Registration for the slaughter slab in Bagamoyo, Pwani.",
    registrationNumber: "TMB.REG.SLE 00185/01/2026",
    date: "23 January 2026",
    dateISO: "2026-01-23",
  },
] as const;
