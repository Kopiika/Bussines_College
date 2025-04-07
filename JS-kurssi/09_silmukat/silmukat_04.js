// silmukat 04
const countEvenNumbers = () =>{
	let eventCount = 0;
	for(let i = 0; i < 20; i++){
		let number = parseInt (prompt ("Syötä luku " + (i + 1) + " (yhteensä 20):"));
		if (!isNaN(number) && number % 2 === 0){
			eventCount++;
		}
	}
	alert ("Parillisia lukuja on yhteensä: "+ eventCount);	
}
countEvenNumbers ();