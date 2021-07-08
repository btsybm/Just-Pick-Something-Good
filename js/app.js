
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
  "aaaaa": ["https://i.imgur.com/rsSqGjI.jpg", "https://i.imgur.com/6f7JZun.jpg", "https://i.imgur.com/U0NkKij.jpg"],
  "aaaab": ["https://i.imgur.com/9Hq1aR2.jpg", "https://i.imgur.com/ZSlHfqj.jpg", "https://i.imgur.com/0XfLny9.png"],
  "aaaba": ["https://i.imgur.com/JuNKnGO.jpg", "https://i.imgur.com/U7NZ0QN.png", "https://i.imgur.com/pCdgLTS.jpg"],
  "aaabb": ["https://i.imgur.com/c9DwzCq.jpg", "https://i.imgur.com/BEJdoz2.jpg", "https://i.imgur.com/QyZxSQ2.jpg" ],
  "aabaa": ["https://i.imgur.com/XEvA7IR.png", "https://i.imgur.com/FTeoPzc.jpg", "https://i.imgur.com/DM2g7pV.jpg"],
  "aabab": ["https://i.imgur.com/z1taQhm.png", "https://i.imgur.com/sGaQEy4.png", "https://i.imgur.com/nWOLXDi.jpg"],
  "aabba": ["https://i.imgur.com/OHuSrWw.jpg", "https://i.imgur.com/CdA7IHf.jpg", "https://i.imgur.com/40B1lVW.jpg"],
  "aabbb": ["https://i.imgur.com/FpE54lo.jpg", "https://i.imgur.com/TEMEo3i.jpg","https://i.imgur.com/56UnrSq.jpg"],
  "abaaa": ["https://i.imgur.com/MnZHoUk.png", "https://i.imgur.com/Do6Ul6J.jpg", "https://i.imgur.com/0dGJ4Hi.jpg"], 
  "abaab": ["https://i.imgur.com/QDtEXI6.jpg", "https://i.imgur.com/EHAXdWj.png", "https://i.imgur.com/9GRiN03.png"],
  "ababa": ["https://i.imgur.com/vm1qh7f.jpg", "https://i.imgur.com/5XRG6AP.jpg", "https://i.imgur.com/XPJkEX3.png"],
  "ababb": ["https://i.imgur.com/ufvrq7O.jpg", "https://i.imgur.com/3sDu4h7.png", "https://i.imgur.com/NQtozwb.jpg"],
  "abbaa": ["https://i.imgur.com/BnqVMZw.png", "https://i.imgur.com/wA3wjIb.png", "https://i.imgur.com/3cWlM72.jpg"],
  "abaab": ["https://i.imgur.com/s2Ap707.jpg", "https://i.imgur.com/qWDDHRe.jpg", "https://i.imgur.com/mqxPuXX.jpg"],
  "abbba":["https://i.imgur.com/GFOvOb9.jpg", "https://i.imgur.com/j4MfNsP.jpg", "https://i.imgur.com/67tDjki.jpg"], 
  "abbbb": ["https://i.imgur.com/geOIAtU.jpg", "https://i.imgur.com/exewnL9.jpg", "https://i.imgur.com/W3KK4UW.jpg"],
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

  "bbbbb": ["https://i.imgur.com/10xKYWR.jpg", "https://i.imgur.com/CS8uRv1.jpg", "https://i.imgur.com/E1ZhLml.jpg"],
}

