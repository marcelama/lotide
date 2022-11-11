//Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = (array) => {
  if (Array.isArray(array)){
  let flatArray = [].concat(...array);
  console.log(flatArray);
  }
}

module.exports = flatten;