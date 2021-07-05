
/*-------------------------------- Constants --------------------------------*/

// Combo for each combo of answers (shorter way)

// each question and answer option

  /*---------------------------- Variables (state) ----------------------------*/

choices = []; //array with log all four clicks 

answer = {
  length:"",
  genre: "",
  prominent:"",
  age: "",
}

  
  /*------------------------ Cached Element References ------------------------*/
  

  
  /*----------------------------- Event Listeners -----------------------------*/
  



  /*-------------------------------- Functions --------------------------------*/




function FirstButton() {
  choices.push(1);
  if (choices.length < 2) { 
    answer.length = "tv";
    document.getElementById("b1").value = "COMEDY";
    document.getElementById("b2").value = "DRAMA";
    document.getElementById("b3").value = "EITHER";
    document.getElementById("mainText").innerHTML = "Genre"

    } else if (choices.length < 3) {
      answer.genre = "comedy";
      document.getElementById("b1").value = "LEAD";
      document.getElementById("b2").value = "SUPPORTING";
      document.getElementById("b3").value = "EITHER";
      document.getElementById("mainText").innerHTML = "HOW PROMINANT"
    
    } else if (choices.length < 4) {
      answer.prominent = "lead";
      document.getElementById("b1").value = "NEW";
      document.getElementById("b2").value = "OLD";
      document.getElementById("b3").value = "EITHER";
      document.getElementById("mainText").innerHTML = "NEW OR OLD";
  
    } else if (choices.length < 5) {
      answer.age = "new";
      document.getElementById("buttons").remove();
      document.getElementById("mainText").innerHTML = "YOU SHOULD WATCH:";
      document.getElementById("finalImage").src = "/images/blackwidow.jpeg";
      }
}


function SecondButton() {
  choices.push(2);
  if (choices.length < 2) { 
    answer.length = "movie";  
    document.getElementById("b1").value = "COMEDY";
    document.getElementById("b2").value = "DRAMA";
    document.getElementById("b3").value = "EITHER";
    document.getElementById("mainText").innerHTML = "Genre"

    } else if (choices.length < 3) {
      answer.genre = "drama";
      document.getElementById("b1").value = "LEAD";
      document.getElementById("b2").value = "SUPPORTING";
      document.getElementById("b3").value = "EITHER";
      document.getElementById("mainText").innerHTML = "HOW PROMINANT"
    
    } else if (choices.length < 4) {
      answer.prominent = "supporting";
      document.getElementById("b1").value = "NEW";
      document.getElementById("b2").value = "OLD";
      document.getElementById("b3").value = "EITHER";
      document.getElementById("mainText").innerHTML = "NEW OR OLD";
  
    } else if (choices.length < 5) {
      answer.age = "old";
      document.getElementById("buttons").remove();
      document.getElementById("mainText").innerHTML = "YOU SHOULD WATCH:";
      document.getElementById("finalImage").src = "/images/blackwidow.jpeg";
      }
}

function ThirdButton() {
  choices.push(2);
  if (choices.length < 2) { 
    answer.length = "either";  
    document.getElementById("b1").value = "COMEDY";
    document.getElementById("b2").value = "DRAMA";
    document.getElementById("b3").value = "EITHER";
    document.getElementById("mainText").innerHTML = "Genre"

    } else if (choices.length < 3) {
      answer.genre = "either";
      document.getElementById("b1").value = "LEAD";
      document.getElementById("b2").value = "SUPPORTING";
      document.getElementById("b3").value = "EITHER";
      document.getElementById("mainText").innerHTML = "HOW PROMINANT"
    
    } else if (choices.length < 4) {
      answer.prominent = "either";
      document.getElementById("b1").value = "NEW";
      document.getElementById("b2").value = "OLD";
      document.getElementById("b3").value = "EITHER";
      document.getElementById("mainText").innerHTML = "NEW OR OLD";
  
    } else if (choices.length < 5) {
      answer.age = "either";
      document.getElementById("buttons").remove();
      document.getElementById("mainText").innerHTML = "YOU SHOULD WATCH:";
      document.getElementById("finalImage").src = "/images/blackwidow.jpeg";
      }
}



console.log(answer)
console.log(choices);