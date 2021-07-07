
/*-------------------------------- Constants --------------------------------*/
// const answerOptions = [ {
//   title: "Feel Good",
//   answerArray: [1, 1, 1, 1],
//   src: "/images/feelgood.png"
// }, {
//   title: "Happiest Season",
//   answerArray: [2, 1, 1, 1],
//   src: "/images/happiestseason.png",
// }, {
//   title: "Looking",
//   answerArray: [1, 2, 1, 2],
//   src: "/images/happiestseason.png"
// }
// ]

/*---------------------------- Variables (state) ----------------------------*/

choices = []; 
// choicesInteger = "_" + Number(choices.join(''));

/*------------------------ Cached Element References ------------------------*/
      
/*----------------------------- Event Listeners -----------------------------*/
    
/*-------------------------------- Functions --------------------------------*/
  
function FirstButton() {
  choices.push(1);
  nextQuestion();
}
  
function SecondButton() {
  choices.push(2);
  nextQuestion();
  }
  
  
function nextQuestion() {
  if (choices.length < 2) { 
    document.getElementById("b1").value = "Comedy";
    document.getElementById("b2").value = "Drama";
    document.getElementById("mainText").innerHTML = "Are you in the mood for something funny or are you feeling a bit dramatic?"
  
    } else if (choices.length < 3) {
      document.getElementById("b1").value = "Female-esque";
      document.getElementById("b2").value = "Male-centric";
      document.getElementById("mainText").innerHTML = "Would you prefer it to be more female or male skewing?"
      
    } else if (choices.length < 4) {
      document.getElementById("b1").value = "Needs to be a lead.";
      document.getElementById("b2").value = "A supporting character will do.";
      document.getElementById("mainText").innerHTML = "Do you want one or more lead characters to be queer or will any character do?"
      
    } else if (choices.length < 5) {
      document.getElementById("b1").value = "Newer";
      document.getElementById("b2").value = "Older";
      document.getElementById("mainText").innerHTML = "Are you looking for something new or a bit of a throwback?";
    
    } else if (choices.length < 6) {
      document.getElementById("buttons").remove();
      document.getElementById("mainText").innerHTML = "You Should Watch:";
      document.getElementById("finalImage").src = "/images/blackwidow.jpeg";
    }
}

// let choicesInteger = Number(choices.join(''));


// console.log(choices);

// console.log(choicesInteger);













