export const whatsappNumber = "255652620724";
export const whatsappHref = `https://wa.me/${whatsappNumber}`;

// The 2024 starting year and community session are sourced from Leo Leo's Instagram.
// Vision, mission and director's message remain authored draft copy requested by the user.
export const about = {
  story: [
    "Our farming journey began in 2024. Today, Leo Leo brings together pig farming and Pili Pili in Mwavi, Bagamoyo, with Leo Leo Meat Shop and Kwanza Coffee in Goba. Each project gives us a different way to connect our work with everyday life.",
    "Produce for the kitchen, meat for shared meals and coffee for a moment together. Alongside these projects, sharing agricultural knowledge gives our story a wider purpose. We want to grow through good work, learning and opportunities that people can build on.",
  ],
  vision: "To grow a trusted Tanzanian farm and food business that creates opportunity, shares knowledge and contributes to stronger communities.",
  mission: "To develop our farming, meat and coffee projects with care, share practical agricultural knowledge and encourage young people to explore agribusiness.",
  directorMessage: [
    "For me, Leo Leo is a commitment to building something useful, one day at a time. Whether we are tending our fields, caring for our pigs or welcoming someone for coffee, every part of the work deserves our attention.",
    "I want our work to open opportunities for young people and make room for shared learning. Agriculture can help people build livelihoods and strengthen their communities. That is the future I want Leo Leo to support. Thank you for being part of this journey.",
  ],
} as const;

export const communityStory = {
  title: "Sharing knowledge with young farmers.",
  date: "8 February 2025",
  dateISO: "2025-02-08",
  paragraphs: [
    "Leo Leo’s CEO delivered a presentation to Mboni Ya Vijana Group on sustainable farming, agribusiness opportunities and modern cultivation techniques.",
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
    name: "Leo Leo Modern Farm",
    location: "Mwavi, Bagamoyo, Coast Region",
    phoneDisplay: "+255 652 620 724",
    phoneHref: "+255652620724",
    instagram: "leoleo_modern_farms",
    note: "Farm and Pili Pili enquiries",
  },
  {
    name: "Leo Leo Meat Shop",
    location: "Goba, Makongo Road",
    phoneDisplay: "+255 656 242 875",
    phoneHref: "+255656242875",
    instagram: "leoleo_meat_shop",
    note: "Meat shop enquiries",
  },
  {
    name: "Kwanza Coffee",
    location: "Goba, Makongo Road, near Puma gas station",
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
    lead: "From our pig project in Bagamoyo to the Leo Leo Meat Shop in Goba.",
    summary: "Meet the pig project at the farm and find the meat shop on Makongo Road in Goba.",
    storyTitle: "From the farm to the kitchen.",
    body: "The pig project begins in Mwavi, Bagamoyo, while Leo Leo Meat Shop brings the story to Goba. Together, they connect the daily work of farming with one of life's familiar moments: preparing a meal to share. Contact the meat shop to ask about current cuts and availability before visiting.",
    image: "/images/piglets.jpg",
    imageAlt: "Sow resting with piglets at Leo Leo Modern Farm",
    detailImage: "/images/meat-packages.png",
    detailAlt: "Packaged pork cuts for the Leo Leo meat project",
    contactIndex: 1,
    theme: "meat",
  },
  {
    slug: "pili-pili",
    navName: "Pili Pili",
    name: "Pili Pili",
    shortName: "Pili Pili",
    lead: "Habanero chili growing in the fields of Mwavi, Bagamoyo.",
    summary: "See the fields, the plants and the harvest behind our habanero chili project.",
    storyTitle: "Small fruit, bold character.",
    body: "Our Pili Pili project grows habanero chili. Its story follows the crop from green rows in Mwavi to the colour of a harvest — small fruit with a bold place in the kitchen. Contact the farm to ask about current availability or discuss an enquiry.",
    image: "/images/chilies-cleaned.png",
    imageAlt: "Green and orange chilies gathered after harvest",
    detailImage: "/images/chili-plant.jpg",
    detailAlt: "Chili plant growing in the field at Mwavi",
    contactIndex: 0,
    theme: "chili",
  },
  {
    slug: "kwanza-coffee",
    navName: "Kwanza Coffee",
    name: "Kwanza Coffee",
    shortName: "Kwanza Coffee",
    lead: "A coffee stop on Makongo Road in Goba.",
    summary: "Visit Kwanza Coffee near the Puma gas station on Goba Makongo Road.",
    storyTitle: "Make time for a cup.",
    body: "Kwanza Coffee brings another side of the Leo Leo story to Goba: a place to pause, share a conversation and enjoy a cup. A quick coffee or a moment with someone you know can become a small part of a good day. Find us on Makongo Road near the Puma gas station, and call the coffee team for current opening hours and menu details.",
    image: "/images/coffee-cup.jpg",
    imageAlt: "Cup of coffee served at Kwanza Coffee",
    detailImage: "/images/coffee-wall.jpg",
    detailAlt: "Kwanza Coffee wall sign inside the coffee shop",
    contactIndex: 2,
    theme: "coffee",
  },
] as const;

export type Project = (typeof projects)[number];
