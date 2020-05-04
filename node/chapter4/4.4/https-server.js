// 인증서가 있는 경우에 한정

const http2 = require('http2');
const fs = require('fs');

http2.createSecureServer({
  cert: fs.readFileSync('도메인 인증서 경로'),
  key: fs.readFileSync('도메인 비밀키 경로'),
  ca: [
    fs.readFileSync('상위 인증서 경로'),
    fs.readFileSync('상위 인증서 경로')
  ],
}, (req, res) => {
  // blah blah
}).listen(443, () => console.log('https listen'));
