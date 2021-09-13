// Assignment code here

var generatePassword = function() {
  var confirmLength = prompt("How many characters would you like your password to have? (8-128)");
  if (confirmLength > 8 && confirmLength < 128) {
      alert("Your password will have " + confirmLength + " characters in it.");
  } else {
      alert("Entry not valid. Please enter a valid length (8-128 characters)");
      return generatePassword(confirmLength);
  }
  var confirmLowercase = confirm("Will your password contain lowercase letters? Select 'OK' for yes or 'Cancel' for no.");
      if (confirmLowercase === true) {
          alert("Your password will have lowercase letters in it.");
      } else {
          alert("Your password will NOT have lowercase letters in it.");
      }
  var confirmUppercase = confirm("Will your password contain uppercase letters? Select 'OK' for yes or 'Cancel' for no.");
      if (confirmUppercase === true) {
          alert("Your password will have uppercase letters in it.");
      } else {
          alert("Your password will NOT have uppercase letters in it.");
      }
  var confirmNumbers = confirm("Will your password contain numbers? Select 'OK' for yes or 'Cancel' for no.");
      if (confirmNumbers === true) {
          alert("Your password will have numbers in it.");
      } else {
          alert("Your password will NOT have numbers in it.");
      }
  var confirmSpecialcharacters = confirm("Will your password contain special characters? Select 'OK' for yes or 'Cancel' for no.");
      if (confirmSpecialcharacters === true) {
          alert("Your password will have special characters in it.");
      } else {
          alert("Your password will NOT have special characters in it.");
      }
      if (confirm.confirmLowercase === false && confirm.confirmUppercase === false && confirm.confirmNUmbers === false && confirm.confirmSpecialCharacters === false) {
          alert("🤦 Lets do this again 🤦");
          return generatePassword(confirmLength);
      } else {
          alert("almost there");
      }

  }
  








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