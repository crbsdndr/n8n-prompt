

const USERNAME = "mochamad_dendra";
const PASSWORD = "f8xW$0^XVysx8&YAQ!";
const WEBHOOK_URL = "https://n8n.arttrvttr.xyz/webhook-test/generate/rpp"

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
    })
})

.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));