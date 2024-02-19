//CREATE A QUIZ CLASS
class Quiz {
    constructor(questions){
        this.score=0;
        this.questions=questions;
        this.questionIndex =0;
    }
    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
    guess(answer){
        if(this.getQuestionIndex().isCorrectAnswer(answer)){
            this.score++;
        }
        this.questionIndex++;
    }
    isEnded(){
        return this.questionIndex === this.questions.length;
    }

}
//CREATE A QUESTION CLASS
class Question {
         constructor(text, choices, answer){
            this.text=text;
            this.choices=choices;
            this.answer=answer;
         }
         isCorrectAnswer(choice) {
            return this.answer ===choice;
         }
}

//DISPLAY QUESTION
function displayQuestion() {
    if(quiz.isEnded()) {
        showScores();
        } else{
            //show question
      let questionElement=document.getElementById("question");
      questionElement.innerHTML=quiz.getQuestionIndex().text;

      //show options
      let choices=quiz.getQuestionIndex().choices;
      for(let i=0; i < choices.length; i++) {
        let choiceElement=document.getElementById("choice"+i);
        choiceElement.innerHTML=choices[i];
        guess("btn"+ i,choices[i]);
      }

      showProgress();
    }
};

//GUESS FUNCTION

function guess(id, guess){
    let button = document.getElementById(id);
    button.onclick=function(){
        quiz.guess(guess);
  displayQuestion();
    }
}

//show quiz progress
function showProgress(){
    let currentQuestionNumber= quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML =
    `Question ${currentQuestionNumber} of ${quiz.questions.length}
    `;
}

//SHOW SCORE

function showScores() {
    let quizEndHTML =
    `
     <h1>Quiz Completed</h1>
     <h2 id="score">You scored: ${quiz.score} of${quiz.questions.length}</h2>
     <div class="quiz-repeat">
     <a href="index.html">Take Quiz Again</a>
     </div>
    `;
    let quizElement= document.getElementById("quiz");
    quizElement.innerHTML=quizEndHTML;
}

//CREATE Quiz QUESTIONS
let questions=[
    new Question(
       "What Does HTML Stands For?",["Hyper tool Markup Language",
        "Hyper text Message Language", "Hyper tool Message Language",
         "Hyper Text Markup Language"],"Hyper Text Markup Language"
    ),
    new Question(
        "What Does CSS Stands FOR?",["Cascading Style Sheet",
         "Controlled Style Sheet", "Controlled Sample Sheet",
          "Cascading Sample Sheet"], "Cascading Style Sheet"
    ),
    new Question(
        "Which is a Backend Language?",["PHP","HTML","REACT",
          "ALL"], "PHP"
    ),
    new Question(
        "Which is best for Artificial Intellegence?",["React", "Python","Sass",
          "Java"], "Python"
    ),
    new Question(
        "what is the full form of SQL?",["Structured quantum language","Standard Query language",
        "Structured Query Language", "Standard Quantum Language"],"Structured Query Language"
    ),
    new Question(
        "What is the full form of RBI?",["Reset banking of india","Reserved Bank of india",
          "Rested bank of india"," Rare bank of india"],"Reserved Bank of india" 
    ),
    new Question(
        "What is full form of SBI?",["Structured bank of india","Status bank of india",
         "State bank of india","Standard bank of india"],"State bank of india" 
    ),
    new Question(
        "which language will use to create a webpage?",["HTML","java",
       "CSS","Both A and C"],"Both A and C" 
    ),
];

let quiz= new Quiz(questions);

//display questions
displayQuestion();

//ADD A COUNTDOWN
let time=10;
let quizTimeInMinutes= time * 60 * 60;
quizTime=quizTimeInMinutes /60;

let counting = document.getElementById("count-down");


 function startCoutdown() {
    let quizTimer = setInterval(function() {
         if (quizTimer <= 0) {
            clearInterval(quizTimer);      
            showScores();
        } else{
            quizTime--;
            let sec =Math.floor(quizTime % 60);
            let min =Math.floor(quizTime /60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;        
        }
    }, 1000)
 }

 startCoutdown();

 





