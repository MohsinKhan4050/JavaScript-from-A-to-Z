/*
TASK: User Login + Role-Based Dashboard Access

INPUTS:
- username
- password
- role

VALID USERS:
- username: "admin", password: "1234", role: "admin"
- username: "user", password: "1234", role: "viewer"

RULES:

STEP 1: Authentication
- If username and password are correct → login success
- Otherwise → login failed

STEP 2: After successful login:
- If role is "admin"
    → print "WELCOME ADMIN - FULL ACCESS"

- If role is "viewer"
    → print "WELCOME USER - READ ONLY ACCESS"

- If role is anything else
    → print "ROLE NOT RECOGNIZED"

STEP 3:
- If login fails, do NOT check role
*/



let username = "admin";
let password = "1234";
let role = "admin";

if (username === "admin" && password === "1234") {

    console.log("LOGIN SUCCESS");

    if (role === "admin") {
        console.log("WELCOME ADMIN - FULL ACCESS");
    }
    else if (role === "viewer") {
        console.log("WELCOME USER - READ ONLY ACCESS");
    }
    else {
        console.log("ROLE NOT RECOGNIZED");
    }

}
else {
    console.log("LOGIN FAILED");
}