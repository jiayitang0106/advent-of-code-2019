const noOfPassword = (input) => {
  let range = input.split('-').map(x => parseInt(x));
  let total = 0;

  for (let i = range[0]; i <= range[1]; i++) {
    let digits = i.toString().split("").map(x => parseInt(x));
    let double = false;
    let decrease = false;
    for (let j = 0; j < digits.length - 1; j++) {
      if (digits[j] > digits[j + 1]) {
        decrease = true;
      }
      if (digits[j] === digits[j+1]) {
        double = true;
      }
    }
    if (double && !decrease) {
      total ++;
    }
  }
  return total;
};

module.exports = noOfPassword;