//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

const without = (source, itemsToRemove) => {
  const newSource = [];
  
  for (let i = 0; i < source.length; i++) {
    let shouldBePushed = true;

    for (let item of itemsToRemove) {
      if (source[i] === item) {
        shouldBePushed = false;
      }
    }

    if (shouldBePushed) {
      newSource.push(source[i]);
    }

  }
  console.log(newSource);
  return newSource;
};


const assertArraysEqual = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return `👎 Assertion Failed: ${array1} is different from ${array2}.`;
    }
  }
  console.log(`👍 Assertion Passed: ${array1} is equal to ${array2}.`);
};


without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]


// Test:  without function should be returning a new array and not modify the original array
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


module.exports = without;