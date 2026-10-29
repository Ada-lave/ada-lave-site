import type { Translations } from './types';

const codeTag = (text: string) =>
  `<code class="font-mono text-[0.875em] text-primary bg-[rgba(206,66,43,0.1)] px-1.5 py-0.5 rounded-sm">${text}</code>`;

export const en: Translations = {
  lang: 'en',
  langSwitch: 'RU',
  langSwitchHref: '/?lang=ru',

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
    p2: 'I value architectural simplicity and code readability. Big fan of Rust, local AI, and self-hosting.',
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
        desc:  'Choose simple solutions that work right now and ideally won\'t break later ;)',
        code:  '// YAGNI & KISS',
      },
      {
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
        title: 'Open Source',
        desc:  'Love open source and self-hosting, and try to contribute to projects myself.',
        code:  '// open source',
      },
    ],
  },

  skills: {
    title: 'Skills',
    groups: [
      {
        label: '// Core Languages',
        skills: [
          { name: 'Rust',   level: 65 },
          { name: 'Go',     level: 70 },
          { name: 'Python', level: 80 },
        ],
      },
      {
        label: '// Backend',
        skills: [
          { name: 'FastAPI', level: 82 },
          { name: 'Django',  level: 80 },
          { name: 'sqlc',    level: 70 },
          { name: 'goose', level: 50 },
          { name: 'atlas', level: 50 },
        ],
      },
      {
        label: '// DB',
        skills: [
          { name: 'PostgreSQL',  level: 65 },
          { name: 'Redis',       level: 80 },
          { name: 'ElasticSearch', level: 85 },
        ],
      },
      {
        label: '// Tooling & Infra',
        skills: [
          { name: 'Docker / k8s / ArgoCD / Gitlab', level: 78 },
          { name: 'Linux / Windows / MacOS',         level: 85 },
        ],
      },
      {
        label: '// Self Hosting',
        skills: [
          { name: 'Dokku / Docker',                    level: 60 },
          { name: 'Caddy / NGINX',                     level: 60 },
          { name: 'Ollama / MLStudio / AnythingLLM',   level: 70 },
          { name: 'Xray / Remnawave',                  level: 50 },
        ],
      },
      {
        label: '// Mesh',
        skills: [
          { name: 'LoRa', level: 70 },
          { name: 'Meshcore', level: 70 },
          { name: 'Meshtastic', level: 60 }
        ]
      },
      {
        label: '// Embedded',
        skills: [
          { name: 'esp-hal', level: 65 },
          { name: 'embedded-hal', level: 65 },
          { name: 'esp32', level: 65 },
          { name: 'esp32h2', level: 65 }
        ]
      }
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
        title:       'weact-epaper-154-rs',
        description: 'Experimental Rust driver for a 1.54-inch four-color e-paper display',
        tags:        ['Rust', 'embedded-hal', 'embedded-graphics', 'e-paper'],
        github:      'https://github.com/Ada-lave/weact-epaper-154-rs',
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
    builtWith: 'Built with Astro & Tailwind. Deployed using Dokku.',
  },
};
