use flowerdb;
show tables;

/* Select all data */
select * from flower;
/* Delete all data (test) from the flower table */
delete from flower;

/* Insert data to the flower table */
insert into flower values (1, 'marigold', 13, 'Viola and Hyacinth Company', 8);
insert into flower values (5, 'violet', 30, 'Mike Mycelium Ltd.', 3);
insert into flower values (7, 'rose', 150, "Violet's Garden", 5);
insert into flower values (3, 'lily-of-the-valley', 25, 'Rosamunda', 7);
insert into flower values (2, 'tulip', 5, 'Roses of Rovaniemi oy', 9);
insert into flower values (4, 'mushroom', 1, 'Poison Ivy & Co.', 6);
insert into flower values (6, 'toadstool', 100, 'Fungus Ltd.', 2);

/* Select all columns */
select * from flower;

/* Select data of the flowers (columns stock, flowerId, name) */
select flowerId, name, stock from flower;

/* Select all flowers, where the farmer is Violet's Garden */
select * from flower where farmer = "Violet's Garden";

/* Select all flowers, where the stock is 25 */
select * from flower where stock = 25;

/* Select all flowers, where the unitPrice is 3 */
select * from flower where unitPrice = 3;

/*
Update flower (flowerId is 4). New data is: stock is 100 and farmer is Roses of Rovaniemi oy
Update flower (flowerId is 6). New data is: stock is 5 and unitPrice is 10
Update flower (flowerId on 3). New data is: stock is 13 and unitPrice is 10 and name is mushroom
Update flower (flowerId on 6). New data is: name is toadstool and farmer is Roses of Rovaniemi oy and stock is 100
*/

update flower set stock = 100, farmer = 'Roses of Rovaniemi oy' where flowerId = 4;
update flower set stock = 5, unitPrice = 10 where flowerId = 6;
update flower set stock = 13, unitPrice = 10, name = 'mushroom' where flowerId = 3;
update flower set name = 'toadstool', farmer = 'Roses of Rovaniemi oy', stock = 100 where flowerId = 6;

select * from flower;

/* Delete flower, where flowerId is 3
Delete flower, where flowerId is 1
Delete all flowers, where name is mushroom
Delete all flowers, where stock is 100 and name is lily-of-the-valley
Delete all flowers, where farmer is Mike Mycelium Ltd. and name is marigold and unitPrice is 2 */

delete from flower where flowerId = 3;
delete from flower where flowerId = 1;
delete from flower where name = 'mushroom';

insert into flower values (8, 'lily-of-the-valley', 100, 'Rosamunda', 7);
delete from flower where stock = 100 and name = 'lily-of-the-valley';
select * from flower;

insert into flower values (9, 'marigold', 13, 'Mike Mycelium Ltd.', 2);
delete from flower where farmer = 'Mike Mycelium Ltd.' and name = 'marigold' and unitPrice = 2;
select * from flower;

