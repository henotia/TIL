# node 내장객체

## global
브라우저의 window 역할
node는 BOM / DOM이 없으므로 window / document 객체가 없음

## console
"그 콘솔"

## timer
setTimeout, setInterval, setImmediate

## __filename, __dirname
__filename 현재 파일명
__dirname 현재 파일 경로

## module, exports
exports에는 객체로만  
module.exports와 exports는 참조관계  
exports -> module.exports -> { }

## process
node의 process 정보를 담고있는 객체

### process.env
node의 환경변수를 갖는 객체

### process.nextTick(callback)
이벤트 루프가 다른 콜백함수보다 nextTick의 콜백함수를 우선시해 처리하도록 함

nextTick의 호출도 microtask에 속함

microtask : Promise / nextTick

### process.exit(code)
프로세스 종료  
code 1: 비정상 종료
