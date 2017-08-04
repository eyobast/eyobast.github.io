$(document).ready(function(){
        $(".question").hide();
        $(".result").hide();
 
$("#button").on("click", function(){
  init();
  $(".question").show();
  $("#button").hide(); 
});

var answer=[1,1,1,2,2];
var userAnswer=[];
var correctAnswer=0;
var incorrectAnswer=0;
var unanswered=0;
var timer;
var counter=30;

function init(){
  timer = setInterval(decri, 1000)
}
function decri(){
  counter=counter-1;
  $("#time").html("<p> Time Remaining: "+counter.toString()+"</p>");

  if(counter<=0){
    clearInterval(timer);
    // $("#time").html=counter;
     $(".question").hide();
     $(".result").show();
     $("#time").hide();
     compare();
     result();
  }
}
$("#button2").on("click", function(){
  $(".result").show();
  $(".question").hide();
  $("#time").hide();
  compare();
  result();
});

function result(){
 $("#correct").html(correctAnswer);
 $("#incorrect").html(incorrectAnswer);
 $("#unanswered").html(unanswered);
}
$("input").on("click", function(){
  var selValue = ($(this).val());
  
var index=($(this).parent().attr("value"));
userAnswer[index]=selValue;   
console.log(userAnswer);
});
function compare(){
  for(var i=0; i< answer.length; i++){
    if (userAnswer[i]==undefined) {
      unanswered++;
    }  
    else if(answer[i]!=userAnswer[i]){
      incorrectAnswer++;
    }
    else if(answer[i]==userAnswer[i]){
      correctAnswer++;
    }  
  }
}

});

