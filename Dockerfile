# ── Build ────────────────────────────────────────────────────────────────────
FROM node:22-alpine AS build

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm i --frozen-lockfile

COPY . .
RUN pnpm run build

# ── Serve ────────────────────────────────────────────────────────────────────
FROM nginx:alpine AS serve

ENV PORT=80

COPY --from=build /app/dist /usr/share/nginx/html
# Dokku injests $PORT at runtime; nginx:alpine processes *.template → conf.d/
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
