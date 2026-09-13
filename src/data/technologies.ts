import docker from "../assets/tech/docker.svg";
import java from "../assets/tech/java.svg";
import javascript from "../assets/tech/javascript.svg";
import nextjs from "../assets/tech/nextjs.svg";
import nodejs from "../assets/tech/nodejs.svg";
import postgresql from "../assets/tech/postgresql.svg";
import react from "../assets/tech/react.svg";
import redis from "../assets/tech/redis.svg";
import svelte from "../assets/tech/svelte.svg";
import tailwind from "../assets/tech/tailwind.svg";
import typescript from "../assets/tech/typescript.svg";
import vue from "../assets/tech/vue.svg";

export type BadgeTone = "sky" | "emerald" | "orange" | "blue" | "red" | "amber" | "cyan";

export type Technology = {
  id: string;
  name: string;
  logo: string;
  /** Leaf size relative to the square logo box, for logos that aren't square exports. */
  logoInset?: { width: string; height: string };
  /** Tile colour behind the logo on mobile. */
  logoBg: string;
  description: string;
  badge?: { label: string; tone: BadgeTone };
  category: string;
  level: string;
  rating: number;
};

export const technologies: Technology[] = [
  {
    id: "react",
    name: "React",
    logo: react,
    logoInset: { width: "97.82%", height: "87.34%" },
    logoBg: "#f0f9ff",
    description: "A declarative, component-based JavaScript library for building modern user interfaces.",
    badge: { label: "Popular", tone: "sky" },
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.9,
  },
  {
    id: "vue",
    name: "Vue.js",
    logo: vue,
    logoBg: "#ecfdf5",
    description: "An approachable, performant, and versatile framework for building web user interfaces.",
    badge: { label: "Versatile", tone: "emerald" },
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.8,
  },
  {
    id: "svelte",
    name: "Svelte",
    logo: svelte,
    logoBg: "#fff7ed",
    description: "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    badge: { label: "Fast", tone: "orange" },
    category: "Frontend",
    level: "Intermediate",
    rating: 4.8,
  },
  {
    id: "nextjs",
    name: "Next.js",
    logo: nextjs,
    logoBg: "#ffffff",
    description: "The React framework for full-stack web applications with hybrid static & server rendering.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.9,
  },
  {
    id: "nodejs",
    name: "Node.js",
    logo: nodejs,
    logoBg: "#f0fdf4",
    description: "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    badge: { label: "Standard", tone: "emerald" },
    category: "Backend",
    level: "Intermediate",
    rating: 4.8,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    logo: postgresql,
    logoBg: "#eef2ff",
    description: "A powerful, open-source object-relational database system with proven reliability.",
    badge: { label: "Top SQL", tone: "blue" },
    category: "Database",
    level: "Intermediate",
    rating: 4.9,
  },
  {
    id: "redis",
    name: "Redis",
    logo: redis,
    logoBg: "#fef2f2",
    description: "In-memory data structure store used as a high-speed database, cache, and message broker.",
    badge: { label: "Cache", tone: "red" },
    category: "Database",
    level: "Intermediate",
    rating: 4.8,
  },
  {
    id: "javascript",
    name: "JavaScript",
    logo: javascript,
    logoBg: "#fffbeb",
    description: "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    badge: { label: "Ubiquitous", tone: "amber" },
    category: "Language",
    level: "Beginner-Friendly",
    rating: 4.9,
  },
  {
    id: "typescript",
    name: "TypeScript",
    logo: typescript,
    logoBg: "#eff6ff",
    description: "A strongly typed programming language that builds on JavaScript for robust tooling.",
    badge: { label: "Essential", tone: "sky" },
    category: "Language",
    level: "Intermediate",
    rating: 4.9,
  },
  {
    id: "java",
    name: "Java",
    logo: java,
    logoBg: "#fff7ed",
    description: "A secure, object-oriented programming language designed for portability and scale.",
    badge: { label: "Robust", tone: "sky" },
    category: "Language",
    level: "Intermediate",
    rating: 4.6,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    logo: tailwind,
    logoBg: "#ecfeff",
    description: "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
    badge: { label: "Modern", tone: "cyan" },
    category: "Styling",
    level: "Beginner-Friendly",
    rating: 4.9,
  },
  {
    id: "docker",
    name: "Docker",
    logo: docker,
    logoBg: "#eff6ff",
    description: "A platform designed to build, share, and run containerized applications reliably.",
    badge: { label: "Containers", tone: "sky" },
    category: "DevOps",
    level: "Intermediate",
    rating: 4.9,
  },
];
