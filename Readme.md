# 📝 Kumpulan Script Autofill Kuisioner

Repository ini berisi kumpulan script JavaScript untuk mengisi otomatis berbagai modul kuisioner berbasis web.

Setiap modul memiliki script tersendiri yang disesuaikan dengan tipe pertanyaan pada kuisioner tersebut.

## 📂 Struktur Repository

```
kuisioner-belajar-mengajar/
 ├── script.js
 ├── with-probability.js

kuisioner-kesehatan-mental/
 ├── script.js

kuisioner-layanan/
 ├── script.js

kuisioner-survey-umum/
 ├── script.js

kuisioner-visi-misi/
 ├── script.js
```

## 📌 Modul & Fungsinya

### 1️⃣ kuisioner-belajar-mengajar

Script untuk kuisioner evaluasi pembelajaran.

File:

```
script.js → Versi jawaban tetap (static answer)
with-probability.js → Versi dengan probabilitas (misal 80% Baik, 20% Sangat Baik)
```

Digunakan untuk:

- Skala penilaian (Baik / Sangat Baik)
- Skala kepuasan
- Input text

### 2️⃣ kuisioner-kesehatan-mental

Script khusus skrining kesehatan mental.

Karakteristik:

- Satu jenis skala pernyataan
- Beberapa input text spesifik berdasarkan isi pertanyaan

### 3️⃣ kuisioner-layanan

Script untuk kuisioner evaluasi layanan.

Biasanya menangani:

- Skala kualitas layanan
- Pertanyaan Ya/Tidak
- Input text saran

### 4️⃣ kuisioner-survey-umum

Script untuk survey umum dengan beberapa pola pilihan ganda seperti:

- Tahu / Tidak Tahu / Ragu-ragu
- Pernah / Belum Pernah / Ragu-ragu
- Ada / Tidak Ada / Ragu-ragu
- Iya / Tidak / Ragu-ragu

### 5️⃣ kuisioner-visi-misi

Script khusus untuk pertanyaan:

- Iya / Tidak / Tidak Tahu
- Input text saran

## 🚀 Cara Menggunakan Script

1. Buka halaman kuisioner.
2. Tekan F12.
3. Pilih tab Console.
4. Buka file script yang sesuai dari repository.
5. Copy seluruh isi file.
6. Paste ke Console.
7. Tekan Enter.
8. Script akan otomatis mengisi semua pertanyaan pada halaman aktif.

## ⚙️ Konfigurasi Jawaban

Beberapa script memiliki variabel konfigurasi di bagian atas, misalnya:

```
const JAWABAN = "Baik";
```

atau

```
const PROB_KUALITAS = {
  "Baik": 80,
  "Sangat Baik": 20
};
```

Ubah nilai tersebut sesuai kebutuhan sebelum menjalankan script.

## ⚠️ Catatan Penting

Script mengandalkan struktur DOM seperti:

```
li.i_pertanyaan

.pertanyaan-jawaban

.id_tipe_jawaban
```

Jika struktur HTML berubah, selector mungkin perlu disesuaikan.

Script hanya mengisi field, tidak selalu otomatis submit (kecuali ditambahkan manual).

### 🔒 Disclaimer

Script ini dibuat untuk membantu pengisian kuisioner dengan struktur yang konsisten dan berulang. Gunakan dengan bijak sesuai kebijakan sistem yang berlaku.
