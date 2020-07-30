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

  //return randomChosenColour;

}