drop database if exists yrityskanta;
create database yrityskanta;

use yrityskanta;

create table osasto(
	osastoId integer not null primary key,
	osastonNimi varchar(30) not null,
	osastonSijainti varchar(25) not null
);

create table henkilo(
	henkiloId integer not null primary key,
	etunimi varchar(20) not null,
	sukunimi varchar(30) not null,
	palkka decimal(6,2) not null,
	osastoNumero integer not null,
	foreign key (osastoNumero) references osasto(osastoId)
);

insert into osasto values(1, 'ict','kellari');
insert into osasto values(2, 'hallinto','kerros12');
insert into osasto values(3,'kuljetus','autotalli');
insert into osasto values(4,'huolto','verstas');

insert into henkilo values(1, 'Matti', 'Puro', 4500, 1);
insert into henkilo values(2, 'Veera', 'Virta', 5000, 3);
insert into henkilo values(3, 'Antti', 'Autoilija', 4500, 3);
insert into henkilo values(4, 'Meri', 'Myrskylä', 5000, 1);
insert into henkilo values(5, 'Maija', 'Joki', 7000, 2);

drop user if exists 'pomo'@'localhost';
create user 'pomo'@'localhost' identified by '1234';
grant all privileges on yrityskanta.* to 'pomo'@'localhost';