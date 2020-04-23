const {odd, even} = require('./var');
const checkNumber = require('./func');

const checkStringOddOrEven = str => str.length % 2 ? odd : even;

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
