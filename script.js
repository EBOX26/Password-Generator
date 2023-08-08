// Arrays
var number = ['1','2','3','4','5','6','7','8','9','0'];

var special = ['~','!','@','#','$','%','^','&','*','_','+',']','[','{','}','>','<','*'];

var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','v','w','x','y','z'];


function generatePassword() {
  //ignore button clicked
  console.log('Button clicked!');
  // add prompt for password criteria, starting with length
  var userLength = prompt(
    'How many characters would you like your password to have? Please choose between 8 and 128.'
  );

  // while loop will execute if parameters on length are not met, user will be alerted
  while (userLength <= 7 || userLength >= 129) {
    alert('Password length must be between 8-128 characters Try again.');
    var userLength = prompt(
      'How many characters would you like your password to have?'
    );
  }
  // used alert to repeat users answer
  alert('Your password will have ' + userLength + ' characters.');

  // collect parameters of password
  // number, special, upper, lower
  // used confirm instead of prompt to allow for only yes or no answers
  var userNumber = confirm(
    'Click OK if you would like to have numbers, Cancel if not.'
  );
  var userSpecial = confirm(
    'Click OK if you would like to have special characters, Cancel if not.'
  );
  var userUpper = confirm(
    'Click OK if you would like to have uppercase letters, Cancel if not.'
  );
  var userLower = confirm(
    'Click OK if you would like to have lowercase letters, Cancel if not.'
  );
 
  // all variables === to false will cause while loop to execute, user will be alerted
  while (
    userNumber === false &&
    userSpecial === false &&
    userUpper === false &&
    userLower === false
  ) {
    alert('You must choose at least one type of character.');

    var userNumber = confirm(
      'Click OK if you owuld like to have numbers, Cancel if not.'
    );
    var userSpecial = confirm(
      'Click OK if you would like to have special characters, Cancel if not.'
    );
    var userUpper = confirm(
      'Click OK if you would like to have uppercase letters, Cancel if not.'
    );
    var userLower = confirm(
      'Click OK if you would like to have lowercase letters, Cancel if not.'
    );
  }

  var passwordChar = [];
  // used concat method to add certain characters to passwordChar if confirmed by the user 

  if (userNumber) {
    passwordChar = passwordChar.concat(number);
  }
  
  if (userSpecial) {
    passwordChar = passwordChar.concat(special);
  }

  if (userUpper) {
    passwordChar = passwordChar.concat(upper);
  }

  if (userLower) {
    passwordChar = passwordChar.concat(lower);
  }


  var random = '';
  // for loop
  for (var i = 0; i < userLength; i++) {
    random =
      random +
      passwordChar[Math.floor(Math.random() * passwordChar.length)];
    console.log(random);
  }
  return random;
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