// Task 10:
// Create a function named `checkScreenSize`

// Now do this:
// 1. The function should take one parameter: width
// 2. If width is less than 768, print:
//    "Mobile view"
// 3. Otherwise print:
//    "Desktop view"
// 4. Call the function with different screen widths

// Example:
// checkScreenSize(500)

// Output:
// Mobile view

function checkScreenSize(width) {
    if (width < 768) {
        console.log("Mobile view");
    }
    else {
        console.log("Desktop view");
    }
}
checkScreenSize(500);
checkScreenSize(1000);