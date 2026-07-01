// Task 5:
// Create a function named `checkAge`

// Now do this:
// 1. The function should take one parameter: age
// 2. If age is less than 18, print:
//    "You are not eligible"
// 3. Otherwise print:
//    "You are eligible"
// 4. Call the function with different ages to test it

// Example:
// checkAge(20)

// Output:
// You are eligible

function checkAge(age) {
    if (age < 18) {
        console.log("You are not eligible");
    }
    else {
        console.log("You are eligible")
    }
}
checkAge(20);
checkAge(30);
checkAge(14);
checkAge(18);