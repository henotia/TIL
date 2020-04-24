const os = require('os');

console.log('operating system information');
console.log('os.arch()', os.arch());                    // process.arch와 동일
console.log('os.platform()', os.platform());            // process.platform과 동일
console.log('os.type()', os.type());                    // 운영체제 종류
console.log('os.uptime()', os.uptime());                // 부팅 이후 흐른 시간
console.log('os.hostname()', os.hostname());            // 컴퓨터 이름
console.log('os.release()', os.release());              // 운영체제 버전

console.log('-------path');
console.log('os.homedir()', os.homedir());              // 홈 디렉토리 경로
console.log('os.tmpdir()', os.tmpdir());                // temp 파일 저장 경로

console.log('-----------cpu');
console.log('os.cpus()', os.cpus());                    // 코어 정보
console.log('os.cpus().length', os.cpus().length);      // 코어 갯수

console.log('-------memory');
console.log('os.freemem()', os.freemem());              // 사용가능한 메모리
console.log('os.totalmem()', os.totalmem());            // 전체 메모리

