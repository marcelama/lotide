//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match:


const eqArrays = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(array1, array2) {
  if (array1 !== array2) {
    console.log(`👎 Assertion Failed: ${array1} !== ${array2}`);
  } else {
    console.log(`👍 Assertion Passed: ${array1} === ${array2}`);
  }
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false