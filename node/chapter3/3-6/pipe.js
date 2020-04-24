const fs = require('fs');

const readStream = fs.createReadStream('./chunktext.txt');
const writeStream = fs.createWriteStream('./writeme3.txt');

readStream.pipe(writeStream);
