
// Make constants for each combo of answers 
// -	(is there short way to do this)
// Objects for the four questions/choices {Question, button1, button2, button3}
// Variable for scoreArray
// 
// Cache paragraph and buttons
//
// Set up event listener for all three buttons.
// 
// Create a function that will log which button is clicked by putting that buttons value into a scoreArray [q1, q2, q3, q4] ex. [1,1,3,2]

// Create a function that will replace the cached paragraph and buttons with the question/choices from the 2nd object in the array (then 3 then 4).  Stop at four clicks (until scoreArray is full and loop has gone through entire questions array) then calls function below

// Create function that takes the full scoreArray, filters it through answer combos, and returns one of the shows assigned to the matching combo. (Title goes into <p> and image goes where the buttons were)
//    Needs to remove buttons and replace with div / img box
//    Add button below image that will return another option from the same answer combo, endlessly
//    TBD - make arrays with results for each combo of answers or find a way to have each scoreArray pull randomly from an API

// After game works:
// Add sound and maybe a timer
// Change background image after each click to reflect choice from previous question
// Delay click function to slightly slow down how quickly the next question pops up
// Add images to buttons