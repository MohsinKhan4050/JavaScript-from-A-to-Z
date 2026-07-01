//For a given array with prices of 5 items → [250, 645, 300, 900, 50]
//All items have an offer of 10% OFF on them. Change the array to store the final price after applying the offer.



let prices = [250, 645, 300, 900, 50];


for (let i = 0; i < prices.length; i++) {
    let offer = prices[i] * 0.10; // 10% discount
    prices[i] = prices[i] - offer; // final price after discount
}
console.log(prices);