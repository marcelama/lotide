//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return `👎 Assertion Failed: ${array1} is different from ${array2}.`;
    }
  }
  return `👍 Assertion Passed: ${array1} is equal to ${array2}.`;
};


console.log(assertArraysEqual([1, 2, 3, 4], [1, 3, 4, 5]));
console.log(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]));