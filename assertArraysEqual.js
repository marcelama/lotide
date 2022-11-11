const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    return `👎 Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `👍 Assertion Passed: ${actual} === ${expected}`;
  }
};

module.exports = assertArraysEqual;

// console.log(assertArraysEqual([1, 2, 3, 4], [1, 3, 4, 5]));
// console.log(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]));

