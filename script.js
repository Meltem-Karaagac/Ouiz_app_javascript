const quizData = [
    {

        question: "What is the most used programming language in 2020?",
        a: "java",
        b: "C",
        c: "JavaScript",
        d: "python",
        correct: "c",

    }, {

        question: "Inside which HTML element do we put the JavaScript ?",
        a: "<js>",
        b: "script",
        c: "block",
        d: "html",
        correct: "b"
    }, {

        question: "How do you create a function in JavaScript ?",
        a: "function = myFunction()",
        b: "function myFunction()",
        c: "function: myFunction()",
        d: "myFuncions() = function",
        correct: "b"
    }

];

const quiz = document.getElementById("quiz");
const answerTotal = document.querySelectorAll(".answer");
const questionTotal = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionTotal.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerTotal.forEach((answerTotal) => {
        if (answerTotal.checked) {
            answer = answerTotal.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerTotal.forEach((answerTotal) => {
        answerTotal.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h3>
                You answered correctly at ${score}/${quizData.length} questions.</h3>
                
                <button onclick="location.reload()">Try again !</button>
            `;
        }
    }
});

