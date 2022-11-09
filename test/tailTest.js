const { assert } = require('chai');
// const assertEqual = require('../assertEqual'); //no longer needed as we're using Chai (assertion library)
const tail = require('../tail');

//assert.deepEqual can compare arrays and objects
describe("#tail", () => {

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']),['Lighthouse', 'Labs']);
  });

  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});