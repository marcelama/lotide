const eqArrays = (arg1, arg2) => {
  if (arg1.length !== arg2.length) {
    return false;
  }
  for (let i = 0; i < arg1.length; i++) {
    if (arg1[i] !== arg2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    return `👎 Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `👍 Assertion Passed: ${actual} === ${expected}`;
  }
};


console.log(assertArraysEqual([1, 2, 3, 4], [1, 3, 4, 5]));
console.log(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]));

