
/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/

var choices = [];
var choicesInteger; 

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
      getAnswer();
    }
}



function getAnswer() {
  
  choicesInteger = "_" + Number(choices.join(''));
  console.log(choicesInteger);



  let finalAnswer = choicesInteger[Math.floor(Math.random()*choicesInteger.length)];
  console.log(finalAnswer);



  document.getElementById("finalImage").src="https://i.imgur.com/CS8uRv1.jpg";
  
  
}






//****************Array of images for each possible result */


// var _11111 = ["/images/lovesimon.jpeg", "/images/straightup.jpg", "/images/pride.jpeg"]
// _11112
// const _11121 
// _11122
// _11211
// _11212
// _11221
// _11222
// _12111
// _12112
// _12121
// _12122
// _12211
// _12112
// _12221
// _12222
// _21111
// _21112
// _21121
// _21122
// _21211
// _21212
// _21221
// _21222
// _22111
// _22112
// _22121
// _22122
// _22211
// _22212
// _22221
_22222 = [];



