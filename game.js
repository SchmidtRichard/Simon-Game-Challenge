//Array to hold values of userChosenColour variable
var userClickedPattern = [];

//Array to hold the game pattern
var gamePattern = [];

//Array to hold the colors
var buttonColours = ["red", "blue", "green", "yellow"];

//jQuery to detect when any of the buttons are clicked and trigger a handler function
$(".btn").click(function() {

  //var userChosenColour holds the id of the button that got clicked

  /*
  A webpage is filled with objects (button, input, h1, p, ...).

  Whenever the user performs an action (click, keypress,... ) on one of these objects, the objects on which the action took place is referred to as this (object) in the code.

  You can compare it to the following:

  - there is a piece of paper on the table.

  - I take the piece of paper (action) and I call it this

  - I can then go over it's properties (this is white, this is blank/written on, this weighs 80 gr/m2, ...)

  So the object (the piece of paper) is referred to as this
  */

  var userChosenColour = $(this).attr("id");

  //Add the contents of the variable userChosenColour to the end of userClickedPattern array
  userClickedPattern.push(userChosenColour);

  //Plays sound when user clicks on the button
  playSound(userChosenColour);

  console.log(userClickedPattern);

});

//Function to generate a random number between 0 and 3
function nextSequence() {
  //Generates a random number between 1 and 3
  var randomNumber = buttonColours[Math.floor(Math.random() * 4)];

  //New variable randomChosenColour to store the random colour
  var randomChosenColour = randomNumber;

  //Add the new randomChosenColour to the end of the gamePattern array
  gamePattern.push(randomChosenColour);

  //jQuery select the button with the same ID as the randomChosenColour and animate it with a flash
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //return randomChosenColour;

  //Refactoring the code in playSound() so it work for both playing sound in nextSequence() and when the user clicks a button
  playSound(randomChosenColour);

}

//Function to play sound that takes one parameter called name
function playSound(name) {
  //JS to play the sound for each button colour selected
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}