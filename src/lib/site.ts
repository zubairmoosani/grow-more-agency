export const site = {
  name: "Grow More",
  legalName: "Grow More Digital Agency",
  tagline: "Digital products built for real businesses.",
  description:
    "Grow More builds websites, mobile apps, custom software, and point-of-sale systems for shops and growing teams.",
  url: "https://growmoredigital.com",
  email: "hello@growmoredigital.com",
  phone: "+92 300 0000000",
  location: "Pakistan",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "web-development",
    title: "Web Development",
    short: "Fast, clear websites that turn visitors into customers.",
    body: "Marketing sites, client portals, and web apps — designed around your brand and built to load quickly on every device.",
    points: [
      "Company and product websites",
      "Booking and client portals",
      "SEO-ready Next.js builds",
      "Admin dashboards",
    ],
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    short: "iOS and Android apps your staff and customers will actually use.",
    body: "From shop counters to field teams, we ship native-feeling apps with clean UX, offline-friendly flows, and simple admin control.",
    points: [
      "iOS and Android",
      "Customer and staff apps",
      "Push alerts and reports",
      "App Store / Play launch support",
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    short: "Tools shaped around how your business already works.",
    body: "We replace spreadsheets and scattered chats with one system — inventory, staff, customers, and reports in a single place.",
    points: [
      "Operations and inventory",
      "Role-based access",
      "Reports your owners can read",
      "Integrations with what you already use",
    ],
  },
  {
    slug: "point-of-sale",
    title: "Point of Sale",
    short: "A live POS for shops that need more than a basic till.",
    body: "Grow More POS is our own product: catalogue, counter, stock, customers, suppliers, and shifts — one app, many shop types.",
    points: [
      "Counter sales and receipts",
      "Stock, transfers, and suppliers",
      "Customers and udhaar",
      "Multi-branch ready",
    ],
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Discover",
    text: "We sit with how you sell, stock, and serve customers — then write a clear brief, not a guess.",
  },
  {
    n: "02",
    title: "Design",
    text: "Screens, flows, and brand in your colours. You see the product before we write the heavy code.",
  },
  {
    n: "03",
    title: "Deliver",
    text: "We ship, train your team, and stay on for fixes. Live software — not a folder of files.",
  },
] as const;

export const work = [
  {
    title: "Multi-branch retail POS",
    industry: "Retail",
    outcome: "One till, shared stock, and daily reports across branches.",
    tags: ["POS", "Inventory", "Reports"],
  },
  {
    title: "Service-business website + bookings",
    industry: "Services",
    outcome: "A clean site that takes enquiries and shows real work, not stock photos only.",
    tags: ["Web", "SEO", "Leads"],
  },
  {
    title: "Field-team mobile app",
    industry: "Operations",
    outcome: "Staff update jobs from the phone. Owners see status without chasing WhatsApp.",
    tags: ["Mobile", "Custom software"],
  },
  {
    title: "Grocery counter & wholesale",
    industry: "Ration / Grocery",
    outcome: "Barcode till, supplier bills, and customer udhaar in one counter flow.",
    tags: ["POS", "Suppliers", "Udhaar"],
  },
] as const;
