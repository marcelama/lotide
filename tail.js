//given array, extract the head and create a new array with the remainder

let tail = function(arg) {
  let arrTail = arg.slice(1);
  return arrTail;
};

module.exports = tail;