const userName = prompt('Как тебя зовут?');
const userYear = prompt('Какого ты года рождения?');
console.log(userName + (2022 - userYear));                                       //имя пользователя + год рожднния

const variableA = prompt('Введите переменную а');
const variableB = prompt('Введите переменную b');
const variableC = prompt('Введите переменную C');
console.log(Number(variableA)+Number(variableB)+Number(variableC));        //суммирования всех переменных
console.log(Number(variableA) % 2 === 0);                                  //true - четные, false - не четные
console.log(Number(variableB) % 2 === 0);                                  //
console.log(Number(variableC) % 2 === 0);                                  //
console.log((Number(variableA)+Number(variableB)+Number(variableC))/3);    //среднее арифметическое трех чисел

let n = 23456;
let n1 = n % 10;
n /= 10;
n = Math.floor(n);
let n2 = n % 10;
n /= 10;
n = Math.floor(n);
let n3 = n % 10;
n /= 10;
n = Math.floor(n);
let n4 = n % 10;
n /= 10;
n = Math.floor(n);
let n5 = n % 10;
n /= 10;
n = Math.floor(n);
console.log(n5 + ' ' + n4 + ' ' + n3 + ' ' + n2 + ' ' + n1 + ' ');                   //в исходном порядке через пробел