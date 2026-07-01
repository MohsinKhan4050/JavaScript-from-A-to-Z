/*
TASK: Reverse Star Pattern

You are building an inverted pattern generator.

REQUIREMENTS:
- Print this pattern:

*****
****
***
**
*

RULES:
- Use loops
- Do NOT manually type stars
- Clean logic
*/

for (let i = 5; i >= 1; i--) {

    let stars = "";   // reset for each row

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}
