//letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
//For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) { //loop in the string
    
    if (sentence[i] === ' ') {  // if empty will skip and continue
      continue;
    }

    if (results[sentence[i]]) { // check if already exists
      results[sentence[i]].push(i); // add letter index, not the letter (it's already there)
    } else {
      results[sentence[i]] = [i];  // create new array only if it doens't already exist
       
    }
  }
  return results;

};

// results = { h: [0], e: [1], l: [2, 3], o: [4] }

console.log(letterPositions('hello'));

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

console.log(assertArraysEqual(letterPositions('hello').e, [1]));


module.exports = letterPositions;