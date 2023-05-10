//game pattern array
var gamePattern = [];

//user clicked pattern array
var userClickedPattern = [];

//posibble colors
var buttonColours = ["red", "blue", "green", "yellow"];

$(".btn").click(function () {

    //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id");

    //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
    userClickedPattern.push(userChosenColour);

    //console.log(userClickedPattern);

});


//random color generating function
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    //animating 
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    //playing proper audio
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

}






