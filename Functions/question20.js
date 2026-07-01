// Task 19:
// Create a function named `createEmail`

// Now do this:
// 1. The function should take two parameters:
//    username and domain
// 2. Combine them like this:
//    username + "@" + domain
// 3. Store the result in a variable named email
// 4. Print the email
// 5. Call the function with different values


// Output:
// mohsin@gmail.com

function createEmail(username, domain) {
    let email = `${username}@${domain}`;
    console.log(email)
}
createEmail("mohsin", "gmail.com")