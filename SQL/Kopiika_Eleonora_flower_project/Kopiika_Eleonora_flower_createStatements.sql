drop database if exists flowerdb;
create database flowerdb;

use flowerdb;

create table flower (
	flowerId integer primary key,
	name varchar(22) not null,
	stock integer not null,
  farmer varchar(42) not null,
  unitPrice integer not null
);

insert into flower values (1, 'sunflower', 15, 'Finnish flowers Oy', 5);
insert into flower values (2, 'lavender', 20, 'Lavanders field Oy', 3);

drop user if exists 'roosa@localhost';
create user 'roosa@localhost' identified by '1234';
grant all privileges on flowerdb.* to 'roosa@localhost';



show datasbases;
use flowerdb;
show tables;