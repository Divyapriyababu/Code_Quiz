var goBackBtn = document.querySelector(".go_back");
var quizScores = localStorage.getItem("quizScores") || "[]";
var listScores = document.querySelector(".score_list");
var  clearhighScorebtn= document.querySelector(".clear_high_scores");

quizScores = JSON.parse(quizScores);

var listItem = document.createElement("ol");
listScores.appendChild(listItem);

for (var i = 0; i < quizScores.length; i++) {

    var quizScoreDisplay = JSON.parse(quizScores[i]);

    var displayItem = document.createElement("li");
    displayItem.setAttribute("class", "listitem");
    displayItem.textContent = quizScoreDisplay['name'] + "-" + quizScoreDisplay['score'];
    listItem.appendChild(displayItem);
    
}

goBackBtn.addEventListener("click", function() {
    window.location.replace("./index.html");
});

clearhighScorebtn.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});