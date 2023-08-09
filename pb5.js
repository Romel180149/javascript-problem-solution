function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length === 0) {
        return "array is empty! please enter a valid array"; 
    }

    let sumOfChange = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sumOfChange += changeArray[i];
    }

    if (sumOfChange >= totalDue) {
        return true;
    } else {
        return false;
    }
}

console.log(canPay([1, 2, 5], 10)); // Output: false
console.log(canPay([1, 5, 5], 10)); // Output: true
console.log(canPay([], 5)); // Output: false
