console.log("№1")

function isSymbolPresentInString(str,symbol) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === symbol) {
      return true;
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

console.log("№4 forEach")

const forEach = function(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr)
  }
}

forEach([10, 11, 12, 13, 14, 15], function (n, i, numb) {
  console.log(i, n, numb)
});

console.log("№5 map")

const map = function (arr, callback, thisArg) {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback.call(thisArg, arr[i]));
  }
  return result;
}

const circumcision = map(['Peater1', 'Peater 2', 'Peater 3'], function(circumcision) {
  return circumcision.slice(0, 6);
});

console.log(circumcision);

console.log("№6 filter")

const filter = function (arr, callback, thisArg) {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

const isEvenNumbers = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(n) {
  return (n % 2 === 0);
});

console.log(isEvenNumbers);

console.log("№7 every")

const every = function (arr, callback, thisArg) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback.call(thisArg, arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}


const isEvenNumb = every([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(n) {
  return (n % 2 === 0);
});

console.log(isEvenNumb);

console.log("№8 some")

const some = function (arr, callback, thisArg) {
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isSeven = some(num, function(n) {
  return num < 7;
});

console.log(isSeven);