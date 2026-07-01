/*
TASK: Find Smallest Number

You are building a number analyzer.

REQUIREMENTS:
- Use a for loop from 1 to 10
- Find the smallest number (min value logic)
- Store it in a variable called "min"
- Print the final min value

RULES:
- Must use loop
- Do NOT manually assign min = 1
- Use comparison logic inside loop
*/

let min = 10;

for (let i = 1; i <= 10; i++) {

    if (i < min) {
        min = i;
    }
}
console.log(min)