const questions = [
    {
        question: "What is the purpose of the 'int' keyword in C?",
        answer: [
            { text: "Declare a variable as a character", correct: false },
            { text: "Declare a variable as an integer", correct: true },
            { text: "Declare a variable as a floating-point number", correct: false },
            { text: "Declare a variable as a string", correct: false }
        ]
    },
    {
        question: "Which of the following is a correct way to comment a single line in C++?",
        answer: [
            { text: "// This is a comment", correct: true },
            { text: "/* This is a comment */", correct: false },
            { text: "# This is a comment", correct: false },
            { text: "-- This is a comment", correct: false }
        ]
    },
    {
        question: "What does the 'cout' object do in C++?",
        answer: [
            { text: "Read input from the console", correct: false },
            { text: "Write output to the console", correct: true },
            { text: "Perform mathematical calculations", correct: false },
            { text: "Declare a variable", correct: false }
        ]
    },
    {
        question: "In Java, which keyword is used to declare a constant variable?",
        answer: [
            { text: "static", correct: false },
            { text: "final", correct: true },
            { text: "const", correct: false },
            { text: "var", correct: false }
        ]
    },
    {
        question: "What is the main function's return type in C?",
        answer: [
            { text: "int", correct: true },
            { text: "void", correct: false },
            { text: "main", correct: false },
            { text: "string", correct: false }
        ]
    },
    {
        question: "Which operator is used for pointer dereferencing in C++?",
        answer: [
            { text: "&", correct: false },
            { text: "*", correct: true },
            { text: "->", correct: false },
            { text: "::", correct: false }
        ]
    },
    {
        question: "In Java, which of the following is a reference data type?",
        answer: [
            { text: "int", correct: false },
            { text: "char", correct: false },
            { text: "boolean", correct: false },
            { text: "String", correct: true }
        ]
    },
    {
        question: "What does the 'public' keyword represent in Java?",
        answer: [
            { text: "Accessible to any class", correct: true },
            { text: "Private access only", correct: false },
            { text: "Protected access", correct: false },
            { text: "Static method", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a valid C++ data type?",
        answer: [
            { text: "int", correct: false },
            { text: "float", correct: false },
            { text: "double", correct: false },
            { text: "number", correct: true }
        ]
    },
    {
        question: "In C, what is the purpose of the 'malloc' function?",
        answer: [
            { text: "Define a macro", correct: false },
            { text: "Allocate memory dynamically", correct: true },
            { text: "Declare a variable", correct: false },
            { text: "Open a file", correct: false }
        ]
    }
];

// Rest of your code remains the same.

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const NextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score = 0;
function startQuiz(){
    currentQuestionIndex=0;
    score = 0;
    NextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    currentQuestion.answer.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",(e)=>{
            const SelectedButton = e.target;
            const isCorrect = SelectedButton.dataset.correct==="true";
            if(isCorrect){
                SelectedButton.classList.add("correct");
                score++;
            }
            else{
                SelectedButton.classList.add("Incorrect");
            }
            Array.from(answerButtons.children).forEach(button=>{
                if(button.dataset.correct==="true"){
                    button.classList.add("correct");
                }
                button.disabled=true;
            });
            NextButton.style.display="block";
        })
    });
}

function resetState(){
    NextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}`;
    NextButton.innerHTML="Play Again"
    NextButton.style.display="block";
    
}
function nextQuestion(){
    currentQuestionIndex++ ;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
    
}
NextButton.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        nextQuestion();
    }else{
        startQuiz();
    }
})
startQuiz();