// Implement takeUntil function
// 2 parameters:
//The array to work with
//The callback (which Lodash calls "predicate"), it should only be provided one value: The item in the array.
//The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === false) {
      results.push(item);
    } else if (callback(item) === true) {
      break;
    }
  }
  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// test: console.log(results1); [ 1, 2, 5, 7, 2 ]

//console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
//test: console.log(results2); [ 'I\'ve', 'been', 'to', 'Hollywood' ]


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

console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));

