

const USERNAME = "mochamad_dendra";
const PASSWORD = "f8xW$0^XVysx8&YAQ!";
const WEBHOOK_URL = "https://n8n.arttrvttr.xyz/webhook-test/generate/bank_soal"

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
    })
})

.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));