const { assert } = require('chai');
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};


describe("findKeyByValue", () => {

  it("returns 'comedy' for 'Brooklyn Nine-Nine'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), 'comedy');
  });

  it("returns 'comedy' for 'Brooklyn Nine-Nine'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });

  it("returns 'comedy' for 'Brooklyn Nine-Nine'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), 'sci_fi');
  });

});