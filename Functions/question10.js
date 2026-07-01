// Task 8:
// Create a function named `checkCartItems`

// Now do this:
// 1. The function should take one parameter: items
// 2. If items is 0, print:
//    "Your cart is empty"
// 3. Otherwise print:
//    "You have items in your cart"
// 4. Call the function with different numbers

// Example:
// checkCartItems(3)

// Output:
// You have items in your cart

function checkCartItems(items) {

    if (items == 0) {
        console.log("Your cart is empty");
    }
    else {
        console.log("You have items in your cart")
    }

}
checkCartItems(2);
checkCartItems(0);




