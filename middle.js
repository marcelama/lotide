const eqArrays = require('./eqArrays');


// const eqArrays = (arg1, arg2) => {
//   if (arg1.length !== arg2.length) {
//     return false;
//   }
//   for (let i = 0; i < arg1.length; i++) {
//     if (arg1[i] !== arg2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(actual, expected) {
//   if (!eqArrays(actual, expected)) {
//     console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
//   } else {
//     console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
//   }
// };

//Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function(array) {
  let arrLen = array.length;
  let middle = 0;
  let middleResult = [];
  if (arrLen === 1 || arrLen === 2) { // if === 1 || ===2 return []
    return [];
  } else if (arrLen > 2 && arrLen % 2 === 0) {
    middle = (arrLen / 2) - 1;
    middleResult = [array[middle], array[middle + 1]];
    return middleResult; // if > 2 && % 2 === 0 (even) => the 2 numbers in the middle
  } else if (arrLen > 2 && arrLen !== 0) {
    middle = (arrLen / 2) - 0.5;
    middleResult = [array[middle]];
    return middleResult; // if > 2 && %2 !== 0 (odd) => one number in the middle
  }
};

module.exports = middle;