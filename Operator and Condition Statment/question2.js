/*
TASK: Dashboard Access Control System

RULES:
1. If role is "admin"
   → print "FULL ACCESS"

2. If role is "editor"
   → print "EDIT ACCESS"

3. If role is "viewer"
   → print "READ ONLY ACCESS"

4. If role is anything else
   → print "ACCESS DENIED"

*/

let role = "admin";

if (role === "admin") {
    console.log("FULL ACCESS")
}
else if (role === "editor") {
    console.log("EDIT ACCESS")
}

else if (role === "viewer") {
    console.log("READ ONLY ACCESS")
}
else {
    console.log("ACCESS DENIED")
}

// the anwers is  "FULL ACCESS";