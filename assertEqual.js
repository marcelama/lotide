const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log('👎 Assertion Failed: ' + actual + ' !== ' + expected);
  } else {
    console.log('👍 Assertion Passed: ' + actual + ' === ' + expected);
  }
};


/* If the values match, it should print (console.log) the following: Assertion Passed: [actual] === [expected] (but with the values filled in)
*Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected]  */

// Test code
assertEqual("lalala", "lalala");
assertEqual(23, 25);