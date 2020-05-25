# Mongo DB

## 설치
아무튼 설치함. 4.2버전

## 실행
> `C:/data/db` 디렉토리가 없으면 mongod 실행이 안돼

mongod로 데몬 실행 후 mongo

## DB 선택
use 'db name';


## CRUD

### CREATE
`db.Collection_name.save(Document)`  
성공적으로 수행이 되었다면 `WriteResult({ "nInserted" : 1})`이 표시

### READ

`db.Collection_name.find({})`  
컬렉션 내의 모든 Document 조회

`db.Colection_name.find({}, {_id: 0, name: 1})`  
두번째 인자로는 조회할 필드를 넣음. 1 또는 true로 표시된 필드만 가져옴.  
_id는 가져오는게 default이므로 가져오지 않기 위해선 임의로 입력해야함.

`db.Collection_name.find({age: {$gt: 30}, married: true})`  
시퀄라이즈의 쿼리처럼, 자바스크립트 객체를 사용해 명령어 쿼리를 사용하므로 특수 연산자 사용.

`db.Collection_name.find().sort({field_name: 1})`  
필드명으로 sort. 1이면 오름차순 -1이면 내림차순

`db.Collection_name.find().limit(1)`  
조회할 Document의 갯수 제한.

`db.Collection_name.find().skip(1)`  
스킵할 Document 갯수 설정

### Update
`db.Collection_name.update({field: ~~}, {$set: {~~}})`  
첫번째 객체는 수정할 Document를 지정, 두번째 객체는 수정할 내용을 입력.  
`$set` 연산자는 어떤 필드를 수정할 지 정하는 연산자.

수정에 성공하면 첫번째 객체에 매칭된 Document 수(nMatched)와 수정된 Document 수(nModified)가 보인다  


## Delete
`db.Collection_name.delete({field: ~})`  
성공시 삭제된 Document의 수가 반환.


