// ==============================
//  30 سؤال جاهزين + عشوائية
// ==============================
let questions = [
    { q: "كم عدد كواكب المجموعة الشمسية؟", o: ["7", "8", "9"], a: 1 },
    { q: "ما هو أكبر محيط في العالم؟", o: ["الهندي", "الأطلسي", "الهادئ"], a: 2 },
    { q: "ما هي عاصمة اليابان؟", o: ["طوكيو", "أوساكا", "كيوتو"], a: 0 },
    { q: "ما هو أثقل حيوان على وجه الأرض؟", o: ["الحوت الأزرق", "الفيل", "القرش"], a: 0 },
    { q: "من هو مخترع الهاتف؟", o: ["غراهام بيل", "اديسون", "نيوتن"], a: 0 },
    { q: "كم عدد قارات العالم؟", o: ["5", "6", "7"], a: 2 },
    { q: "أين تقع الأهرامات؟", o: ["مصر", "السودان", "إيطاليا"], a: 0 },
    { q: "ما هو الغاز الذي نتنفسه؟", o: ["الأكسجين", "الهيدروجين", "النيتروجين"], a: 0 },
    { q: "أين توجد أعلى قمة جبل في العالم؟", o: ["الهند", "النيبال", "الصين"], a: 1 },
    { q: "ما هو أسرع حيوان بري؟", o: ["الفهد", "النمر", "الأسد"], a: 0 },
    { q: "عدد أيام السنة؟", o: ["360", "365", "370"], a: 1 },
    { q: "ما هو الحيوان الذي ينام واقفًا؟", o: ["الحصان", "الجمل", "البقرة"], a: 0 },
    { q: "ما هي اللغة الأكثر انتشارًا؟", o: ["الصينية", "الإنجليزية", "العربية"], a: 0 },
    { q: "كم عدد أركان الإسلام؟", o: ["خمسة", "أربعة", "ستة"], a: 0 },
    { q: "أكبر دولة عربية مساحة؟", o: ["السعودية", "الجزائر", "مصر"], a: 1 },
    { q: "ما هو الحيوان الذي يُلقب بسفينة الصحراء؟", o: ["الحصان", "الجمل", "الماعز"], a: 1 },
    { q: "أصغر قارة في العالم؟", o: ["أوروبا", "أستراليا", "أمريكا الجنوبية"], a: 1 },
    { q: "ما هو أكبر كوكب؟", o: ["المشتري", "الأرض", "نبتون"], a: 0 },
    { q: "أكبر دولة في العالم عددًا للسكان؟", o: ["الهند", "الصين", "أمريكا"], a: 1 },
    { q: "ما هو الحيوان الذي لديه أطول رقبة؟", o: ["الزرافة", "الغزال", "الحصان"], a: 0 },
    { q: "ما هي عاصمة روسيا؟", o: ["موسكو", "كييف", "روما"], a: 0 },
    { q: "أكبر بحيرة في العالم؟", o: ["بحيرة قزوين", "فيكتوريا", "ميتشيغان"], a: 0 },
    { q: "كم عدد أسنان الإنسان البالغ؟", o: ["32", "30", "28"], a: 0 },
    { q: "ما هو الحيوان الذي لا ينام؟", o: ["التمساح", "الدلفين", "السمك"], a: 2 },
    { q: "من هو أسرع طائر؟", o: ["الصقر", "النسر", "النعامة"], a: 0 },
    { q: "من هو مخترع الكهرباء؟", o: ["اديسون", "نيوتن", "بيل"], a: 0 },
    { q: "أين توجد صحراء الربع الخالي؟", o: ["مصر", "السعودية", "المغرب"], a: 1 },
    { q: "ما هي أكبر دولة في إفريقيا؟", o: ["مصر", "الجزائر", "نيجيريا"], a: 1 },
    { q: "ما هو الحيوان الأسرع في البحر؟", o: ["الدولفين", "القرش", "السلحفاة"], a: 0 },
    { q: "أطول نهر في العالم؟", o: ["النيل", "الأمازون", "الدانوب"], a: 0 },
];

// عشوائية
questions = questions.sort(() => Math.random() - 0.5);

let current = 0;
let score = 0;

const qEl = document.getElementById("question");
const optEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const resultEl = document.getElementById("result");
const flash = document.getElementById("flash");

function displayQuestion() {
    let q = questions[current];
    qEl.textContent = q.q;

    optEl.innerHTML = "";

    q.o.forEach((text, i) => {
        let li = document.createElement("li");
        li.className = "option";
        li.textContent = text;
        li.onclick = () => checkAnswer(i);
        optEl.appendChild(li);
    });
}

function flashEffect(color) {
    flash.style.background = color;
    flash.classList.add("show");
    setTimeout(() => flash.classList.remove("show"), 400);
}

function checkAnswer(i) {
    let correct = questions[current].a;

    // منع التكرار
    document.querySelectorAll(".option").forEach(o => o.onclick = null);

    if (i === correct) {
        score++;
        flashEffect("rgba(0,255,0,0.3)"); // أخضر
    } else {
        flashEffect("rgba(255,0,0,0.3)"); // أحمر
    }

    scoreEl.textContent = "النقاط: " + score;

    setTimeout(nextQuestion, 500);
}

function nextQuestion() {
    current++;
    if (current < questions.length) {
        displayQuestion();
    } else {
        finish();
    }
}

function finish() {
    qEl.textContent = "انتهى الاختبار!";
    optEl.innerHTML = "";
    resultEl.textContent = `نتيجتك النهائية: ${score} من ${questions.length}`;
}

displayQuestion();
