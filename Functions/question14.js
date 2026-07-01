// Task 12:
// Create a function named `checkNotification`

// Now do this:
// 1. The function should take one parameter: notificationCount
// 2. If notificationCount is greater than 0, print:
//    "You have new notifications"
// 3. Otherwise print:
//    "No new notifications"
// 4. Call the function with different numbers

// Example:
// checkNotification(5)

// Output:
// You have new notifications


function checkNotification(notificationCount) {

    if (notificationCount > 0) {
        console.log("You have new notification")
    }
    else {
        console.log("No new notifications")
    }

}
checkNotification(5);
checkNotification(3);
checkNotification(0);