/* Oppitunilla */

let laskuri =1;
while(laskuri <=10) {
	console.log(laskuri);
	laskuri++; //laskuri = laskuri + 1
}


//Sama for-lauseella
for(let laskuri=1; laskuri<=10; laskuri++){
	console.log(laskuri);
}

while(true){
	let salasana = prompt ("Anna salasana.");
	if (salasana == "sala") {
		alert ("Oikein!");
		break; // lopettaa silmukan
	} 
}