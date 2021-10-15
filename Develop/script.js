
// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password variables
var upperLetters = ("A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z")
var lowerLetters = ("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z")
var numbers = ("1,2,3,4,5,6,7,8,9,0")
var symbols = ("~,!,@,#,$,%,^,&,*,(,),-,+,=,.,/, " )



var generatePassword;
var upperConf;
var lowerConf;
var numberConf;
var symbolConf;
var passwordLength;


// Add event listener to generate button
generateBtn.addEventListener("click", confirmLength);
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", confirmUpper);
generateBtn.addEventListener("click", confirmLower);
generateBtn.addEventListener("click", confirmNumber);
generateBtn.addEventListener("click", confirmSymbol);


//Function to determine the length of the password

function confirmLength(){
  passwordLength = prompt("How long would you like your password to be?(Must be between 8-128 characters):");
  console.log(passwordLength)
  //validate prompt answer for length
  if (passwordLength < 8 || passwordLength === null) {
    alert("Password must be between 8-128 characters");
    return confirmLength();
  
  } else if(passwordLength>128 || passwordLength === null) {
    alert("Password must be between 8-128 characters");
    return confirmLength();
    
  }
};


//Function to confirm uppercase letters

function confirmUpper() {
  upperConf = prompt("Do you want to include Uppercase Letters?(Yes or No):");
  upperConf = upperConf.toLowerCase();
  

  if (upperConf === null || upperConf ==="") {
    alert("Please write Yes or No")
    confirmUpper();
    
  } else if(upperConf==="yes") {
    upperConf = true;
    return upperConf;

  } else if(upperConf==="no") {
    upperConf = false;
    return upperConf;
  }else {
    alert("Please write Yes or No")
    confirmUpper();
  }
  return upperConf;
};



//Function to confirm lowercase letters

function confirmLower() {
  lowerConf = prompt("Do you want to include lowercase Letters?(Yes or No):");
  lowerConf = lowerConf.toLowerCase();

  if (lowerConf === null || lowerConf ==="") {
    alert("Please write Yes or No")
    confirmLower();
    
  } else if(lowerConf==="yes" || lowerConf ==="y"){
    lowerConf = true;
    return lowerConf;

  } else if(lowerConf==="no" || lowerConf ==="n"){
    lowerConf = false;
    return lowerConf;

  }else {
    alert("Please write Yes or No")
    confirmLower();
  }
  return lowerConf;

  };

// Function to confirm numbers

function confirmNumber() {
  numberConf = prompt("Do you want to include numbers?(Yes or No):");
  numberConf = numberConf.toLowerCase();

  if (numberConf === null || numberConf ==="") {
    alert("Please write Yes or No")
    confirmNumber();
    
  } else if(numberConf==="yes" || numberConf ==="y"){
    numberConf = true;
    return numberConf;

  } else if(numberConf==="no" || numberConf ==="n"){
    numberConf = false;
    return numberConf;

  }else {
    alert("Please write Yes or No")
    confirmNumber();
  }
  return numberConf;

  };

// Function to confirm symbols

function confirmSymbol() {
  symbolConf = prompt("Do you want to include special characters?(Yes or No):");
  symbolConf = symbolConf.toLowerCase();

  if (symbolConf === null || symbolConf ==="") {
    alert("Please write Yes or No")
    confirmNumber();
    
  } else if(symbolConf==="yes" || symbolConf ==="y"){
    symbolConf = true;
    return symbolConf;

  } else if(symbolConf==="no" || symbolConf ==="n"){
    symbolConf = false;
    return symbolConf;

  }else {
    alert("Please write Yes or No")
    confirmSymbol();
  }
  return symbolConf;

  };

function generatePassword() {
  var randomChar = upperLetters; lowerLetters; numbers; symbols;
  var password = "";

  if (upperConf&&numberConf&&symbolConf&&lowerConf) {
    randomChar+=upperLetters+numbers+symbols+lowerLetters;

  } else if (upperConf&&numberConf&&symbolConf) {
    randomChar+=upperLetters+numbers+symbols;
    
  }else if (upperConf&&numberConf&&lowerConf) {
    randomChar+=upperLetters+numbers+lowerLetters;

  }else if (upperConf&&numberConf) {
    randomChar+=upperLetters+numbers;

  }else if (numberConf&&symbolConf&&lowerConf) {
    randomChar+=numbers+symbols+lowerLetters;

  }else if (numberConf&&symbolConf) {
    randomChar+=numbers+symbols;

  }else if (numberConf&&lowerConf) {
    randomChar+=numbers+lowerLetters;
  
  }else if (symbolConf&&lowerConf) {
    randomChar+=symbols+lowerLetters;

  }else if (upperConf) {
    randomChar+=upperLetters;

  }else if (numberConf) {
    randomChar+=numbers;

  }else if (symbolConf) {
    randomChar+=symbols;

  }else if (lowerConf) {
    randomChar+=lowerLetters;
  }
  
  for(var i = 0; i < passwordLength; i++){
    password += randomChar.charAt(Math.floor(Math.random() * randomChar.length));
    
  }
  return password;

};
  
 

   
   


 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};




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

*/