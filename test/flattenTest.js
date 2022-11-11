const { assert } = require('chai');
const flatten = require('../flatten');

describe("#head", () => {

  it("returns [ 1, 2, 3, 4, 5, 6 ] for 1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]));
  });
});