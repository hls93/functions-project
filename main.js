// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){
    if (num1 > num2) {
      return num1;
    }
    else {
      return num2;
    }
}
console.log(max(2, 3));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(n1, n2, n3){
    if (n1 > n2 && n1 > n3){
      return n1;
    }
    else if (n2 > n1 && n2 > n3) {
      return n2;
    }
    else{
      return n3;
    }
}

console.log(maxOfThree(1, 2, 3));


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    if ("char" === "a" || "e" || "i" || "o" || "u" || "A" || "E" || "I" || "O" || "U") {
      return true;
    }
    else {
      return false;
    }
}

console.log(isVowel("a"));


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write an example of it using the function.
function sum(p1, p2){
  return p1 + p2;
}

console.log(sum(2, 3));


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(a1, a2, a3) {
  return (a1 * a2 * a3)/3;
}

console.log(avg(1, 2, 3));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(aString){
  return aString.length;
}

console.log(getLength("Presumptious"));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(b1, b2){
  if (b1.length > b2.length) {
    return true;
  }
  else {
    return false;
  }
}

console.log(greaterThan("whats up", "doc"));


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(a) {
  return "Hello " + a + "!";
}

console.log(greet("Fergus"));


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madLib(w1, w2, w3, w4){
  return "The " + w1 + " fast " + w2 + " ate " + w3 + " for " + w4;
}

console.log(madLib("shiny", "unicorn", "rainbows", "dinner"));
