`use strict`

// silmukat 01

const logOddNumbers =() =>{
	for(i = 1; i<=100; i+=2 )
		console.log(i);
}
logOddNumbers()


// silmukat 02

const logEvenNumbers = () => {
	for (i = 1; i<=100; i++) {
		if ( i % 2 == 0) {
			console.log(i);
		}
	}
}
logEvenNumbers();

// silmukat 03

const averageSpeed = () =>{
	while(true){
		let distanse = parseFloat(prompt ("Anna etäisyys (kilometreinä)."));
		if (distanse == 0) {
			break; }
		if(isNaN (distance) || distanse < 0)	{
			continue;
		}
		let time = parseFloat(prompt ("Anna aika (tunteina)."))
		if(isNaN (time) || time < 0)	{
			continue;}


		let speed = distanse/time;
		alert (`Keskinopeuden on ${speed}`);
		
		} 
}
averageSpeed();










