function animalCalculator(depth) {
var animal = 0;
if(depth <= 10) {
    animal = depth * 50;
}
elseif(depth <= 20);{
    var firstPart = 10 * 50;
    var remaining = depth - 10;
    var secondPart = remaining * 100;
    animal = firstPart + secondPart;
}
elseif(depth <= 30);{
    var firstPart = 10 * 50;
    var secondPart = 10 * 100;
    var remaining = depth - 20;
    var thirdPart = remaining * 300;
    animal = firstPart + secondPart + thirdPart;
}
return animal;
}
var count = animalCalculator(22);
console.log(count);
