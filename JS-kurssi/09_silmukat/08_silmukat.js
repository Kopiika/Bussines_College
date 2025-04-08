const findMinMax = () => {
	let numberCount = 0;	
	let max = -Infinity; // null
   let min = Infinity; // null
	while (true) {
		numberCount = parseFloat(prompt("Kuinka monta numeroa haluat antaa?"));
			if(isNaN (numberCount) || numberCount <= 0) {
				alert("Syötä kelvollinen numero.");
				continue;
			} else {
				break;
			}		
	}

	for(let i=0; i<numberCount; i++){
		let number = parseInt (prompt ("Syötä luku " + (i + 1) ));
		if (!isNaN(number)) {
			if (number > max) {
				max = number;
			}
			if (number < min) {
				min = number;
			} 
		} else {
         alert("Kirjoita kelvollinen numero");
         i--; 
		}
	}
			
	console.log("Suurin numero: " + max);
   console.log("Pienin numero: " + min);
	
}

findMinMax();