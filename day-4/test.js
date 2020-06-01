const assert = require('assert');
const noOfPassword = require('./part1.js');
const noOfUpdatedPassword = require('./part2.js');

describe('Day 4 Part One ', () => {
  it('should return 594 when input is 347312-805915', () => {
    let input = '347312-805915';
    assert.strictEqual(noOfPassword(input), 594);
  });
});

describe('Day 4 Part Two ', () => {
  it('should return 364 when input is 347312-805915', () => {
    let input = '347312-805915';
    assert.strictEqual(noOfUpdatedPassword(input), 364);
  });
});