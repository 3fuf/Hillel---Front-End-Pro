function deepCopy(obj) {
  const copy = {};
  for(let key in obj) {
    if(typeof(obj[key]) === 'object' && obj[key] !== null)
    copy[key] = deepCopy(obj[key]);

    else {
      copy[key] = obj[key];
    }
  }
  return copy;
}

let deepCopyArray = deepCopy([1, 2, 3, { hello: "world"}, ["HELLO"]]);
console.log("deepCopyArray:", deepCopyArray);