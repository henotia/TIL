# CREATE

insert into users (name, age, married, comment)
values ('one', 24, 0, 'test1');

insert into users (name, age, married, comment)
values ('two', 22, 1, 'test2');

insert into comments (commenter, comment) values (1, 'hello ~ what is my name?');

# READ

select * from users;
select * from comments;

select name, married from users;

select name age from users where married = 1 AND age > 20;

select id, name from users where married = 0 OR age < 25;

select id, name from users order by age;
select id, name from users order by age limit 1;
select id, name from users order by age limit 1 offset 1;

# UPDATE
update users set age = 28 where age = 24;

# DELETE
delete from users where id = 2;

select * from users;
