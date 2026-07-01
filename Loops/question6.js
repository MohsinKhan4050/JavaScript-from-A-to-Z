/*
TASK: Star Pattern (Level 1)

You are building a simple pattern generator.

REQUIREMENTS:
- Print this pattern:

*
**
***
****
*****

RULES:
- Use loops
- Do NOT manually type stars
- Clean logic
*/

for (let i = 1; i <= 5; i++) {

    let stars = "";   // reset for each row

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}

