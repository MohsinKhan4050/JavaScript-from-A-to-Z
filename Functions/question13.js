// Task 11:
// Create a function named `checkButtonState`

// Now do this:
// 1. The function should take one parameter: isDisabled
// 2. If isDisabled is true, print:
//    "Button is disabled"
// 3. Otherwise print:
//    "Button is active"
// 4. Call the function with true and false

// Example:
// checkButtonState(true)

// Output:
// Button is disabled

function checkButtonState(isDisabled) {

    if (isDisabled) {
        console.log("Button is disabled");
    }
    else {
        console.log("Button is active");
    }

}
checkButtonState(true);
checkButtonState(false);