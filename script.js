function deepCopy (obj) {
  const copyObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj[key]) {
      if ("object" === typeof obj[key] || obj[key] !== null)
      copyObj[key] = (obj[key]);
      else copyObj[key] = obj[key];
    }
  }
  return copyObj;
}

const isArray = [1, 2, 3, { hello: "world" }];
console.log("isArry:", isArray);

const deepCopyArray = deepCopy(isArray);
console.log("deepCopyArray:", isArray);