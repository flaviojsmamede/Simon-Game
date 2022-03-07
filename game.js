
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // if (randomChosenColour === "red") {
    $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).on("animationend", function() {
      var audio = new Audio('sounds/red.mp3');
      audio.play();
    });
  } else if (randomChosenColour === "blue") {
    $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  } else if (randomChosenColour === "green") {
    $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  } else {
    $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  };

};
