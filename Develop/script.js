// Assignment code here
function generatePassword() {
  const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  const numbers = [0,1,2,3,4,5,6,7,8,9]
  const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",":",";","'","<",",",">",".","?","/"]
  const length = parseInt(prompt("How many characters for your password"))
  const includeUpperCase = confirm("Press ok to include upper case")
  const includeLowerCase = confirm("Press ok to include lower case")
  const includeNumbers = confirm("Press ok to include numbers")
  const includeSymbols = confirm("Press ok to include symbols")
  let dictionary = []
  if(includeUpperCase) dictionary = [...dictionary,...upperCase]
  if(includeLowerCase) dictionary = [...dictionary,...lowerCase]  
  if(includeNumbers) dictionary = [...dictionary,...numbers]  
  if(includeSymbols) dictionary = [...dictionary,...symbols]
  let password = "";
  for (let index = 0; index < length; index++) {
    const randomIndex = Math.floor(Math.random() * dictionary.length)
    const randomCharacter = dictionary[randomIndex]
    password = password + randomCharacter
  }  
  console.log(dictionary)
  return password;
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
