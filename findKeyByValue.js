const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  }
};

//Instruction: findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const findKeyByValue = function(object, value) {
  
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

// TEST console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine")) // result = "comedy"

assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");

module.exports = findKeyByValue;