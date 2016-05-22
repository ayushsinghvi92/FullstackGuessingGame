/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess,
    winningNumber;
var previousGuesses = [];

winningNumber = generateWinningNumber();
//alert(winningNumber);


$('#submitButton').on('click', function () {
	playersGUess = playersGuessSubmission();
	comparePrevious();	
})

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	return Math.floor(Math.random()*100);
}

// Fetch the Players Guess

function playersGuessSubmission(){

	var guess = +$('#number').val();
	$('#number').val(' ');
	return guess;
}
// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	if (playersGuess == winningNumber) {
		$('#response').text('you guessed it right');
	}
	else {
		$('#response').text('try again');
		$('#numberGuesses').text('Your number of guesses is: ' + previousGuesses.length+1);
	
	}

}

function comparePrevious () {
	if(previousGuesses){
		var repeat = 0;
		for (var i = 0; i<=previousGuesses.length; i++){
 			if (playersGuess == previousGuesses[i]){
 				$('#prevGuess').text("you've already tried this number, please try again");
 				repeat++;
 				break
			}
 		}

 		if (!repeat) {
 			previousGuesses.push(playersGuess);
 			checkGuess();
 		}
 	}
 	else 
 		previousGuesses.push(playersGuess);
 		checkGuess();	
}
	// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */

