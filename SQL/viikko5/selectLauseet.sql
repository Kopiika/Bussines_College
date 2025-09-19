




select etunimi, sukunimi, osastonNimi, palkka, case 
	when palkka > (select avg(palkka) from henkilo) then 'yli keskiarvon'
	when palkka < (select avg(palkka) from henkilo) then 'ale keskiarvon'  
	else 'keskiarvossa' end as palkkataso
from henkilo
inner join osasto on henkilo.osastoNumero = osasto.osastoId;

select avg(palkka) from henkilo;
