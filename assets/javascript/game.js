// declare three global variables

// Create an array of words-- randomly choose one on init
var POKEMON = [
    "bulbasaur",
    "charmeleon",
    "squirtle",
    "metapod",
    "pikachu"];


// word stores the word for the player to guess
var word = "";

// answerArray stores the answer board (starting with all _ and gradually filled in)
var answerArray = [];

function init(){
  // Pick a random word
  word = POKEMON[Math.floor(Math.random() * POKEMON.length)];
  
  // Set up the answer array
  answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }

  document.getElementById("answer").innerHTML= answerArray.join(" ");
  document.getElementById("message").innerHTML= "Type a letter then press guess, or press quit to stop playing."
}

init();



function guessOne() {


    // Get a guess from the player
    var guess = document.getElementById("guess").value;
    var showThisMessage = "";

  

  if (guess.length !== 1) {
      showThisMessage ="Please enter only 1 letter";
  } else {
        // Update the game with the guess
        var i=0; // an indexer into the array 
        for (i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                answerArray[i] = guess;
                showThisMessage = "YES! "+guess+" is in the answer";
            }
        }

        // Update the game for remaining unknowns
        var remaining_letters = answerArray.length;
        // recount the remaining letters
        for (i = 0; i < answerArray.length; i++) {
            if (answerArray[i] !== '_') {
                remaining_letters -= 1;
            }
        }

        // if no remaining letters, hurray, you won
        if (remaining_letters == 0) {
            showThisMessage = "YES! You guessed the Pokemon";
        }

        // (otherwise) if we have no message, wrong guess 
        if (showThisMessage === "") {
            showThisMessage = "Sorry, no "+guess;
        }

        // Update the puzzle
        document.getElementById("answer").innerHTML = answerArray.join(" ");

        // Lend a hand by clearing out their last guess
        document.getElementById("guess").value = "";
  }
  document.getElementById("message").innerHTML = showThisMessage;
}




function quit() {
    document.getElementById("message").innerHTML = "The word was "+word;
    for (var j = 0; j < word.length; j++) {
        answerArray[j] = word[j];
    }
    // Solve the puzzle
    document.getElementById("answer").innerHTML = answerArray.join(" ");
}