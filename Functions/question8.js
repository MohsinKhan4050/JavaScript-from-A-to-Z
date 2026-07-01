// Task 6:
// Create a function named `toggleMenu`

// Now do this:
// 1. The function should take one parameter: isOpen
// 2. If isOpen is true, print:
//    "Menu is open"
// 3. Otherwise print:
//    "Menu is closed"
// 4. Call the function with both true and false

// Example:
// toggleMenu(true)

// Output:
// Menu is open

function toggleMenu(isOpen) {
    if (isOpen == true) {
        console.log("Menu is open");
    }
    else {
        console.log("Menu is closed");
    }
}
toggleMenu(true);
toggleMenu(false);