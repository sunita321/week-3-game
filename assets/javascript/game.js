//Scores
var wins = 0;
var losses = 0;
var usedLetters = [];
var lives = 5;
var currentWord = "";

//Words to Guess
var pokemon = 
[
	"bulbasaur",
 	"charmeleon",
 	"squirtle",
 	"pikachu",
 	"jigglypuff"
];

//This is a function to display hidden word with _
function updateHiddenWord()
{
		document.getElementById('hiddenWord').innerHTML = " ";

//for each letter in the word
	for (var i = 0; i < currentWord.length; i++)
	{
		var displayCharacter = "_ ";
		//if this letter is in usedLetters then display the letter otherwise display _
		
		//for each letter in usedLetters
		for (var k = 0; k < usedLetters.length; k++)
		{
			//if this letter in currentWord matches this letter in usedLetters the display letter instead of _
			if (currentWord.charAt(i) == usedLetters[k])
			{
				displayCharacter = usedLetters[k] + " ";
			}
		}



		document.getElementById('hiddenWord').innerHTML += displayCharacter;
	}
	console.log("updatewordtest");
}

function setup() 
{
	console.log("I work");
	//Pick random Pokemon word
	currentWord = pokemon[Math.floor(Math.random() * pokemon.length)];
	console.log(currentWord);
	updateHiddenWord();
	document.getElementById('lives').innerHTML = lives;
	document.getElementById('loss').innerHTML = losses;
	lives = 5;
	usedLetters = [];
}
  //initialize the game when the window loads
    window.onload = setup();


//Won function
function won ()
{ 
	var weWon = true;
	for (var i = 0; i < currentWord.length; i++)
	{

	//for each letter in current word 
	//check if letter is in usedLetters array; 
		var foundLetter = false;
		for (var k = 0; k < usedLetters.length; k++)
		{
		
			if (currentWord.charAt(i) == usedLetters[k])
			{
				foundLetter = true;
			}
		}

		//if letter is not in used letter, no win yet 
		if (foundLetter == false)
		{
			weWon = false;
		}

	} 

	//if all letters in current word are in used letters
	return weWon;
}


//User Input
document.onkeyup = function(event) 
{
	var eventInput = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("eventInput " + eventInput);
	//stop repeat key entrys
	//if the letter is not already in used letters add to used letters

	var foundLetter = false;
	//for each letter in usedLetters
	for (var k = 0; k < usedLetters.length; k++)
	{
		//if eventInput matches this letter in usedLetters
		if (eventInput == usedLetters[k])
		{
			//we found it
			foundLetter = true;
		}
	}

	if (!foundLetter)
	{
		//Key press goes into useLetters var
		usedLetters.push(eventInput);

		if (currentWord.indexOf(eventInput) <= -1)
		{
			lives--;
			if (lives == 0)
			{
				losses++;
				setup();
			}
		}
		
	}


//checks for word match
	for (var j = 0; j < currentWord.length; j++)
	{
		if (eventInput == currentWord.charAt(j))
		{
			console.log("match found");
		}
	}

	if (won())
	{
		wins++;
		setup();
	}


//updates hidden word on keypress
	updateHiddenWord();
	document.getElementById('lives').innerHTML = lives;
	document.getElementById('loss').innerHTML = losses;
	document.getElementById('wins').innerHTML = wins;

	
//displays used letters with spaces 
	document.getElementById('wrongLetters').innerHTML = " ";

	for (var i = 0; i < usedLetters.length; i++)
	{
		//if the current word does not contain the same used letter 
		if (currentWord.indexOf(usedLetters[i]) <= -1)
		{
			document.getElementById('wrongLetters').innerHTML += usedLetters[i] + " ";
		}

	}
}





