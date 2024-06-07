//5! = 1*2*3*4*5
function factorial(num) {
    var fact = 1;
    for(var i = 1; i <= num; i++){
        fact = fact * i;
        //console.log(i, fact);
    }
    return fact;
}
var result = factorial(5);
console.log('Result: ', result);




function factorialRecursive(num){
    if(num == 1) {
        return 1;
    }
    else{
        return num * factorialRecursive(num - 1);
    }
}

var result = factorialRecursive(6);
console.log('Result: ', result);