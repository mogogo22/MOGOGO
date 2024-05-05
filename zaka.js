const questions = [
    {
        question: "ما هي عاصمة فرنسا؟",
        options: ["باريس", "لندن", "مدريد"],
        answerIndex: 0
    },
    {
        question: "ما هي عاصمة الصين؟",
        options: ["طوكيو", "بكين", "سول"],
        answerIndex: 1
    },
    {
        question: "ما هي عاصمة روسيا؟",
        options: ["واشنطن العاصمة", "بكين", "موسكو"],
        answerIndex: 2
    },
    {
        question: "ما هي عاصمة الهند؟",
        options: ["كابول", "نيودلهي", "جاكرتا"],
        answerIndex: 1
    },
    {
        question: "ما هي عاصمة البرازيل؟",
        options: ["ليما", "بوينس آيرس", "برازيليا"],
        answerIndex: 2
    },
    {
        question: "ما هي عاصمة ألمانيا؟",
        options: ["برلين", "مدريد", "باريس"],
        answerIndex: 0
    },
    {
        question: "ما هي عاصمة اليابان؟",
        options: ["طوكيو", "سيدني", "بكين"],
        answerIndex: 0
    },
    {
        question: "ما هي عاصمة كندا؟",
        options: ["كانبرا", "أوتاوا", "واشنطن العاصمة"],
        answerIndex: 1
    },
    {
        question: "ما هي عاصمة استراليا؟",
        options: ["برلين", "لندن", "كانبرا"],
        answerIndex: 2
    },
    {
        question: "ما هي عاصمة إسبانيا؟",
        options: ["مدريد", "روما", "باريس"],
        answerIndex: 0
    },
    {
        question: "ما هي عاصمة جنوب أفريقيا؟",
        options: ["كيب تاون", "بريتوريا", "جوهانسبرغ"],
        answerIndex: 1
    },
    {
        question: "ما هي عاصمة تركيا؟",
        options: ["بغداد", "أسطنبول", "أنقرة"],
        answerIndex: 2
    },
    {
        question: "ما هي عاصمة الولايات المتحدة الأمريكية؟",
        options: ["واشنطن العاصمة", "نيويورك", "لوس أنجلوس"],
        answerIndex: 0
    },
    {
        question: "ما هي عاصمة المملكة المتحدة؟",
        options: ["لندن", "باريس", "روما"],
        answerIndex: 0
    },
    {
        question: "ما هي عاصمة مصر؟",
        options: ["القاهرة", "الإسكندرية", "الجيزة"],
        answerIndex: 0
    }
    
    // يمكنك إضافة المزيد من الأسئلة هنا
];


let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;

    const optionsList = document.getElementById("options");
    optionsList.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.className = "option";
        li.setAttribute("onclick", `checkAnswer(${index})`);
        optionsList.appendChild(li);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answerIndex) {
        score++;
        document.getElementById("score").textContent = "النقاط: " + score;
    }

    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.removeEventListener("click", checkAnswer);
    });

    document.querySelector("button").style.display = "none"; // إخفاء زر "التالي"
    setTimeout(nextQuestion, 500); // استدعاء nextQuestion() بعد 500 مللي ثانية (0.5 ثانية)
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    alert("انتهت اللعبة! النقاط الإجمالية: " + score);
    score = 0;
    document.getElementById("score").textContent = "النقاط: " + score;
    currentQuestionIndex = 0;
    displayQuestion();
}

// عرض السؤال الأول عند تحميل الصفحة
displayQuestion();

