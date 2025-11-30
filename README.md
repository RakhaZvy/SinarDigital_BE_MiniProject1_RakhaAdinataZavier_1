# Aplikasi Pencatat Hutang Sederhana

Aplikasi Backend sederhana berbasis **Express.js** untuk mencatat daftar utang.

## Tech Stack

- Node.js
- Express.js
- In-Memory Array (JSON Database)

## Cara Menjalankan

1.  **Install Dependencies**
    Masuk ke folder proyek dan install paket yang dibutuhkan. Ketik ini di terminal:

    ```bash
    npm install
    ```

2.  **Konfigurasi Environment**
    Buat file `.env` baru, lalu isi port-nya:

    ```text
    PORT=3000
    ```

3.  **Jalankan Server**
    Ketik perintah ini di terminal:
    ```bash
    node server.js
    ```
    Server akan berjalan di `http://localhost:3000`

## Dokumentasi API

### 1. Cek Status Server

- **URL:** `http://localhost:3000/`
- **Method:** `GET`
- **Deskripsi:** Mengecek apakah server berjalan.

### 2. Lihat Daftar Utang

- **URL:** `http://localhost:3000/api/list`
- **Method:** `GET`
- **Cara Pakai:**
  - Bisa langsung copy-paste link ke browser, ATAU
  - Buka Thunder Client -> New Request -> Masukkan Link -> Send.
- **Response Sukses:**
  ```json
  {
    "message": "Daftar Pencatat Utang",
    "total_data": 5,
    "data": [ ... ]
  }
  ```

### 3. Tambah Utang Baru

- **URL:** `http://localhost:3000/api/tambah`
- **Method:** `POST`
- **Body (JSON):**
  ```json
  Example:
  {
    "nama": "Udin",
    "nominal": 50000,
    "catatan": "Pinjam buat beli pulsa"
  }
  ```
