create database computerdb;
use computerdb;

create table computer (
	 id integer primary key,
	 name varchar(20) not null,
	 type varchar(22) not null,
	 processor varchar(15) not null,
	 amount integer not null
);

insert into computer (id, name, type, processor, amount) values
(1, 'Apple', 'Laptop', 'M1', 16),
(2, 'Acer', 'Desktop', 'AMD Ryzen 5', 32);

select * from computer;

create user 'noah'@'localhost' identified by 'ANM1qbS2';
grant all privileges on computerdb.* to 'noah'@'localhost';