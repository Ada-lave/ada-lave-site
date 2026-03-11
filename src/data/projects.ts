import type { Project } from '../types';
import { site } from './config';

export const projects: Project[] = [
  {
    num:         '01',
    title:       'project-one',
    description: 'Высоконагруженный микросервис с async runtime на Tokio. gRPC API, PostgreSQL, Redis кэш.',
    tags:        ['Rust', 'tokio', 'gRPC', 'PostgreSQL'],
    github:      site.github,
    accent:      '#ce422b',
  },
  {
    num:         '02',
    title:       'project-two',
    description: 'REST API сервис на Go с чистой архитектурой. Gin, PostgreSQL, JWT-аутентификация.',
    tags:        ['Go', 'gin', 'JWT', 'Docker'],
    github:      site.github,
    accent:      '#00acd7',
  },
  {
    num:         '03',
    title:       'project-three',
    description: 'FastAPI backend с async SQLAlchemy. Pydantic v2, Alembic миграции, Redis кэширование.',
    tags:        ['Python', 'FastAPI', 'Redis', 'k8s'],
    github:      site.github,
    accent:      '#3572A5',
  },
  {
    num:         '04',
    title:       'project-four',
    description: 'CLI инструмент для автоматизации DevOps задач. Кросс-платформенный, минимум зависимостей.',
    tags:        ['Rust', 'CLI', 'Linux', 'POSIX'],
    github:      site.github,
    accent:      '#ce422b',
  },
  {
    num:         '05',
    title:       'project-five',
    description: 'Distributed task queue на Go. Worker pool, retry с backoff, Prometheus метрики.',
    tags:        ['Go', 'Prometheus', 'Distributed', 'Docker'],
    github:      site.github,
    accent:      '#00acd7',
  },
  {
    num:         '06',
    title:       'project-six',
    description: 'ML pipeline оркестрация. Data preprocessing, model serving, A/B тестирование.',
    tags:        ['Python', 'ML', 'FastAPI', 'PostgreSQL'],
    github:      site.github,
    accent:      '#3572A5',
  },
];
