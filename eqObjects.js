const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  }
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(obj1, obj2) {
// same number of keys
  const obj1Keys = Object.keys(obj1).length;
  const obj2Keys = Object.keys(obj2).length;

  if (obj1Keys !== obj2Keys) { 
    return false;
  }
  for (const key in obj1) {
    const arg1 = obj1[key];
    const arg2 = obj2[key];

    if (Array.isArray(arg1) === true && Array.isArray(arg2) === true) { //Modify our implementation to use eqArrays when there is an array value being encountered for a key, ensuring that our newly added array tests fully pass.
      if (arg1.length !== arg2.length) {
        return false;
      }
      for (let i = 0; i < arg1.length; i++) {
        if (arg1[i] !== arg2[i]) {
          return false;
        }
      }
      return true;
    }
      
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
  
};

// TEST
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false