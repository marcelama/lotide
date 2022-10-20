let head = function(arg) {
  let arrHead = arg[0];
  return arrHead;
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  }
};

assertEqual(head([9,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


