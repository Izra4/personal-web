FROM node:20-alpine as builder
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:20-alpine as runner
WORKDIR /app
COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .
COPY --from=builder /app/next.config.ts .
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma

# Ekspos port aplikasi

# Jalankan migrasi Prisma dan aplikasi saat container berjalan
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
EXPOSE 3000

