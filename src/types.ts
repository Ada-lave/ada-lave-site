export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillGroup {
  label: string;
  skills: Skill[];
}

export interface Project {
  num: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  accent: string;
}

export interface Trait {
  icon: string;
  title: string;
  desc: string;
  code: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
  muted?: boolean;
}

export interface ConfigTab { id: string; label: string }
export interface CargoDep  { name: string; version: string; features?: string[] }
export interface GoDep     { path: string; version: string }
export interface PipDep    { name: string; version: string }
