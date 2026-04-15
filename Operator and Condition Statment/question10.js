/*
TASK: Website Theme Mode System (UI Logic)

You are building a website that supports light and dark mode.

You are given:
- isDarkMode (true/false)
- isLoggedIn (true/false)

RULES:

1. If user is NOT logged in
   → print "PLEASE LOGIN TO USE THEME SETTINGS"
   → theme = "default"

2. If user is logged in AND isDarkMode is true
   → print "DARK MODE ENABLED"
   → theme = "dark"

3. If user is logged in AND isDarkMode is false
   → print "LIGHT MODE ENABLED"
   → theme = "light"

REQUIREMENTS:
- Use if / else if / else
- Use logical operators (&&)
- Assume variables are already given
*/


let isDarkMode = false;
let isLoggedIn = false;
let theme = "";

if (isLoggedIn === false) {
    console.log("PLEASE LOGIN TO USE THEME SETTINGS");
    theme = "default";
}
else if (isDarkMode === true) {
    console.log("DARK MODE ENABLED");
    theme = "dark";
}

else {
    console.log("LIGHT MODE ENABLED");
    theme = "light"
}
// the answers is "PLEASE LOGIN TO USE THEME SETTINGS" , default;