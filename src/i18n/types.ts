import type { NavLink, Project, Trait, SkillGroup } from '../types';

export type Lang = 'ru' | 'en';

export interface Translations {
  lang: Lang;
  langSwitch: string;
  langSwitchHref: string;
  meta: {
    title: string;
    description: string;
  };
  nav: NavLink[];
  hero: {
    subtitle: string;
    ctaProjects: string;
    ctaContact: string;
    scroll: string;
  };
  about: {
    title: string;
    p1Html: string;
    p2: string;
    traits: Trait[];
  };
  skills: {
    title: string;
    groups: SkillGroup[];
  };
  projects: {
    title: string;
    cta: string;
    list: Project[];
  };
  contact: {
    title: string;
    locationLabel: string;
    location: string;
    statusLabel: string;
    statusValue: string;
    cta: string;
  };
  footer: {
    builtWith: string;
  };
}
