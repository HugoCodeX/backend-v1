FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
# Si tienes pnpm-workspace.yaml descomenta la siguiente línea
# COPY pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm run build
RUN pnpm prune --prod

FROM base AS production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

# Ajusta el puerto si tu app usa otro diferente
EXPOSE 3000

CMD ["node", "dist/main"]
