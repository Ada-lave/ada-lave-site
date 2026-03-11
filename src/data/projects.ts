import type { Project } from '../types';
import { site } from './config';

export const projects: Project[] = [
  {
    num:         '01',
    title:       'Vibe',
    description: 'Сервис транскрибации и суммаризации аудио',
    tags:        ['Rust', 'cpal', 'desktop', 'AI', 'local'],
    github:      "https://github.com/thewh1teagle/vibe",
    accent:      '#ce422b',
  },
  {
    num:         '02',
    title:       'summia',
    description: 'Мои собственные опыта по записи и транскрибации аудио',
    tags:        ['Rust', 'cpal', 'desktop', 'AI', 'local'],
    github:      "https://github.com/Ada-lave/summia",
    accent:      '#ce422b',
  }
];
