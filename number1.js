function cubeNumber(number){
    if(typeof number!== "number"){
        return " Invalid input! please enter a number type input";
    }
    else
     return number*number*number;
}

console.log(cubeNumber(3));