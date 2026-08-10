import type { ConfigTab, CargoDep, GoDep, PipDep } from '../types';

export const configTabs: ConfigTab[] = [
  { id: 'cargo', label: 'Cargo.toml'        },
  { id: 'gomod', label: 'go.mod'            },
  { id: 'pip',   label: 'requirements.txt'  },
];

export const cargo = {
  pkg: { name: 'shuvalov-dev', version: '1.0.0', edition: '2005' },
  deps: [
    { name: 'tokio',     version: '1',   features: ['full']     },
    { name: 'actix-web', version: '4'                           },
    { name: 'serde',     version: '1',   features: ['derive']   },
    { name: 'sqlx',      version: '0.8', features: ['postgres'] },
    { name: 'redis',     version: '0.26'                        },
    { name: 'tracing',   version: '0.1'                         },
  ] as CargoDep[],
  profile: { optLevel: 3, lto: 'thin' },
};

export const goMod = {
  module:  'github.com/ada-lave/service',
  version: '1.23',
  require: [
    { path: 'github.com/gin-gonic/gin',     version: 'v1.10.0' },
    { path: 'github.com/labstack/echo/v4',  version: 'v4.13.0' },
    { path: 'github.com/jackc/pgx/v5',      version: 'v5.7.0'  },
    { path: 'github.com/redis/go-redis/v9', version: 'v9.7.0'  },
    { path: 'go.uber.org/zap',              version: 'v1.27.0' },
    { path: 'golang.org/x/sync',            version: 'v0.10.0' },
  ] as GoDep[],
};

export const pip = {
  deps: [
    { name: 'fastapi[all]',        version: '0.115.5' },
    { name: 'uvicorn[standard]',   version: '0.32.0'  },
    { name: 'sqlalchemy[asyncio]', version: '2.0.36'  },
    { name: 'asyncpg',             version: '0.30.0'  },
    { name: 'redis',               version: '5.2.0'   },
    { name: 'pydantic',            version: '2.10.0'  },
    { name: 'httpx',               version: '0.28.0'  },
    { name: 'structlog',           version: '24.4.0'  },
    { name: 'alembic',             version: '1.14.0'  },
  ] as PipDep[],
  devDeps: [
    { name: 'pytest', version: '8.3.0' },
    { name: 'ruff',   version: '0.8.0' },
  ] as PipDep[],
};
