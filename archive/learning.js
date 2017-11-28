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
