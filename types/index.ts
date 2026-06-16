export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface Phase {
  number: number;
  title: string;
  description: string;
  duration: string;
  details: string[];
  icon: string;
  color: string;
}

export interface InternshipCard {
  title: string;
  description: string;
  openings: number;
  stipend: string;
  skills: string[];
  icon: string;
  gradient: string;
}

export interface HackathonTheme {
  title: string;
  description: string;
  icon: string;
  color: string;
  challenges: number;
}

export interface Winner {
  name: string;
  team: string;
  project: string;
  prize: string;
  year: number;
  college: string;
  avatar: string;
}

export interface Sponsor {
  name: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
  logo: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactForm {
  name: string;
  email: string;
  college: string;
  phone: string;
  category: string;
  message: string;
}
