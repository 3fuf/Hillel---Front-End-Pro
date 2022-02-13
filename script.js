//"№1"

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

//"№2"

function isEqual(x, y) {
    const list1 = Object.getOwnPropertyNames(x);
    const list2 = Object.getOwnPropertyNames(y);

    if (list1.length !== list2.length) {
        return false;
    }

    for (let i = 0; i < list2.length; i += 1) {
        const list = list1[i];

        if (x[list] !== y[list]) {
            return false;
        }
    }
    return true;
}
console.log(isEqual(origin, target));
console.log(isEqual(origin, srcOb));

//"№3"

function fn(str) {
    const hash = {};
    for(let i = 0; i < str.length; i++) {
      if(hash[str[i]]) {
        hash[str[i]]++;
      } else {
        hash[str[i]] = 1;
      }
    }
    let keys = Object.keys(hash);
    let maxValue = 1;
    let maxKey = '';
    for(let i = 0; i < keys.length; i++) {
      if(hash[keys[i]] > maxValue) {
        maxValue = hash[keys[i]];
        maxKey = keys[i];
      }
    }
    console.log(maxKey, maxValue);
  }
  fn('aaaaabbbcccc')