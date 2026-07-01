// Task 9:
// Create a function named `checkTheme`

// Now do this:
// 1. The function should take one parameter: theme
// 2. If theme is equal to "dark", print:
//    "Dark mode enabled"
// 3. Otherwise print:
//    "Light mode enabled"
// 4. Call the function with different theme values

// Example:
// checkTheme("dark")

// Output:
// Dark mode enabled

function checkTheme(theme) {
    if (theme === "dark") {
        console.log("Dark mode enabled");
    }
    else {
        console.log("Light mode enabled");
    }
}
checkTheme("dark");
checkTheme("light")