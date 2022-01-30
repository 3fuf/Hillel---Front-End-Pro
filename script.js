console.log('№1');

let str = '';
for (i = 10; i <= 20; i++) {
    str = str + i + ' , ';
}
console.log(str);
console.log(' ');

console.log('№2');

for (j = 10; j <= 20; j++) {
    console.log(Math.pow(j, 2));
}
console.log(' ');

console.log('№3');

let seven = 7;
for (k = 1; k <= 10; k++) {
    Number = k * seven;
    console.log(Number);
}
console.log(' ');

console.log('№4');

let count = 0;
for (l = 1; l <= 15; l++) {
    count += l;
}
console.log(count);
console.log(' ');

console.log('№5');

let q = 1;
for (p = 15; p <= 35; p++) {
    q *= p
}
console.log(q);
console.log(' ');

console.log('№6');

let means = 0;
for (m = 1; m <= 500; m++) {
    means += m;
}
console.log(means / 500);
console.log(' ');

console.log('№7');

for (let n = 30; n <= 80; n++) {
    if (n % 2 === 0) {
        console.log(n);
    }
}
console.log(' ');

console.log('№8');

for (let r = 100; r <= 200; r++) {
    if (r % 3 === 0) {
        console.log(r);
    }
}
console.log(' ');

console.log('№9');

let numb = 22;
let summ = 0;
for (let s = 1; s <= numb; s++){
    if(numb % s === 0 && numb !== numb && numb !== 1) {
        if (s % 2 === 0) continue;
        console.log(summ += s);

    }
    console.log(s);

}

console.log(' ');

console.log('№10');

for (let multTable = 1; multTable <= 10; multTable++) {
    console.log('Таблица умножения на '+ multTable);

    for (let multЕableМariable = 1; multЕableМariable <= 10; multЕableМariable++) {
        console.log(multTable * multЕableМariable);
    }
}

console.log(' ');

console.log('№11');

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
for (i = 0; i <= height; i++) {
    triangle += '$';
    console.log(triangle);
}