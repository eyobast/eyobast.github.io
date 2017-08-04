$( document ).ready(function(){
var add=0;
var score=0;
var wins=0;
var lose=0;
var computerGuess
replay();
	function replay(){
		computerGuess = Math.floor((Math.random()*100)+19);
		$("#rand").text(computerGuess);
		score=0; 
		$("#score").text(score);
		}
var count = Math.floor((Math.random()*5)+15);
	$("#first").on("click", function() {	 
		 	score = score + count;
		 	$("#score").text(score);
		 	if(computerGuess==score){
			wins++ 
			console.log(wins)
			$("#win").text(wins);
			alert("you win")
			replay()
		}
		else if(computerGuess<score){
			alert('you lose');
			lose++;
			replay();
			$("#lose").text(lose);
		}
	
 });
var count2 = Math.floor((Math.random()*5)+10);
$("#second").on("click", function() {
score = score + count2;
 	console.log(score)
 	$("#score").text(score);
 	if(computerGuess==score){
	wins++;
	$("#win").text(wins);
	alert("you win")
	replay()
		}
		else if(computerGuess<score){
		alert('you lose');
		lose++;
		$("#lose").text(lose);
		}	


 });
var count3 = Math.floor((Math.random()*5)+7);
$("#third").on("click", function() {
score = score + count3;
 	console.log(score)
 	$("#score").text(score);
 	if(computerGuess==score){
	wins++;
	$("#win").text(wins);
	alert("you win")
	replay()
		}
		else if(computerGuess<score){
		alert('you lose');
		lose++;
		$("#lose").text(lose);
		}	
		
 });
var count4 = (Math.floor(Math.random()*5)+3);
$("#fourth").on("click", function() {
score = score + count4;
 	console.log(score)
 	console.log(wins)
 	$("#score").text(score);
 	if(computerGuess==score){
	wins++;
	console.log(wins);
	$("#win").text(wins);
	alert("you win")
	replay()
		}
		else if(computerGuess<score){
		alert('you lose');
		lose++;
		$("#lose").text(lose);
		}	
 });


});
