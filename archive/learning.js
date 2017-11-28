var player= 2;
var match= false;

// user click on the play tab.

function twoPlayerRequired(){
	var playButton= document.getElementById("playButton");
	playButton.onclick= twoPlayerRequired;
	 
	var players= prompt("This game requires two players in order to play. Do you have two players?(enter yes or no):");
	if(players.toLowerCase() == "yes"){
		alert("Time to battle!");
		var match= true;
	}else{
		alert("Find and friend and let's play!");
	}
}

window.onload= twoPlayerRequired;



/*
var location1 = 1;
var location2 = 2;
var location3 = 3;
var location4 = 4;
var location5 = 5;

var guess;
var match= false;

while(match == false){
	guess = prompt("Are you ready to test your skills?(enter yes or no):");
	if (guess== "yes"){
		alert("It's time to play");
		var match= true;
	}else{
		alert("Read the rules how to play and come back again.");

	}
}

function gomoku(player1, playerwins){
	if(playerwins > 20){
		console.log("Time to play the champion of Gomoku " + player1);
	}else{
		console.log("Continue playing and get a better record");
	}
}

gomoku("Ryan", 35);
gomoku("Brian", 20);
*/