/*
TASK: Find Largest Number

You are building a number analyzer.

REQUIREMENTS:
- Use a for loop from 1 to 10
- Find the largest number
- Store it in a variable called "max"
- Print the final max value

RULES:
- Must use loop
- Do NOT manually set max = 10
- Use logic inside loop
*/

let max = 0;

for (let i = 1; i <= 10; i++) {
    if (i > max) {
        max = i;
    }
}
console.log(max)