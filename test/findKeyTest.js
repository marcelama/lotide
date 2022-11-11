const { assert } = require('chai');
const findKey = require('../findKey');

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


describe("findKey", () => {

  it("returns 'Akaleri' for (list, getStars)", () => {
    assert.strictEqual(findKey(list, getStars), "Akaleri");
  });

  it("returns undefined for (list, getStars4)", () => {
    assert.strictEqual(findKey(list, getStars4), undefined);
  });

});