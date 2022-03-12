var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

function nextSequence() {
  //Selecting a rnndom number
  var randomNumber = Math.floor(Math.random() * 4);

  //Selecting one colour inside the array
  var randomChosenColour = buttonColours[randomNumber];

  //Putting the selected colour inside an array
  gamePattern.push(randomChosenColour);

  //Making an animation for the selected button
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  //Playing an audio for the selected button
  playSound(randomChosenColour);

};

//Listening for clicks on buttons
$(".btn").click(function() {

  //creating a variable with the id of the buttons
  var userChosenColour = $(this).attr("id");

  //pushing the result inside a new array
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

});

function playSound(name) {

  //Playing an audio for the selected button
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}
