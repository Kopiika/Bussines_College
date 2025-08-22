show databases;
create database ekadb;
use ekadb;
show tables;
create table testi(
     id integer not null primary key,
     nimi varchar(30) not null
     );
insert into testi (id, nimi) values (1, 'Leila');
select * from testi;
insert into testi (id, nimi) values (2, 'Matti');
select nimi from testi;
select nimi, id from testi;
select id, nimi from testi;

describe testi;
show create table testi;

create user 'admin';
grant all privileges on *.* to 'admin'@'localhost' with grant  option;
select user, host, password from mysql.user;
select user, host, password from mysql.user where user='admin';

exit
-- mysql -u admin -p
12345

show databases;
select * from ekadb.testi;
drop database ekadb;
show databases;