export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  headline: string;
  secondaryRoles: string[];
  location: string;
  languages: string[];
  availability: string;
  email: string;
  summary: string;
  bio: string[];
  socials: SocialLink[];
};

export type SiteMeta = {
  title: string;
  description: string;
  navigation: Array<{ label: string; href: string }>;
};

export type SectionCopy = {
  eyebrow: string;
  title: string;
  description?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ProjectType = 'Full Stack' | 'Frontend' | 'Backend' | 'UX/UI' | 'Branding';

export type Project = {
  name: string;
  type: ProjectType;
  description: string;
  problem: string;
  stack: string[];
  role: string;
  highlights: string[];
  repo?: string;
  demo?: string;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  summary: string;
  stack: string[];
};

export type EducationItem = {
  type: 'Formación académica' | 'Curso' | 'Certificación';
  title: string;
  institution: string;
  period: string;
  summary: string;
  topics: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};
