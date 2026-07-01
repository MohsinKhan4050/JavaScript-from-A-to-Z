// Task 9:
// Create an array of product prices:

// Now do this:
// 1. Find all prices that are greater than 100
// 2. Store them in a new array
// 3. Print the new array

let prices = [50, 120, 300, 80, 200];

let newPrice = [];

for (let i of prices) {

    if (i > 100) {
        newPrice.push(i);

    }
}
console.log(newPrice)