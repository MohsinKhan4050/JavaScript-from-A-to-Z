// Task 19:
// Create an array of numbers:

// Now do this:
// 1. Loop through the array
// 2. Print each number multiplied by its index

// Example output:
// 0 * 2 = 0
// 1 * 4 = 4
// 2 * 6 = 12
// ...

let numbers = [2, 4, 6, 8, 10];

for (let i = 0; i < numbers.length; i++) {

    console.log(`${i} * ${numbers[i]}= ${i * numbers[i]}`)
}
