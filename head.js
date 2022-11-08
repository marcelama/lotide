const assertEqual = require('./assertEqual'); //importing the function definition from other file 

let head = function(arg) {
  let arrHead = arg[0];
  return arrHead;
};

module.exports = head;


