// Task 3:
// Create a function named `checkPasswordStrength`

// Now do this:
// 1. The function should take one parameter: password
// 2. If password length is less than 6, print: "Weak password"
// 3. If password length is between 6 and 10, print: "Medium password"
// 4. If password length is greater than 10, print: "Strong password"
// 5. Call the function with different password values to test it

function checkPasswordStrength(password) {
    if (password.length < 6) {
        console.log("Weak password")
    }
    else if(password.length >= 6 && password.length <= 10){
        console.log("Medium password")
    }
    else{
        console.log("Strong password")
    }
}
checkPasswordStrength("Hell");
checkPasswordStrength("MohsinKhan");
checkPasswordStrength("MohsinKhanWazir1122")