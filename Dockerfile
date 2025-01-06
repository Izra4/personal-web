# Menggunakan Node.js versi 20 berbasis Alpine untuk image yang ringan
FROM node:20-alpine

# Menetapkan direktori kerja di dalam container
WORKDIR /app

# Menyalin file package.json dan package-lock.json untuk menginstal dependensi terlebih dahulu
COPY package*.json ./

# Menginstal semua dependensi yang dibutuhkan
RUN npm install

# Menyalin seluruh kode aplikasi ke dalam container
COPY . .

# Menjalankan Prisma generate untuk membuat klien Prisma
RUN npx prisma generate

# Menjalankan Prisma migrate deploy untuk menerapkan perubahan skema database di production
RUN npx prisma migrate deploy

# Membuat build aplikasi
RUN npm run build

# Mengekspos port yang digunakan oleh aplikasi
EXPOSE 3000

# Menjalankan aplikasi ketika container dijalankan
CMD ["npm", "start"]
