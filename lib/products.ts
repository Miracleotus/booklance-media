export type Product = {
  id: string;
  sku: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  category: "Business & Career" | "Sci-Fi & Fantasy" | "Technology" | "Self-Help" | "Food & Lifestyle" | "Mystery & Thriller" | "Home & Garden";
};

export const products: Product[] = [
  {
    id: "1",
    sku: "BLM-BUS-001",
    name: "The Freelance Blueprint",
    shortDesc: "Step-by-step guide to remote work.",
    fullDesc: "Launch your remote career with this comprehensive 150-page guide. Covers niche selection, client acquisition, and pricing strategies for modern freelancers. Available in EPUB and PDF formats.",
    price: 14.99,
    category: "Business & Career",
  },
  {
    id: "2",
    sku: "BLM-FIC-001",
    name: "Echoes of the Forgotten",
    shortDesc: "Award-winning sci-fi thriller.",
    fullDesc: "In the year 2140, Earth's last archivist discovers a digital ghost in the global mainframe. A gripping, fast-paced science fiction novel that will keep you on the edge of your seat.",
    price: 8.99,
    category: "Sci-Fi & Fantasy",
  },
  {
    id: "3",
    sku: "BLM-TEC-001",
    name: "Mastering Python in 30 Days",
    shortDesc: "Beginner-friendly coding bootcamp ebook.",
    fullDesc: "Jumpstart your programming journey. This ebook offers daily, bite-sized lessons and practical exercises to take you from a complete beginner to writing your own Python scripts in just one month.",
    price: 19.99,
    category: "Technology",
  },
  {
    id: "4",
    sku: "BLM-SLF-001",
    name: "Mindful Mornings",
    shortDesc: "50 habits for a calmer life.",
    fullDesc: "Transform your daily routine with evidence-based mindfulness techniques. This ebook provides actionable steps to reduce anxiety, increase focus, and start your day with intention.",
    price: 9.99,
    category: "Self-Help",
  },
  {
    id: "5",
    sku: "BLM-LIF-001",
    name: "The Vegan Prep Kitchen",
    shortDesc: "100 plant-based batch recipes.",
    fullDesc: "Save time and eat healthier with our ultimate meal prep guide. Features 100 delicious, fully plant-based recipes complete with macro breakdowns and weekly shopping lists.",
    price: 12.50,
    category: "Food & Lifestyle",
  },
  {
    id: "6",
    sku: "BLM-BUS-002",
    name: "Marketing in the AI Era",
    shortDesc: "Future-proof your digital strategy.",
    fullDesc: "Learn how to leverage artificial intelligence to automate campaigns, write better copy, and analyze data. Essential reading for digital marketers and entrepreneurs.",
    price: 16.99,
    category: "Business & Career",
  },
  {
    id: "7",
    sku: "BLM-FIC-002",
    name: "Shadows Over London",
    shortDesc: "A gripping historical mystery.",
    fullDesc: "Set in Victorian London, follow Detective Arthur Penhaligon as he unravels a conspiracy that reaches the highest levels of the monarchy. A page-turning historical fiction novel.",
    price: 7.99,
    category: "Mystery & Thriller",
  },
  {
    id: "8",
    sku: "BLM-SLF-002",
    name: "Financial Freedom 101",
    shortDesc: "Budgeting and investing basics.",
    fullDesc: "Take control of your finances. This practical ebook breaks down complex financial jargon into simple, actionable steps to help you eliminate debt and build long-term wealth.",
    price: 11.99,
    category: "Self-Help",
  },
  {
    id: "9",
    sku: "BLM-TEC-002",
    name: "Pixel Perfect",
    shortDesc: "UI/UX design principles for beginners.",
    fullDesc: "A visual guide to creating stunning, user-friendly digital interfaces. Packed with case studies, color theory, and typography tips for aspiring web designers.",
    price: 18.00,
    category: "Technology",
  },
  {
    id: "10",
    sku: "BLM-LIF-002",
    name: "The Minimalist Home",
    shortDesc: "Declutter your space and mind.",
    fullDesc: "Discover the psychological benefits of minimalism. This room-by-room guide helps you ruthlessly declutter your physical space to create a more peaceful living environment.",
    price: 8.50,
    category: "Home & Garden",
  },
  {
    id: "11",
    sku: "BLM-BUS-003",
    name: "Leadership Decoded",
    shortDesc: "Management strategies for new leaders.",
    fullDesc: "Stepping into a management role? This ebook offers practical frameworks for leading teams, resolving conflicts, and driving project success in a corporate environment.",
    price: 15.99,
    category: "Business & Career",
  },
  {
    id: "12",
    sku: "BLM-FIC-003",
    name: "Crimson Skies",
    shortDesc: "Epic high fantasy adventure.",
    fullDesc: "Book one of the Dragon's Fall series. Immerse yourself in a richly built world of ancient magic, warring kingdoms, and reluctant heroes. Includes a bonus map of the realm.",
    price: 9.99,
    category: "Sci-Fi & Fantasy",
  },
];