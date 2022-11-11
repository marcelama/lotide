// Implement the function findKey which takes in an object and a callback.
// scan the object and return the first key for which the callback returns a truthy value
//If no key is found, then it should return undefined.

const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key]) === true) {
      // console.log(key);
      return key;
    }
  }
  // console.log(undefined);
  return undefined;
};

const getStars = (x => x.stars === 3);
const getStars4 = (x => x.stars === 4);

const list = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

// // Test code
// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 1) // => "noma"


// assertEqual(findKey(list, getStars), "noma");
// assertEqual(findKey(list, getStars), "Akaleri");
// assertEqual(findKey(list, getStars4), undefined);

module.exports = findKey;



