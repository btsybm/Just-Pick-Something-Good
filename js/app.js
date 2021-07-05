
/*-------------------------------- Constants --------------------------------*/

// Combo for each combo of answers (shorter way)

// each question and answer option

  /*---------------------------- Variables (state) ----------------------------*/

choices = []; //array with log all four clicks 

  
  /*------------------------ Cached Element References ------------------------*/
  

  
  /*----------------------------- Event Listeners -----------------------------*/
  



  /*-------------------------------- Functions --------------------------------*/



function FirstButton() {
    choices.push(1);
  nextQuestion ();
}

function SecondButton() {
  choices.push(2);
  nextQuestion ();
}

function ThirdButton() {
  choices.push(3);
  nextQuestion ();
}


function nextQuestion() {
  if (choices.length < 2) { 
    document.getElementById("b1").value = "COMEDY";
    document.getElementById("b2").value = "DRAMA";
    document.getElementById("b3").value = "EITHER";
    document.getElementById("mainText").innerHTML = "Genre"

    } else if (choices.length < 3) {
      document.getElementById("b1").value = "LEAD";
      document.getElementById("b2").value = "SUPPORTING";
      document.getElementById("b3").value = "EITHER";
      document.getElementById("mainText").innerHTML = "HOW PROMINANT"
    } else if (choices.length < 4) {
      document.getElementById("b1").value = "NEW";
      document.getElementById("b2").value = "OLD";
      document.getElementById("b3").value = "EITHER";
      document.getElementById("mainText").innerHTML = "NEW OR OLD";
    
    
    } else if (choices.length < 5) {
      document.getElementById("buttons").remove();
      document.getElementById("mainText").innerHTML = "YOU SHOULD WATCH:";
      document.getElementById("finalImage").src = "/images/blackwidow.jpeg";
      }

    // } else {
      //  function getRec()
    //   }  // take choices array and return a suggestions
    
  }



//function getRec () {}  *******how to use the completed choices array to pull from API
// maybe have it push you to a brand new page that only has the poster and a button to get another suggestion?
  //OR make <P> the movie poster and the middle button now the "another suggestion" button


console.log(choices);