// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
Mock-Up */


// When I click the button I generate a prompt window asking me if i'd like to select my criteria.
  // If 'yes', begin generate function. --> New window prompt for length

  // function to check if player wants to fight or skip
var writePassword = function() {

  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // validate prompt answer
  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return fightOrSkip();
  }

  
  // When window prompt opens it will ask for the length of the password (min. 8 - max. 128)
    // If valid input --> New window prompt for character types
    // If not valid input --> Tell invalid input and rerun prompt

  // When window prompt opens it will ask for th

  // If 'no', begin randomization function

  /* GAME INFORMATION / VARIABLES */



function = generatePasssword();



 



var characters = {
  lowercase: abcdefghijklmnopqrstuvwxyz,
  uppercase: ABCDEFGHIJKLMNOPQRSTUVWXYZ,
  numerical: 0123456789,
  specialcharacters: ~!@#$%&*()-+?,
}
