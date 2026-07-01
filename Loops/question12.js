/*
TASK: Longest Word Finder

You are given an array of words:

let words = ["apple", "banana", "strawberry", "kiwi", "mango"];

REQUIREMENTS:
- Use a for loop
- Find the longest word in the array
- Store it in a variable called "longest"
- Print the longest word at the end

RULES:
- Must use loop
- Do NOT manually check words
- Use comparison logic (length)
*/

let logestWord = "";

let words = ["apple", "banana", "strawberry", "kiwi", "mango"];

for (let i = 1; i < words.length; i++) {

    if (words[i].length > logestWord.length) {
        logestWord = words[i]
    }
}
console.log("longest word:", logestWord);