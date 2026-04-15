/*
TASK: Exam Result Status System (UI Logic)

You are building a simple result page for students.

You are given:
- marks (number)

RULES:

1. If marks are less than 33
   → print "FAIL"
   → isPassed = false

2. If marks are between 33 and 59
   → print "PASS - GRADE C"
   → isPassed = true

3. If marks are between 60 and 79
   → print "PASS - GRADE B"
   → isPassed = true

4. If marks are 80 or above
   → print "PASS - GRADE A"
   → isPassed = true

REQUIREMENTS:
- Use if / else if / else
- Use comparison operators (>=, <=, <)
- Assume variables are already given
*/

let marks = 50;
let isPassed = false;


if (marks < 33) {
    console.log("FAIL");
    isPassed = false;

}

else if (marks >= 33 && marks <= 59) {
    console.log("PASS - GRADE C");
    isPassed = true;

}
else if (marks >= 60 && marks <= 79) {
    console.log("PASS - GRADE B");
    isPassed = true;
}

else {
    console.log("PASS - GRADE A");
    isPassed = true;
}