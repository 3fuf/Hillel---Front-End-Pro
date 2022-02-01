console.log('№1');

let str = '';
for (let i = 10; i <= 20; i++) {
    str = str + i + ', ';
}
console.log(str);
console.log(' ');

console.log('№2');

for (let i = 10; i <= 20; i++) {
    console.log(Math.pow(i, 2));
}
console.log(' ');

console.log('№3');

const seven = 7;
for (let i = 1; i <= 10; i++) {
    console.log(i + '*' + seven + '=' + (i * seven));
}
console.log(' ');

console.log('№4');

let count = 0;
for (let i = 1; i <= 15; i++) {
    count += i;
}
console.log(count);
console.log(' ');

console.log('№5');

let multiplication = 1;
for (let i = 15; i <= 35; i++) {
    multiplication *= i;
}
console.log(multiplication);
console.log(' ');

console.log('№6');

const average = 500;
let means = 0;
for (let i = 1; i <= 500; i++) {
    means += i;
}
console.log(means / average);
console.log(' ');

console.log('№7');

for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log(' ');

console.log('№8');

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
console.log(' ');

console.log('№9');

const numb = 22;
let summ = 0;
let countEven = 0;
for (let i = 1; i <= numb; i++){
    if(numb % i === 0) {
        if (i % 2 === 0) {
            summ += i;
            countEven++;
        }
        console.log(i);
    }
}
console.log(summ, countEven);
console.log(' ');

console.log('№10');

for (let i = 1; i <= 10; i++) {

    for (let j = 1; j <= 10; j++) {
        document.write('<p>' + i + '*' + j + '=' + (i * j) + '</p>');
    }
}
console.log(' ');

console.log('№11');

/* let guessNumber = (Math.random() * 11);
console.log(guessNumber); */

let guessNumber = 9;
while (true) {
    let value = +prompt('Угадайте число от 0 до 10', 'Введите число')
    if (value === guessNumber) {
        alert('Верно - это ' + guessNumber);
        break;
    }
    if (!value) break; {
        alert('Не верно - ' + value);
    }
}
console.log(' ');

console.log('№12');

triangle = '';
let height = +prompt('Введите число');
for (i = 0; i < height; i++) {
    triangle += '$';
    console.log(triangle);
}