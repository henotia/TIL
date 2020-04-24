const { URL } = require('url');

const urlString = 'http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript';
const u = new URL(urlString);

console.log('searchParams', u.searchParams);
console.log('searchParams.getAll()', u.searchParams.getAll('category'));
console.log('searchParams.get()', u.searchParams.get('limit'));
console.log('searchParams.has()', u.searchParams.has('page'));

console.log('searchParams.keys()', u.searchParams.keys());
console.log('searchParams.values()', u.searchParams.values());

u.searchParams.append('filter', 'es3');
u.searchParams.append('filter', 'es5');

console.log('searchParams.getAll()', u.searchParams.getAll('filter'));

u.searchParams.set('filter', 'es6');
console.log('searchParams.getAll()', u.searchParams.getAll('filter'));

u.searchParams.delete('filter');
console.log('searchParams.getAll()', u.searchParams.getAll('filter'));

console.log('searchParams.toString()', u.searchParams.toString());
u.search = u.searchParams.toString();
