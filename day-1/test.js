const assert = require('assert');
const fuelCalculation = require('./part1.js');
const moreFuelCalcuation = require('./part2.js');

describe('Day 1 Part One ', () => {
  it('should return 2 when input is 12', () => {
    let input = '12';
    assert.strictEqual(fuelCalculation(input), 2);
  });

  it('should return 2 when input is 14', () => {
    let input = '14';
    assert.strictEqual(fuelCalculation(input), 2);
  });

  it('should return 654 when input is 1969', () => {
    let input = '1969';
    assert.strictEqual(fuelCalculation(input), 654);
  });

  it('should return 2 when input is 100756', () => {
    let input = '100756';
    assert.strictEqual(fuelCalculation(input), 33583);
  });
});


describe('Day 1 Part Two ', () => {
  it('should return 2 when input is 14', () => {
    let input = '14';
    assert.strictEqual(moreFuelCalcuation(input), 2);
  });

  it('should return 966 when input is 1969', () => {
    let input = '1969';
    assert.strictEqual(moreFuelCalcuation(input), 966);
  });

  it('should return 50346 when input is 100756', () => {
    let input = '100756';
    assert.strictEqual(moreFuelCalcuation(input), 50346);
  });
});