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

const userName = prompt('Как тебя зовут?');
const userYear = +prompt('Сколько тебе лет?');
const userUse = confirm('Алкоголь употребляем?');

if (+userYear >= 40) {

    if (userUse === false) {
        console.log('Так держать!');
    } else {
        console.log('Не злоупотребляйте');
    }
}

if (+userYear < 18) {

    if (userUse === false) {
        console.log('Так держать!');
    } else {
        console.log('Ты что?! Маме расскажу');
    }
}

if (+userYear >= 18 && +userYear <=40) {

    if (userUse === false) {
        console.log('Так держать!');
    } else {
        console.log('Только водку с пивом не мешай...');
    }
}



