import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
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
];
