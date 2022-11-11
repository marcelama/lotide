const { assert } = require('chai');
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {

  it("returns { Fang: 2, Jason: 1 } for {'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false}", () => {
    assert.deepEqual(countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false}), { 'Fang': 2, 'Jason': 1 });
  });
});