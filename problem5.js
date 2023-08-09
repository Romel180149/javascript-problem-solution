function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length === 0) {
        return "array is empty! please enter a valid array"; // Empty or non-array input
    }

    const sumOfChange = changeArray.reduce((total, change) => total + change, 0);
    
    return sumOfChange >= totalDue;
}

// Test cases
console.log(canPay([1, 2, 5], 10)); // Output: false
console.log(canPay([1, 5, 5], 10)); // Output: true
console.log(canPay([], 5)); // Output: false
