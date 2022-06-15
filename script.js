//What sort of data does my app need to work? starting variables?
//storing all needed charachters in variables including: upper and lower case 
//letters, numbers, and symbols or 'special characters'.


var length = [""]
var upperCaseAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ["!","@","#","$","%","^","&","*","_","-","+","="];

function generatePassword() {

  var lengthChoice = window.prompt("How many characters would you like your password to be. Chose a number between 8 and 128");
  var passwordLength = [lengthChoice];

  if (passwordLength < 8) {
    window.alert ("Incorrect Choice! Please choose a number between 8 and 128");
    return;
  }
  else if (passwordLength > 128) {
    window.alert("Incorrect Choice! Please choose a number between 8 and 128");
    return;

  }
  console.log(passwordLength);
  
  var numbersChoice = window.confirm ("Click OK to use numbers in your password");
  var numbersEl = [numbersChoice];
  console.log(numbersEl);

  var upperCaseChoice = window.confirm ("Click OK to use Upper Case letters in your password");
  var upperCaseEl = [upperCaseChoice];
  console.log(upperCaseEl);

  var lowerCaseChoice = window.confirm ("Click OK to use Lower Case letters in your password ");
  var lowerCaseEl = [lowerCaseChoice];
  console.log(lowerCaseEl);

  var symbolsChoice = window.confirm ("Click OK to use symbols in your password");
  var symbolsEl = [symbolsChoice];
  console.log(symbolsEl);


  // Write conditional to force user to provide input or alert that operation is cancelled 

  //Combined character Array

  var charactersCombined = []

  if (passwordLength) {
    charactersCombined =  charactersCombined.concat(length);
  } 
  if (numbersEl) {
    charactersCombined = charactersCombined.concat(numbers);
  }
  if (upperCaseEl) {
    charactersCombined = charactersCombined.concat(upperCaseAlpha);
  }
  if (lowerCaseEl) {
    charactersCombined = charactersCombined.concat(lowerCaseAlpha);
  }
  if (symbolsEl) {
    charactersCombined = charactersCombined.concat(symbols);
  }

// Password Variable
  // var userPassword = ""



  // FOr Loop to Randomize FInal user choices
  
  // for (var i = 0; i < passwordLength; i++)
  // userPassword + charactersCombined all that mathfloor stuff...


  

  //Adding that character to a building password string;

  // Return the completed string;

  // return userPassword;
  

}

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
