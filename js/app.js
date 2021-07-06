
/*-------------------------------- Constants --------------------------------*/


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
    document.getElementById("b1").value = "Comedy";
    document.getElementById("b2").value = "Drama";
    document.getElementById("b3").value = "Either works for me.";
    document.getElementById("mainText").innerHTML = "Are you in the mood for something funny or something serious?"

    } else if (choices.length < 3) {
      answer.genre = "comedy";
      document.getElementById("b1").value = "Needs to be a lead.";
      document.getElementById("b2").value = "A Supporting character will do.";
      document.getElementById("b3").value = "Doesn't matter to me.";
      document.getElementById("mainText").innerHTML = "Do you need one of the leads to be gay-ish or will any character do?"
    
    } else if (choices.length < 4) {
      answer.prominent = "lead";
      document.getElementById("b1").value = "New";
      document.getElementById("b2").value = "Old";
      document.getElementById("b3").value = "Doesn't matter to me.";
      document.getElementById("mainText").innerHTML = "Are you looking for something new or a throwback?";
  
    } else if (choices.length < 5) {
      answer.age = "new";
      document.getElementById("buttons").remove();
      document.getElementById("mainText").innerHTML = "You Should Watch:";
      document.getElementById("finalImage").src = "/images/blackwidow.jpeg";
      }
}


function SecondButton() {
  choices.push(2);
  if (choices.length < 2) { 
    answer.length = "movie";  
    document.getElementById("b1").value = "Comedy";
    document.getElementById("b2").value = "Drama";
    document.getElementById("b3").value = "Either works for me.";
    document.getElementById("mainText").innerHTML = "Are you in the mood for something funny or something serious?"


    } else if (choices.length < 3) {
      answer.genre = "drama";
      document.getElementById("b1").value = "Needs to be a lead.";
      document.getElementById("b2").value = "A Supporting character will do.";
      document.getElementById("b3").value = "Doesn't matter to me.";
      document.getElementById("mainText").innerHTML = "Do you need one of the leads to be gay-ish or will any character do?"
    
    } else if (choices.length < 4) {
      answer.prominent = "supporting";
      document.getElementById("b1").value = "New";
      document.getElementById("b2").value = "Old";
      document.getElementById("b3").value = "Doesn't matter to me.";
      document.getElementById("mainText").innerHTML = "Are you looking for something new or a throwback?";
  
    } else if (choices.length < 5) {
      answer.age = "old";
      document.getElementById("buttons").remove();
      document.getElementById("mainText").innerHTML = "You Should Watch:";
      document.getElementById("finalImage").src = "/images/blackwidow.jpeg";
      }
}

function ThirdButton() {
  choices.push(2);
  if (choices.length < 2) { 
    answer.length = "either";  
    document.getElementById("b1").value = "Comedy";
    document.getElementById("b2").value = "Drama";
    document.getElementById("b3").value = "Either works for me.";
    document.getElementById("mainText").innerHTML = "Are you in the mood for something funny or something serious?"


    } else if (choices.length < 3) {
      answer.genre = "either";
      document.getElementById("b1").value = "Needs to be a lead.";
      document.getElementById("b2").value = "A Supporting character will do.";
      document.getElementById("b3").value = "Doesn't matter to me.";
      document.getElementById("mainText").innerHTML = "Do you need one of the leads to be gay-ish or will any character do?"
    
    } else if (choices.length < 4) {
      answer.prominent = "either";
      document.getElementById("b1").value = "New";
      document.getElementById("b2").value = "Old";
      document.getElementById("b3").value = "Doesn't matter to me.";
      document.getElementById("mainText").innerHTML = "Are you looking for something new or a throwback?";
  
    } else if (choices.length < 5) {
      answer.age = "either";
      document.getElementById("buttons").remove();
      document.getElementById("mainText").innerHTML = "You Should Watch:";
      document.getElementById("finalImage").src = "/images/blackwidow.jpeg";
      }
}

console.log(answer)
console.log(choices);






