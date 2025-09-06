'use strict';

const mariadb = require('mariadb');

async function testi(){
	const yhteys = await mariadb.createConnection({
		host:'localhost',
		port:3306,
		user:'maria',
		password:'salainen',
		database:'henkilokanta'//,
		// allowPublicKeyRetrieval:true //mysql

	});

	const tulos = await yhteys.query('select * from henkilo');

		console.log(tulos);
	
		yhteys.end();


}

testi(); //ajetaan testi-funktio