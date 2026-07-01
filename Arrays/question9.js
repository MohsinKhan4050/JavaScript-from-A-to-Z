// Task 7:
// Create an array of numbers:
// Now do this:
// 1. Double each number (use a loop)
// 2. Store result in a new array
// 3. Print the new array

let numbers = [10, 20, 30, 40, 50];

let doubleNumbers = []

//double each number;
for (let i of numbers) {
    doubleNumbers.push(i + i)

}
console.log("doubled array:" , doubleNumbers)