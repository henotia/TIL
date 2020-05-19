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
