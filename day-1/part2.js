const moreFuelCalcuation = function(input) {
  let ans = 0;
  input = input.split('\n');
  for(let fuel of input){
    let totalFuel = 0;
    let calculate = function (fuel) {
      let val = Math.floor(fuel / 3) - 2;
        if(val <= 0) {
            ans += totalFuel;
        } else {
          totalFuel += val;
          calculate(val);
        }
    };
      calculate(fuel);
  }
  return ans;
};

module.exports = moreFuelCalcuation;