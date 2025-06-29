const questionsData = [
    {
        "q": "Как ты обычно проводишь выходные?",
        "a": [
            "Я провожу выходные активно, встречаясь с друзьями, посещая мероприятия или исследуя город.",
            "Для меня важно проводить время с семьей в уютной и спокойной обстановке дома.",
            "Я стараюсь выезжать на природу, чтобы восстановить силы и быть в гармонии с собой.",
            "Выходные — это время для уборки, саморазвития и чтения книг в тишине.",
            "Я предпочитаю одиночество, чтобы переосмыслить свои цели и зарядиться энергией."
        ]
    },
    {
        "q": "Что тебе важно в доме?",
        "a": [
            "Удобное расположение, близость к работе и инфраструктуре имеют для меня приоритет.",
            "Я ценю простор и возможность свободного передвижения в доме.",
            "Связь с природой — наличие зелени, свежего воздуха и естественного света.",
            "Главное — функциональность, чтобы каждый элемент дома был полезным и удобным.",
            "Мне важна тишина и уединение, чтобы чувствовать себя в безопасности и покое."
        ]
    },
    {
        "q": "Какой стиль тебе ближе?",
        "a": [
            "Современный стиль с чистыми линиями и технологичными решениями вдохновляет меня.",
            "Классика с элементами традиций и благородных материалов мне ближе по духу.",
            "Экостиль с использованием природных материалов и живых растений приносит гармонию.",
            "Минимализм помогает мне сконцентрироваться, избегая визуального шума.",
            "Мне нравится лофт — свободное пространство, креатив и индустриальная эстетика."
        ]
    },
    {
        "q": "Что тебя больше всего раздражает?",
        "a": [
            "Мне сложно справляться со скукой, я ищу постоянную активность и новые впечатления.",
            "Беспорядок вызывает у меня стресс, я стремлюсь к чистоте и организованности.",
            "Шум мешает моему комфорту и сосредоточенности, я ищу тишину.",
            "Хаос в жизни и пространстве дестабилизирует меня, мне нужно ощущение контроля.",
            "Ограничения и рамки подавляют мою свободу, мне важно иметь выбор."
        ]
    },
    {
        "q": "Где бы ты хотел жить?",
        "a": [
            "В самом центре города, чтобы быть в эпицентре событий и динамики.",
            "В спокойном спальном районе с развитой инфраструктурой для семьи.",
            "За городом, где можно наслаждаться природой и тишиной каждый день.",
            "В компактной студии, где всё под рукой и ничего лишнего.",
            "В доме с отдельным кабинетом и пространством для уединённой работы."
        ]
    },
    {
        "q": "Твоя работа больше всего требует:",
        "a": [
            "Физической активности, передвижения и постоянного взаимодействия с людьми.",
            "Стабильности и уверенности в завтрашнем дне, чёткой структуры и порядка.",
            "Вдохновения и творческого подхода, свободы мысли и нестандартных решений.",
            "Организации и системного мышления, чтобы контролировать процессы.",
            "Глубокой концентрации и уединения для работы в тишине."
        ]
    },
    {
        "q": "Как ты относишься к соседям?",
        "a": [
            "Я отношусь к соседям нейтрально, главное — чтобы не мешали.",
            "Мне важно иметь доброжелательных соседей и социальные связи рядом.",
            "Предпочитаю ограниченное общение и уединение в своем пространстве.",
            "Главное — чтобы было спокойно и никто не нарушал личные границы.",
            "Я бы предпочёл жить без соседей, полностью контролируя свое окружение."
        ]
    },
    {
        "q": "Ты мечтаешь о доме, где будет:",
        "a": [
            "Панорамный вид, вдохновляющий каждое утро и создающий ощущение простора.",
            "Удобное пространство для детей, игр и семейного общения.",
            "Собственный сад, где можно выращивать растения и отдыхать на свежем воздухе.",
            "Минимум мебели и максимум пространства для свободы и чистоты мыслей.",
            "Библиотека или уютный уголок для чтения и личного развития."
        ]
    },
    {
        "q": "Как ты выбираешь мебель?",
        "a": [
            "Следую последним трендам, чтобы интерьер выглядел современно и стильно.",
            "Для меня важнее всего удобство и эргономичность каждой вещи.",
            "Я выбираю мебель из натуральных, экологичных материалов.",
            "Ценю практичность — каждая вещь должна выполнять свою функцию.",
            "Ищу уникальные, персонализированные предметы с характером."
        ]
    },
    {
        "q": "Твоя главная цель в жизни?",
        "a": [
            "Достичь успеха, признания и реализовать свои амбиции.",
            "Создать крепкую, любящую семью и жить в заботе друг о друге.",
            "Найти внутреннюю гармонию и жить в согласии с собой.",
            "Установить порядок во всех сферах жизни, чтобы всё было под контролем.",
            "Постоянно развиваться, учиться новому и расти как личность."
        ]
    }
];
const weights = ['explorer', 'family', 'dreamer', 'minimal', 'introvert'];

window.onload = () => {
    const form = document.getElementById("testForm");
    const questionsDiv = document.getElementById("questions");

    questionsData.forEach((q, i) => {
        const block = document.createElement("div");
        block.innerHTML = `<p><strong>${i + 1}. ${q.q}</strong></p>` + q.a.map((ans, idx) =>
            `<label><input type="radio" name="q${i}" value="${idx}" required> ${ans}</label><br>`
        ).join('');
        questionsDiv.appendChild(block);
    });

    form.onsubmit = function(e) {
        e.preventDefault();
        let score = [0, 0, 0, 0, 0];
        for (let i = 0; i < 10; i++) {
            const val = parseInt(document.querySelector(`input[name="q${i}"]:checked`).value);
            score[val]++;
        }
        const maxIndex = score.indexOf(Math.max(...score));
        const profile = weights[maxIndex];
        window.location.href = `result.html?profile=${profile}`;
    };
};
