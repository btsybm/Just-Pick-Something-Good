
/*-------------------------------- Constants --------------------------------*/

// Combo for each combo of answers (shorter way)

// each question and answer option
qTwoaOne = "/images/amazon2.png" // image that will replace netflix after first click

  /*---------------------------- Variables (state) ----------------------------*/

choices = []; //array with log all four clicks 

  
  /*------------------------ Cached Element References ------------------------*/
  
let firstButtton = document.querySelector("#b1")
let secondButtton = document.querySelector("#b2")
let thirdButtton = document.querySelector("#b3")

  
  /*----------------------------- Event Listeners -----------------------------*/
  

// firstButtton.addEventListener("click", function() {
//   if (choices.length < 4) {
//     choices.push(1);
//     // nextQuestion();  // ****should work kind of like render did in TTT


//     console.log("logged 1")
//     // else {getRec()}
// }})

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



function FirstNextImage() {
  choices.push(1);
  if (choices.length < 2) {
      document.getElementById("b1").src = "/images/tv.png";
      document.getElementById("b2").src = "/images/movie.png";
      document.getElementById("b3").src = "/images/mini.png";
    } else if (choices.length < 3) {
    document.getElementById("b1").src = "/images/comedy.png";
    document.getElementById("b2").src = "/images/drama.png";
    document.getElementById("b3").src = "/images/genre.png";}  






      console.log("logged 1")
  }




  



// function nextQuestion () {
//   // If(choices.length=1) **after push above** --- switch out h2/buttons with question 2 and options (same as msg in TTT i think?)
//   if (choices.length=1) {
//     firstButtton.innerHTML = "TV"
//   }
// }  
  
  
  
  // else if(choices.length=2) **after push above** --- switch out h2/buttons with question 3 and options
      // else if(choices.length=3) **after push above** --- switch out h2/buttons with question 4 and options


//function getRec () {}  *******how to use the completed choices array to pull from API
// maybe have it push you to a brand new page that only has the poster and a button to get another suggestion?
  //OR make <P> the movie poster and the middle button now the "another suggestion" button


//use while statement to trigger getting an answer


console.log(choices);