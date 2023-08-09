// function matchFinder(str1, str2) {

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
// console.log(matchFinder(“John Doe”,“ohn”));
const output = matchFinder("John doe","ohn");
console.log(output);
// console.log(matchFinder(“JavaScript”,“Code”));
console.log(matchFinder("Javascript","Code"));
console.log(matchFinder("Peter Parker","pet"));
