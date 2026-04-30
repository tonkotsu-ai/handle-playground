export type Project = {
  name: string
  description: string
  role: string
  year: number
  color: string
  href: string
}

export type Writing = {
  title: string
  date: string
  excerpt: string
  href: string
}

export type Social = {
  label: string
  handle: string
  href: string
}

export type Hero = {
  name: string
  tagline: string
  availability: string
}

export const hero: Hero = {
  name: "Mia Chen",
  tagline: "Design engineer based in Brooklyn. I build small, considered tools for people who make things.",
  availability: "Available for new work — Summer 2026",
}

export const aboutParagraphs: string[] = [
  "I'm a design engineer sitting between product design and front-end. I help early-stage teams turn rough ideas into interfaces that feel as considered as physical objects — usually by prototyping fast, editing live, and treating polish as a feature.",
  "I care most about typographic restraint, good keyboard UX, and small tools that earn their weight. Currently freelance and open to projects that ship.",
]

export const projects: Project[] = [
  {
    name: "Kelp",
    description: "marketing site + brand for an ocean-data startup",
    role: "Design + engineering",
    year: 2025,
    color: "#0ea5e9",
    href: "#",
  },
  {
    name: "Ledger",
    description: "onboarding redesign for a personal finance app",
    role: "Product design + prototyping",
    year: 2025,
    color: "#f59e0b",
    href: "#",
  },
  {
    name: "Pocket",
    description: "open-source CLI for snippet management",
    role: "Design + engineering",
    year: 2024,
    color: "#a78bfa",
    href: "#",
  },
]

export const writings: Writing[] = [
  {
    title: "Why my design tools keep becoming IDEs",
    date: "Mar 2026",
    excerpt: "Every design tool I've loved long-term eventually grows a terminal. Here's why.",
    href: "#",
  },
  {
    title: "A small argument for serifs in product UI",
    date: "Nov 2025",
    excerpt: "Sans has become the default, but serifs still have a role — especially where software should feel built, not configured.",
    href: "#",
  },
  {
    title: "Shipping without a design system",
    date: "Aug 2025",
    excerpt: "Design systems are load-bearing at scale, but early on they slow teams down. A case for tokens over components until PMF.",
    href: "#",
  },
]

export const socials: Social[] = [
  { label: "Email", handle: "hello@miachen.studio", href: "mailto:hello@miachen.studio" },
  { label: "Twitter", handle: "@miachen", href: "#" },
  { label: "GitHub", handle: "@miachen", href: "#" },
  { label: "Read.cv", handle: "miachen", href: "#" },
]
