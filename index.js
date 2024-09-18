

const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlink and Text Markup Language", "Highly Texted Markup Language", "Hyper Transfer Markup Language"],
        answer: 0
    },
    {
        question: "Which HTML tag is used to create an ordered list?",
        options: ["ul", "li", "ol", "dl"], answer: 2
    },
    {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheet", "Creative Style Sheet", "Cascading Style Sheet", "Colorful Style Sheet"],
        answer: 2
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["text-color", "color", "font-color", "text-style"],
        answer: 1
    },
    {
        question: "What is JavaScript primarily used for in web development?",
        options: ["Styling web pages", "Creating web page layouts", "Enhancing the user interface", "Server-side scripting"],
        answer: 2
    },
    {
        question: "Which keyword is used to declare variables in JavaScript?",
        options: ["var", "variable", "declare", "let"],
        answer: 0
    },
    {
        question: "What is the purpose of the 'href' attribute in an HTML 'a' tag?",
        options: ["Defines the link's content", "Sets the link's text color", "Specifies the link's destination", "Adds a border around the link"],
        answer: 2
    },
    {
        question: "Which HTML tag is used for creating a table?",
        options: ["table", "tr", "td", "th"],
        answer: 0
    },
    {
        question: "Which CSS property is used to control the spacing between elements?",
        options: ["margin", "padding", "border", "spacing"],
        answer: 0
    },
    {
        question: "What is the purpose of the 'querySelector' method in JavaScript?",
        options: ["To select the first matching element in the DOM", "To create a new element", "To add event listeners to elements", "To change the page's URL"],
        answer: 0
    },
    {
        question: "Which HTML tag is used for creating a hyperlink?",
        options: ["link", "url", "<a>", "hyperlink"],
        answer: 2
    }
];
 
const questionElement = document.getElementById("questionText");
const optionDiv = document.getElementById("answerOptions");
const nextButton = document.querySelector(".nextBtn");
const score = document.getElementById("score");
const startButton = document.querySelector(".quizStartButton");
const quizContent = document.getElementById("quizContent");
const loadingScreen = document.querySelector(".loadingScreen");


let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let totalQuestions = questions.length;

function startQuiz() {
    startButton.style.display = "none";
    loadingScreen.style.display = "none";
    quizContent.style.display = "block";
    nextButton.style.display = "block";
    showQuestion();
}

function showQuestion() {

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;
        optionDiv.innerHTML = "";
        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.innerText = option;
            button.classList.add("optionButton");
            button.addEventListener("click", () => checkAnswer(index, currentQuestion.answer));
            optionDiv.appendChild(button);
        });

    } else {
        showResults();
        
    }
}

function checkAnswer(selectedIndex, correctIndex) {
    const optionButtons = document.querySelectorAll(".optionButton");

    optionButtons.forEach((btn, index) => {
        if (correctIndex === index) {
            btn.classList.add("green");
        }
        else {
            btn.classList.add("red");
        }
        
        btn.disabled = true;
    });
    
    const isCorrect = selectedIndex === correctIndex;

    if (isCorrect) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }
    currentQuestionIndex++;
    console.log(currentQuestionIndex);

    
}

nextButton.addEventListener("click", showQuestion);

function showResults() {
    quizContent.style.display = "none";
    nextButton.style.display = "none";
    score.style.display = "block";
    score.innerHTML = `Correct Answers: ${correctAnswers}<br>Incorrect Answers: ${incorrectAnswers}<br>Total Questions: ${totalQuestions}`;
}


startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", showQuestion);


window.addEventListener("load", () => {
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 2000);
});
