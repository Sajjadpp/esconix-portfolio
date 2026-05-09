import { Globe, LayoutDashboard, ShieldCheck, Code2, SearchCheck, Lightbulb } from "lucide-react";

// ── Tokens ────────────────────────────────────────────────────────────────────
export const GOLD = "#C9A84C";
export const GOLD_LIGHT = "#E8C97A";
export const GOLD_DARK = "#A07830";
export const BG = "#090909";
export const BG2 = "#111111";
export const WHITE = "#F5F5F5";
export const MUTED = "#888888";

// ── Data ──────────────────────────────────────────────────────────────────────
export const NAV_LINKS = ["Services", "Projects", "Contact"];

export const SERVICES = [
  {
    icon: Globe,
    title: "Website Creation",
    desc: "Pixel-perfect, blazing-fast websites built to convert visitors into clients. Landing pages, business sites, portfolios — crafted with care.",
  },
  {
    icon: LayoutDashboard,
    title: "Web Applications",
    desc: "Custom dashboards, portals, and tools that solve real business problems. We turn complex requirements into elegant, usable software.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    desc: "Your site stays healthy, fast, and up-to-date. Ongoing care, updates, and fixes — so you never have to worry about the technical side.",
  },
  {
    icon: Code2,
    title: "Application Developement",
    desc: "Application development involves creating software applications that solve real-world problems through coding, design, testing, and deployment.",
  },
  {
    icon: SearchCheck,
    title: "SEO Marketing",
    desc: "SEO marketing helps websites rank higher on search engines to attract more visitors and customers organically.",
  },

  {
    icon: Lightbulb,
    title: "Problem Solving",
    desc: "Stuck with a tech challenge? We consult, diagnose, and deliver. No jargon — just clear solutions that move your business forward.",
  },
  {
    icon: Lightbulb,
    title: "Ee Commerce",
    desc: "Built scalable e-commerce applications with secure authentication, product management, cart functionality, payment integration, and responsive user experiences.",
  },
];

export const PROJECTS = [
  {
    title: "Retail Hub",
    tag: "E-commerce",
    desc: "Full-stack storefront with inventory management and payment integration.",
    year: "2024",
  },
  {
    title: "MediTrack",
    tag: "Web App",
    desc: "Patient scheduling and records portal for a local healthcare clinic.",
    year: "2024",
  },
  {
    title: "Bloom Studio",
    tag: "Portfolio",
    desc: "Editorial portfolio site for a Kerala-based photography studio.",
    year: "2023",
  },
  {
    title: "LogiDash",
    tag: "Dashboard",
    desc: "Real-time logistics tracking dashboard with live shipment status.",
    year: "2023",
  },
];





export const TEAM = [
  {
    initials: "P",
    name: "Sajjad",
    role: "Full-Stack Lead",
    desc: "Architects the backbone of every product — from APIs to databases. Loves clean code and elegant system design.",
    skills: ["Node.js", "Next.js", "PostgreSQL"],
  },
  {
    initials: "VP",
    name: "Amar Shifan",
    role: "Frontend Engineer",
    desc: "Turns designs into pixel-perfect, animated interfaces. Obsessed with micro-interactions and performance.",
    skills: ["React", "Framer Motion", "Tailwind"],
  },
  {
    initials: "PC",
    name: "Muhammed Nadeem",
    role: "Mobile & SEO",
    desc: "Builds apps that work flawlessly on any device and ensures clients get found on the web.",
    skills: ["React Native", "SEO", "Analytics"],
  },
  {
    initials: "OP",
    name: "Binshad OP",
    role: "Design & Strategy",
    desc: "Shapes the brand and UX direction of every project. Bridges the gap between business goals and great design.",
    skills: ["Figma", "Branding", "UX Research"],
  },
];

export const VALUES = [
  {
    symbol: "◈",
    title: "Craft over commodity",
    desc: "We don't ship templates. Every project is built from scratch with intention — because your business deserves something that actually fits.",
  },
  {
    symbol: "◉",
    title: "Speed without shortcuts",
    desc: "Fast delivery is a promise, not a compromise. We move quickly because we're focused, not because we're cutting corners.",
  },
  {
    symbol: "◇",
    title: "Honest pricing",
    desc: "No surprise invoices. We scope clearly, price fairly, and deliver exactly what we said we would — on time.",
  },
  {
    symbol: "⬡",
    title: "Long-term thinking",
    desc: "We build sites that scale, code that lasts, and relationships that go beyond the handover. Your growth is our benchmark.",
  },
];

export const STATS = [
  { value: "20+", label: "Projects shipped" },
  { value: "1–2", label: "Years of focus" },
  { value: "4",   label: "Specialist partners" },
  { value: "2",   label: "Countries served" },
];