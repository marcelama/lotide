const eqObjects = function(obj1, obj2) {
  // same number of keys
  const obj1Keys = Object.keys(obj1).length;
  const obj2Keys = Object.keys(obj2).length;

  if (obj1Keys !== obj2Keys) {
    return false;
  }
  for (const key in obj1) {
    const arg1 = obj1[key];
    const arg2 = obj2[key];

    if (Array.isArray(arg1) === true && Array.isArray(arg2) === true) { //Modify our implementation to use eqArrays when there is an array value being encountered for a key, ensuring that our newly added array tests fully pass.
      if (arg1.length !== arg2.length) {
        return false;
      }
      for (let i = 0; i < arg1.length; i++) {
        if (arg1[i] !== arg2[i]) {
          return false;
        }
      }
      return true;
    }
      
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
  
};

// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.


const assertObjectsEqual  = function(actual, expected) {
  const inspect = require('util').inspect; //util library's inspect function to print out objects
  if (!eqObjects(actual, expected)) {
    return `👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  } else {
    return `👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  }
};


console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }));
console.log(assertObjectsEqual({a: 1, b: 3, c: 4}, {a: 1, c: 4}));
console.log(assertObjectsEqual({a: 1, b: '3', c: 4}, {a: 1, c: 4, b: '3'}));
console.log(assertObjectsEqual({a: 1, b: 3, c: 5, d: 7}, {d: 7, c: 5, b: 3, a: 1}));
console.log(assertObjectsEqual({c: 5, d: 7}, {a: 1, b: 3, c: 5, d: 7}));
  
  