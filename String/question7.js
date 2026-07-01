// let email = "  Mohsin.Khan123@Gmail.com  ";

// Now do this:
// 1. Remove extra spaces from both sides
// 2. Convert the email to lowercase
// 3. Extract the username (part before "@")
// 4. Extract the domain name (part after "@")
// 5. Replace "gmail.com" with "email.com"
// 6. Print all results


let email = "  Mohsin.Khan123@Gmail.com  ";

// 1
let cleanEmail = email.trim();
console.log(cleanEmail);

// 2
let lowerEmail = cleanEmail.toLowerCase();
console.log(lowerEmail);

// 3
let atIndex = lowerEmail.indexOf("@");
let username = lowerEmail.slice(0, atIndex);
console.log(username);

// 4
let domain = lowerEmail.slice(atIndex + 1);
console.log(domain);

// 5
let updateEmail = lowerEmail.replace("gmail.com", "email.com");
console.log(updateEmail);