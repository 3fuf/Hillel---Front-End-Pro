const firstNumber = 123;
const secondNumber = 321;

if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else {
    console.log(secondNumber);
}


let number = 1234;

let numberOne = number % 10;
number /= 10;
number = Math.floor(number);
let numberTwo = number % 10;
number /= 10;
number = Math.floor(number);
let numberThree = number % 10;
number /= 10;
number = Math.floor(number);
let numberFour = number % 10;
number /= 10;
number = Math.floor(number);

console.log(numberOne >= 2);
console.log(+numberOne);

