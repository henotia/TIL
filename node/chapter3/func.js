const {odd, even} = require('./var');

const checkOddOrEven = num => {
  if (num % 2) return odd;
  else return even;
  //return num % 2 ? odd : even;
}

module.exports = checkOddOrEven;
