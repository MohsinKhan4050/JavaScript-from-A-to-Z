// Task 14:
// Create a function named `checkLikeButton`

// Now do this:
// 1. The function should take one parameter: isLiked
// 2. If isLiked is true, print:
//    "Post liked"
// 3. Otherwise print:
//    "Post not liked"
// 4. Call the function with true and false

// Example:
// checkLikeButton(true)

// Output:
// Post liked

function checkLikeButton(isLiked) {
    if (isLiked) {
        console.log("Post liked")
    }
    else {
        console.log("Post not liked")
    }
}
checkLikeButton(true);
checkLikeButton(false);