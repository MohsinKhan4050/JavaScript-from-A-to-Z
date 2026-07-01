/*
TASK: Print Array Elements

You are given an array:

let fruits = ["Apple", "Banana", "Mango", "Orange"];

REQUIREMENTS:
- Use a for loop
- Print each fruit one by one in this format:
  "Fruit: Apple"
  "Fruit: Banana"
  ...

RULES:
- Must use loop (no manual printing)
- Use fruits.length for loop condition
*/
let fruits = ["apple", "banana", "Mango", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log("fruit:", fruits[i])
}