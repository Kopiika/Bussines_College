show databases;

use yrityskanta;

show tables;

select * from henkilo;
select * from osasto;
select * from osastonHenkilo;

select osastonNimi, osastonSijainti from osasto
inner join osastonHenkilo on osastonHenkilo.osastoId=osasto.osastoId
inner join henkilo on osastonHenkilo.henkiloId=henkilo.henkiloId 
where etunimi='Meri';

select osastonNimi, osastonSijainti from osasto
natural join osastonHenkilo
natural join henkilo
where etunimi='Meri';

select etunimi, sukunimi from henkilo 
natural join osastonHenkilo
where osastoId=1;

select etunimi, sukunimii from osasto
natural join osastonHenkilo
natural join henkilo
where osastonNimi='ict';

