const fuelCalculation = function(input) {
  let res = 0;
  input = input.split('\n');
  for (let i = 0; i < input.length; i++) {
    res += Math.floor((parseInt(input[i]) / 3) - 2);
  }
  return res;
};

module.exports = fuelCalculation;