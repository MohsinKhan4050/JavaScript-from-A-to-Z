// Task 11:
// Create an array of numbers:
// Now do this:
// 1. Find all numbers that are divisible by 3
// 2. Store them in a new array
// 3. Print the new array

let numbers = [10, 25, 30, 45, 60, 75];
let newNumbers = [];

for (let i of numbers) {

    if (i % 3 === 0) {
        newNumbers.push(i);
    }
}
console.log("the number which are divisible by 3 is:", newNumbers)