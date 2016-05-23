/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess,
    winningNumber;
var previousGuesses = [];

winningNumber = generateWinningNumber();
//alert(winningNumber);


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

function bracket () {
	var difference = Math.abs(playersGuess - winningNumber);
	
	if (difference<5)
		return "within 5 units.";
	else if (difference<10)
		return "within 10 units.";
	else if (difference<20)
		return "within 20 units.";
	else
		return "more than 20 units away";	
}

function lowerOrHigher(){
	var difference = playersGuess - winningNumber;
	
	if (difference>0){
		return "Your guess is too high and " + bracket();
	}
	else
		return "Your guess is too low and " + bracket();
}



function youWon() {
	$('.feedback').css({
		background: "green",
		font:"bold",
		textAlign: "center",
		fontSize: "24px",
		color: "blue"
	});
};

// Check if the Player's Guess is the winning number 
function checkGuess(){
	if (playersGuess == winningNumber) {
		youWon();
		$('#response').text('you guessed it right');
	}
	else {
		$('#response').text(lowerOrHigher());
		$('#numberGuesses').text('Your number of guesses is: ' + (previousGuesses.length));
	
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
 			$('#prevGuess').text("");
 			checkGuess();
 		}
 	}
 	else 
 		previousGuesses.push(playersGuess);
 		checkGuess();	
}
	// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	var hintArray = [];
	hintArray.push(winningNumber);
	for (var i = 0; i< 4; i++){
		hintArray.push(generateWinningNumber());
	}
	hintArray.sort();
	return hintArray.toString();
}

// Allow the "Player" to Play Again

function playAgain() {
	winningNumber = generateWinningNumber();
	previousGuesses = [];
	$('#prevGuess').text("");
	$('#response').text("");
	$('#numberGuesses').text("");
	$('#hintText').text("");
}

/* **** Event Listeners/Handlers ****  */

$('#submitButton').on('click keypress', function () {
	playersGuess = playersGuessSubmission();
	comparePrevious();	
});

$('#hint').on('click', function () {
	$('#hintText').text("The winning number is one of these: " + provideHint());
});

$('form').submit(function (e) {
	e.preventDefault();
});


$('#replay').on('click', playAgain);