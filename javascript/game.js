//variable list for clairity
var winCount; //counter for wins, starts at 0
var lossCount; //counter for losses, starts at 0
var guessesRemaining; //counter for Guesses, starts at 7
var currentLetter;
var lettersGuessed



//Function to pick a random letter


var guessesRemaining = 8

document.onkeyup = function(event) {
    var userKey = event.key;


    var guessesRemaining = 8;
    function subtract(){
         guessesRemaining--;
         document.getElementById('guessesRemaining').innerHTML = guessesRemaining;
    }




    if (userKey == "h") { 
    // display letter in current word

    alert("h has been clicked")
        }
    else {
    // increment "hangSteps" counter to change image
        guessesRemaing - 1}

  }

