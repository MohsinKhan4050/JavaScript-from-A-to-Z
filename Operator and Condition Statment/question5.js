/*
TASK: Button Enable/Disable System (Web UI Logic)

You are building a simple form submission system.

RULES:

You have these variables:
- isLoggedIn (true/false)
- hasFilledForm (true/false)

LOGIC:

1. If user is NOT logged in
   → print "PLEASE LOGIN FIRST"
   → button should be "DISABLED"

2. If user is logged in BUT form is NOT filled
   → print "FILL THE FORM"
   → button should be "DISABLED"

3. If user is logged in AND form is filled
   → print "READY TO SUBMIT"
   → button should be "ENABLED"
*/

let isLoggedIn = false;
let hasFilledForm = false;
let buttonEnable = false;


if (isLoggedIn === false) {
    console.log("PLEASE LOGIN FIRST")
    buttonEnable = false;
}

else if (isLoggedIn === true && hasFilledForm === false) {
    console.log("FILL THE FORM");
    buttonEnable = false;
}
else {
    console.log("READY TO SUBMIT");
    buttonEnable = true;
}

// the final results will be "PLEASE LOGIN FIRST";