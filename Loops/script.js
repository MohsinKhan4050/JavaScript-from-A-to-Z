let button = document.getElementById("btn");

button.addEventListener("click", calculateTotal);

function calculateTotal() {
    let items = document.querySelectorAll("#items li");
    let total = 0;

    for (let i = 0; i < items.length; i++) {

        let price = Number(items[i].getAttribute("data-price"));

        total += price;

        // Rule 2
        if (price > 300) {
            console.log("Expensive item found");
        }

        // Rule 3
        if (i % 2 === 0) {
            console.log("Even item");
        } else {
            console.log("Odd item");
        }
    }

    let resultText = "Total: $" + total;

    // Rule 1
    if (total > 1000) {
        let discount = total * 0.10;
        let discountedTotal = total - discount;

        resultText += "<br>Discounted Total: $" + discountedTotal;
    }

    document.getElementById("result").innerHTML = resultText;
}