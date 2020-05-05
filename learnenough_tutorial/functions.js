// Reverses a string
let string = "Racercar";
function reverse(string){
  return Array.from(string).reverse().join("");
}

//Return true for a palindrome, false otherwise.
function isPalindrome(string){
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

// Splits email to username and domain.
let email = "username@example.com"
function emailParts(email){
  let ignoreCase = email.toLowerCase()
  return ignoreCase.split("@");
}
