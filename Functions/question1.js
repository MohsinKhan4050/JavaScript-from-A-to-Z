// create a function using the "function " Keyword that takes a String as an argument & retuns the number of vowels in the string.

function countVowels(str) {

    let vowels = "aeiou";
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;

}
console.log(countVowels("Mohsin"));