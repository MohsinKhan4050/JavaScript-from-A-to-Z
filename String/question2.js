// Task 2:
// Create a variable with your name

// Now do this:
// 1. Print: "Welcome Mohsin" (use your variable, not hardcoded text)
// 2. Convert your name to UPPERCASE and print it
// 3. Convert your name to lowercase and print it
// 4. Print the FIRST and LAST character of your name (use dynamic method)

let name = "Mohsin";

console.log(`Welcome ${name}`)


// to upper case
let a = name.toUpperCase();
console.log(a);


// to lower case
let b = name.toLowerCase();
console.log(b);



//first and last charactear

console.log(name[0]); //first charector
console.log(name[name.length - 1]) //last charactor