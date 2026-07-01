// Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again;


let button = document.querySelector("button");

let mode = "light"

button.addEventListener("click", () => {

    if (mode === "light") {
        document.body.style.background = "black";
        mode = "dark";

    }
    else {
        document.body.style.background = "white";
        mode = "light";
    }
})