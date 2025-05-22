# 📘 Technical Structure – Filo Take Home Test

Dokumentasi ini menjelaskan tools yang saya gunakan, teknologi utama proyek, serta keputusan arsitektur jika proyek ini dilanjutkan.

---

# Tutorial Instalasi Projek

## 1. Clone Repository

```bash
git clone https://github.com/username/nama-repo.git
cd nama-repo
```

## 2. Install Dependency

```bash
npm install
```

## 3. Menjalankan Aplikasi

```bash
npm run dev
```

## 🛠 Tools & Software yang Saya Gunakan

- **Visual Studio Code** (dengan plugin Volar)
- **Node.js** dan **npm**
- **Composer** untuk dependency PHP
- **Vite** untuk bundling frontend
- **Git** sebagai version control
- **ESLint** & **Prettier** untuk menjaga konsistensi kode

---

## ⚙️ Framework / Library

### Frontend

- **Vue 3** dengan **TypeScript**
- **Vue Router** untuk navigasi (jika diperlukan)
- **Pinia** untuk manajemen state (jika kompleksitas aplikasi meningkat)
- **Axios** untuk HTTP client

### Backend

- **Laravel** – Framework backend utama
- Saya menggunakan **Laravel Starter Kit dengan Vue** untuk integrasi fullstack yang efisien
- **Sanctum** sebagai sistem otentikasi default

---

## 🚀 Jika Proyek Dilanjutkan

Jika proyek ini dilanjutkan ke skala produksi atau pengembangan tim:

### ✅ Testing

- Backend: saya akan gunakan **Pest PHP** atau **PHPUnit**

### ⚙️ CI/CD & Deployment

- Akan saya siapkan **GitHub Actions** untuk workflow otomatis seperti testing & deploy
- **Frontend** dan **backend** akan dideploy di server seperti **DigitalOcean** atau **Niagahoster**

### 📚 Dokumentasi

- Saya akan setup dokumentasi endpoint API menggunakan **Laravel Scribe** atau **Postman**
- Untuk dokumentasi UI, saya bisa pertimbangkan **Storybook** jika frontend menjadi kompleks

---

## 🧩 Teknologi Backend & Database

- **Backend**: Laravel
- **Otentikasi**: Laravel Sanctum
- **Database**: MySQL atau PostgreSQL, tergantung kebutuhan integrasi
- **API**: Saya tetap gunakan RESTful API, tetapi akan pertimbangkan GraphQL jika relasi datanya kompleks

---

## 🔍 Optimasi SEO & Kecepatan

### SEO

- SPA menggunakan Vue memang memiliki keterbatasan SEO. Jika SEO menjadi kebutuhan penting:
  - Saya akan migrasi ke **Inertia.js + Laravel** untuk SSR ringan
  - Atau gunakan **Nuxt 3** jika frontend dipecah jadi standalone

### Performance

- Saya akan aktifkan:
  - **Lazy-loading** untuk route/component
  - **Dynamic import** agar bundle lebih kecil
  - Kompresi gambar dan penggunaan format **WebP**
- Vite sudah otomatis melakukan minify dan tree-shaking saat `npm run build`
- CDN bisa digunakan untuk aset besar seperti gambar atau font

---

© 2025 – Filo Take Home Test – Laravel + Vue (Starter Kit)
