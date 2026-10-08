export type SectionId = "about" | "code" | "unity" | "3d";

export type SupportedLocale = "pt" | "en";

export interface LocalizedString {
  pt: string;
  en: string;
}

export interface NavItemConfig {
  id: SectionId;
  label: LocalizedString;
  href: string;
}

export interface TechnologyItem {
  id: string;
  name: string;
  icon?: string;
  badgeColor?: string;
}

export interface ProjectItem {
  id: string;
  sectionId: SectionId;
  title: string;
  subtitle?: LocalizedString;
  description: LocalizedString;
  logoType?: "text" | "icon" | "image";
  logoValue?: string;
  logoAccentColor?: string;
  externalLink?: {
    url: string;
    label: string;
  };
  imageSrc?: string;
  imageAlt?: string;
  technologies: string[];
}

export interface PersonalProfile {
  name: string;
  role: LocalizedString;
  summary: LocalizedString;
  email: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    artstation?: string;
    email: string;
  };
}
