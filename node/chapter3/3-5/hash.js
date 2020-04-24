const crypto = require('crypto');

console.log('base64: ', crypto.createHash('sha512').update('123456').digest('base64'));
console.log('hex: ', crypto.createHash('sha512').update('123456').digest('hex'));
console.log('base64: ', crypto.createHash('sha512').update('654321').digest('base64'));


