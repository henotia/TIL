const crypto = require('crypto');

crypto.randomBytes(64, ((err, buf) => {
  const salt = buf.toString('base64');
  console.log('salt : ', salt);
  crypto.pbkdf2('123456', salt, 100000, 64, 'sha512',
    ((err1, derivedKey) => {
      console.log('password : ', derivedKey.toString('base64'));
    }))
}))
