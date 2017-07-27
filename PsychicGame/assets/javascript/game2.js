
var randomly=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var wins=0;
  var losses=0;
  var guessLeft=9;

  document.onkeyup = function(event)
  {
    if ((event.keyCode > 65) &&  (event.keyCode<90))
    {
      var userGuess=event.key;
      var computerGuess = randomly[Math.floor(Math.random() * randomly.length)];
      console.log(userGuess);
      console.log(computerGuess);
      if (userGuess==computerGuess){
        wins++;
        guessLeft=9;
      }
      else if ((userGuess!=computerGuess) && (guessLeft==1)){
        losses++ ;
        guessLeft = 9;
        //alert("You loses 9 times! try again!");
      }
      else if ((userGuess!=computerGuess) && (guessLeft>1)){
         guessLeft-=1;
         console.log('less')
      }
         
      else if(guessLeft==0){
        guessLeft.setvalue(9); 
      }   
    }
  

    var html =
           "<p>You chose: " + userGuess + "</p>" +
          // "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guess Left: " + guessLeft + "</p>";

        document.querySelector("#play").innerHTML = html;
}
      