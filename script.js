
function calcArea(inpRadius) {
    return Math.PI * inpRadius * inpRadius;
}
console.log(calcArea(7));

function calcCircle(inpRadius) {
    return 2 * Math.PI * inpRadius;
}
console.log(calcCircle(5));

function calcAvarage (i, j) {
    return (i + j) / 2;
}
console.log(calcAvarage(2, 3));

function calc(x, y, action) {
    switch (action) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return x ** y;
    }
}
console.log(calc(2, 1, '+'));