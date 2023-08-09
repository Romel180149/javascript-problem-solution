function findAddress(obj) {
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';

    return `${street},${house},${society}`;
}

// Sample inputs and expected outputs
const input1 = { street: 10, house: "15A", society: "Earth Perfect" };
const output1 = findAddress(input1);
console.log(output1); // Output: 10,15A,Earth Perfect

const input2 = { street: 10, society: "Earth Perfect" };
const output2 = findAddress(input2);
console.log(output2); // Output: 10,__,__Earth Perfect

const input3 = { street: 10 };
const output3 = findAddress(input3);
console.log(output3); // Output: 10,__,__ 
