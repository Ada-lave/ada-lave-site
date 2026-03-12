import type { Translations } from './types';

const codeTag = (text: string) =>
  `<code class="font-mono text-[0.875em] text-[#ce422b] bg-[rgba(206,66,43,0.1)] px-1.5 py-0.5 rounded-sm">${text}</code>`;

export const en: Translations = {
  lang: 'en',
  langSwitch: 'RU',
  langSwitchHref: '/',

  meta: {
    title: 'Vladislav Shuvalov — Software Engineer',
    description: 'Software Engineer specializing in Go, Python, and a little Rust.',
  },

  nav: [
    { href: '#about',    label: 'about'    },
    { href: '#skills',   label: 'skills'   },
    { href: '#projects', label: 'projects' },
    { href: '#contact',  label: 'contact'  },
  ],

  hero: {
    subtitle: 'Software Engineer.<br />Crafting reliable systems in',
    ctaProjects: 'Projects',
    ctaContact:  'Contact me',
    scroll:      'scroll',
  },

  about: {
    title: 'About me',
    p1Html: `I build high-load backend services and systems. My approach — picking the right tool for the job:
      ${codeTag('Go')} for concurrent microservices,
      ${codeTag('Rust')} where performance and memory safety matter,
      ${codeTag('Python')} for prototyping and automation.`,
    p2: 'I value architectural simplicity, code readability, and predictable system behaviour in production. I work with distributed systems, containerisation, and cloud platforms.',
    traits: [
      {
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
        title: 'Performance',
        desc:  'Optimise critical paths, measure before and after.',
        code:  '// zero-cost abstractions',
      },
      {
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        title: 'Reliability',
        desc:  'Design systems with fault tolerance in mind.',
        code:  '// Result<T, E>',
      },
      {
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
        title: 'Pragmatism',
        desc:  'Choose simple solutions that work right now.',
        code:  '// YAGNI & KISS',
      },
      {
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
        title: 'Clean code',
        desc:  'Code is written once, read hundreds of times.',
        code:  '// self-documenting',
      },
    ],
  },

  skills: {
    title: 'Skills',
    groups: [
      {
        label: '// Core Languages',
        skills: [
          { name: 'Rust',   level: 20 },
          { name: 'Go',     level: 70 },
          { name: 'Python', level: 80 },
        ],
      },
      {
        label: '// Backend / Frameworks',
        skills: [
          { name: 'tokio / actix-web',    level: 85 },
          { name: 'gin / echo',           level: 88 },
          { name: 'FastAPI / SQLAlchemy', level: 82 },
          { name: 'PostgreSQL / Redis',   level: 80 },
        ],
      },
      {
        label: '// Tooling & Infra',
        skills: [
          { name: 'Docker / k8s',    level: 78 },
          { name: 'Linux / Systems', level: 85 },
          { name: 'Git / CI·CD',     level: 90 },
        ],
      },
    ],
  },

  projects: {
    title: 'Projects',
    cta:   'All repositories on GitHub',
    list: [
      {
        num:         '01',
        title:       'Vibe',
        description: 'Audio transcription and summarisation service',
        tags:        ['Rust', 'cpal', 'desktop', 'AI', 'local'],
        github:      'https://github.com/thewh1teagle/vibe',
        accent:      '#ce422b',
      },
      {
        num:         '02',
        title:       'summia',
        description: 'My personal experiments with audio recording and transcription',
        tags:        ['Rust', 'cpal', 'desktop', 'AI', 'local'],
        github:      'https://github.com/Ada-lave/summia',
        accent:      '#ce422b',
      },
    ],
  },

  contact: {
    title:         'Contact',
    locationLabel: 'Location',
    location:      'Yekaterinburg, RU',
    statusLabel:   'Status',
    statusValue:   'Not looking',
    cta:           'Message on Telegram',
  },

  footer: {
    builtWith: 'Built with Astro & Tailwind.',
  },
};
