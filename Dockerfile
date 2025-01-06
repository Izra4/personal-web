FROM node:20-alpine

WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh file proyek
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build aplikasi
RUN npm run build

# Ekspos port aplikasi
EXPOSE 3000

# Jalankan migrasi Prisma dan aplikasi saat container berjalan
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
