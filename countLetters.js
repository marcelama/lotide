const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  }
};

//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

const countLetters = function(sentence) {
  const result = {}; //new variable to receive the totals
  // create a loop to go through each character and add it to the results
  for (const letter of sentence) {
    if (letter !== ' ') { //don't count spaces
      if (result[letter]) {
        result[letter] += 1; // if they are already in results, increment the count
      } else { // if it doesn't already exist, count 1
        result[letter] = 1;
      }
    }
  }
  return result;
};


const result1 = countLetters('lighthouse in the house'); //in order to use assertEqual function
// to check only: console.log(result1);

console.log(assertEqual(result1['l'], 1));
console.log(assertEqual(result1['h'], 4));
console.log(assertEqual(result1['a'], 2));
console.log(assertEqual(result1['e'], 3));
console.log(assertEqual(result1['i'], 2));