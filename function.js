function add(number1, number2) {
    var total = number1 + number2;
    return total;
}

var result1 = add(65, 89);
console.log(result1);

var potato = 'Our national vegitable';
console.log('not adding this time');
console.log('Eating right now: ', potato);

var result2 = add(144,568);
console.log(result2);





function largestNumber(numbers) {
    var larger = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}

var numbers = [78, 45, 38, 62, 55, 67];
var output = largestNumber(numbers);
console.log('output', output);