window.onload = function() { //Loads up the JavaScript after the page finishes loading


//variable list for clairity
var wCount = 0 // number of wins
var lCount = 0 // number of losses
var gCount = 8 // number of guesses upon start
var currentLetter;
var lettersGuessed = []
var possibleLetters = [ 'a',
                        'b',
                        'c',
                        'd',
                        'e',
                        'f',
                        'g',
                        'h',
                        'i',
                        'j',
                        'k',
                        'l',
                        'm',
                        'n',
                        'o',
                        'p',
                        'q',
                        'r',
                        's',
                        't',
                        'u',
                        'v',
                        'w',
                        'x',
                        'y',
                        'z']



//writes intial guesses left value on the DOM
document.getElementById('winCount').innerHTML = wCount;
//writes intial Losses value on the DOM
document.getElementById('lossCount').innerHTML = lCount;
//writes intial Wins value on the DOM
document.getElementById('guess').innerHTML = gCount;



//Random Letter Generator Function
function createLetter () {
randLetter = possibleLetters[Math.floor(Math.random() * possibleLetters.length)];
console.log(randLetter) }


//calling function to create letter upon start
createLetter();

//Listening for KeyStrokes
document.onkeyup = function(write) {
    var userKey = write.key;


    //Correct Guess / Win Behavior
    if (userKey == randLetter) { 
    alert("You Picked the Correct Letter, " + randLetter + " !")
    gCount = 7;
    wCount++;
    lettersGuessed = [];
    document.getElementById('guess').innerHTML = gCount;
    document.getElementById('winCount').innerHTML = wCount;
    document.getElementById('lettersGuessed').innerHTML = lettersGuessed;
    createLetter();
    }


    // Incorrect Guesses Behavior 
    else if (lettersGuessed.includes(userKey)) {} // ensures that letters are only used once
    else if (possibleLetters.includes(userKey)) //ensures only valid characters (from array) are counted
    {
        gCount--;
        document.getElementById('guess').innerHTML = gCount;
        lettersGuessed.push(userKey);
        document.getElementById('lettersGuessed').innerHTML = lettersGuessed
     }



     // Reset Upon Loss
     if (gCount === 0){
        lCount++;
        document.getElementById('lossCount').innerHTML = lCount;
        alert("You Lost a Round");
        gCount = 7;
        document.getElementById('guess').innerHTML = gCount;
        lettersGuessed = []
        document.getElementById('lettersGuessed').innerHTML = lettersGuessed
        createLetter();
    }
  }



} //Closing Window On Load Function, this should be the end of all JS