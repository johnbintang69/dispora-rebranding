# Aplikasi Web DISPORA Kota Semarang

Aplikasi web resmi Dinas Pemuda dan Olahraga (DISPORA) Kota Semarang yang menampilkan profil, berita, galeri, dan informasi seputar kegiatan kepemudaan dan olahraga di Kota Semarang.

## Prasyarat

Sebelum memulai, pastikan komputer Anda telah terinstal:

- Node.js (versi 14.x atau lebih baru)
- npm (Node Package Manager) atau Yarn

## Cara Instalasi

1. **Clone Repository**
   ```bash
   git clone [URL_REPOSITORY_ANDA]
   cd frontend-dispora
   ```

2. **Instal Dependensi**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Jalankan Aplikasi**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

4. **Buka di Browser**
   Buka [http://localhost:5173](http://localhost:5173) untuk melihat aplikasi di browser.

## Dependensi Utama

- React 18.x
- React Router DOM
- Framer Motion (untuk animasi)
- Tailwind CSS (untuk styling)
- React Icons
- React Intersection Observer

## Struktur Proyek

```
src/
├── assets/           # File aset (gambar, dll)
├── components/       # Komponen React yang dapat digunakan kembali
├── context/          # Context API
├── pages/            # Halaman-halaman aplikasi
└── App.jsx           # Komponen utama
```

## Script yang Tersedia

- `npm run dev` - Menjalankan aplikasi di mode pengembangan
- `npm run build` - Membuat versi produksi
- `npm run preview` - Melihat versi produksi secara lokal
- `npm run lint` - Menjalankan ESLint

## Kontribusi

1. Fork repository ini
2. Buat branch baru (`git checkout -b fitur-baru`)
3. Commit perubahan Anda (`git commit -am 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

Dikembangkan oleh [Nama Anda] untuk DISPORA Kota Semarang.
