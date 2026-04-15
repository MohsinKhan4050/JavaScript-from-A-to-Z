let enterName = document.querySelector(".enter-name");
let enterPassword = document.querySelector(".enter-password");
let loginForm = document.querySelector(".login-form");
let dashBoard = document.querySelector(".dashboard");



loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (enterName.value === "" || enterPassword.value === "") {
        alert("PLEASE FILL ALL FIELDS");
    }
    else if (enterName.value === "admin" && enterPassword.value === "1234") {
        loginForm.style.display = "none";
        dashBoard.style.display = "block";
    }
    else {
        alert("INVALID CREDENTIALS");
    }
});