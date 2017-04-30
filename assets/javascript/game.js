window.onload = function() {

//array of movies

var movies = ["Ordinary People", "Chariots Of Fire", "Gandhi", "Terms of Endearment", "Amadeus", "Out of Africa", "Platoon", "The Last Emperor", "Rain Man", "Driving Mis Daisy", "Dances With Wolves", "The Silence of the Lambs", "Unforgiven", "Schindler's List", "Forrest Gump", "Braveheart", "The English Patient", "Titanic", "Shakespeare in Love", "American Beauty", "Gladiator", "A Beautiful Mind", "Chicago", "The Lord of the Rings", "Million Dollar Baby", "Crash", "The Departed", "No Country for Old Men", "Slumdog Millionaire", "The Hurt Locker", "The King's Speech", "The Artist", "Argo", "12 Years a Slave", "Birdman", "Spotlight", "Moonlight" ] ;

var alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ,"k", "l", "m", "n" ,"o" ,"p" ,"q" ,"r" ,"s" ,"t" ,"u" ,"v" ,"w" ,"x" ,"y" ,"z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] ;
	

	//randomly selects movie from array
	var randomMovie = movies[Math.floor(Math.random() * movies.length)];
	//splits randomMovie into letters and returns underscore
	var blanks = randomMovie.split("").map(function(){return "_"});
	//writes underscores on page at div id movie
	//document.getElementById("movie").innerHTML = blanks;
	document.addEventListener("click", function(){
	document.getElementById("movie").innerHTML = blanks.join(" ");
	});
	

	

	var guesses = [];

	var guessCount = 15;
	document.getElementById("guessesLeft").innerHTML = guessCount;

	//document.addEventListener("click", function(){
    //document.getElementById("movie").innerHTML = blanks;
    //console.log(blanks);
//})
	//creates onkey event to call letters for guess
	document.onkeypress = function(event) {
		var guess = (event.key).toLowerCase();
	//	document.getElementById("movie").innerHTML = guess;
	//	console.log(guess);
	var index = randomMovie.indexOf(guess);

	if(guesses.indexOf(guess) == -1){
		guesses.push(guess);
		if(index == -1){
		guessCount--
		}
	}else{
		while(index > -1){
			blanks[index] = guess;
			var index = randomMovie.indexOf(guess, index + 1);
			}
		}
	}

		if(blanks.indexOf("_")==-1){
			alert("YOU WIN")
		}

		if(guessCount = 0){
			alert("YOU LOSE")
		}
	}
	

	
//	return guess;

//}
	//if guess is in index change underscore to letter

//	}
	
	//??
	
	
	// guesses counter
//	var guessesLeft = 10;
	// set letters to onkey.event
	
	//	var guesses = [];
	//	document.getElementById("movie").innerHTML = guess;
	//	console.log(guess);


//  checking guesses against word
//	var letterGuessed = guess;
	
		
//	if(guesses.indexOf(letterGuessed) > -1){
//	if(guesses.indexOf(guess) > -1){
//		document.write(result[i]);
//	}
	

//	if(guesses.indexOf(letterGuessed) == -1){
//	if(guesses.indexOf(guess) == -1){
//			guesses.push(guess);
//			if(index == -1){
//				guessesLeft --
//			}
//	}
//	while(index > -1){
		//blanks[] = guess;
//		var index = randomMovie.indexOf(guess);
//	}
//	if(blanks.indexOf("_")==-1){
//		document.getElementById("#winorlose").innerHTML = "You Win!"
//	}
//	if(guessesLeft = 0){
//		document.getElementById("#winorlose").innerHTML = "You Lose"
//	}


	




// myobj[Object.keys(myobj)[0]];
// CODE FOR LETTER PICKS
// call letter spaces to HTML doc inside film image
// variable for alphabet
// set letters to onkey.event
	
	
	//	window.event(input text value);
	//	document.getElementById("movie").innerHTML = guess;
		
	

	//var guessesLeft = 9;

 //document.onkeypress = function(evt) {
   //var evt = evt || window.event;
   //var charCode = evt.keyCode || evt.which;
   //var lettersGuessed = String.fromCharCode(charCode);
   //document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
   //document.getElementById("guessesLeft").innerHTML = guessesLeft;
   //guessesLeft--;
// var guess = alphabet.indexOf(event.key);
// console.log(guess);
// var outPut = String.fromCharCode(guess);

// if/else for correct guesses and incorrect guesses


//counter down for incorrect guesses
//	if (guessesLeft === -1) {
//		alert("You Lose!");
//	}
// end of game when counter equals 0

//	onkeyup = function startGame() {

//		var pickMovie = 

//		console.log(pickMovie);
//	}

//document.onkey=

// var randomBand = bands[Math.floor(Math.random() * bands.length)];
//    var bandUnderScore = randomBand.split("").map(function(){return "_"});
//    document.getElementById("correctLetters").innerHTML = bandUnderScore.join(" ");
   

   		