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
  
function ThirdButton() {
  // if (choices.length<1)


  // let nextSuggestion = answers[choicesString][randomNumber];
  // console.log(nextSuggestion;

    }

  
    function nextQuestion() {
      if (choices.length < 2) { 
        let randomNumber =  Math.floor(Math.random() * comedies.length);
        console.log(randomNumber);
        let nextComedy = comedies[randomNumber];
        document.getElementById("b1").src=nextComedy;
        let nextDrama = dramas[randomNumber];
        document.getElementById("b2").src=nextDrama;

      
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
  "aabbb": ["https://i.imgur.com/FpE54lo.jpg", "https://i.imgur.com/TEMEo3i.jpg", "https://i.imgur.com/56UnrSq.jpg"],
  "abaaa": ["https://i.imgur.com/MnZHoUk.png", "https://i.imgur.com/Do6Ul6J.jpg", "https://i.imgur.com/0dGJ4Hi.jpg"], 
  "abaab": ["https://i.imgur.com/QDtEXI6.jpg", "https://i.imgur.com/EHAXdWj.png", "https://i.imgur.com/9GRiN03.png"],
  "ababa": ["https://i.imgur.com/vm1qh7f.jpg", "https://i.imgur.com/5XRG6AP.jpg", "https://i.imgur.com/XPJkEX3.png"],
  "ababb": ["https://i.imgur.com/ufvrq7O.jpg", "https://i.imgur.com/3sDu4h7.png", "https://i.imgur.com/NQtozwb.jpg"],
  "abbaa": ["https://i.imgur.com/BnqVMZw.png", "https://i.imgur.com/wA3wjIb.png", "https://i.imgur.com/3cWlM72.jpg"],
  "abaab": ["https://i.imgur.com/s2Ap707.jpg", "https://i.imgur.com/qWDDHRe.jpg", "https://i.imgur.com/mqxPuXX.jpg"],
  "abbba": ["https://i.imgur.com/GFOvOb9.jpg", "https://i.imgur.com/j4MfNsP.jpg", "https://i.imgur.com/67tDjki.jpg"], 
  "abbbb": ["https://i.imgur.com/geOIAtU.jpg", "https://i.imgur.com/exewnL9.jpg", "https://i.imgur.com/W3KK4UW.jpg"],
  "baaaa": ["https://i.imgur.com/Yi7Qv4g.jpg", "https://i.imgur.com/pfyB3VM.jpg", "https://i.imgur.com/y47zsUA.jpg"],
  "baaab": ["https://i.imgur.com/AeARuwc.jpg", "https://i.imgur.com/LYeXcNn.jpg", "https://i.imgur.com/qwCBAM6.jpg"],
  "baaba": ["https://i.imgur.com/EhUKIB6.jpg", "https://i.imgur.com/nFScIJK.jpg", "https://i.imgur.com/P18I0P2.jpg"],
  "baabb": ["https://i.imgur.com/QOt1Se9.jpg", "https://i.imgur.com/STVnuRB.jpg", "https://i.imgur.com/BS6I4Qv.jpg"],
  "babaa": ["https://i.imgur.com/j7XNnjl.jpg", "https://i.imgur.com/ZTiRm8c.jpg", "https://i.imgur.com/SyIUf5s.png"],
  "babab": ["https://i.imgur.com/56ExPf5.jpg", "https://i.imgur.com/RjsIUx3.jpg", "https://i.imgur.com/hWapl26.jpg"],
  "babba": ["https://i.imgur.com/Bh5yEtq.jpg", "https://i.imgur.com/JJ8viGA.jpg", "https://i.imgur.com/ohwn0Dn.jpg"],
  "babbb": ["https://i.imgur.com/NAUnrnZ.jpg", "https://i.imgur.com/Jy64xiW.jpg", "https://i.imgur.com/BoXXx1J.jpg"],
  "bbaaa": ["https://i.imgur.com/swO58P4.jpg", "https://i.imgur.com/7ZDF9D3.jpg", "https://i.imgur.com/kq0BaPN.jpg"],
  "bbaab": ["https://i.imgur.com/K0EG4Wy.jpg", "https://i.imgur.com/mgWPzed.jpg", "https://i.imgur.com/EMfFpOd.jpg"],
  "bbaba": ["https://i.imgur.com/dqvFMjU.jpg", "https://i.imgur.com/ivH58H3.jpg", "https://i.imgur.com/bFy6snP.jpg"],
  "bbabb": ["https://i.imgur.com/4OOUCtz.jpg", "https://i.imgur.com/B10kTEn.jpg", "https://i.imgur.com/DdAK4il.jpg"],
  "bbbaa": ["https://i.imgur.com/kguovtD.jpg", "https://i.imgur.com/bDQPYIn.jpg", "https://i.imgur.com/DCig2ql.jpg"],
  "bbbab": ["https://i.imgur.com/qfj4tdF.jpg", "https://i.imgur.com/gKjisvS.jpg", "https://i.imgur.com/Q9X0AqU.jpg"],
  "bbbba": ["https://i.imgur.com/Bh5yEtq.jpg", "https://i.imgur.com/P848zTr.jpg", "https://i.imgur.com/UYAJ7en.jpg"],
  "bbbbb": ["https://i.imgur.com/10xKYWR.jpg", "https://i.imgur.com/CS8uRv1.jpg", "https://i.imgur.com/E1ZhLml.jpg"],
}

// var movies = {
//   "aaaaa": ["https://i.imgur.com/rsSqGjI.jpg", "https://i.imgur.com/6f7JZun.jpg", "https://i.imgur.com/U0NkKij.jpg"],
//   "aaaab": ["https://i.imgur.com/9Hq1aR2.jpg", "https://i.imgur.com/ZSlHfqj.jpg", "https://i.imgur.com/0XfLny9.png"],
//   "aaaba": ["https://i.imgur.com/JuNKnGO.jpg", "https://i.imgur.com/U7NZ0QN.png", "https://i.imgur.com/pCdgLTS.jpg"],
//   "aaabb": ["https://i.imgur.com/c9DwzCq.jpg", "https://i.imgur.com/BEJdoz2.jpg", "https://i.imgur.com/QyZxSQ2.jpg" ],
//   "aabaa": ["https://i.imgur.com/XEvA7IR.png", "https://i.imgur.com/FTeoPzc.jpg", "https://i.imgur.com/DM2g7pV.jpg"],
//   "aabab": ["https://i.imgur.com/z1taQhm.png", "https://i.imgur.com/sGaQEy4.png", "https://i.imgur.com/nWOLXDi.jpg"],
//   "aabba": ["https://i.imgur.com/OHuSrWw.jpg", "https://i.imgur.com/CdA7IHf.jpg", "https://i.imgur.com/40B1lVW.jpg"],
//   "aabbb": ["https://i.imgur.com/FpE54lo.jpg", "https://i.imgur.com/TEMEo3i.jpg", "https://i.imgur.com/56UnrSq.jpg"],
//   "abaaa": ["https://i.imgur.com/MnZHoUk.png", "https://i.imgur.com/Do6Ul6J.jpg", "https://i.imgur.com/0dGJ4Hi.jpg"], 
//   "abaab": ["https://i.imgur.com/QDtEXI6.jpg", "https://i.imgur.com/EHAXdWj.png", "https://i.imgur.com/9GRiN03.png"],
//   "ababa": ["https://i.imgur.com/vm1qh7f.jpg", "https://i.imgur.com/5XRG6AP.jpg", "https://i.imgur.com/XPJkEX3.png"],
//   "ababb": ["https://i.imgur.com/ufvrq7O.jpg", "https://i.imgur.com/3sDu4h7.png", "https://i.imgur.com/NQtozwb.jpg"],
//   "abbaa": ["https://i.imgur.com/BnqVMZw.png", "https://i.imgur.com/wA3wjIb.png", "https://i.imgur.com/3cWlM72.jpg"],
//   "abaab": ["https://i.imgur.com/s2Ap707.jpg", "https://i.imgur.com/qWDDHRe.jpg", "https://i.imgur.com/mqxPuXX.jpg"],
//   "abbba": ["https://i.imgur.com/GFOvOb9.jpg", "https://i.imgur.com/j4MfNsP.jpg", "https://i.imgur.com/67tDjki.jpg"], 
//   "abbbb": ["https://i.imgur.com/geOIAtU.jpg", "https://i.imgur.com/exewnL9.jpg", "https://i.imgur.com/W3KK4UW.jpg"],
// }

// var tvshows = {
//   "baaaa": ["https://i.imgur.com/Yi7Qv4g.jpg", "https://i.imgur.com/pfyB3VM.jpg", "https://i.imgur.com/y47zsUA.jpg"],
//   "baaab": ["https://i.imgur.com/AeARuwc.jpg", "https://i.imgur.com/LYeXcNn.jpg", "https://i.imgur.com/qwCBAM6.jpg"],
//   "baaba": ["https://i.imgur.com/EhUKIB6.jpg", "https://i.imgur.com/nFScIJK.jpg", "https://i.imgur.com/P18I0P2.jpg"],
//   "baabb": ["https://i.imgur.com/QOt1Se9.jpg", "https://i.imgur.com/STVnuRB.jpg", "https://i.imgur.com/BS6I4Qv.jpg"],
//   "babaa": ["https://i.imgur.com/j7XNnjl.jpg", "https://i.imgur.com/ZTiRm8c.jpg", "https://i.imgur.com/SyIUf5s.png"],
//   "babab": ["https://i.imgur.com/56ExPf5.jpg", "https://i.imgur.com/RjsIUx3.jpg", "https://i.imgur.com/hWapl26.jpg"],
//   "babba": ["https://i.imgur.com/Bh5yEtq.jpg", "https://i.imgur.com/JJ8viGA.jpg", "https://i.imgur.com/ohwn0Dn.jpg"],
//   "babbb": ["https://i.imgur.com/NAUnrnZ.jpg", "https://i.imgur.com/Jy64xiW.jpg", "https://i.imgur.com/BoXXx1J.jpg"],
//   "bbaaa": ["https://i.imgur.com/swO58P4.jpg", "https://i.imgur.com/7ZDF9D3.jpg", "https://i.imgur.com/kq0BaPN.jpg"],
//   "bbaab": ["https://i.imgur.com/K0EG4Wy.jpg", "https://i.imgur.com/mgWPzed.jpg", "https://i.imgur.com/EMfFpOd.jpg"],
//   "bbaba": ["https://i.imgur.com/dqvFMjU.jpg", "https://i.imgur.com/ivH58H3.jpg", "https://i.imgur.com/bFy6snP.jpg"],
//   "bbabb": ["https://i.imgur.com/4OOUCtz.jpg", "https://i.imgur.com/B10kTEn.jpg", "https://i.imgur.com/DdAK4il.jpg"],
//   "bbbaa": ["https://i.imgur.com/kguovtD.jpg", "https://i.imgur.com/bDQPYIn.jpg", "https://i.imgur.com/DCig2ql.jpg"],
//   "bbbab": ["https://i.imgur.com/qfj4tdF.jpg", "https://i.imgur.com/gKjisvS.jpg", "https://i.imgur.com/Q9X0AqU.jpg"],
//   "bbbba": ["https://i.imgur.com/Bh5yEtq.jpg", "https://i.imgur.com/P848zTr.jpg", "https://i.imgur.com/UYAJ7en.jpg"],
//   "bbbbb": ["https://i.imgur.com/10xKYWR.jpg", "https://i.imgur.com/CS8uRv1.jpg", "https://i.imgur.com/E1ZhLml.jpg"],
// }

// var moviesMen = {
//   "aaaaa": ["https://i.imgur.com/rsSqGjI.jpg", "https://i.imgur.com/6f7JZun.jpg", "https://i.imgur.com/U0NkKij.jpg"],
//   "aaaab": ["https://i.imgur.com/9Hq1aR2.jpg", "https://i.imgur.com/ZSlHfqj.jpg", "https://i.imgur.com/0XfLny9.png"],
//   "aaaba": ["https://i.imgur.com/JuNKnGO.jpg", "https://i.imgur.com/U7NZ0QN.png", "https://i.imgur.com/pCdgLTS.jpg"],
//   "aaabb": ["https://i.imgur.com/c9DwzCq.jpg", "https://i.imgur.com/BEJdoz2.jpg", "https://i.imgur.com/QyZxSQ2.jpg" ],
//   "aabaa": ["https://i.imgur.com/XEvA7IR.png", "https://i.imgur.com/FTeoPzc.jpg", "https://i.imgur.com/DM2g7pV.jpg"],
//   "aabab": ["https://i.imgur.com/z1taQhm.png", "https://i.imgur.com/sGaQEy4.png", "https://i.imgur.com/nWOLXDi.jpg"],
//   "aabba": ["https://i.imgur.com/OHuSrWw.jpg", "https://i.imgur.com/CdA7IHf.jpg", "https://i.imgur.com/40B1lVW.jpg"],
//   "aabbb": ["https://i.imgur.com/FpE54lo.jpg", "https://i.imgur.com/TEMEo3i.jpg", "https://i.imgur.com/56UnrSq.jpg"],
// }

// var moviesWomen = {
//   "abaaa": ["https://i.imgur.com/MnZHoUk.png", "https://i.imgur.com/Do6Ul6J.jpg", "https://i.imgur.com/0dGJ4Hi.jpg"], 
//   "abaab": ["https://i.imgur.com/QDtEXI6.jpg", "https://i.imgur.com/EHAXdWj.png", "https://i.imgur.com/9GRiN03.png"],
//   "ababa": ["https://i.imgur.com/vm1qh7f.jpg", "https://i.imgur.com/5XRG6AP.jpg", "https://i.imgur.com/XPJkEX3.png"],
//   "ababb": ["https://i.imgur.com/ufvrq7O.jpg", "https://i.imgur.com/3sDu4h7.png", "https://i.imgur.com/NQtozwb.jpg"],
//   "abbaa": ["https://i.imgur.com/BnqVMZw.png", "https://i.imgur.com/wA3wjIb.png", "https://i.imgur.com/3cWlM72.jpg"],
//   "abaab": ["https://i.imgur.com/s2Ap707.jpg", "https://i.imgur.com/qWDDHRe.jpg", "https://i.imgur.com/mqxPuXX.jpg"],
//   "abbba": ["https://i.imgur.com/GFOvOb9.jpg", "https://i.imgur.com/j4MfNsP.jpg", "https://i.imgur.com/67tDjki.jpg"], 
//   "abbbb": ["https://i.imgur.com/geOIAtU.jpg", "https://i.imgur.com/exewnL9.jpg", "https://i.imgur.com/W3KK4UW.jpg"],
// }

// var tvshowsMen = {
//   "baaaa": ["https://i.imgur.com/Yi7Qv4g.jpg", "https://i.imgur.com/pfyB3VM.jpg", "https://i.imgur.com/y47zsUA.jpg"],
//   "baaab": ["https://i.imgur.com/AeARuwc.jpg", "https://i.imgur.com/LYeXcNn.jpg", "https://i.imgur.com/qwCBAM6.jpg"],
//   "baaba": ["https://i.imgur.com/EhUKIB6.jpg", "https://i.imgur.com/nFScIJK.jpg", "https://i.imgur.com/P18I0P2.jpg"],
//   "baabb": ["https://i.imgur.com/QOt1Se9.jpg", "https://i.imgur.com/STVnuRB.jpg", "https://i.imgur.com/BS6I4Qv.jpg"],
//   "babaa": ["https://i.imgur.com/j7XNnjl.jpg", "https://i.imgur.com/ZTiRm8c.jpg", "https://i.imgur.com/SyIUf5s.png"],
//   "babab": ["https://i.imgur.com/56ExPf5.jpg", "https://i.imgur.com/RjsIUx3.jpg", "https://i.imgur.com/hWapl26.jpg"],
//   "babba": ["https://i.imgur.com/Bh5yEtq.jpg", "https://i.imgur.com/JJ8viGA.jpg", "https://i.imgur.com/ohwn0Dn.jpg"],
// }

// var tvshowsWomen = {
//   "bbaaa": ["https://i.imgur.com/swO58P4.jpg", "https://i.imgur.com/7ZDF9D3.jpg", "https://i.imgur.com/kq0BaPN.jpg"],
//   "bbaab": ["https://i.imgur.com/K0EG4Wy.jpg", "https://i.imgur.com/mgWPzed.jpg", "https://i.imgur.com/EMfFpOd.jpg"],
//   "bbaba": ["https://i.imgur.com/dqvFMjU.jpg", "https://i.imgur.com/ivH58H3.jpg", "https://i.imgur.com/bFy6snP.jpg"],
//   "bbabb": ["https://i.imgur.com/4OOUCtz.jpg", "https://i.imgur.com/B10kTEn.jpg", "https://i.imgur.com/DdAK4il.jpg"],
//   "bbbaa": ["https://i.imgur.com/kguovtD.jpg", "https://i.imgur.com/bDQPYIn.jpg", "https://i.imgur.com/DCig2ql.jpg"],
//   "bbbab": ["https://i.imgur.com/qfj4tdF.jpg", "https://i.imgur.com/gKjisvS.jpg", "https://i.imgur.com/Q9X0AqU.jpg"],
//   "bbbba": ["https://i.imgur.com/Bh5yEtq.jpg", "https://i.imgur.com/P848zTr.jpg", "https://i.imgur.com/UYAJ7en.jpg"],
//   "bbbbb": ["https://i.imgur.com/10xKYWR.jpg", "https://i.imgur.com/CS8uRv1.jpg", "https://i.imgur.com/E1ZhLml.jpg"],
// }

// var moviesMenComedy = {
//   "aaaaa": ["https://i.imgur.com/rsSqGjI.jpg", "https://i.imgur.com/6f7JZun.jpg", "https://i.imgur.com/U0NkKij.jpg"],
//   "aaaab": ["https://i.imgur.com/9Hq1aR2.jpg", "https://i.imgur.com/ZSlHfqj.jpg", "https://i.imgur.com/0XfLny9.png"],
//   "aaaba": ["https://i.imgur.com/JuNKnGO.jpg", "https://i.imgur.com/U7NZ0QN.png", "https://i.imgur.com/pCdgLTS.jpg"],
//   "aaabb": ["https://i.imgur.com/c9DwzCq.jpg", "https://i.imgur.com/BEJdoz2.jpg", "https://i.imgur.com/QyZxSQ2.jpg" ],
// }

// var moviesMenDrama = {
//   "aabaa": ["https://i.imgur.com/XEvA7IR.png", "https://i.imgur.com/FTeoPzc.jpg", "https://i.imgur.com/DM2g7pV.jpg"],
//   "aabab": ["https://i.imgur.com/z1taQhm.png", "https://i.imgur.com/sGaQEy4.png", "https://i.imgur.com/nWOLXDi.jpg"],
//   "aabba": ["https://i.imgur.com/OHuSrWw.jpg", "https://i.imgur.com/CdA7IHf.jpg", "https://i.imgur.com/40B1lVW.jpg"],
//   "aabbb": ["https://i.imgur.com/FpE54lo.jpg", "https://i.imgur.com/TEMEo3i.jpg", "https://i.imgur.com/56UnrSq.jpg"],
// }

// var tvshowsMenComedy = {
//   "baaaa": ["https://i.imgur.com/Yi7Qv4g.jpg", "https://i.imgur.com/pfyB3VM.jpg", "https://i.imgur.com/y47zsUA.jpg"],
//   "baaab": ["https://i.imgur.com/AeARuwc.jpg", "https://i.imgur.com/LYeXcNn.jpg", "https://i.imgur.com/qwCBAM6.jpg"],
//   "baaba": ["https://i.imgur.com/EhUKIB6.jpg", "https://i.imgur.com/nFScIJK.jpg", "https://i.imgur.com/P18I0P2.jpg"],
//   "baabb": ["https://i.imgur.com/QOt1Se9.jpg", "https://i.imgur.com/STVnuRB.jpg", "https://i.imgur.com/BS6I4Qv.jpg"],
// }

// var tvshowsMenDrama = {
// "babaa": ["https://i.imgur.com/j7XNnjl.jpg", "https://i.imgur.com/ZTiRm8c.jpg", "https://i.imgur.com/SyIUf5s.png"],
//   "babab": ["https://i.imgur.com/56ExPf5.jpg", "https://i.imgur.com/RjsIUx3.jpg", "https://i.imgur.com/hWapl26.jpg"],
//   "babba": ["https://i.imgur.com/Bh5yEtq.jpg", "https://i.imgur.com/JJ8viGA.jpg", "https://i.imgur.com/ohwn0Dn.jpg"],
// }

// var moviesWomenComedy = {
//   "abaaa": ["https://i.imgur.com/MnZHoUk.png", "https://i.imgur.com/Do6Ul6J.jpg", "https://i.imgur.com/0dGJ4Hi.jpg"], 
//   "abaab": ["https://i.imgur.com/QDtEXI6.jpg", "https://i.imgur.com/EHAXdWj.png", "https://i.imgur.com/9GRiN03.png"],
//   "ababa": ["https://i.imgur.com/vm1qh7f.jpg", "https://i.imgur.com/5XRG6AP.jpg", "https://i.imgur.com/XPJkEX3.png"],
//   "ababb": ["https://i.imgur.com/ufvrq7O.jpg", "https://i.imgur.com/3sDu4h7.png", "https://i.imgur.com/NQtozwb.jpg"],
// }

// var moviesWomenDrama = {
//   "abbaa": ["https://i.imgur.com/BnqVMZw.png", "https://i.imgur.com/wA3wjIb.png", "https://i.imgur.com/3cWlM72.jpg"],
//   "abaab": ["https://i.imgur.com/s2Ap707.jpg", "https://i.imgur.com/qWDDHRe.jpg", "https://i.imgur.com/mqxPuXX.jpg"],
//   "abbba": ["https://i.imgur.com/GFOvOb9.jpg", "https://i.imgur.com/j4MfNsP.jpg", "https://i.imgur.com/67tDjki.jpg"], 
//   "abbbb": ["https://i.imgur.com/geOIAtU.jpg", "https://i.imgur.com/exewnL9.jpg", "https://i.imgur.com/W3KK4UW.jpg"],
// }

// var tvshowsWomenComedy = {
//   "bbaaa": ["https://i.imgur.com/swO58P4.jpg", "https://i.imgur.com/7ZDF9D3.jpg", "https://i.imgur.com/kq0BaPN.jpg"],
//   "bbaab": ["https://i.imgur.com/K0EG4Wy.jpg", "https://i.imgur.com/mgWPzed.jpg", "https://i.imgur.com/EMfFpOd.jpg"],
//   "bbaba": ["https://i.imgur.com/dqvFMjU.jpg", "https://i.imgur.com/ivH58H3.jpg", "https://i.imgur.com/bFy6snP.jpg"],
//   "bbabb": ["https://i.imgur.com/4OOUCtz.jpg", "https://i.imgur.com/B10kTEn.jpg", "https://i.imgur.com/DdAK4il.jpg"],
// }

// var tvshowsWomenDrama = {
//   "bbbaa": ["https://i.imgur.com/kguovtD.jpg", "https://i.imgur.com/bDQPYIn.jpg", "https://i.imgur.com/DCig2ql.jpg"],
//   "bbbab": ["https://i.imgur.com/qfj4tdF.jpg", "https://i.imgur.com/gKjisvS.jpg", "https://i.imgur.com/Q9X0AqU.jpg"],
//   "bbbba": ["https://i.imgur.com/Bh5yEtq.jpg", "https://i.imgur.com/P848zTr.jpg", "https://i.imgur.com/UYAJ7en.jpg"],
//   "bbbbb": ["https://i.imgur.com/10xKYWR.jpg", "https://i.imgur.com/CS8uRv1.jpg", "https://i.imgur.com/E1ZhLml.jpg"],
// }

var comedies = ["https://i.imgur.com/swO58P4.jpg", "https://i.imgur.com/7ZDF9D3.jpg", "https://i.imgur.com/kq0BaPN.jpg", "https://i.imgur.com/K0EG4Wy.jpg", "https://i.imgur.com/mgWPzed.jpg", "https://i.imgur.com/EMfFpOd.jpg", "https://i.imgur.com/dqvFMjU.jpg", "https://i.imgur.com/ivH58H3.jpg", "https://i.imgur.com/bFy6snP.jpg", "https://i.imgur.com/4OOUCtz.jpg", "https://i.imgur.com/B10kTEn.jpg", "https://i.imgur.com/DdAK4il.jpg", "https://i.imgur.com/MnZHoUk.png", "https://i.imgur.com/Do6Ul6J.jpg", "https://i.imgur.com/0dGJ4Hi.jpg", "https://i.imgur.com/QDtEXI6.jpg", "https://i.imgur.com/EHAXdWj.png", "https://i.imgur.com/9GRiN03.png", "https://i.imgur.com/vm1qh7f.jpg", "https://i.imgur.com/5XRG6AP.jpg", "https://i.imgur.com/XPJkEX3.png", "https://i.imgur.com/ufvrq7O.jpg", "https://i.imgur.com/3sDu4h7.png", "https://i.imgur.com/NQtozwb.jpg", "https://i.imgur.com/Yi7Qv4g.jpg", "https://i.imgur.com/pfyB3VM.jpg", "https://i.imgur.com/y47zsUA.jpg", "https://i.imgur.com/AeARuwc.jpg", "https://i.imgur.com/LYeXcNn.jpg", "https://i.imgur.com/qwCBAM6.jpg", "https://i.imgur.com/EhUKIB6.jpg", "https://i.imgur.com/nFScIJK.jpg", "https://i.imgur.com/P18I0P2.jpg", "https://i.imgur.com/QOt1Se9.jpg", "https://i.imgur.com/STVnuRB.jpg", "https://i.imgur.com/BS6I4Qv.jpg", "https://i.imgur.com/rsSqGjI.jpg", "https://i.imgur.com/6f7JZun.jpg", "https://i.imgur.com/U0NkKij.jpg", "https://i.imgur.com/9Hq1aR2.jpg", "https://i.imgur.com/ZSlHfqj.jpg", "https://i.imgur.com/0XfLny9.png", "https://i.imgur.com/JuNKnGO.jpg", "https://i.imgur.com/U7NZ0QN.png", "https://i.imgur.com/pCdgLTS.jpg", "https://i.imgur.com/c9DwzCq.jpg", "https://i.imgur.com/BEJdoz2.jpg", "https://i.imgur.com/QyZxSQ2.jpg"]

var dramas = ["https://i.imgur.com/XEvA7IR.png", "https://i.imgur.com/FTeoPzc.jpg", "https://i.imgur.com/DM2g7pV.jpg", "https://i.imgur.com/z1taQhm.png", "https://i.imgur.com/sGaQEy4.png", "https://i.imgur.com/nWOLXDi.jpg", "https://i.imgur.com/OHuSrWw.jpg", "https://i.imgur.com/CdA7IHf.jpg", "https://i.imgur.com/40B1lVW.jpg", "https://i.imgur.com/FpE54lo.jpg", "https://i.imgur.com/TEMEo3i.jpg", "https://i.imgur.com/56UnrSq.jpg", "https://i.imgur.com/j7XNnjl.jpg", "https://i.imgur.com/ZTiRm8c.jpg", "https://i.imgur.com/SyIUf5s.png", "https://i.imgur.com/56ExPf5.jpg", "https://i.imgur.com/RjsIUx3.jpg", "https://i.imgur.com/hWapl26.jpg", "https://i.imgur.com/Bh5yEtq.jpg", "https://i.imgur.com/JJ8viGA.jpg", "https://i.imgur.com/ohwn0Dn.jpg", "https://i.imgur.com/BnqVMZw.png", "https://i.imgur.com/wA3wjIb.png", "https://i.imgur.com/3cWlM72.jpg", "https://i.imgur.com/s2Ap707.jpg", "https://i.imgur.com/qWDDHRe.jpg", "https://i.imgur.com/mqxPuXX.jpg", "https://i.imgur.com/GFOvOb9.jpg", "https://i.imgur.com/j4MfNsP.jpg", "https://i.imgur.com/67tDjki.jpg", "https://i.imgur.com/geOIAtU.jpg", "https://i.imgur.com/exewnL9.jpg", "https://i.imgur.com/W3KK4UW.jpg", "https://i.imgur.com/kguovtD.jpg", "https://i.imgur.com/bDQPYIn.jpg", "https://i.imgur.com/DCig2ql.jpg", "https://i.imgur.com/qfj4tdF.jpg", "https://i.imgur.com/gKjisvS.jpg", "https://i.imgur.com/Q9X0AqU.jpg", "https://i.imgur.com/Bh5yEtq.jpg", "https://i.imgur.com/P848zTr.jpg", "https://i.imgur.com/UYAJ7en.jpg", "https://i.imgur.com/10xKYWR.jpg", "https://i.imgur.com/CS8uRv1.jpg", "https://i.imgur.com/E1ZhLml.jpg"]

