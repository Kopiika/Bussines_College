'use strict';

const mariadb = require('mariadb');

async function testi(){
    const yhteys = await mariadb.createConnection({
        host:'localhost', //'127.0.0.1'
        port:3306,
        user:'pomo',
        password:'1234',
        database:'yrityskanta'//,
        // allowPublicKeyRetrieval:true //mysql
    });

    const tulos = 
        await yhteys.query(`select osastonNimi count(henkiloId) as lkm from osasto 
			left join henkilo on osastoNumero = osastoId
			group by osastonNimi;`);
			
        //console.log(tulos);

		  for(const osasto of tulos){
			console.log(`${osasto.osastonNimi}: ${Number(osasto.lkm)}`);
		  }


	yhteys.end();
}

testi(); //ajetaan testi-funktio