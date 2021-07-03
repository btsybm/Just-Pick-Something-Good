
/*-------------------------------- Constants --------------------------------*/

// Combo for each combo of answers (shorter way)


  /*---------------------------- Variables (state) ----------------------------*/

let choices = []; //array with log all four clicks 

  
  /*------------------------ Cached Element References ------------------------*/
  
let firstButtton = document.querySelector("#b1")
let secondButtton = document.querySelector("#b2")
let thirdButtton = document.querySelector("#b3")
  
  /*----------------------------- Event Listeners -----------------------------*/
  

firstButtton.addEventListener("click", function() {
  if (choices.length < 4) {
  choices.push(1);
  // nextQuestion()   ****should work kind of like render did in TTT
  console.log("logged 1")}
    // else {getRec()}
})

secondButtton.addEventListener("click", function() {
  if (choices.length < 4) {
    choices.push(2)
    console.log("logged 2")
  }})

thirdButtton.addEventListener("click", function() {
  if (choices.length < 4) {
    choices.push(3)
    console.log("logged 3")
  }})


  /*-------------------------------- Functions --------------------------------*/


//function nextQuestion () {
  // If(choices.length=1) **after push above** --- switch out h2/buttons with question 2 and options
      // else if(choices.length=2) **after push above** --- switch out h2/buttons with question 3 and options
      // else if(choices.length=3) **after push above** --- switch out h2/buttons with question 4 and options
//}

//function getRec () {}  *******how to use the completed choices array to pull from API