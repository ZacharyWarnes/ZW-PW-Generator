//What sort of data does my app need to work? starting variables?
//storing all needed charachters in variables including: upper and lower case 
//letters, numbers, and symbols or 'special characters'.


var upperCaseAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ["!","@","#","$","%","^","&","*","-","+","="];

function generatePassword() {

  var passwordLength = window.prompt("How many characters would you like your password to be. Chose a number between 8 and 128");
  
  if (passwordLength < 8) {
    window.alert ("Incorrect Choice! Please choose a number between 8 and 128");
    return;
  }
  else if (passwordLength > 128) {
    window.alert("Incorrect Choice! Please choose a number between 8 and 128");
    return;

  }
  console.log(passwordLength);
  
  var numbersEl = window.confirm ("Click OK to use numbers in your password");
  console.log(numbersEl);

  var upperCaseEl = window.confirm ("Click OK to use Upper Case letters in your password");
  console.log(upperCaseEl);

  var lowerCaseEl = window.confirm ("Click OK to use Lower Case letters in your password ");
  console.log(lowerCaseEl);

  var symbolsEl = window.confirm ("Click OK to use symbols in your password");
  console.log(symbolsEl);


  // Write conditional to force user to provide input or alert that operation is cancelled 

  //Combined character Array

  var charactersCombined = []

  var userPassword = ""

  if (numbersEl) {
    charactersCombined = charactersCombined.concat(numbers);
    userPassword = userPassword + numbers[Math.floor(Math.random()*numbers.length)];
  }
  if (upperCaseEl) {
    charactersCombined = charactersCombined.concat(upperCaseAlpha);
    userPassword = userPassword + upperCaseAlpha[Math.floor(Math.random()*upperCaseAlpha.length)];
  }
  if (lowerCaseEl) {
    charactersCombined = charactersCombined.concat(lowerCaseAlpha);
    userPassword = userPassword + lowerCaseAlpha[Math.floor(Math.random()*lowerCaseAlpha.length)];
  }
  if (symbolsEl) {
    charactersCombined = charactersCombined.concat(symbols);
    userPassword = userPassword + symbols[Math.floor(Math.random()*symbols.length)];
  }
console.log(userPassword);
  
for (var i = userPassword.length; i < passwordLength; i++){
  userPassword = userPassword + charactersCombined[Math.floor(Math.random()*charactersCombined.length)];
  
}
  


  //Adding that character to a building password string;

  // Return the completed string;

  return userPassword;
  

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
generateBtn.addEventListener("click", writePassword);
