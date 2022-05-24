class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.index = 0;
    }
    getQuestionByIndex() {
      return this.questions[this.index];
    }
    checkForCorrectAnswer(answer) {
      let question = this.getQuestionByIndex();
      if (question.isCorrectAnswer(answer)) {
        this.score++;
      }
      this.index++;
    }
    isEnded() {
      return this.index === this.questions.length;
    }
  }
  
  class Question {
    constructor(questionText, choices, answer) {
      this.text = questionText;
      this.choices = choices;
      this.answer = answer;
    }
    isCorrectAnswer(selectedChoice) {
      return this.answer === selectedChoice;
    }
  }
  
  let questions = [
    new Question(
      "1. Inside which HTML element do we put the JavaScript?",
      ["scripting", "javascript", "js", "script"],
      "script"
    ),
    new Question(
      "2. Where is the correct place to insert a JavaScript?",
      ["The head section", "The body section", "Both the head and the body section",
    "None of the above"],
      "Both the head and the body section"
    ),
    new Question(
      "3. The external JavaScript file must contain the script tag.",
      ["True", "False"],
      "False"
    ),
    new Question(
      "4. Which language got maximum follwers?",
      ["JavaScript", "Java", "Phython", "C++"],
      "JavaScript"
    ),
    new Question(
      "5. How do you write a message in an alert box?",
      ["alert('message')", "msg('message')", "alertBox('message')", "msgBox('message')"],
      "alert('message')"
    ),
    new Question(
      "6. How do you create a function in JavaScript?",
      ["function:myFunction()", "function=myFunction()", "function myFunction()", "None of the above"],
      "function myFunction"
    ),
    new Question(
      "7. How do you call a function named 'myFunction'?",
      ["myFunction()", "call myFunction()", "call function myFunction()", "myFunction"],
      "myFunction()"
    ),
    new Question(
      "8.How to write an IF statement in JavaScript?",
      [
        "if i = 5 then",
        "if i = 5",
        "if (i == 5)",
        "if i == 5 then",
      ],
      "if (i == 5)"
    ),
    new Question(
        "9.	How to write an IF statement for executing some code if 'i' is NOT equal to 5",
        [
            "if i <> 5",
            "if (i<>5)",
            "if i =! 5 then",    
            "if ( i != 5)"
        ],
        "if (i!=5)"
    ),
    new Question(
        "10.	How does a WHILE loop start?",
        [
            "while (i <= 10; ++)",
            "while i = 1 to 10",
            "while (i<= 10)",
            "None of these"

        ],
        "while (i <= 10)",
    )
  ];
  
  function loadQuestions() {
    if (quiz.isEnded()) {
      showFinalScores();
      return;
    }
  
    let currentQuestion = quiz.getQuestionByIndex();
    let questionElement = document.getElementById("question"); //<p id="question"></p>
    questionElement.innerHTML = currentQuestion.text;
  
    let displayedChoices = currentQuestion.choices;
    for (let i = 0; i < displayedChoices.length; i++) {
      let eachChoiceElement = document.getElementById("choice" + i); //<span id="choice0"></span
      eachChoiceElement.innerHTML = displayedChoices[i];
  
      let eachChoiceBtn = document.getElementById("btn" + i); //<button id="btn0"></button>
      eachChoiceBtn.onclick = function () {
        quiz.checkForCorrectAnswer(displayedChoices[i]); // Verification, scoring and incrementing the question index
        loadQuestions();
      };
    }
  
    showProgress();
  }
  
  let quiz = new Quiz(questions);
  loadQuestions();
  
  function showFinalScores() {
    let resPercent = (quiz.score / questions.length) * 100;
    let scoresHTML = `
          <h1>Results... </h1>
          <h2 id='score'>Your Score is : ${quiz.score} </h2>
          <h2> Your overall percentage is : ${resPercent}% </h2>
          <h1>Congratulations!!!</h1>
      `;
    let quizCanvas = document.getElementById("quiz");
    quizCanvas.innerHTML = scoresHTML;
  }
  
  function showProgress() {
    let questionNumber = quiz.index + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${questionNumber} of ${quiz.questions.length}`;
  }
