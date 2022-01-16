const firstNumber = 123;
const secondNumber = 321;

if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else {
    console.log(secondNumber);
}


const n = 1234;

const nOne = n % 10;

if (nOne % 2 === 0) {
    console.log(nOne, 'Парное')
} else {
    console.log(nOne, 'Не парное');
}

const userName = prompt('Как тебя зовут?');
const userYear = +prompt('Сколько тебе лет?');
const userUse = confirm('Алкоголь употребляем?');

if (userUse) {
    if (+userYear >= 40) {
        console.log('Не злоупотребляйте');
    }
    else if (+userYear < 18) {
        console.log('Ты что?! Маме расскажу');
    }
    else {
        console.log('Только водку с пивом не мешай...');
    }

} else {
    console.log('Так держать!');
}
