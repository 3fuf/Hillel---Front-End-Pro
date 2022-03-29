
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


console.log("***")

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

console.log("***")

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

console.log("***")

const oneByOne = function(arr, callback) {
  length = arr.length;
  for ( i = 0; i < length; i++) {
    callback(arr[i], i, arr)
  }
}

oneByOne([10, 11, 12, 13, 14, 15], function (n, i, numb) {
  console.log(i, n, numb)
});

console.log("***")

const map = function (arr, callback, thisArg) {
  length = arr.length,
  result = [];
  for (i = 0; i < length; i++) {
    result.push(callback.call(thisArg, arr[i]));
  }
  return result;
}

const circumcision = map(['Peater1', 'Peater 2', 'Peater 3'], function(circumcision) {
  return circumcision.slice(0, 6);
});

console.log(circumcision);

console.log("***")

const isEvenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(function(n) {
  return (n % 2 === 0);
});

console.log(isEvenNumbers);