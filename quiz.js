//let radios = document.querySelectorAll(".choices")
//for (let i=0; i <radios.length; i++) {
//    radios[i].onclick = answerClicked;
//}

// start quiz button
document.getElementById("startquiz").addEventListener("click", startQuiz);
let currQuestion = 0;

// startquiz function that then calls addRadioHandlers
function startQuiz() {
    document.getElementById("intro").style.display = "none"; // hides intro
    document.getElementById("question").style.display = "block"; // displays the dynamic question box
    addRadioHandlers();
    updateQuestion();
}

function addRadioHandlers() {
    const radios = document.querySelectorAll(".choices .rad"); // event listener for radios with choices and rad class
    for (const rad of radios ) {
        rad.onclick = answerClicked;
    }
}

// function to move through questions
function updateQuestion() {
    const currQuestionObj = questions[currQuestion]; // accesses the relevant property
    const questionDiv = document.getElementById("question"); // uses property values to create HTML div containing the question
    questionDiv.querySelector(".question-header").innerHTML = "Question " + (currQuestion + 1).toString() + ":"; // e.g. Question 2
    questionDiv.querySelector(".question-text").innerHTML = currQuestionObj.q; // e.g. What kind of restaurant would you rather not go to?
    const radioChoice = questionDiv.querySelector(".choices").querySelectorAll(".rad");
    radioChoice.forEach((rad,idx) => { // accesses the score and answer text properties to produce radio
        rad.setAttribute("data-score", currQuestionObj.options[idx].score);
        rad.innerHTML = currQuestionObj.options[idx].text;
    })
  }

function answerClicked(choice) {
    const target = choice.target;    
    const selectedType = target.dataset.score; // identifies the answerData score that needs +1
    console.log("selectedType is", selectedType);
    answerData[selectedType]++; // applies +1 score to the correct target
    currQuestion++;     
    if (currQuestion === questions.length) { // check to see if quiz is finished otherwise the loop continues
        endQuiz();
        return;
    }
    updateQuestion();         
}


function endQuiz() {
    console.log("Totals for each score were ", answerData);
    document.getElementById("question").style.display = "none"; 
    document.getElementById("result").style.display = "block"; // now showing result box
    // identify the top score and display the result
    let winningScore = Object.keys(answerData).reduce((a,b) => answerData[a] > answerData[b] ? a:b);  // iterates through the 4 scores comparing them to find the greatest
    console.log(winningScore);    
    console.log(typeMeaning[winningScore]);
    let result = document.querySelector('#result .resultText').innerHTML =  typeMeaning[winningScore]; // renders
}


