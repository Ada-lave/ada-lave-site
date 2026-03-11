import type { Trait } from '../types';

export const traits: Trait[] = [
  {
    icon:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
    title: 'Производительность',
    desc:  'Оптимизирую критические пути, измеряю до и после.',
    code:  '// zero-cost abstractions',
  },
  {
    icon:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: 'Надёжность',
    desc:  'Проектирую системы с учётом отказоустойчивости.',
    code:  '// Result<T, E>',
  },
  {
    icon:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
    title: 'Прагматизм',
    desc:  'Выбираю простые решения, которые работают сейчас.',
    code:  '// YAGNI & KISS',
  },
  {
    icon:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
    title: 'Чистый код',
    desc:  'Код пишется один раз, читается сотни раз.',
    code:  '// self-documenting',
  },
];
