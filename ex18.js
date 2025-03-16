function findgreatest(a, b, c) {
    if (a >= b && a >= c) {
        console.log(`${a} is the greatest number.`);
    } else if (b >= a && b >= c) {
        console.log(`${b} is the greatest number.`);
    } else {
        console.log(`${c} is the greatest number.`);
    }
}

// Test Cases
findgreatest(10, 20, 30); // Output: 30 is the greatest number.

