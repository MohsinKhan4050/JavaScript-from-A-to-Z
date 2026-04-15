/*
TASK: Login Message Display System (UI Logic)

You are building a simple login page.

You are given:
- isLoggedIn (true/false)

RULES:

1. If isLoggedIn is true
   → print "WELCOME TO DASHBOARD"
   → showDashboard = true

2. If isLoggedIn is false
   → print "PLEASE LOGIN FIRST"
   → showDashboard = false

REQUIREMENTS:
- Use only if / else
- Assume variable is already given
*/


isLoggedIn = true;
showDashboard = false;

if (isLoggedIn === true) {
    console.log("WELCOME TO DASHBOARD");
    showDashboard = true;

}
else {
    console.log("PLEASE LOGIN FIRST");
    showDashboard = false;
}

// the answers is "WELCOME TO DASHBOARD"  and  true;