// Task 5:
// Create a variable with this string:

// Now do this:
// 1. Find the length of the string
// 2. Convert the string to uppercase
// 3. Replace first occurrence of "coding" with "learning"
// 4. Find the position (index) of the word "JavaScript"
// 5. Check if the string starts with "Coding"
// 6. Print all results


let message = "Coding with JavaScript makes coding fun";

// 1
console.log(message.length); //39

// 2
console.log(message.toUpperCase());

// 3
console.log(message.replace("Coding", "learning"));

// 4
console.log(message.indexOf("JavaScript"))

// 5
console.log(message.startsWith("Coding")); //ture because string are immutable
