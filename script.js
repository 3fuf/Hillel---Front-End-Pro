console.log("№1")

const origin = {
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'test@test.com'
}
const target = {};

const firstOb = {
    name: 'Kolia',
    email: 'test@test.com'
};

const srcOb = {};

function copy(x, y) {
    for (const key in x) {
        y[key] = x[key];
    }
    return y;
}
console.log(copy(firstOb, srcOb))
console.log(copy(origin, target))

console.log("№2")

function isEqual(x, y) {
    const list1 = Object.keys(x).length;
    const list2 = Object.keys(y).length;

    for (const keys in x) {
      if(list1 !== list2 || x[keys] !== y[keys]) {
        return false;
      }
    }
    return true;
}
console.log(isEqual({name: "Peater", lastName: "Parker"},{name: "Peater", lastName: "Ivan"}));
console.log(isEqual({name: "Peater", lastName: "Parker"},{name: "Peater", lastName: "Parker"}));
console.log(isEqual(origin, srcOb));

console.log("№3")

function fn(str) {
  const hash = {};
  for(let i = 0; i < str.length; i++) {
    if(hash[str[i]]) {
      hash[str[i]]++;
    } else {
      hash[str[i]] = 1;
    }
  }
  return hash;
}

console.log(fn('aaaaabbbcccc'));