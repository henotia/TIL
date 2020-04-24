const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');

writeStream.on('finish', () => console.log('완료'));

writeStream.write('한번 쓰고\n');
writeStream.write('두번 쓰고\n');
writeStream.write('3번 쓰고');
writeStream.end();
