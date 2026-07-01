// Task 13:
// Create a function named `loginSystem`

// Now do this:
// 1. The function should take two parameters: username, password
// 2. If username is "admin" AND password is "1234", print:
//    "Login successful"
// 3. Otherwise print:
//    "Invalid credentials"
// 4. Test with different values

// Example:
// loginSystem("admin", "1234")

function loginSystem(username, password) {

    if (username === "admin" && password === "1234") {
        console.log("Login successful");
    }
    else {
        console.log("Invalid credentials")
    }
}
loginSystem("admin", "1234");
loginSystem("Mohsin", "6789");