const noOfUpdatedPassword = (input) => {
  let range = input.split('-').map(x => parseInt(x));
  let s = 0;
  for (let i = range[0]; i <= range[1]; i++) {
  const nums = i.toString().split("").map(x => parseInt(x));
  let decreased = false;
  let sequence = 1;
  const sequences = [];
  for (let j = 0; j < nums.length - 1; j++) {
    if (nums[j] > nums[j + 1]) {
      decreased = true;
    }
      if (nums[j] === nums[j+1]) {
        sequence++;
      } else {
        sequences.push(sequence);
        sequence = 1;
      }
  }
  sequences.push(sequence);

  if (!decreased && sequences.includes(2)) {
    s++;
  }
}
return s;
};

module.exports = noOfUpdatedPassword;