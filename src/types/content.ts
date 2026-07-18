export type LinkItem = {
  label: string;
  href: string;
};

export type ResearchTheme = {
  id: string;
  index: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  href: string;
};

export type FocusItem = {
  label: string;
  title: string;
  description: string;
};

export type ExperienceItem = {
  period: string;
  type: "Education" | "Research" | "Industry" | "Academic service";
  title: string;
  organization?: string;
  description: string;
  href?: string;
};

export type ResearchProject = {
  period: string;
  title: string;
  organization: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export type JournalArticle = {
  id: string;
  year: number;
  authors: string;
  title: string;
  journal?: string;
  details?: string;
  doi?: string;
  featured?: boolean;
  equalContribution?: boolean;
  verificationNote?: string;
};

export type Patent = {
  id: string;
  authors: string;
  title: string;
  identifier: string;
};

export type Conference = {
  year: number;
  title: string;
  location: string;
  contribution: "Oral presentation" | "Poster";
};

export type InsightMeta = {
  sourceFile: string;
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  category: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
};
