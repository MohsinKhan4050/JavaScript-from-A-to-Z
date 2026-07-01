// Task 1:
// Create a function named `userInfo`

// Now do this:
// 1. The function should take one parameter: name
// 2. Print: "Welcome [name]"
// 3. Print the name in UPPERCASE
// 4. Print the name in lowercase
// 5. Print the FIRST and LAST character of the name (use dynamic method)
// 6. Call the function with your own name

function userInfo(name) {
    console.log("Welcome " + name);
    console.log(name.toUpperCase());
    console.log(name.toLowerCase());
    console.log(name[0]);
    console.log(name[name.length - 1]);


}
userInfo("Mohsin")