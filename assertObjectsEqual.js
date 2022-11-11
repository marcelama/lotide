const eqObjects = require('./eqObjects');

// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.

const assertObjectsEqual  = function(actual, expected) {
  const inspect = require('util').inspect; //util library's inspect function to print out objects
  if (!eqObjects(actual, expected)) {
    return `👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  } else {
    return `👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  }
};


// console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }));
// console.log(assertObjectsEqual({a: 1, b: 3, c: 4}, {a: 1, c: 4}));
// console.log(assertObjectsEqual({a: 1, b: '3', c: 4}, {a: 1, c: 4, b: '3'}));
// console.log(assertObjectsEqual({a: 1, b: 3, c: 5, d: 7}, {d: 7, c: 5, b: 3, a: 1}));
// console.log(assertObjectsEqual({c: 5, d: 7}, {a: 1, b: 3, c: 5, d: 7}));
  
module.exports = assertObjectsEqual;