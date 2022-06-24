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
var total = 0;

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

        console.log("Correct");
        total += 10;

    } else {

        console.log("Wrong");
        secondsLeft-=10;
        total -= 5;

    }

    index = 1;
    console.log(total);
    displayCurrentQuestion(index);
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

      // TODO: Calls function to end quiz
    }
  }, 1000);
}