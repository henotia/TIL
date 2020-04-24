const url = require('url');
const queryString = require('querystring');

const urlString = 'http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript';
const parseUrl = url.parse(urlString);
const query = queryString.parse(parseUrl.query);

console.log('querystring.parse()', query);
console.log('querystring.stringify()', queryString.stringify(query));
