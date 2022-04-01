const deepCopy = (inObj) => {
  if (typeof inObj !== "object" || inObj === null) {
    return inObj;
  }

  outObj = Array.isArray(inObj) ? [] : {};

  for (key in inObj) {
    value = inObj[key];
    outObj[key] = deepCopy(value);
  }
  return outObj;
}

const isArray = [1, 2, 3, { hello: "world"}, ["HELLO"]];
console.log("isArry:", isArray);

const deepCopyArray = deepCopy(isArray);
console.log("deepCopyArray:", isArray);