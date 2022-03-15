var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

//Listening to the first keypress on the whole page
$("body").one("keypress", function() {
  nextSequence();
  $("h1").text("Level " + level);
});

//Listening for clicks on buttons
$(".btn").click(function() {

  //creating a variable with the id of the buttons
  var userChosenColour = $(this).attr("id");

  //pushing the result inside a new array
  userClickedPattern.push(userChosenColour);

  //Playing an audio for the clicked button
  playSound(userChosenColour);

  //Adding a class for the clicked button
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);

});


function nextSequence() {

//reseting the array
  userClickedPattern = [];

  level++;
  //Changing the title each title the function runs
  $("h1").text("Level " + level);

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

  //Adding a class for the clicked button
  animatePress(randomChosenColour);

};

function playSound(name) {

  //Playing an audio for the selected button
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

};

//creating a function that adds a class and removes it after a delay
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);

};

//Checking the user's answer
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (gamePattern.length === userClickedPattern.length) {
        setTimeout(nextSequence(), 1000);
      }
    } else {
      console.log("wrong");
    }
  };
