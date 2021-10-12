
// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password variables
var upperLetters = ("A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z")
var lowerLetters = ("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z")
var numbers = ("1,2,3,4,5,6,7,8,9,0")
var symbols = ("~,!,@,#,$,%,^,&,*,(,),-,+,=,.,/, " )

var passwordLength;
var generatePassword;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", confirmLength);

//Function to determine the length of the password

function confirmLength(){
  prompt("How long would you like your password to be?(Must be between 8-128 characters):");
  if (passwordLength<8) {
    alert("Password must be between 8-128 characters");
    prompt("How long would you like your password to be?(Must be between 8-128 characters):");
  
  } else if(passwordLength>128) {
    alert("Password must be between 8-128 characters");
    prompt("How long would you like your password to be?(Must be between 8-128 characters):");
    
  }
  return confirmLength();
}













  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page








//Password Criteria - confirm uppercase

function confirmUppercase() {
  var upperLetters = prompt("Do you want to include uppercase letters?(yes or No):")
  if (upperLetters === null || confirmUppercase === ""){
    alert("Please answer Yes or No");
}

confirmUppercase();
 */
