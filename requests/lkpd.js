

const USERNAME = "mochamad_dendra";
const PASSWORD = "f8xW$0^XVysx8&YAQ!";
const WEBHOOK_URL = "https://n8n.arttrvttr.xyz/webhook-test/generate/lkpd"

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
    })
})

.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));