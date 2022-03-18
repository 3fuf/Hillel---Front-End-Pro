console.log("№1")

function isSymbolPresentInString(str,symbol) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === symbol) {
      return true;
      break;
    }
  }
  return false;
}

console.log(isSymbolPresentInString("abc", "a"));
console.log(isSymbolPresentInString("abc", "e"));


console.log("№2")

function getSymbolIndex(str,symbol) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === symbol) {
      return i;
      break;
    }
  }
  return -1;
}
console.log(getSymbolIndex("hello lol","h"));
console.log(getSymbolIndex("hello lol","l"));
console.log(getSymbolIndex("hello lol","v"));

console.log("№3")

function getNumberOfEven(n) {
  const str = String(n);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (+str[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(getNumberOfEven(223344));
console.log(getNumberOfEven(111));