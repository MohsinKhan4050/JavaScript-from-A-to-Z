/*
TASK: Reverse Even Numbers

You are building a filtered countdown.

REQUIREMENTS:
- Use a for loop
- Print EVEN numbers from 20 to 1 (reverse)
- Example output: 20, 18, 16, ..., 2

RULES:
- Must use loop
- Must use condition (if)
- Clean and readable code
*/

for (let i = 20; i >= 1; i--) {
    if (i % 2 === 0) {
        console.log(i)
    }
}