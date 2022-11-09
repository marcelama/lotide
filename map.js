const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

const words = ["ground", "control", "to", "major", "tom"];

const getFirstLetter = function(word) { //this could be refactored to (words, word => word[0]);
  return word[0];
}

const results1 = map(words, getFirstLetter); 
console.log(results1); //to check only

//TEST map function with asserArraysEqual
console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));

module.exports = map;