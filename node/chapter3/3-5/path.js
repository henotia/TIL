const path = require('path');

const string = __filename;

console.log('path.sep', path.sep);      // path 구분자 POSIX / windows가 다름
console.log('path.delimiter', path.delimiter);    // 환경변수 구분자 ;
console.log('-------------------');

console.log('path.dirname()', path.dirname(string));      // 파일이 위치한 디렉토리 path
console.log('path.extname()', path.extname(string));      // 파일의 확장자
console.log('path.basename()', path.basename(string));    // 파일의 이름, 이름만 표시하고 싶으면 확장자 추가
console.log('path.basename()', path.basename(string, path.extname(string)));
console.log('-------------------');

console.log('path.parse()', path.parse(string));      // 파일path를 root, dir, base, ext, name으로 분리
console.log('path.format()', path.format({        // 파일 path를 합침
  dir: 'c:\\test',
  name: 'path',
  ext: '.js'
}));

console.log('path.normalize()', path.normalize('c://users\\\\hello////path.js'));   // path 노멀라이즈
console.log('-------------------');
console.log('path.isAbsolute()', path.isAbsolute('C:\\'));      // 절대 path 확인
console.log('path.isAbsolute()', path.isAbsolute('./home'));
console.log('-------------------');

console.log('path.relative()', path.relative('c:\\users', 'c:\\'));     // 첫번째 path에서 두번째 path로 가는 길을 알려줌
console.log('path.join()', path.join(__dirname, '..', '..', '/users')); // path 합치기(상대경로 처리)
console.log('path.resolve()', path.resolve(__dirname, '..', 'users'));  // path 합치기(절대경로 처리)
