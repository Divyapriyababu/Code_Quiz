var questions = [
  {
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
  {
    question: "What does HTML stand for? - 2",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  }
];

var secondsLeft = 75;
var index = 0;
var totalScore = 0;

//selecting all required elements
const start_btn = document.querySelector(".start_btn");

// if startQuiz button clicked
start_btn.addEventListener("click", function() {
    startTimer();

    displayCurrentQuestion(index);
});

function displayCurrentQuestion(index) {
    // Get div infobox
    var divInfobox = document.querySelector(".que-box");

    // Create a div element for que box  - <div class="que-text">Question</div>
    var divTag = document.createElement("div");
    divTag.setAttribute("class", "que-box");

    // Create a div element for que
    var divQuetext = document.createElement("div");
    divQuetext.setAttribute("class", "que-text");
    divQuetext.textContent = questions[index]['question'];

    // Create div element for options - <div class=>
    var divQueoptions = document.createElement("div");
    divQueoptions.setAttribute("class", "que-options");

    // Create button  <button class="start_btn">Start Quiz</button>
    for (var i = 0; i < 4; i++) {

        var optionButton = document.createElement("button");
        optionButton.setAttribute("class", "option");
        optionButton.textContent = questions[index]['options'][i];
        optionButton.addEventListener("click", compare);

        divQueoptions.appendChild(optionButton);

        var newLine = document.createElement("br");
        divQueoptions.appendChild(newLine);
    }

    // Append que and options to que box
    divTag.appendChild(divQuetext);
    divTag.appendChild(divQueoptions);
        
    // Set inner html of info box to que box
    divInfobox.parentNode.replaceChild(divTag, divInfobox);
}

function compare(event) {

    var optionSelected = event.target.textContent;

    if (optionSelected == questions[index]['answer']) {
        totalScore += 10;
    } else {
        secondsLeft-=10;
        totalScore -= 5;
    }

    index++;

    if (index == questions.length){
        finalScoreDisplay();
    }  else {    
        displayCurrentQuestion(index);
    }
}

//All done!!
//Your final score is : totalScore
//Form to enter the name
 function finalScoreDisplay() {
    //Create div displaying all done
    //Display total score
    secondsLeft = 75;
    index = 0;
    var divInfobox = document.querySelector(".que-box");
    var divTag = document.createElement("div");

    divTag.setAttribute("class", "que-box");

    var divQuetext = document.createElement("div");
    divQuetext.setAttribute("class", "que-text");
    divQuetext.textContent = "All done!!!";

    var scoreDiv = document.createElement("div");
    scoreDiv.setAttribute("class", "score");
    scoreDiv.textContent = "Your final score is: " + totalScore;

    var getInitials = document.createElement("form");

    //<label for="fname">First name:</label><br>
    var initialLabel = document.createElement("label");
    initialLabel.setAttribute("for","initials");
    initialLabel.textContent = "Enter your initials: "

    // <input type="text" id="fname" name="fname" value="John"><br>
    var initialsForm = document.createElement("input");
    initialsForm.setAttribute("type","text");

    //<input type="submit" value="Submit">
    var newLine = document.createElement("br");

    var inputSubmit = document.createElement("button");
    inputSubmit.setAttribute("class","start_btn");
    inputSubmit.textContent = "Submit";

    inputSubmit.addEventListener("click", function() {
        var quizScore = {
            name: initialsForm.value,
            score: totalScore
        };
        totalScore = 0;

        var quizScores = localStorage.getItem("quizScores") || "[]";
        console.log(quizScores);
        quizScores = JSON.parse(quizScores);
        quizScores.push(JSON.stringify(quizScore))
        localStorage.setItem("quizScores", JSON.stringify(quizScores));

        window.location.replace("./high_score.html");
    });

    divTag.appendChild(divQuetext);
    divTag.appendChild(scoreDiv);
    divTag.appendChild(getInitials);
    divTag.appendChild(initialLabel);
    divTag.appendChild(initialsForm);
    divTag.appendChild(newLine);
    divTag.appendChild(inputSubmit);

    divInfobox.parentNode.replaceChild(divTag, divInfobox);
 }

function startTimer() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    var timeEl = document.querySelector('.timer_sec');
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      finalScoreDisplay();
    }
  }, 1000);
}