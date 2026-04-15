/*
TASK: Age-Based Access Control System (UI Logic)

You are building a website that controls user access based on age.

You are given:
- age (number)

RULES:

1. If age is less than 13
   → print "YOU ARE A KID - ACCESS DENIED"
   → accessGranted = false

2. If age is between 13 and 17 (inclusive)
   → print "YOU ARE A TEEN - LIMITED ACCESS"
   → accessGranted = true

3. If age is 18 or above
   → print "YOU ARE AN ADULT - FULL ACCESS"
   → accessGranted = true
*/


let age = 10;
accessGranted = false;

if (age < 13) {
    console.log("YOU ARE A KID - ACCESS DENIED");
    accessGranted = false;
}
else if (age >= 13 && age <= 17) {
    console.log("YOU ARE A TEEN - LIMITED ACCESS");
    accessGranted = true;
}

else {
    console.log("YOU ARE AN ADULT - FULL ACCESS");
    accessGranted = true;
}


