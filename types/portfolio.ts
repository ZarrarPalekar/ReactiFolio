export type NavigationItem = {
  href: string;
  label: string;
};

export type HeroStat = {
  label: string;
  value: string;
};

export type SocialLink = {
  href: string;
  label: string;
};

export type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
  company?: string;
  relationship?: string;
  image?: string;
  linkedinUrl?: string;
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: Array<{
    name: string;
    icon: string;
    iconClassName?: string;
    iconWrapperClassName?: string;
  }>;
};

export type ExperienceItem = {
  company: string;
  companyUrl: string;
  logo: string;
  role: string;
  track: string;
  stack: string;
  start: string;
  end?: string;
  summary: string[];
};

export type ProjectItem = {
  slug: string;
  name: string;
  image: string;
  date: string;
  summary: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};
