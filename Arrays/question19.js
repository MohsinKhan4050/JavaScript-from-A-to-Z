// Task 18:
// Create an array of passwords:

// Now do this:
// 1. Loop through the array
// 2. If password length is greater than or equal to 8,
//    print "Strong Password"
// 3. Otherwise print "Weak Password"

let passwords = ["abc123", "hello", "javascript123", "pass"];

for (let password of passwords) {

    if (password.length >= 8) {
        console.log(password, "Strong Password");
        
    } else {
        console.log(password, "Weak Password");
    }
}