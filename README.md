# 📘 Technical Structure – Filo Take Home Test

Dokumentasi ini menjelaskan tools yang saya gunakan selama development dan rencana teknologi jika proyek ini dilanjutkan.

---

## 🛠 Tools & Software yang Saya Gunakan

- **Visual Studio Code** dengan plugin **Volar**
- **Node.js** (v16 ke atas) & **npm**
- **Vite** sebagai build tool modern
- **Git** untuk version control
- **ESLint** & **Prettier** untuk menjaga konsistensi dan kebersihan kode

---

## 📦 Framework / Library

- **Vue 3** dengan **TypeScript** sebagai stack utama
- **Vue Router** untuk kebutuhan navigasi (jika ada banyak halaman)
- **Pinia** sebagai state management (opsional jika skala aplikasi membesar)
- **Axios** untuk komunikasi HTTP dengan backend
- Styling bisa disesuaikan: saat ini cukup dengan CSS/SCSS, namun **Tailwind CSS** akan saya gunakan jika ingin proses styling lebih efisien

---

## 🚀 Jika Proyek Dilanjutkan

Jika proyek ini dilanjutkan ke tahap produksi atau pengembangan lebih jauh, berikut keputusan yang saya ambil:

### ✅ Testing

Saya akan menambahkan pengujian untuk menjaga kestabilan:

- **Vitest** atau **Jest** untuk unit test
- **Cypress** untuk E2E testing

### ⚙️ CI/CD & Deployment

Untuk automasi dan distribusi:

- Saya akan setup **GitHub Actions** untuk proses CI/CD
- Aplikasi frontend akan saya deploy ke **Vercel** atau **Netlify** karena kemudahan integrasinya dengan Git
- Jika menggunakan backend, bisa dideploy ke **Render** atau **Railway**

### 📚 Dokumentasi

Jika UI cukup kompleks, saya akan menggunakan **Storybook** untuk dokumentasi dan preview komponen.

---

## 🧩 Teknologi Backend & Database

Jika backend diperlukan, berikut teknologi yang akan saya pilih:

- **Backend**:  
  Saya akan menggunakan **Node.js + Express** karena fleksibilitas dan kecepatan setup-nya. Jika dibutuhkan struktur dan modularitas lebih baik, saya akan beralih ke **NestJS**.
  
- **Database**:  
  Saya akan menggunakan **PostgreSQL** karena fiturnya yang kaya dan cocok untuk aplikasi skala produksi.

- **API**:  
  Saya akan buat **REST API** di awal. Jika kebutuhan lebih kompleks, bisa saya migrasi ke **GraphQL**.

---

## 🔍 Optimasi SEO & Kecepatan

Meskipun ini SPA (Single Page App), saya akan tetap memperhatikan SEO dan performa:

### SEO

- Saya akan menambahkan meta tags dinamis menggunakan `@vueuse/head`
- Sitemap dan robots.txt akan saya tambahkan secara manual
- Jika SEO sangat krusial, saya akan migrasi ke SSR menggunakan **Nuxt 3**

### Performance

- Saya akan implementasi **lazy load** untuk komponen dan halaman
- Gambar akan saya kompres dan konversi ke format modern seperti **WebP**
- Saya akan gunakan **dynamic imports** dan aktifkan code splitting
- Build production sudah otomatis minify dan tree-shaking via Vite
- Aset statis bisa disajikan via CDN

---

© 2025 – Filo Take Home Test – Vue 3 + Vite
