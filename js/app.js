
/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/

var choices = [];
var choicesInteger; 

/*------------------------ Cached Element References ------------------------*/
      
/*----------------------------- Event Listeners -----------------------------*/
    
/*-------------------------------- Functions --------------------------------*/
  
function FirstButton() {
  choices.push("a");
  nextQuestion();
}
  
function SecondButton() {
  choices.push("b");
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
      document.getElementById("b1").value = "Lead";
      document.getElementById("b2").value = "Supporting";
      document.getElementById("mainText").innerHTML = "Do you want one or more lead characters to be queer or will any character do?"
      
    } else if (choices.length < 5) {
      document.getElementById("b1").value = "Newer";
      document.getElementById("b2").value = "Older";
      document.getElementById("mainText").innerHTML = "Are you looking for something new or a bit of a throwback?";
    
    } else if (choices.length < 6) {
      document.getElementById("buttons").remove();
      document.getElementById("mainText").innerHTML = "You Should Watch:";
      getAnswer();
    }
}



function getAnswer() {
  console.log(choices);
  choicesString = String(choices.join(''));
  // console.log(choicesString);


  let randomNumber =  Math.floor(Math.random() * answers[choicesString].length);
  console.log(randomNumber);

  let finalAnswer = answers[choicesString][randomNumber];
  // console.log(finalAnswer);



  document.getElementById("finalImage").src=finalAnswer;
  }


//*****************/

var answers = {
  "aaaaa": ["/images/lovesimon.jpeg", "/images/straightup.jpg", "/images/pride.jpeg"],
  // aaaab:
  // aaaba:
  // aaabb:
  // aabaa:
  // aabab:
  // aabba:
  // aabbb:
  // abaaa:
  // abaab:
  // ababa:
  // ababb:
  // abbaa:
  // abaab:
  // abbba:
  // abbbb:
  // baaaa:
  // baaab:
  // baaba:
  // baabb:
  // babaa:
  // babab:
  // babba:
  // babbb:
  // bbaaa:
  // bbaab:
  // bbaba:
  // bbabb:
  // bbbaa:
  // bbbab:
  // bbbba:
  // bbbbb:
}

