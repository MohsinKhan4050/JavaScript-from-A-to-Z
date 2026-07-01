// Task 15:
// Create a function named `checkVideoStatus`

// Now do this:
// 1. The function should take one parameter: isPlaying
// 2. If isPlaying is true, print:
//    "Video is playing"
// 3. Otherwise print:
//    "Video is paused"
// 4. Call the function with true and false

// Example:
// checkVideoStatus(true)

// Output:
// Video is playing

function checkVideoStatus(isPlaying) {
    if (isPlaying) {
        console.log("Video is playing");
    }
    else {
        console.log("Video is paused");
    }
}
checkVideoStatus(true);
checkVideoStatus(false);