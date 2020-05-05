// Reverses a string
let string = "Racercar";

function reverse(string){
  return Array.from(string).reverse().join("");
}

//Return true for a palindrome, false otherwise.

function palindrome(string){
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}
