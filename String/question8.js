// Task 8:
// Create a variable with this string:

// let fullName = "   Muhammad Mohsin Khan   ";

// Now do this:
// 1. Remove extra spaces from both sides
// 2. Convert the full name into lowewrcase
// 3. Convert the full name into an array of words
// 4. Find how many words are in the full name
// 5. Join the words using "_"
// 6. Extract only "Mohsin" using a string method
// 7. Print all results

let fullName = "   Muhammad Mohsin Khan   ";

// 1
let cleanfullName = fullName.trim();
console.log(cleanfullName);

// 2
let lowerCase = cleanfullName.toLowerCase();
console.log(lowerCase);

// 3
let arrayWord = lowerCase.split(" ");
console.log(arrayWord);

// 4
let words = arrayWord.length;
console.log(words)

// 5
let joinWords = arrayWord.join("_");
console.log(joinWords);

// 6
let mohsin = lowerCase.slice(9, 15);
console.log(mohsin);