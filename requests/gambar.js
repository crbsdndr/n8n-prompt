

const USERNAME = "mochamad_dendra";
const PASSWORD = "f8xW$0^XVysx8&YAQ!";
const WEBHOOK_URL = "https://n8n.arttrvttr.xyz/webhook-test/generate/gambar"

const credentials = btoa(`${USERNAME}:${PASSWORD}`)
console.log(credentials)

fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${credentials}`
    },
    body: JSON.stringify({
        "user": {
            "display_name": "Asep Guru",
            "email": "artrialazz@gmail.com"
        },
        "metadata": {
            "type": "Gambar",
            "created_at": "2025-12-01T12:25:00.000Z"
        },
        "input": "Buatkan gambar ilustrasi seorang anak sedang belajar di perpustakaan dengan latar belakang rak buku yang penuh warna-warni dan suasana yang cerah serta menyenangkan."
    })
})

.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));