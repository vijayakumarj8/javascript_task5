let x = [23, 4, -6, 23, -9, 21, 3, -45, -8];

let positiveNumbers = [];
let negativeNumbers = [];

for (let num of x) {
    if (num >= 0) {
        positiveNumbers.push(num);
    } else {
        negativeNumbers.push(num);
    }
}

console.log("Positive Numbers:", positiveNumbers);

console.log("Negative Numbers:", negativeNumbers);
