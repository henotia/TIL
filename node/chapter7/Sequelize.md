# Sequelize

## 설치
* 시퀄라이즈 사용에 필요한 sequelize와 mysql2 설치

***npm i sequelize mysql2***

* sequelize 커맨드를 사용하기위해 cli 설치  

***npm i sequelize-cli -g***

* 설치가 전부 끝났다면 

***sequelize init***

## 모델링

### 1 : N
* A -> B  
  A hasMany B  
  (sample) `db.User.hasMany(db.Comment, {foreignKey: 'commenter', sourceKey: 'id'});`
* B -> A  
  B belongsTo A  
  (sample) `db.Comment.belongsTo(db.User, {foreignKey: 'commenter', targetKey: 'id'});`

### 1 : 1
* A -> B  
  A hasOne B  
  (sample) `db.User.hasOne(db.Info, {foreignKey: 'user_id', sourceKey: 'id'});`
* B -> A  
  B belongsTo A  
  (sample) `db.Info.belongsTo(db.User, {foreignKey: 'user_id', targetKey: 'id'});`

### N : M
* A -> B  
  A belongsToMany B  
  (sample) `db.Post.belongsToMany(db.Hashtag, {through: 'PostHashtag'})`

* B -> A  
  B BelongsToMany A  
  (sample) `db.Hashtag.belongsToMany(db.Post, {through: 'PostHashtag'})`


## 쿼리 작성
Sequelize로 CRUD 작업을 하기 위해 Sequelize 쿼리를 알아야 한다.

### Insert Query
> INSERT INTO users (name, age, married, comment) VALUES ('zero', 24, 0, 'introduce');

``` javascript
const { User } = require('../models');
User.create({
  name: 'zero',
  age: 24,
  married: false,
  comment: 'introduce'
});
```

### Select Query
> SELECT * FROM users;

``` javascript
User.findAll({});
```

> SELECT * FROM users LIMIT 1;

``` javascript
User.findOne({});
```

> SELECT name, married FROM users;

``` javascript
User.findAll({
  attributes: ['name', 'married']
})
```

> SELECT name, age FROM users WHERE married = 1 AND age > 30;

``` javascript
const { User, Sequelize: { Op }} = require('../models');
User.findAll({
  attributes: ['name', 'age'],
  where: {
    married: 1,
    age: { [Op.gt]: 30 }
  }
});
```
시퀄라이저는 자바스크립트 객체를 사용해 쿼리를 생성하므로 특수한 연산자들을 사용함.  
`Op.gt(초과)` `Op.gte(이상)` `Op.lt(미만)` `Op.lte(이하)` `Op.ne(같지 않음)`  
`Op.or(또는)` `Op.in(배열 요소 중 하나)` `Op.nonIn(배열 요소와 모두 다름)`  
등이 있다.

> SELECT id, name FROM users WHERE married = 0 OR age > 30;

``` javascript
const { User, Sequelize: { Op }} = require('../models');
User.findAll({
  attributes: ['id', 'name'],
  where: {
    [Op.or]:[{married: 0}, { age: { [Op.gt]: 30}}]
  }
})
```

> SELECT id, name FROM users ORDER BY age DESC;

``` javascript
User.findAll({
  attributes: ['id', 'name'],
  order: [['age', 'DESC']]
})
```

> SELECT id, name FROM users ORDER BY age DESC LIMIT 1 OFFSET 1

``` javascript
User.findAll({
  attributes: ['id', 'name'],
  order: ['age', 'DESC'],
  limit: 1,
  offset: 1
})
```

### UPDATE

> UPDATE users SET comment = 'comment comment' WHERE id = 2;

``` javascript
User.update({
  comment: 'comment comment'
}, {
  where: { id: 2 }
})
```

### DELETE

> DELETE FROM users WHERE id = 2;

``` javascript
User.destroy({
  where: { id : 2}
})
```
