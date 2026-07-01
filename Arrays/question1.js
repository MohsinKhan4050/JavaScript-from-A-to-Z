// for a given array with marks of student -> [10 , 20 , 30 , 40 , 50 , 60 , 70]
// Find the average marks of the entire class.


let marks = [10, 20, 30, 40, 50, 60, 70]

let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
}

let average = sum / marks.length;

console.log("average marks=", average)