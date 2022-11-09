//Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = (array) => {
  if (Array.isArray(array)){
  let flatArray = [].concat(...array);
  console.log(flatArray);
  }
}

// Test
flatten([1, 2, [3, 4], 5, [6]])

module.exports = flatten;