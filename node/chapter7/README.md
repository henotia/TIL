# chapter 7 MySQL

## MySQL install
책에서는 MySQL 및 MySQL workbench를 설치했지만  
나는 MariaDB와 JetBrain에서 나오는 DataGrip을 사용함.(올팩 만세)


## 자료형

* INT  
  정수. 소수를 저장하고 싶다면 FLOAT, DOUBLE을 사용하면 된다
* VARCHAR(자릿수), CHAR(자릿수)  
  문자열 저장. VARCHAR는 가변길이 CHAR는 고정길이.  
  CHAR에 정해진 자릿수보다 작은 값이 들어가면 빈 자릿수 만큼 공백
* TEXT  
  긴 글을 저장할 때 사용. 100자 이내의 글은 VARCHAR를 사용. 그보다 큰 문자열은 TEXT를 사용
* TINYINT  
  -127부터 128까지의 정수를 저장할 때 사용.  
  0 또는 1만 저장한다면 BOOLEAN 처럼 사용 가능.
* DATETIME  
  날짜와 시간에 대한 정보를 담고 있음.  
  날짜만 사용할거면 DATE, 시간만 사용할거면 TIME

## 예약어

* NULL / NOT NULL  
  공백을 허용할 지 말지를 정함. NOT NULL인 경우 로우 생성시 반드시 데이터 입력을 해줘야 함.
* AUTO_INCREMENT  
  숫자를 자동으로 올려주는 옵션. 보통 ID를 순차적으로 증가시켜줌.
* UNSIGNED  
  음수를 제외하고 양수만 저장 할 수 있도록 해줌.  
  FLOAT와 DOUBLE에는 적용불가.
* ZEROFILL  
  숫자의 자릿수가 고정되어 있을대 비어있는 자리에 0으로 패딩을 해줌.
* DEFAULT  
  디폴트 값 입력
* PRIMARY KEY  
  PK 처리.
* UNIQUE INDEX  
  고유한 값이 필요한 경우 체크. PK는 자동으로 UNIQUE INDEX를 포함함.
* COMMENT  
  테이블에 대한 설명 입력.
* DEFAULT CHARSET  
  해당 테이블의 언어 설정.
* ENGINE  
  테이블에서 사용할 엔진.
* CONSTRAINT \[ 제약조건명 \] FOREIGN KEY \[ 컬럼명 \] REFRENCES \[ 참고하는 컬럼명 \]  
  FK 지정

## CRUD
* CREATE  
  INSERT INTO \[ TABLE NAME \] (\[ COLUMN1 \] \[ COLUMNE2 \] ... )
* SELECT  
  SELECT \[ * | COLUMN ...\] FROM \[ TABLE NAME \]  
  ( ORDER BY \[ COLUMN NAME \] \[ ASC | DESC \] )  
  ( LIMIT \[ NUMBER \] OFFSET \[ NUMBER \] )
* UPDATE  
  UPDATE \[ TABLE NAME \] SET \[ COLUMN NAME = VALUE \] ( WHERE \[ CONDITION \] )
* DELETE  
  DELETE FROM \[ TABLE NAME \] ( WHERE \[ CONDITION \] )

