const assert = require('assert');
const countAsteroidI = require('./part1.js');
const partOneInput1 = require('./partOneInput1.js');
const partOneInput2 = require('./partOneInput2.js');
const partOneInput3 = require('./partOneInput3.js');
const partOneInput4 = require('./partOneInput4.js');
const countAsteroidII = require('./part2.js');
const partTwoInput1 = require('./partTwoInput1.js');

describe('Day 10 Part One ', () => {
  it('should return 33 when input is partOneInput1', () => {
    let input = partOneInput1;
    assert.strictEqual(countAsteroidI(input), 33);
  });

  it('should return 35 when input is partOneInput2', () => {
    let input = partOneInput2;
    assert.strictEqual(countAsteroidI(input), 35);
  });

  it('should return 41 when input is partOneInput2', () => {
    let input = partOneInput3;
    assert.strictEqual(countAsteroidI(input), 41);
  });

  it('should return 269 when input is partOneInput4', () => {
    let input = partOneInput4;
    assert.strictEqual(countAsteroidI(input), 269);
  });
});

describe('Day 10 Part Two ', () => {
  it('should return 612 when input is partOneInput1', () => {
    let input = partTwoInput1;
    assert.strictEqual(countAsteroidII(input), 612);
  });
});