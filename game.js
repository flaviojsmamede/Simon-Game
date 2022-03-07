var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

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
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

};
