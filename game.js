var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
var a=0;var b=0;
function nextSequence(){
    a++;
    $("h1").text("level"+" "+a);
    var randomNumber=Math.random();
    randomNumber=Math.floor(randomNumber*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $('#'+randomChosenColour).fadeOut(75).fadeIn(75);
    var audio = new Audio('sounds/'+randomChosenColour+'.mp3');
    audio.play();
    b=0;
    userClickedPattern=[];
   
}
$(".btn").click(function(event){
    userClickedPattern.push(event.currentTarget.id);
  console.log(userClickedPattern);
  playSound(event.currentTarget.id);
  $("#"+event.currentTarget.id).addClass("pressed");
  setTimeout(function(){
    $("#"+event.currentTarget.id).removeClass("pressed");
}, 100);
checkAnswer(b);

});
function playSound(name){
    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play();
}
$(document).keypress(function() {
    if(a==0){
    nextSequence();
    }
})
function checkAnswer(lastIndex){
if(gamePattern[lastIndex]!=userClickedPattern[lastIndex]){
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 400);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
}
if(lastIndex+1==a){
    setTimeout(function(){b++;  nextSequence();
    }, 1000); 
}
else{
    b++;
if(b==a && a!=0){
    nextSequence();
}
}
}
function startOver(){
    a=0;
    b=0;
    gamePattern=[];
    userClickedPattern=[];
    $(document).keypress(function() {
        if(a==0){
        nextSequence();
        }
    });
}