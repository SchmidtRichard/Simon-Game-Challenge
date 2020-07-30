//Array to hold the game pattern
var gamePattern = [];

//Array to hold the colors
var buttonColours = ["red", "blue", "green", "yellow"];

//Function to generate a random number between 0 and 3
function nextSequence() {
  var randomNumber = buttonColours[Math.floor(Math.random() * 4)];

  //New variable randomChosenColour to store the random colour
  var randomChosenColour = randomNumber;

  //Add the new randomChosenColour to the end of the gamePattern array
  gamePattern.push(randomChosenColour);

  //jQuery select the button with the same ID as the randomChosenColour and animate it with a flash
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //JS to play the sound for each button colour selected
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

  return randomChosenColour;

}