
/*-------------------------------- Constants --------------------------------*/

// Combo for each combo of answers (shorter way)

// each question and answer option

  /*---------------------------- Variables (state) ----------------------------*/

choices = []; //array with log all four clicks 

  
  /*------------------------ Cached Element References ------------------------*/
  

  
  /*----------------------------- Event Listeners -----------------------------*/
  



  /*-------------------------------- Functions --------------------------------*/



function FirstNextImage() {
    choices.push(1);
  nextQuestion ();
}

function SecondNextImage() {
  choices.push(2);
  nextQuestion ();
}

function ThirdNextImage() {
  choices.push(3);
  nextQuestion ();
}


function nextQuestion() {
  if (choices.length < 2) { 
    document.getElementById("b1").src = "/images/tv.png";
    document.getElementById("b2").src = "/images/movie.png";
     document.getElementById("b3").src = "/images/mini.png";
    } else if (choices.length < 3) {
      document.getElementById("b1").src = "/images/comedy.png";
      document.getElementById("b2").src = "/images/drama.png";
      document.getElementById("b3").src = "/images/genre.png";
    } else if (choices.length < 4) {
      document.getElementById("b1").src = "/images/goodgood.png";
      document.getElementById("b2").src = "/images/goodbad.png";
      document.getElementById("b3").src = "/images/dontcare.png";
    // } else {
      //  function getRec()
    //   }  // take choices array and return a suggestions
    

  }}



//function getRec () {}  *******how to use the completed choices array to pull from API
// maybe have it push you to a brand new page that only has the poster and a button to get another suggestion?
  //OR make <P> the movie poster and the middle button now the "another suggestion" button


console.log(choices);