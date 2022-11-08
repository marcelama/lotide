//given array, extract the head and create a new array with the remainder

let tail = function(arg) {
  let arrTail = arg.slice(1);
  return arrTail;
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  }
};

module.exports = tail;