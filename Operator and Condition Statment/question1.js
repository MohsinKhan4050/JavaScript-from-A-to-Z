/*
TASK: Authentication System (Login Module)

You are building a login feature for a web application.

REQUIREMENTS:
- Take two inputs: username and password
- If username is "admin" AND password is "1234"
    → print "LOGIN SUCCESS"
    → set isAuthenticated = true
- If username is correct but password is wrong
    → print "PASSWORD INCORRECT"
- If username is wrong
    → print "USER NOT FOUND"

RULES:
- Use if / else if / else
- Write clean and readable code
- Assume inputs are already given as variables
*/

let username = "admin";
let password = "1234";
let isAuthenticated = false;

if (username === "admin") {
    if (password === "1234") {
        console.log("LOGIN SUCCESS");
        isAuthenticated = true;

    }
    else {
        console.log("PASSWORD INCORRECT")
    }
}

else {
    console.log("USER NOT FOUND")
}

// the solution is "LOGIN SUCCESS"   ture;