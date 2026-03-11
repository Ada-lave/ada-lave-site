# ── Build ────────────────────────────────────────────────────────────────────
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ── Serve ────────────────────────────────────────────────────────────────────
FROM nginx:alpine AS serve

COPY --from=build /app/dist /usr/share/nginx/html
# Dokku injests $PORT at runtime; nginx:alpine processes *.template → conf.d/
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
