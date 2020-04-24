const url = require('url');

const URL = url.URL;

const urlString = 'http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor';
const u = new URL(urlString);

console.log('new URL()', u);
console.log('url.format()', url.format(u));
console.log('------------------');

const parsedUrl = url.parse(urlString);
console.log('url.parse()', parsedUrl);
console.log('url.format()', url.format(parsedUrl));
