// Task 17:
// Create an array of marks:

// Now do this:
// 1. Loop through the array
// 2. If marks are greater than or equal to 50,
//    print "Pass"
// 3. Otherwise print "Fail"

// Example:
// 45 → Fail
// 80 → Pass

let marks = [45, 80, 67, 90, 30];

for (let mark of marks) {

    if (mark >= 50) {
        console.log(mark, "Pass")
    }
    else {
        console.log(mark, "Fail")
    }
}