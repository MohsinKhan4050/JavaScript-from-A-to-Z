// Task 2:
// Create a function named `findLength`

// Now do this:
// 1. The function should take one parameter: text
// 2. Print the length of the text
// 3. Print: "First character is: X"
// 4. Print: "Last character is: Y"
// 5. Print the text in UPPERCASE
// 6. Call the function with your own name

function findLength(text) {
    console.log(text.length); // 1
    console.log("First character is:", text[0]);  // 2
    console.log("Last character is:", text[text.length - 1]); // 3
    console.log(text.toUpperCase()); // 4    
}

findLength("Mohsin")