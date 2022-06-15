//What sort of data does my app need to work? starting variables?
//storing all needed charachters in variables including: upper and lower case 
//letters, numbers, and symbols or 'special characters'.

var upperCaseAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ["!","@","#","$","%","^","&","*","_","-","+","="];

// What are the tasks that my code needs to compelte?
// The core of this assingment is to declare the generate password function

function generatePassword() {  

  var lengthChoice = prompt("How many characters would you like your password to be. Chose a number between 8 and 128");
  var passwordLength = textContent.lengthChoice;

  if (passwordLength < 8) {
    prompt ("please choose a number between 8 and 128");
    return;

  if (passwordLength > 128) 
    prompt("please choose a number between 8 and 128");
    return;
  }


  

  //we can use iterative processing to use the arrays above to build a password
  // for (var i = 0; i < passwordLength; i++)
  
  // 'Prompt' the user for their 'passwordLength' and store it in a variable

  //Validate the password length and make sure it's a number between or equal to 8 and 128.

  // IF 'passwordLength' is greater than or equal to 8 and 'passwordLength' is less than or equal to 128

  //Prompt the user if they want numbers and store it in a variable
// var numbersEl = false;
  // Prompt the user for if they want lower case and store it in a variable
// var lowerCaseEl = false;
  // Prompt the suer if they want upper case and store it in a variable 
// var upperCaseEl = false;
  //Prompt the user for if they want special characters and store it in a variable
// var symbolEl = false;
  //Valadate that one chacter choice is 'true'

  // if() {
  //   return ";"
  // }

  // DECLARE a new empty array to store all of the characters we want to use 

  // Randomly select characters

  //Adding that character to a building password string;

  // Return the completed string;

  

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
