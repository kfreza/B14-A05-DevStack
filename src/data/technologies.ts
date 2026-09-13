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
  /** Exported leaf size in px when the logo isn't the default 28×28. */
  logoSize?: { width: number; height: number };
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
    logoSize: { width: 27.39, height: 24.46 },
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
    description: "The React framework for full-stack web applications with hybrid static & server rendering.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.9,
  },
  {
    id: "nodejs",
    name: "Node.js",
    logo: nodejs,
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
    description: "A platform designed to build, share, and run containerized applications reliably.",
    badge: { label: "Containers", tone: "sky" },
    category: "DevOps",
    level: "Intermediate",
    rating: 4.9,
  },
];
