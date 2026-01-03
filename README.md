> CATATAN: Kredential, dan Webhooknya sudah ditutup jadi gak usah ngadi ngadi mau nyerang. Aku tetap simpan karena cool aja dan supaya penuh repositorinya, karena kebanyakan projekku proprietary

# N8N Webhook Test Documentation

Dokumentasi lengkap untuk semua webhook endpoint yang tersedia di n8n.

---

## 📋 Base Information

- **Base URL:** `https://n8n.arttrvttr.xyz/webhook-test`
- **Authentication:** Basic Auth
- **Username:** `mochamad_dendra`
- **Password:** `f8xW$0^XVysx8&YAQ!`
- **Content-Type:** `application/json`

---

## 🔐 Authentication

Semua request memerlukan Basic Authentication header:

```
Authorization: Basic <base64(username:password)>
```

Contoh encoding:
```javascript
const credentials = btoa("mochamad_dendra:f8xW$0^XVysx8&YAQ!");
// Output: bW9jaGFtYWRfZGVuZHJhOmY4eFckMF5YVnlzeDgmWUFRIQ==
```

---

## 📝 Webhook Endpoints

### 1. Generate RPP (Rencana Pelaksanaan Pembelajaran)

**Endpoint:** `POST /webhook-test/generate/rpp`

**Description:** Menghasilkan dokumen RPP berdasarkan parameter pembelajaran.

**Payload:**

```json
{
    "user": {
        "user_id": "3ne3nb2nnk2nnrf",
        "display_name": "Asep Guru",
        "email": "artrialazz@gmail.com"
    },
    "metadata": {
        "type": "RPP",
        "createdAt": "2023-01-01T00:00:00.123Z"
    },
    "core": {
        "school": "SMP Mekar Arum",
        "principal_name": "Verttra S. Kom",
        "teacher_name": "ChatGPT S. Pd",
        "subject": "Matematika",
        "class": "IX",
        "semester": 1,
        "topic": "Bilangan Berpangkat, Bentuk Akar",
        "learning_model": "PBL",
        "student_limit": 3,
        "output_language": "Indonesian"
    },
    "core_competencies": "k1, k2, k3, k4",
    "basic_competencies": "",
    "time_allocation": "40 Menit",
    "max_meeting": "4",
    "learning_media": "",
    "tools_and_materials": "",
    "special_instruction": ""
}
```

**Field Descriptions:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| user.user_id | string | ✅ | ID unik pengguna |
| user.display_name | string | ✅ | Nama tampilan pengguna |
| user.email | string | ✅ | Email pengguna |
| metadata.type | string | ✅ | Jenis dokumen (RPP) |
| metadata.createdAt | ISO8601 | ✅ | Timestamp pembuatan |
| core.school | string | ✅ | Nama sekolah |
| core.principal_name | string | ✅ | Nama kepala sekolah |
| core.teacher_name | string | ✅ | Nama guru |
| core.subject | string | ✅ | Mata pelajaran |
| core.class | string | ✅ | Kelas |
| core.semester | number | ✅ | Semester (1 atau 2) |
| core.topic | string | ✅ | Topik/materi pembelajaran |
| core.learning_model | string | ✅ | Model pembelajaran (PBL, DL, dll) |
| core.student_limit | number | ✅ | Batas maksimal siswa |
| core.output_language | string | ✅ | Bahasa output |
| core_competencies | string | ❌ | Kompetensi inti (opsional) |
| basic_competencies | string | ❌ | Kompetensi dasar (opsional) |
| time_allocation | string | ❌ | Alokasi waktu (opsional) |
| max_meeting | string | ❌ | Jumlah pertemuan maksimal (opsional) |
| learning_media | string | ❌ | Media pembelajaran (opsional) |
| tools_and_materials | string | ❌ | Alat dan bahan (opsional) |
| special_instruction | string | ❌ | Instruksi khusus (opsional) |

---

### 2. Generate LKPD (Lembar Kerja Peserta Didik)

**Endpoint:** `POST /webhook-test/generate/lkpd`

**Description:** Menghasilkan dokumen LKPD untuk pembelajaran interaktif.

**Payload:**

```json
{
    "user": {
        "user_id": "3ne3nb2nnk2nnrf",
        "display_name": "Asep Guru",
        "email": "artrialazz@gmail.com"
    },
    "metadata": {
        "type": "LKPD",
        "created_at": "2025-12-01T12:25:00.000Z"
    },
    "core": {
        "title": "",
        "subject": "Matematika",
        "class": "12",
        "time_allocation": "40 menit"
    },
    "purposes": "",
    "tools_and_material": "",
    "special_instruction": ""
}
```

**Field Descriptions:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| user.user_id | string | ✅ | ID unik pengguna |
| user.display_name | string | ✅ | Nama tampilan pengguna |
| user.email | string | ✅ | Email pengguna |
| metadata.type | string | ✅ | Jenis dokumen (LKPD) |
| metadata.created_at | ISO8601 | ✅ | Timestamp pembuatan |
| core.title | string | ❌ | Judul LKPD (auto-fill jika kosong) |
| core.subject | string | ✅ | Mata pelajaran |
| core.class | string | ✅ | Kelas |
| core.time_allocation | string | ✅ | Alokasi waktu |
| purposes | string | ❌ | Tujuan pembelajaran (opsional) |
| tools_and_material | string | ❌ | Alat dan bahan (opsional) |
| special_instruction | string | ❌ | Instruksi khusus (opsional) |

