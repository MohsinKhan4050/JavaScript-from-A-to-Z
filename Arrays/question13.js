// Task 12:
// Create an array of prices:

// Now do this:
// 1. Apply 20% discount to each price
// 2. Store discounted prices in a new array
// 3. Print the result


let prices = [100, 250, 400, 150, 90];
let afterDiscount = [];

for (let i of prices) {

    afterDiscount.push(i - (i * 20 / 100));

}
console.log(afterDiscount);