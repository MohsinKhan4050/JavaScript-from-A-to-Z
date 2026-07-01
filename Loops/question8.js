/*
TASK: Count Even and Odd Numbers

You are building a number analyzer.

REQUIREMENTS:
- Use a for loop from 1 to 10
- Count how many EVEN numbers are there
- Count how many ODD numbers are there
- Print both counts

EXPECTED OUTPUT (example):
Even: 5
Odd: 5

RULES:
- Must use loop
- Must use if condition
- Use two variables: evenCount and oddCount
- Clean and readable code
*/

let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        evenCount++;
    }
    else {
        oddCount++;
    }

}
console.log("Even:", evenCount);
console.log("Odd:", oddCount);