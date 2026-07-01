// Task 4:
// Create a function named `calculateTotalPrice`

// Now do this:
// 1. The function should take two parameters: price and quantity
// 2. Multiply price and quantity
// 3. Store the result in a variable named total
// 4. Print:
//    "Total Price: " + total
// 5. Call the function with different values to test it

// Example:
// calculateTotalPrice(500, 3)

// Output:
// Total Price: 1500

function calculateTotalPrice(price, quantity) {

    let total = price * quantity;
    console.log("Total Price: ", total);

}
calculateTotalPrice(2, 2);
calculateTotalPrice(3, 4);
calculateTotalPrice(10, 10);