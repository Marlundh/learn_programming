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

/*
  // Usage of for loop
for (let i = 0; i array.length; i++){
  console.log(array[i]);
};

  // Usage of forEach loop
array.forEach(function(element) {
  console.log(element);
  });
*/

  // Examples of forEach loops
let a=["ant", "bat", "cat", 42];
a.forEach(function(element){
  console.log(element);
});

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character){
  console.log(character);
});

let strings = "Honey Badger";
Array.from(strings).forEach((strings) => {
  console.log(strings);
});

let numberSorting = [8, 17, 42, 99];
numberSorting.sort(function(a, b) { return b - a;});

numberSorting.forEach(function(single){
  console.log(single);
});

numberSorting.forEach((number) =>{
  console.log(number);
});
