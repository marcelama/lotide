// map function will take 2 arguments: an array to map, a callback function
//map function will return a new array based on the results of the callback function

const map = function(array, callback) {
  const results = [];
  for (item of array) {
    const newItem = callback(item);
    results.push(newItem); //execute callback (line 37()
  }
  return results;
}


//COPIED functions:
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

const words = ["ground", "control", "to", "major", "tom"];

const getFirstLetter = function(word) { //this could be refactored to (words, word => word[0]);
  return word[0];
}

const results1 = map(words, getFirstLetter); 
console.log(results1); //to check only

//TEST map function with asserArraysEqual
console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));

