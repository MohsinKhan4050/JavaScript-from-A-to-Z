let btn = document.querySelector("button");
console.log(btn);

btn.onclick = () => {
    console.log("handler 1")
}


btn.onclick = function clickbtn() {
    console.log("hi")
}

btn.addEventListener("click" , ()=>{
    console.log("clciked")
})