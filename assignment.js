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
function sortMaker(arr){
    if(!Array.isArray(arr)  ||   arr.length !== 2){
        return "Invalid  Input";
    }
   const [first,second] = arr;
   if (first < 0 || second < 0){
    return "Invalid Input";
   }

   if(first === second){
    return"equal";
   }
   else
   {
    const sortedArray = [Math.max(first,second),Math.min(first,second)];
    return sortedArray;
   }

}
function findAddress(obj) {
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';

    return `${street},${house},${society}`;
}
function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length === 0) {
        return "array is empty! please enter a valid array";
    }

    const sumOfChange = changeArray.reduce((total, change) => total + change, 0);
    
    return sumOfChange >= totalDue;
}
