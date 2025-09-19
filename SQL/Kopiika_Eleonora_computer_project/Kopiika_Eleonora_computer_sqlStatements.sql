use computerdb;
show tables;

/* Select all data */
select * from computer;
/* Delete all data (test) from the comuter table */
delete from computer;

insert into computer (id, name, type, processor, amount) values
(7, 'GameDelux', 'supercomputer', 'PiTron 3', 1),
(6, 'Xunil 4.7', 'tabletop', 'Brain 456', 150),
(3, 'King 3000', 'gameover', 'MinPower', 5),
(1, 'BigFlop Mark II', 'embedded', 'BNE', 100),
(5, 'Cera 2400', 'server', 'Selenium II', 10),
(4, 'MaxEffect 2000', 'pocket computer', 'X-Force', 15),
(2, 'Beast II', 'laptop', 'MotorOlè', 25);

select * from computer;

/* select columns amount, processor, type */
select amount, processor, type from computer;

/* Select all computers, where the name is GameDelux
Select all computers, where the name is MaxEffect 2000
Select all computers, where the amount is 25 */

select * from computer where name='GameDelux';
select * from computer where name='MaxEffect 2000';
select * from computer where amount=25;

/* Update computer (id is 4). New data is: type is gameover and processor is BNE
Update computer (id is 6). New data is: type is tabletop and processor is MinPower
Update computer (id on 4). New data is: processor is BNE and name is Xunil 4.7 and amount is 20
Update computer (id on 3). New data is: processor is Brain 456 and amount is 100 and name is Xunil 4.7 */

update computer set type='gameover', processor='BNE' where id=4;
update computer set type='tabletop', processor='MinPower' where id=6;
update computer set processor='BNE', name='Xunil 4.7', amount=20 where id=4;
update computer set processor='Brain 456', amount=100, name='Xunil 4.7' where id=3;
select * from computer;

/* Delete computer, where id is 5
Delete computer, where id is 4
Delete all computers, where name is Beast II
Delete all computers, where processor is BNE or amount is 100
Delete all computers, where amount is 10 or name is GameDelux or amount is 5 */

delete from computer where id=5;
delete from computer where id=4;
delete from computer where name='Beast II';
delete from computer where processor='BNE' or amount=100;
delete from computer where amount=10 or name='GameDelux' or amount=5;

select * from computer;