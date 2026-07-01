// Task 8:
// Create an array of prices:
// Now do this:
// 1. Add 10% tax to each price
// 2. Store updated prices in a new array
// 3. Print final array

let prices = [100, 200, 300, 400]

let finalPrices = [];

for (let price of prices) {
    finalPrices.push(price + (price * 10 / 100));
}
console.log("Final Prices with Tax:", finalPrices)