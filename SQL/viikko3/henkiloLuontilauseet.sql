drop database if exists henkilokanta;
create database henkilokanta;

use henkilokanta;

create table henkilo(
	henkiloId integer not null primary key,
	etunimi varchar(25) not null,
	sukunimi varchar(30) not null,
	osasto varchar(20),
	palkka decimal(6,2) -- max arvo 9999.99
);

insert into henkilo values(1, 'Maija', 'Meri', 'ict', 5000);
insert into henkilo values(2, 'Veera', 'Virta', 'hallinto', 7000);

drop user if exists 'maria'@'localhost';
create user 'maria'@'localhost' identified by 'salainen';
grant all privileges on henkilokanta.* to 'maria'@'localhost';