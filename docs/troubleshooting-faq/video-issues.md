# Video Issues

Panduan ini membantu mengidentifikasi dan mengatasi masalah umum yang berkaitan dengan tampilan video selama ibadah atau kegiatan multimedia lainnya.

## 📺 1. Tidak Ada Gambar di Layar Proyektor / TV

**Kemungkinan Penyebab:**

* Kabel HDMI / VGA tidak tersambung dengan baik
* Proyektor atau TV belum dihidupkan
* Sumber input salah dipilih
* Resolusi output tidak didukung

**Langkah Perbaikan:**

1. Periksa koneksi kabel dari sumber (laptop / PC) ke proyektor/TV.
2. Pastikan proyektor/TV dalam posisi ON.
3. Cek input (HDMI1, HDMI2, VGA) yang aktif di perangkat tampilan.
4. Jika menggunakan laptop / PC, tekan kombinasi tombol:

* `Windows + P` → pilih **Duplicate** / **Extend**

1. Atur resolusi layar ke 1080p (1920x1080) jika layar tidak muncul.

## 🔁 2. Video Delay atau Terputus-putus saat Livestream

**Kemungkinan Penyebab:**

* Koneksi internet tidak stabil
* Resolusi/bitrate terlalu tinggi
* Laptop atau encoder overload

**Langkah Perbaikan:**

1. Cek koneksi internet dan pastikan stabil.
2. Turunkan resolusi livestream dari 1080p ke 720p jika perlu.
3. Tutup aplikasi yang tidak diperlukan.
4. Gunakan kabel LAN (jika memungkinkan) daripada Wi-Fi.
5. Pastikan encoder (OBS atau lainnya) tidak overload (cek CPU usage).

## 🔌 3. Kamera Tidak Terdeteksi di OBS / Proyeksi

**Kemungkinan Penyebab:**

* Kamera belum tersambung atau tidak aktif
* Port USB bermasalah
* Driver kamera tidak terbaca
* USB extender (jika ada) tidak bekerja

**Langkah Perbaikan:**

1. Cabut dan pasang ulang USB kamera.
2. Coba port USB lain.
3. Jika menggunakan USB extender (misalnya Bafo), pastikan dayanya cukup.
4. Restart OBS atau software presentasi.
5. Periksa Device Manager (Windows) → apakah kamera muncul?
6. Gunakan kamera cadangan bila mendesak.

## 📷 4. Warna / Gambar dari Kamera Tidak Normal

**Kemungkinan Penyebab:**

* White balance tidak tepat
* Pencahayaan ruangan terlalu terang/gelap
* Kabel video bermasalah

**Langkah Perbaikan:**

1. Atur white balance dari pengaturan kamera / OBS.
2. Tambahkan atau kurangi pencahayaan ruangan.
3. Cek kabel USB atau HDMI kamera, ganti jika perlu.
4. Gunakan kamera lain untuk crosscheck.

## 🎥 5. Delay atau Flicker pada Webcam

**Kemungkinan Penyebab:**

* Bandwidth USB tidak cukup (terlalu banyak perangkat dihubungkan)
* Driver kamera bermasalah
* Frame rate dan resolusi tidak sesuai
* Gangguan dari USB extender

**Langkah Perbaikan:**

1. **Cabut perangkat USB lain** yang tidak digunakan, terutama kamera tambahan.
2. Coba **pindahkan webcam ke port USB lain** (hindari USB hub jika memungkinkan).
3. **Turunkan resolusi webcam** di OBS (misalnya dari 1080p ke 720p).
4. Ubah **frame rate** ke 30 fps atau 25 fps di pengaturan sumber video OBS.
5. Jika menggunakan USB extender seperti Bafo, pastikan:

* Kabel tidak terlalu panjang (>5m bisa menimbulkan delay)
* Daya cukup (gunakan extender aktif jika perlu)

1. **Update driver webcam** dari situs resmi atau melalui Device Manager.

## 🎬 6. OBS Tidak Menerima Input dari Capture Card

**Kemungkinan Penyebab:**

* Capture card tidak dikenali sistem
* Port USB capture card bermasalah
* Input sumber (kamera) belum aktif
* Konflik dengan aplikasi lain yang sedang menggunakan sumber video

**Langkah Perbaikan:**

1. Pastikan **capture card terdeteksi di Device Manager**.
2. Gunakan port USB yang berbeda (hindari port depan casing).
3. Tes capture card di laptop / PC lain untuk memastikan fungsionalitas.
4. Pastikan **kamera / hanydcam yang menjadi sumber video sudah menyala**.
5. Jika kamera memiliki output setting, pastikan disetel ke **"Clean HDMI"**.
6. Tutup aplikasi lain (misalnya Zoom, browser, atau software kamera) yang mungkin menggunakan sumber video.
7. Jika masih gagal:

* Restart OBS
* Hapus dan tambahkan ulang *Video Capture Device* di OBS

## ✅ Checklist Pengecekan Mingguan

| Pemeriksaan                         | Status |
| ----------------------------------- | ------ |
| Kamera handycam menyala             | \[ ]   |
| Capture card terbaca di komputer    |        |
| Kabel HDMI terpasang dengan benar   |        |
| Webcam dikenali di OBS              |        |
| Gambar tidak delay atau flicker     |        |
| OBS menampilkan output ke proyektor |        |
| Proyektor menampilkan gambar normal |        |

\:::note Catatan

📝 Checklist ini sebaiknya dilakukan sebelum ibadah atau event dimulai setiap minggu untuk memastikan sistem video siap digunakan.

\:::

## 🧪 Tips Tambahan

* **Selalu tes kamera dan proyektor sebelum ibadah dimulai.**
* **Gunakan naming/tagging pada kabel untuk memudahkan troubleshooting.**
* Simpan **kamera cadangan / webcam** dan kabel di tempat yang mudah diakses.
* Siapkan **checklist pengecekan awal** setiap minggu. 