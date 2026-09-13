export type BadgeTone = "sky" | "emerald" | "orange" | "blue" | "red" | "amber" | "cyan";

export type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  /** Leaf size relative to the square icon box, for icons that aren't square exports. */
  iconInset?: { width: string; height: string };
  iconBg: string;
  rating: number;
  difficulty: string;
  badge?: string;
  badgeTone?: BadgeTone;
};
