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
// Sample inputs and outputs
console.log(sortMaker([2, 3])); // Output: [2, 3]
console.log(sortMaker([4, 2])); // Output: [2, 4]
console.log(sortMaker([4, 4])); // Output: "equal"
console.log(sortMaker([1, 2])); // Output: [1, 2]
console.log(sortMaker([4, -2])); // Output: "Invalid Input"