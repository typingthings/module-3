// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "1234567890"
var specialCharacters = "!@#$%^&*()_+~`"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var password = ""
  var passwordLength = prompt("please enter password size between 8 and 128 characters")
  if (passwordLength >= 8 && passwordLength <= 128) {
    var checkLowercase = confirm("do you want to include lowercase in your password")
    var checkUppercase = confirm("do you want to include uppercase in your password")
    var checkNumeric = confirm("do you want to include numeric in your password")
    var checkSpecialcharacters = confirm("do you want to include special characters in your password")
    for (var i = 0; i < passwordLength; i++) {


      if (checkLowercase === true && password.length < passwordLength) {
        var position = Math.floor(Math.random() * 26)
        password = password + lowerCase[position]
      }
      if (checkUppercase === true && password.length < passwordLength) {
        var position = Math.floor(Math.random() * 26)
        password = password + upperCase[position]
      }
      if (checkNumeric === true && password.length < passwordLength) {
        var position = Math.floor(Math.random() * 10)
        password = password + numeric[position]
      }
      if (checkSpecialcharacters === true && password.length < passwordLength) {
        var position = Math.floor(Math.random() * 14)
        password = password + specialCharacters[position]
      }
    }
  }
  else {
    alert("incorrect password size")

  }
  return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
