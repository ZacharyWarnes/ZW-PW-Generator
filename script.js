//What sort of data does my app need to work? starting variables?
//storing all needed charachters in variables including: upper and lower case 
//letters, numbers, and symbols or 'special characters'.

var upperCaseAlpha = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var lowerCaseAlpha = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var numbers = "0,1,2,3,4,5,6,7,8,9";
var symbols = "!,@,#,$,%,^,&,*,_,-,+,=";

// What are the tasks that my code needs to compelte?


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
