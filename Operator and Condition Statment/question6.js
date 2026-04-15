/*
TASK: Password Strength Checker (Frontend Validation)

You are building a signup form.

RULES:

You are given:
- password (string)

CHECKS:

1. If password length is less than 5
   → print "WEAK PASSWORD"

2. If password length is between 5 and 8 (inclusive)
   → print "MEDIUM PASSWORD"

3. If password length is greater than 8
   → print "STRONG PASSWORD"

REQUIREMENTS:
- Use only if / else if / else
- Use password.length
- Do NOT use arrays or advanced concepts
*/

let password = "moso";

if (password.length < 5) {
    console.log("WEAK PASSWORD")
}
else if (password.length >= 5 && password.length <= 8) {
    console.log("MEDIUM PASSWORD")
}
else {
    console.log("STRONG PASSWORD")
}

// the answers is "WEAK PASSWORD"