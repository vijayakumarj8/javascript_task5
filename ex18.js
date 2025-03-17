function findgreatest(a, b, c) {
    if (a >= b && a >= c) {
        console.log(`${a} is the greatest number.`);
    } else if (b >= a && b >= c) {
        console.log(`${b} is the greatest number.`);
    } else {
        console.log(`${c} is the greatest number.`);
    }
}


findgreatest(10, 20, 30); 

