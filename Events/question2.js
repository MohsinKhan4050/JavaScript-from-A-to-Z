// Task 1:
// Create a button and a paragraph using HTML

// Now do this:

// 1. Select the button using querySelector() or getElementById()
// 2. Select the paragraph
// 3. Add a click event on the button
// 4. When button is clicked:
//    - Change paragraph text to "DOM is Awesome"
//    - Change paragraph color to "green"
//    - Change paragraph font size to "25px"
// 5. Do NOT use inline onclick


let btn = document.querySelector(".btn");
let para = document.querySelector(".para");

btn.addEventListener("click", () => {
    para.innerText = "DOM is Awesome";
    para.style.color = "green";
    para.style.fontSize = "25px";
})