---

### 3. Generate Bank Soal (Question Bank)

**Endpoint:** `POST /webhook-test/generate/bank_soal`

**Description:** Menghasilkan bank soal dengan pilihan ganda dan/atau essay.

**Payload:**

```json
{
    "user": {
        "user_id": "3ne3nb2nnk2nnrf",
        "display_name": "Asep Guru",
        "email": "artrialazz@gmail.com"
    },
    "metadata": {
        "type": "Bank Soal",
        "created_at": "2025-12-01T12:25:00.000Z"
    },
    "core": {
        "topic": "Bilangan Berpangkat, Bentuk Akar",
        "class": "7",
        "difficulty": "Medium",
        "duration": "40 menit",
        "output_language": "Bahasa Indonesia",
        "is_multiple_choice": true,
        "is_essay": true
    },
    "multiple_choice": {
        "min_max_question": 20,
        "min_max_option": 5
    },
    "essay": {
        "min_max_question": 10
    },
    "special_instruction": ""
}
```

**Field Descriptions:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| user.user_id | string | ✅ | ID unik pengguna |
| user.display_name | string | ✅ | Nama tampilan pengguna |
| user.email | string | ✅ | Email pengguna |
| metadata.type | string | ✅ | Jenis dokumen (Bank Soal) |
| metadata.created_at | ISO8601 | ✅ | Timestamp pembuatan |
| core.topic | string | ✅ | Topik/materi soal |
| core.class | string | ✅ | Kelas |
| core.difficulty | string | ✅ | Tingkat kesulitan (Easy, Medium, Hard) |
| core.duration | string | ✅ | Durasi pengerjaan |
| core.output_language | string | ✅ | Bahasa output |
| core.is_multiple_choice | boolean | ✅ | Include soal pilihan ganda |
| core.is_essay | boolean | ✅ | Include soal essay |
| multiple_choice.min_max_question | number | ❌ | Jumlah soal pilihan ganda |
| multiple_choice.min_max_option | number | ❌ | Jumlah opsi per soal |
| essay.min_max_question | number | ❌ | Jumlah soal essay |
| special_instruction | string | ❌ | Instruksi khusus (opsional) |

---

### 4. Generate Gambar (Image Generation)

**Endpoint:** `POST /webhook-test/generate/gambar`

**Description:** Menghasilkan gambar/ilustrasi berdasarkan prompt yang diberikan.

**Payload:**

```json
{
    "user": {
        "display_name": "Asep Guru",
        "email": "artrialazz@gmail.com"
    },
    "metadata": {
        "type": "Gambar",
        "created_at": "2025-12-01T12:25:00.000Z"
    },
    "input": "Buatkan gambar ilustrasi seorang anak sedang belajar di perpustakaan dengan latar belakang rak buku yang penuh warna-warni dan suasana yang cerah serta menyenangkan."
}
```

**Field Descriptions:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| user.display_name | string | ✅ | Nama tampilan pengguna |
| user.email | string | ✅ | Email pengguna |
| metadata.type | string | ✅ | Jenis dokumen (Gambar) |
| metadata.created_at | ISO8601 | ✅ | Timestamp pembuatan |
| input | string | ✅ | Deskripsi prompt untuk generate gambar |

---

## 📤 Response Format

Semua endpoint mengembalikan JSON response:

```json
{
    "title": "Judul Dokumen",
    "content": "Konten dokumen dalam format Markdown atau URL gambar..."
}
```

---

## 🧪 Testing dengan cURL

### RPP Request:

```bash
curl -X POST https://n8n.arttrvttr.xyz/webhook-test/generate/rpp \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic bW9jaGFtYWRfZGVuZHJhOmY4eFckMF5YVnlzeDgmWUFRIQ==" \
  -d @json_parse/rpp.json
```

### LKPD Request:

```bash
curl -X POST https://n8n.arttrvttr.xyz/webhook-test/generate/lkpd \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic bW9jaGFtYWRfZGVuZHJhOmY4eFckMF5YVnlzeDgmWUFRIQ==" \
  -d @json_parse/lkpd.json
```

### Bank Soal Request:

```bash
curl -X POST https://n8n.arttrvttr.xyz/webhook-test/generate/bank_soal \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic bW9jaGFtYWRfZGVuZHJhOmY4eFckMF5YVnlzeDgmWUFRIQ==" \
  -d @json_parse/bank_soal.json
```

### Gambar Request:

```bash
curl -X POST https://n8n.arttrvttr.xyz/webhook-test/generate/gambar \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic bW9jaGFtYWRfZGVuZHJhOmY4eFckMF5YVnlzeDgmWUFRIQ==" \
  -d @json_parse/gambar.json
```

---

## 🔧 Running Requests

Jalankan request files dengan Node.js:

```bash
# RPP
node requests/rpp.js

# LKPD
node requests/lkpd.js

# Bank Soal
node requests/bank_soal.js

# Gambar
node requests/gambar.js
```

---

## ⚠️ Important Notes

- Jika field opsional kosong, sistem akan mengisinya secara otomatis dengan data yang relevan
- Output Language mendukung: Indonesian, English, dan bahasa lainnya
- Timestamp harus dalam format ISO 8601
- Pastikan credentials valid sebelum melakukan request
- Untuk endpoint Gambar, pastikan `input` berisi deskripsi prompt yang jelas dan detail
