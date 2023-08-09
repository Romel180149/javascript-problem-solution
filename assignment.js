function cubeNumber(number){
    if(typeof number!== "number"){
        return " Invalid input! please enter a number type input";
    }
    else
     return number*number*number;
}

function matchFinder(string1,string2){
    if(typeof string1 !=='string'  || typeof string2 !=='string'){
        return 'please enter valid string';
    }
    else if(string1.includes(string2)){
        return true;
    }
    else {
        return false;
    }
}
const output = matchFinder("John doe","ohn");

function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2) {
        return "Invalid Input";
    }

    const [first, second] = arr;

    if (first < 0 || second < 0) {
        return "Invalid Input";
    }

    if (first === second) {
        return "equal";
    } else if (first < second) {
        return [second, first];
    } else {
        return [first, second];
    }
}
function findAddress(obj) {
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';

    return street + ',' + house + ',' + society;
}
const input1 = { street: 10, house: "15A", society: "Earth Perfect" };
const output1 = findAddress(input1);
const input2 = { street: 10, society: "Earth Perfect" };
const output2 = findAddress(input2);
const input3 = { street: 10 };
const output3 = findAddress(input3);
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