// Task 7:
// Create a function named `checkLogin`

// Now do this:
// 1. The function should take one parameter: isLoggedIn
// 2. If isLoggedIn is true, print:
//    "Welcome to dashboard"
// 3. Otherwise print:
//    "Please login first"
// 4. Call the function with true and false

// Example:
// checkLogin(true)

// Output:
// Welcome to dashboard


function checkLogin(isLoggedIn) {
    if (isLoggedIn) {
        console.log("Welcome to dashboard");
    }
    else {
        console.log("Please login first");
    }
}
checkLogin(true);
checkLogin(false);