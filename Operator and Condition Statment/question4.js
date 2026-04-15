/*
TASK: Advanced Login System (Error Handling Like Real Apps)


VALID USERS:
- username: "admin", password: "1234"
- username: "user", password: "5678"

RULES:

STEP 1: Check username first
- If username is neither "admin" nor "user"
    → print "USER NOT FOUND"
    → STOP execution

STEP 2: If username is valid, check password

- If password is incorrect
    → print "WRONG PASSWORD"

STEP 3: If both username and password are correct
    → print "LOGIN SUCCESS"

    */



let username = "admin";
let password = "1234";

if (username !== "admin" && username !== "user") {
    console.log("USER NOT FOUND")
}

else if ((username === "admin" && password !== "1234") ||
    (username === "user" && password !== "5678")

) {
    console.log("WRONG PASSWORD")
}
else {
    console.log("LOGIN SUCCESS");
}